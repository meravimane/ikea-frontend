import HorizontalSlide from "./HorizontalSlide"


export const Home = () => {
    return <div className="main">
        <img className="main-image" src={require("../assets/ddcb9514d22ed87edbb57ceeaaed2c27.avif")} alt="img" />
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
                <p>A collection by British fashion icon Zandra Rhodes that’s all about showing your personality in your space!</p>
                <img src={require("../assets/8f9d72376f667402d61c864a411873dc.jpeg")} alt="" />
            </div>
        </div>
        <h1 className="texts">Top categories</h1>
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
        <h2>work pending!</h2>
    </div>
}

