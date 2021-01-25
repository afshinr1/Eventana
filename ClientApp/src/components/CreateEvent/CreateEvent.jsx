import { Button } from '@material-ui/core'
import React from 'react'

function CreateEvent() {
    const createEvent = async (e)=> {
        const response = await fetch('/api/events/createEvent', {
            'authorization': sessionStorage.getItem("token"),
            'Accept' : 'application/json',
            'Content-Type': 'application/json',
            'method': "POST"
        });
        if(response.ok){
            alert("Authorized, get events");
            console.log(await response.json());
        }else{
            alert("Unauthorized");
            console.log(await response.json());

        }
    }
    return (
        <>
            <Button onClick={createEvent} color='primary'>Create</Button>
        </>
    )
}

export default CreateEvent
