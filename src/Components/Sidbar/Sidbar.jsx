import React from 'react';

///Styled
import "./sidbar.scss";

///Material 
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import LoginIcon from '@mui/icons-material/Login';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import StorefrontIcon from '@mui/icons-material/Storefront';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';

///React-Router-Dom
import { Link } from "react-router-dom";

function Sidbar() {
  return (
    <div className='sidebar'>
        <div className='top'><span className='logo'><Link to={"/"}>Admin</Link></span></div>
      <hr/>
        <div className='center'>
            <ul>
              <p className='title'>Main</p>
              <li>
                <DashboardIcon className="icon"/>
                <soan>Dashboard</soan>
              </li>
              <p className='title'>Lists</p>
              <li>
                <PersonIcon className="icon"/>
                <soan>Users</soan>
              </li>
              <li>
                <BorderColorIcon className="icon"/>
                <span>Orders</span>
              </li>
              <li>
                <StorefrontIcon className="icon"/>
                <span>Products</span>
              </li>
              <li>
                <DeliveryDiningIcon className="icon"/>
                <soan>Deleviry</soan>
              </li>
              <p className='title'>UseFul</p>
              <li>
                <CircleNotificationsIcon className="icon"/>
                <soan>Notifacitions</soan>
              </li>
              <li>
                <TroubleshootIcon className="icon"/>
                <span>Analis</span>
              </li>
              <li>
              <LoginIcon className="icon"/>
                <span>Log</span>
              </li>
              <li>
              </li>
              <li>
                <SettingsIcon className="icon"/>
                <span>Settings</span>
              </li>
              <p className='title'>Servises</p>
              <li>
                <WysiwygIcon className="icon"/>
                <span>System Logs</span>
              </li>
              <p className='title'>User</p>
              <li>
                <AccountCircleIcon className="icon"/>
                <span>Profile</span>
              </li>
              <li>
                <LockIcon className="icon"/>
                <span>Logout</span>
              </li>
            </ul>
        </div>

        <div className='bottom'>
            <div className='color'></div>
            <div className='color'></div>

        </div>
    </div>
  )
}

export default Sidbar