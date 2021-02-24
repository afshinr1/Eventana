import React from "react";
import Modal from "@material-ui/core/Modal";
import { useStyles } from "./Payment.styles";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import CreditCardTwoToneIcon from "@material-ui/icons/CreditCardTwoTone";
import { CardElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { cardElementOptions } from "./Payment.styles";
import { toast } from "react-toastify";
const stripePromise = loadStripe(
  "pk_test_51IOBJfCF9wcbi3QDhDkbDKGy2983nd4k3XVTMCxIrxy1xlcqXjnhq5tid6UsWWoRMvKu5jKJCIOYWhshJFpJobHt00AAgnqQ6g"
);

export default function Payment({ open, handleClose, amount }) {
  const classes = useStyles();
  const handlePayment = () => {
      toast.success("Payment success!");
      handleClose();
  };
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Elements stripe={stripePromise}>
          <Box className={classes.paper}>
            <Typography variant="h5" align="center" gutterBottom>
              Payment
            </Typography>
            <Box className={classes.card}>
              <CardElement options={cardElementOptions} />
            </Box>
            <Button onClick={handlePayment}>Pay ${amount}</Button>
          </Box>
        </Elements>
      </Modal>
    </div>
  );
}
