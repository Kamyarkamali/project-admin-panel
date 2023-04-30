import React from 'react';

//Icon
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import MonitorIcon from '@mui/icons-material/Monitor';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
//Styled 
import "./widget.scss";

const Widget = ({type}) => {
    const ammount=100
    const diff=20
    let data;

    switch(type){
        case "users":
            data={
                title:"USERS",
                isMony:false,
                link:"See All Users",
                icon:<PersonOutlineIcon className='icon' style={{backgroundColor:"rgba(255,0,0,0.2),",borderRadius:"10px"}}/>
            }
            break
            case "orders":
            data={
                title:"ORDERS",
                isMony:false,
                link:"See All Orders",
                icon:<ShoppingCartCheckoutIcon  style={{backgroundColor:"rgba(218,165,32,0.2),",borderRadius:"10px",color:"goldenrod"}}/>
            }
            break
            case "users":
            data={
                title:"USERS",
                isMony:false,
                link:"See All Users",
                icon:<PersonOutlineIcon  style={{color:"purple"}}/>
            }
            break
            case "ernanings":
                data={
                    title:"ERNANIGS",
                    isMony:true,
                    link:"View net Ernangs",
                    icon:<MonitorIcon/>
                }
                break
                case "balance":
                data={
                    title:"BALANCE",
                    isMony:true,
                    link:"See Detailse",
                    icon:<AccountBalanceWalletIcon/>
                }
            break;
            default:break
    }




    return (
        <div className='widget'>
            <div className="left">
                <span className='users'>{data.title}</span>
                <span className='counter'>{data.isMony && "$"} {ammount}</span>
                <span className='link'>{data.link}</span>
            </div>
            <div className="right">
                <div className='percent positive'>
                <ArrowDropUpIcon className='icon'/>
                <span>{diff} %</span>
                </div>
                {data.icon}
            </div>
        </div>
    );
};

export default Widget;