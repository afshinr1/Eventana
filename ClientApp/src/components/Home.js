import { Box } from '@material-ui/core';
import React, {useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import EventCard from './EventCard/EventCard';
function Home() {
  //const dispatch = useDispatch();
  const events = useSelector(state => state.EventsReducer.events);
  console.log(events);

  const eventCards = events.map(event => <EventCard event={event}/>)

  const fetchData = async () => {
    const response = await fetch('/api/events/getEvents');
    if(response.ok){
      const data = await response.json();
      console.log(data);
      //Dispatch some action
    }
  }
  useEffect(() => {
  fetchData();

  }, []);

  return (
    <Box component='div'>
      {eventCards}
    </Box>
  )
}

export default Home
