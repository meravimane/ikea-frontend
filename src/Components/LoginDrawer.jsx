import { Drawer, Button } from 'antd';

import { BiUser } from './icons';
import React, { useState } from 'react';
import '../Css/navbar.css'

import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

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
    // ------------ 

    const { user, isAuthenticated, logout } = useAuth0()
    // console.log(user)





    return <>
        <span><Button id='navbarLogo' type="primary" onClick={showDrawer}>
            {!isAuthenticated ? <BiUser /> : <>{user.given_name}</>}
        </Button></span>

        <Drawer title="" placement="right" onClose={onClose} visible={visible}>
            <div id='loginDiv1'>

                <div id='userPalate'> {!isAuthenticated ? <span id='userName'>Hej</span> : <span id='userName'>{user.name}</span>}
                </div>
                <div id="loginBtnDiv"> {!isAuthenticated ? <Link to="/login">  <Button id="loginBtn" onClick={() => { handleLogin() }}>Login</Button></Link> : <Link to="/login">  <Button id="loginBtn" onClick={logout}>Logout</Button></Link>}  </div>
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