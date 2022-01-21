import '../Css/Login.css'
import { useAuth0 } from "@auth0/auth0-react";

export const Login = () => {

    const { loginWithPopup, logout, user, isAuthenticated } = useAuth0()



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


                        <button id="ContinueBtn" onClick={loginWithPopup}>Continue to Login/Signin</button>

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