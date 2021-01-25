const initialState = { events : [ {uuid:1, description : 'jaja', startTime : Date.now(), endTime : Date.now(), fee : 100, capacity : 30, imageUrl : "sad url" } ] }
export const EventsReducer = (state=initialState, action)=> {
    return state;
}

