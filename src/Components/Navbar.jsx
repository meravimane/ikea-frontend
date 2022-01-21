// import { LoginDrawer } from "./LoginDrawer"
import '../Css/navbar.css'


import { AiOutlineShopping, FiTruck } from './icons';
import { Button } from 'antd';
import { HBRight } from './hbRight';
import { LoginDrawer } from './LoginDrawer';
import { Link } from 'react-router-dom';




export const Navbar = () => {


    return <div>  <div id='navBar'>

        <div id='hamburgerLeft'>
            <HBRight></HBRight>
        </div>
        <div className="nav-container">

            <Link to="/"> <img src='https://www.ikea.com/in/en/static/ikea-logo.f7d9229f806b59ec64cb.svg' id="ikeaLogo" alt="" /> </Link>


            <nav id='navLi'>
                <ul>
                    <li> <Link to="/products"> Products </Link> </li>
                    <li id="rooms">  <Link to="/products"> Rooms </Link></li>
                    <li> <Link to="/products">New at IKEA </Link></li>
                    <li> <Link to="/products">All offers</Link></li>
                </ul>
            </nav>


            <div className="search-container">
                <svg id='searchLogo' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>
                <input id="myInput" onClick={() => { }} placeholder="What are you looking for?" type="text" className="search" />
                <button id="searchbtn" type="button" onClick={() => { }}>

                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                </button>

            </div>


            <nav className="icons-nav">

                <span> <LoginDrawer /></span>

                <span><Button id='navbarLogo' type="primary" >
                    <FiTruck />
                </Button></span>

                <span><Button id='navbarLogo' type="primary" >
                    <Link to="/cart"> <AiOutlineShopping /></Link>
                </Button></span>

            </nav>

        </div>

    </div>
        <hr id='bar' />
    </div>
}