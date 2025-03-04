import React, {useEffect, useState} from 'react';
import Sitebar from './Home/Navbar';
import Auth from './auth/Auth';
import WorkoutIndex from './workouts/WorkoutIndex';

function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }
  
  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  useEffect(() => {
    document.title = "Workout Log Client"
  }, []);

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <WorkoutIndex token={sessionToken}/> : <Auth updateToken={updateToken}/>)
  }
  
  return (
    <div>
      <Sitebar clickLogout={clearToken}/>
      {protectedViews()}
    </div>
  );
}

export default App;
