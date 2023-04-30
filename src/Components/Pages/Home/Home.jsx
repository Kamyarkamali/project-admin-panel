import React from 'react';
//component
import Sidbar from '../../Sidbar/Sidbar';
import Navbar from '../../Navbar/Navbar';
import Widget from '../../WIdget/Widget';
//Stled
import "./home.scss";

function Home() {
  return (
    <div className='Home'>
      <Sidbar/>  
      <div className="homecontainer">
        <Navbar/>
        <div className="widgets">
          <Widget/>
          <Widget/>
          <Widget/>
          <Widget/>
        </div>
        </div>      

    </div>
  )
}

export default Home