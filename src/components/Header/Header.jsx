import React from 'react';
import "./Header.css";
import config from "../../bssl/config.json";
import { Button, IconButton, Avatar } from '@mui/material';
import { useNavigate } from 'react-router';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    const navigate = useNavigate()

    return (
        <header style={{width: "100%", height: "69px", zIndex: 14, position: "sticky", top: 0}} className="header d-flex al-items-center bg0 j-cont-between primary-padding py1">
            <h3 className='beauty-font'>BEAUTY NEXT DOOR</h3>
            <div className='d-flex al-items-center'>
                <IconButton aria-label="" onClick={() => {}}  sx={{ width: '46px', height: '46px', padding: "0.14rem" }}>
                  <SearchIcon  sx={{ width: '28px', height: '28px' }} />
                </IconButton>
                <IconButton aria-label="" onClick={() => {}}  sx={{ width: '46px', height: '46px', padding: "0.14rem" }}>
                  <NotificationsIcon  sx={{ width: '28px', height: '28px' }} />
                </IconButton>
                <IconButton aria-label="" onClick={() => {}} sx={{ width: '46px', height: '46px', padding: "0.14rem" }}>
                  <Avatar variant="circular" src={config['dev-domain'] + "/public/images/myprofile.jpg"} alt="" sx={{ width: '28px', height: '28px' }} />
                </IconButton>

                {/* <Button variant="outlined">Login</Button> */}
            </div>
        </header>
    );
};

export default Header;