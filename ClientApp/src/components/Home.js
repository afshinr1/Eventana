import React, {useEffect} from 'react'
//import { useDispatch, useSelector} from 'react-redux';
function Home() {
  //const dispatch = useDispatch();
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

  }, [])
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home
