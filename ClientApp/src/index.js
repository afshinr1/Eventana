import { ThemeProvider } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { theme } from "./assets/Styles";
import registerServiceWorker from "./registerServiceWorker";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import "./Index.css";

//REDUX START
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { AuthenticationReducer } from "./redux/reducers/AuthenticationReducer";
import { EventsReducer } from "./redux/reducers/EventsReducer";
import { CategoriesReducer } from "./redux/reducers/CategoriesReducer";
import { NotificationReducer } from "./redux/reducers/NotificationReducer";
import { GuestReducer } from "./redux/reducers/GuestReducer";
import { CommentsReducer } from "./redux/reducers/CommentsReducer";
import { SearchReducer } from "./redux/reducers/SearchReducer";

const rootReducer = combineReducers({
  AuthenticationReducer: AuthenticationReducer,
  EventsReducer: EventsReducer,
  CategoriesReducer: CategoriesReducer,
  GuestReducer: GuestReducer,
  NotificationReducer: NotificationReducer,
  CommentsReducer: CommentsReducer,
  SearchReducer: SearchReducer,
});
// const composeEnhancer = compose(applyMiddleware(thunk), devToolsEnhancer());
const store = createStore(rootReducer, applyMiddleware(thunk));

//REDUX END


const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={baseUrl}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <App />
        </MuiPickersUtilsProvider>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  rootElement
);

registerServiceWorker();
