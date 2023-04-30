import React from 'react';

//Icon
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PersonIcon from '@mui/icons-material/Person';

//Styled 
import "./Widget.scss";

const Widget = () => {
    return (
        <div className='widget'>
            <div className="left">
                <span className='users'>USER</span>
                <span className='counter'>2345</span>
                <span className='link'>See All</span>
            </div>
            <div className="right">
                <div className='percent positive'>
                <ArrowDropUpIcon className='icon'/>
                <span>20 %</span>
                </div>
                <PersonIcon/>
            </div>
        </div>
    );
};

export default Widget;