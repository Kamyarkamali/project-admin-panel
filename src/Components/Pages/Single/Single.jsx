import React from 'react'

//Components
import Sidbar from "../../Sidbar/Sidbar";
import Navbar from "../../Navbar/Navbar";
import Chart from "../../Charts/Charts";
import Tabale from "../../tabale/Tabale";

///Styled
import "./single.scss";

function Single() {
  return (
    <div className='singel'>
        <Sidbar/>
        <div className="singelcontainer">
          <Navbar/>
          <div className="top">
            <div className="left">
              <div className="editpage">Edite</div>
              <h1 className='titlee'>Information</h1>
              <div className="item">
                <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" alt="avatar" />
                <div className="detailse">
                  <h1 className="itemtitle">Kamyar Kamali</h1>
                  <div className="detailseitem">
                    <span className="itemkey">Email:</span>
                    <span className="itemvalue">Kamyar@gmail.com</span>
                  </div>
                  <div className="detailseitem">
                    <span className="itemkey">Phone:</span>
                    <span className="itemvalue">09354378110</span>
                  </div>
                  <div className="detailseitem">
                    <span className="itemkey">Addres:</span>
                    <span className="itemvalue">Tehran,shahran</span>
                  </div>
                  <div className="detailseitem">
                    <span className="itemkey">City:</span>
                    <span className="itemvalue">Tehran</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <Chart/>
            </div>
          </div>
          <div className="bottom">
            <Tabale/>
          </div>
        </div>
    </div>
  )
}

export default Single