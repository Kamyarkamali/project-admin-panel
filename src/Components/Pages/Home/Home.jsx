import React from 'react';
//component
import Sidbar from '../../Sidbar/Sidbar';
import Navbar from '../../Navbar/Navbar';
//Stled
import "./home.scss";

function Home() {
  return (
    <div className='Home'>
      <Sidbar/>  
      <div className="homecontainer">
        <Navbar/>
        home
        </div>      

    </div>
  )
}

export default Home