import React from 'react'

///Components
import Sidebar from "../../Sidbar/Sidbar";
import Navbar from "../../Navbar/Navbar";
import DataTable from '../../DataTabale/DataTabales';

///Styled
import "./list.scss";

function List() {
  return (
    <div className='list'>
        <Sidebar/>
        <div className="listcontainer">
          <Navbar/>
          <DataTable/>
        </div>
    </div>
  )
}

export default List