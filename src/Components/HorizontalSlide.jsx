import React from 'react'
import '../Css/Home.css'
import Slider from './Slider'

function HorizontalSlide() {
    return (

        <div className='horizontal-menu'>
            <div className='horizontal-flex'>
                <img src="https://www.ikea.com/images/bc/61/bc6198f2a55af0a769f0b8bafa429e42.png?f=xs" alt="" />
                <div style={{ backgroundColor: "#FEDC00" }}>
                    <h2 style={{ color: "black" }}>Everyday essentials under Rs.499</h2>
                    <div >
                        <Slider />
                    </div>
                </div>

            </div>

            <div className='horizontal-flex'>
                <img src="https://www.ikea.com/images/b2/2f/b22f9a9d69bc8e5b85577614f76d28f0.png?f=xs" alt="" />
                <div style={{ backgroundColor: "#cba052" }}>
                    <h2 style={{ color: "black" }}>Committed to India </h2>
                    <div >
                        <Slider />
                    </div>
                </div>

            </div>

            <div className='horizontal-flex'>
                <img src="https://www.ikea.com/images/get-20-off-on-your-ikea-kitchen-today-3fedc520e0271375c92f600b809ed339.jpg?f=xs" alt="" />
                <div style={{ backgroundColor: "#3B5D84" }}>
                    <h2 style={{ color: "white" }}>Get 20% off on your IKEA Kitchen today*</h2>
                    <div >
                        <Slider />
                    </div>
                </div>

            </div>

            <div className='horizontal-flex'>
                <img src="https://www.ikea.com/images/0b/ab/0babfd0f9e5e854f5d6fd4cef9bf8e29.jpg?f=xs" alt="" />
                <div style={{ backgroundColor: "#7D5D6A" }}>
                    <h2 style={{ color: "white" }}>Work from home essentials</h2>
                    <div >
                        <Slider />
                    </div>
                </div>

            </div>

            <div className='horizontal-flex'>
                <img src="https://www.ikea.com/images/41/d2/41d2341fe1f6bb237e7a8fe8200027d5.png?f=xs" alt="" />
                <div style={{ backgroundColor: "#363437" }}>
                    <h2 style={{ color: "white" }}>Furniture under Rs.2999</h2>
                    <div >
                        <Slider />
                    </div>
                </div>

            </div>

            < div className='horizontal-flex'>
                <img src="https://www.ikea.com/images/10/b9/10b9ebd97d79fbd87fc52ce7d662c37d.png?f=xs" alt="" />
                <div style={{ backgroundColor: "#93534F" }}>
                    <h2 style={{ color: "white" }}>Textiles under Rs.999</h2>
                    <div >
                        <Slider />
                    </div>
                </div>

            </div>

            {/* <div className='horizontal-flex'>
                    <img className='horizontal-image' src={require("../assets/c98c732a79a4467dfbccd2acc856996e.jpeg")} alt="" />
                    <div className='horizontal-bottom' style={{ backgroundColor: "#40455C" }}>
                        <h2 className='horizontal-menu-text'>Furniture under Rs.2999</h2>
                        <div className='horizontal-right-arrow'>
                            <Slider />
                        </div>
                    </div>

                </div> */}


            {/* <div className='horizontal-flex'>
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
                    <div className='horizontal-bottom' style={{ backgroundColor: "#069BA5" }}>
                        <h2 className='horizontal-menu-text'>Everyday essentials under Rs.499</h2>
                        <div className='horizontal-right-arrow'>
                            <Slider />
                        </div>
                    </div>

                </div>


                <div className='horizontal-flex'>
                    <img className='horizontal-image' src={require("../assets/8c34770edf4c7d36aa2188b93afa94b1.jpeg")} alt="" />
                    <div className='horizontal-bottom'>
                        <h2 className='horizontal-menu-text'>Everyday essentials under Rs.499</h2>
                        <div className='horizontal-right-arrow'>
                            <Slider />
                        </div>
                    </div>

                </div>

                {/* <div className='horizontal-flex'>
                    <img className='horizontal-image' src={require("../assets/c98c732a79a4467dfbccd2acc856996e.jpeg")} alt="" />
                    <div className='horizontal-bottom' style={{ backgroundColor: "#40455C" }}>
                        <h2 className='horizontal-menu-text'>Furniture under Rs.2999</h2>
                        <div className='horizontal-right-arrow'>
                            <Slider />
                        </div>
                    </div>

                </div> */}


            {/* <div className='horizontal-flex'>
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
                    <div className='horizontal-bottom' style={{ backgroundColor: "#069BA5" }}>
                        <h2 className='horizontal-menu-text'>Everyday essentials under Rs.499</h2>
                        <div className='horizontal-right-arrow'>
                            <Slider />
                        </div>
                    </div>

                </div>  */}





        </div>

    )
}

export default HorizontalSlide
