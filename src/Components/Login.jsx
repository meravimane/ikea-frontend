import '../Css/Login.css'
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react';
export const Login = () => {

    const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } = useAuth0()

    const [stateAuth, setstateAuth] = useState(true);

    return <>

        <div id="mainDiv">
            <div id="textDiv">

                <img src='https://in.accounts.ikea.com/resources/static/logo.svg' id="ikeaLogoL" alt="Logo" />

                <div id="AuxiText">
                    <p id="Lheading"> <span id="yellowtext">Login</span> to your <br /> IKEA account </p>

                    <p id="smallText">Too many passwords?
                        <br />
                        You can now login with an OTP we will send on your email address or verified mobile number.
                    </p>
                    <p id="smallText">Access your IKEA account using your email address to add and verify your mobile number.

                    </p>

                </div>
                <div id='bottomText'>
                    IKEA.in - Cookie Policy and Privacy Policy
                    <br />
                    © Inter IKEA Systems B.V. 1999-2022
                </div>
            </div>


            <div id="formDiv">
                <div id='inputDiv'>

                    {!isAuthenticated ? <div>
                        <input id="Input" type="text" placeholder="Email or mobileno." required="true" />
                        <p>Login <b> <u> with an OTP</u></b></p>

                        <input id="Input" type="text" placeholder="Password" required="true" />
                        <p> <b> <u> Fogot password</u></b></p>

                        <button id="ContinueBtn" onClick={loginWithPopup}>Continue</button>

                    </div> : <button id="ContinueBtn" onClick={logout}>Logout</button>}
                </div>

                <div id='belowBtn'>
                    <p>Donot have an IKEA account ? Create one now.</p>

                    <button id="BuyBtn">Im buying for my home</button><br />
                    <button id="BuyBtn">Im buying for my company</button>
                </div>

            </div>



        </div>
    </>
}