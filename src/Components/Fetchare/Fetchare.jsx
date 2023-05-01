import React from 'react';
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

//Chart

//Icons
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

//Stled
import "./fetchare.scss";

const Fetchare = () => {
    return (
        <div className='fechare'>
            <div className="top">
                <h1>Total Revnue</h1>
                <MoreVertIcon fontSize='small'/>
            </div>
            <div className="bottom">
                <div className="facheredchart">
                    <CircularProgressbar value={70} text='70 %'/>
                </div>
                <p className='title'> Total sales made today</p>
                <p className='amount'>$ 420</p>
                <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, facere laudantium architecto</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemresult">
                        <KeyboardArrowDownIcon fontSize='small'/>
                        <span>250 $</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemresult">
                        <KeyboardArrowDownIcon fontSize='small'/>
                            <span>250 $</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemresult">
                        <span>250 $</span>
                        <KeyboardArrowDownIcon fontSize='small'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fetchare;