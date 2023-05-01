import React from 'react';
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

//Icons
import MoreVertIcon from '@mui/icons-material/MoreVert';

//Stled
import "./Fetchare.scss";

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
            </div>
        </div>
    );
};

export default Fetchare;