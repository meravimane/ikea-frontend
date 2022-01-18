import React from 'react'
import { ArrowRightOutlined } from '@ant-design/icons/lib/icons'
import '../Css/Home.css'
import Slider from './Slider'

function HorizontalSlide() {
    return (
        <div>
            <div className='horizontal-menu'>
                <div className='horizontal-flex'>
                    <img className='horizontal-image' src={require("../assets/8c34770edf4c7d36aa2188b93afa94b1.jpeg")} alt="" />
                    <div className='horizontal-bottom'>
                        <h2 className='horizontal-menu-text'>Everyday essentials under Rs.499</h2>
                        <div className='horizontal-right-arrow'>
                            <Slider />
                        </div>
                    </div>

                </div>

                <div className='horizontal-flex'>
                    <img className='horizontal-image' src={require("../assets/c98c732a79a4467dfbccd2acc856996e.jpeg")} alt="" />
                    <div className='horizontal-bottom' style={{ backgroundColor: "#40455C" }}>
                        <h2 className='horizontal-menu-text'>Furniture under Rs.2999</h2>
                        <div className='horizontal-right-arrow'>
                            <Slider />
                        </div>
                    </div>

                </div>


                <div className='horizontal-flex'>
                    <img className='horizontal-image' src={require("../assets/0babfd0f9e5e854f5d6fd4cef9bf8e29.jpeg")} alt="" />
                    <div className='horizontal-bottom' style={{ backgroundColor: "#E9CF7A" }}>
                        <h2 className='horizontal-menu-text' >Work From Home essentials</h2>
                        <div className='horizontal-right-arrow'>
                            <Slider />
                        </div>
                    </div>

                </div>


                <div className='horizontal-flex'>
                    <img className='horizontal-image' src={require("../assets/728a6c94af964c0bc3c723d3b67b5bb4.jpeg")} alt="" />
                    <div className='horizontal-bottom' style={{ backgroundColor: "#700730" }}>
                        <h2 className='horizontal-menu-text'>Everyday essentials under Rs.499</h2>
                        <div className='horizontal-right-arrow'>
                            <Slider />
                        </div>
                    </div>

                </div>






            </div>
        </div>
    )
}

export default HorizontalSlide
