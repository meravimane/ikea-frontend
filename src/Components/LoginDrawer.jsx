import { Drawer, Button } from 'antd';

import { BiUser } from './icons';
import React, { useState } from 'react';
import '../Css/navbar.css'

import { Link } from 'react-router-dom';

export const LoginDrawer = () => {

    //User Drawer from right --start
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    //User Drawer from right --end 

    const handleLogin = () => {
        setVisible(false)
    }
    return <>
        <span><Button id='navbarLogo' type="primary" onClick={showDrawer}>
            <BiUser />
        </Button></span>

        <Drawer title="" placement="right" onClose={onClose} visible={visible}>
            <div id='loginDiv1'>

                <div id='userPalate'>  <span id='userName'>Hej</span> <Link to="/login">  <Button id="loginBtn" onClick={() => { handleLogin() }}>Login</Button></Link>
                </div>
            </div>
            <div id='loginDiv2'> <h4 id='subheadingColor'> Join IKEA Family</h4>
                <div id='contentDiv'>
                    <div>
                        Get access to a number of member benefits. Enjoy guaranteed discounts, free workshops, exclusive previews and a lot more when you join. Its free!</div>
                    <div><button id="arrowBtn">→</button></div>
                </div>

            </div>
            <div id='loginDiv2'> <h4 id='subheadingColor'> Join IKEA Business network</h4>
                <div id='contentDiv'>
                    <div>
                        Get access to a number of member benefits. Enjoy guaranteed discounts, free workshops, exclusive previews and a lot more when you join. Its free!</div>
                    <div><button id="arrowBtn">→</button></div>
                </div>

            </div>


            <div id='loginDiv4'>
                <li>Shopping list</li>
                <li>Planners</li>
            </div>
        </Drawer>
    </>

}