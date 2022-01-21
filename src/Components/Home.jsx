import HorizontalSlide from "./HorizontalSlide";
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { Rate } from 'antd';
import { Button } from "antd";


const { Meta } = Card;


export const Home = () => {
    return <div className="main">
        <img className="main-image" src="https://www.ikea.com/images/2e/81/2e81f9ceba3c3a178bccf1be5b036747.png?f=xxxl" alt="img" />
        <HorizontalSlide />
        <div className="info">
            <h1>Come visit us at IKEA Worli City Store!</h1>
            <h4>A new meeting point in the heart of the city: Inspire, eat, meet up, shop, relax and much more.</h4>
            <button>Read More</button>
        </div>
        <div className="texts">
            <h1>Limited festive collections</h1>
        </div>

        <div className="shopnow">
            <div className="shopnow-flex">
                <h2>AROMATISK</h2>
                <p>An Akanksha Sharma & Paulin Machado collaboration, inspired by the houses and colourful neighbourhoods in India.</p>
                <img src={require("../assets/b2d92c2bba2fd4af57616cc299e46e91.jpeg")} alt="" />
            </div>
            <div className="shopnow-flex">
                <h2>KARISMATISK</h2>
                <p>A collection by British fashion icon Zandra Rhodes thats all about showing your personality in your space!</p>
                <img src={require("../assets/8f9d72376f667402d61c864a411873dc.jpeg")} alt="" />
            </div>
        </div>
        <h1 className="texts">Top categories</h1>
        <br />
        <br />
        <div className="top-categories">
            <div className="categories-image">
                <img src={require("../assets/1.jpg")} alt="" />
            </div>
            <div className="categories-image">
                <img src={require("../assets/2.jpg")} alt="" />
            </div>
            <div className="categories-image">
                <img src={require("../assets/3.jpg")} alt="" />
            </div>
            <div className="categories-image">
                <img src={require("../assets/4.jpg")} alt="" />
            </div>
            <div className="categories-image">
                <img src={require("../assets/5.jpg")} alt="" />
            </div>
        </div>
        <div className="top-categories" style={{ paddingTop: "110px" }}>
            <div className="categories-image">
                <img src={require("../assets/6.jpg")} alt="" />
            </div>
            <div className="categories-image">
                <img src={require("../assets/7.jpg")} alt="" />
            </div>
            <div className="categories-image">
                <img src={require("../assets/8.jpg")} alt="" />
            </div>
            <div className="categories-image">
                <img src={require("../assets/9.jpg")} alt="" />
            </div>
            <div className="categories-image">
                <img src={require("../assets/10.jpg")} alt="" />
            </div>
        </div>
        <br />
        <hr style={{ width: "80%", marginRight: "90px" }} />
        <h1 className="texts">Sale</h1>
        <div className="card">
            <Card
                hoverable
                style={{ width: 240 }}

                cover={<img alt="example" src={require("../assets/11.jpg")} />}
            >
                <h3 style={{ color: "red" }}>Price valid until Jan 26</h3>
                <Meta title="GAMMALBYN" />
                <h2>Rs.18,990</h2>
                <Rate disabled defaultValue={2} style={{ color: "black" }} />
                <p>More Info</p>
            </Card>
            <Card
                hoverable
                style={{ width: 240 }}

                cover={<img alt="example" src={require("../assets/12.jpg")} style={{ height: 240 }} />}
            >
                <h3 style={{ color: "red" }}>Price valid until Jan 26</h3>
                <Meta title="Europe Street beat" />
                <h2>Rs.1,490</h2>
                <Rate disabled defaultValue={3} style={{ color: "black" }} />
                <p>More Info</p>
            </Card>
            <Card
                hoverable
                style={{ width: 240 }}

                cover={<img alt="example" src={require("../assets/13.jpg")} style={{ height: 240 }} />}
            >
                <h3 style={{ color: "red" }}>Price valid until Jan 26</h3>
                <Meta title="Europe Street beat" />
                <h2>Rs.399</h2>
                <Rate disabled defaultValue={3} style={{ color: "black" }} />
                <p>More Info</p>
            </Card>
            <Card
                hoverable
                style={{ width: 240 }}

                cover={<img alt="example" src={require("../assets/14.jpg")} />}
            >
                <h3 style={{ color: "red" }}>Price valid until Jan 26</h3>
                <Meta title="Europe Street beat" />
                <h2>Rs.399</h2>
                <Rate disabled defaultValue={4} style={{ color: "black" }} />
                <p>More Info</p>
            </Card>

        </div>

        <br />
        <br />

        <div className="info-2">
            <button className="sale-button">Read More</button>

        </div>
        <hr style={{ width: "80%", marginLeft: "150px" }} />
        <br />
        <div className="top-categories-2">

            <img style={{ width: 350 }} src={require("../assets/5c9c9eb241eb36aad4b34faca6ac7581.jpeg")} alt="" />


            <img style={{ width: 350 }} src={require("../assets/f8310b1f2748a3bc05a991d51b72bdde.jpeg")} alt="" />

            <img style={{ width: 350 }} src={require("../assets/1f156f2f88ee35e3046453bee09699bd.jpeg")} alt="" />

        </div>
        <br />
        <div className="top-categories-2">
            <h2 >New Lower Price</h2>
            <h2>Explore top Sellers</h2>
            <h2>Explore food at IKEA</h2>
        </div>
        <hr style={{ width: "80%", marginLeft: "150px" }} />
        <br />
        <h1 style={{ marginLeft: 150 }}>Shop products for a more sustainable home</h1>
        <br />
        <div className="top-categories-3" >
            <div className="categories-image">
                <img src={require("../assets/15.jpg")} alt="" />
            </div>
            <div className="categories-image">
                <img src={require("../assets/16.jpg")} alt="" />
            </div>
            <div className="categories-image">
                <img src={require("../assets/17.jpg")} alt="" />
            </div>
            <div className="categories-image">
                <img src={require("../assets/18.jpg")} alt="" />
            </div>
            <div className="categories-image">
                <img src={require("../assets/19.jpg")} alt="" />
            </div>
            <div className="categories-image">
                <img src={require("../assets/20.jpg")} alt="" />
            </div>
            <div className="categories-image">
                <img src={require("../assets/21.jpg")} alt="" />
            </div>
        </div>
        <br />
        <h1 style={{ marginLeft: 150 }}>More ideas and inspiration</h1>
        <br />
        <div className="button-flex" style={{ marginLeft: 150 }}>
            <Button
                shape="round"
                style={{ margin: 10 }}
            >
                <b>Bedroom</b>
            </Button>
            <Button
                shape="round"
                style={{ margin: 10 }}
            >
                <b>Living room</b>
            </Button>
            <Button
                shape="round"
                style={{ margin: 10 }}
            >
                <b>Kitchen</b>
            </Button>
            <Button
                shape="round"
                style={{ margin: 10 }}
            >
                <b>Workspace</b>
            </Button>
            <Button
                shape="round"
                style={{ margin: 10 }}
            >
                <b>Outdoor</b>
            </Button>
            <Button
                shape="round"
                style={{ margin: 10 }}
            >
                <b>Bathroom</b>
            </Button>
            <Button
                shape="round"
                style={{ margin: 10 }}
            >
                <b>Baby and Children</b>
            </Button>
            <Button
                shape="round"
                style={{ margin: 10 }}
            >
                <b>Dining</b>
            </Button>
            <Button
                shape="round"
                style={{ margin: 10 }}
            >
                <b>Hallway</b>
            </Button>
            <Button
                shape="round"
                style={{ margin: 10 }}
            >
                <b>Accessories</b>
            </Button>
        </div>
        <br />
        <div className="pinterest" style={{ marginLeft: 150 }}>
            <img src="https://www.ikea.com/ext/ingkadam/m/5c5cbac57f37ac0a/original/PH177187-crop001.jpg?f=xs" style={{ width: 380 }} alt="" />
            <img src="https://www.ikea.com/ext/ingkadam/m/14b15f024cf780bf/original/PH159057-crop001.jpg?f=xs" style={{ width: 280, marginBottom: 140, margin: 10 }} alt="" />
            <img src="https://www.ikea.com/ext/ingkadam/m/74ade0c695386e17/original/PH177260-crop001.jpg?f=xs" style={{ width: 320, marginBottom: 105, margin: 10 }} alt="" />
        </div>
        <div className="pinterest" style={{ marginLeft: 150 }}>
            <img src="https://www.ikea.com/ext/ingkadam/m/4b2a1bdf592253a9/original/PH169608-crop001.jpg?f=xs" style={{ width: 380, margin: "25px 10px 156px" }} alt="" />
            <img src="https://www.ikea.com/ext/ingkadam/m/168fb1fbf0763f5c/original/PH161331-crop001.jpg?f=xs" style={{ width: 280, margin: "-269px 10px 135px" }} alt="" />
            <img src="https://www.ikea.com/ext/ingkadam/m/48fd196fe587f56d/original/PH163322-crop002.jpg?f=xs" style={{ width: 320, margin: "-120px 9px 133px" }} alt="" />
        </div>
        <hr style={{ width: "80%", marginLeft: "150px" }} />
        <br />
        <img src={require("../assets/foot.jpg")} alt="" style={{ marginLeft: 150 }} />
        <br />
        <br />
    </div>
}


