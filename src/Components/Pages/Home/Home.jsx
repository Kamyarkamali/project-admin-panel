import React from 'react';
//component
import Sidbar from '../../Sidbar/Sidbar';
import Navbar from '../../Navbar/Navbar';
import Widget from '../../WIdget/Widget';
import Fetchare from '../../Fetchare/Fetchare';
import Charts from '../../Charts/Charts';
//Stled
import "./home.scss";

function Home() {
  return (
    <div className='Home'>
      <Sidbar/>  
      <div className="homecontainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="users"/>
          <Widget type="orders"/>
          <Widget type="ernanings"/>
          <Widget type="balance"/>
        </div>
        <div className="charts">
          <Fetchare/>
          <Charts/>
        </div>
        <div className="listcontainer">
          <div className="listTitle">
            
          </div>
        </div>
        </div>      

    </div>
  )
}

export default Home