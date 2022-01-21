import "../Css/Products.css";
import { Menu, Dropdown } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const Product = () => {
  const topDescription = {
    title: "Desks for home",
    headline: "A Place For Your Computer, Stationery, And Coffee Mug Too",
    description:
      "Whether you are creating a home office or looking for a place to keep your computers, we’ve designed our desks for home to fulfill your every need. You can choose the BEKANT sit or stand desk if you work long hours from home or the traditional LOMMARP if you like to give your space a personalised look. They even come with built-in cable management! Want storage options? There’s the KALLAX shelf-desk combo that’s perfect for saving you room and the solid wood HEMNES that comes with drawers and compartments to store your files and stationery.",
  };

  const bottomDescription = {
    headline: "Work, Study Or Storage - We’ve Got A Desk For It All!",
    descriptinn:
      "Look no further than our collection of desks for home if you want a space to work, study, or indulge in your hobby. You can choose our flexible BEKANT if you put in long hours from home. The electric switch on the underframe lets you adjust its height - set it to sit or standing positions, whichever makes you feel better. We’ve designed it with a contoured tabletop, so your arms have a place to rest. Our blue-green LOMMARP desk is the perfect example of traditional design and adds a personal touch to your bedroom or study area. Like the BEKANT, it also comes with a built-in cable management system to tuck those pesky wires away. There’s a pull out drawer to store your stationery too! Need more storage? Get the KALLAX combo to keep your speakers and consoles. And our solid-wood HEMNES looks elegant and comes with drawers and shelves. The top drawer is fitted with a small compartment for your pens and paper clips while the bottom one has a file frame to store your A4, legal and other documents.",
  };

  const relatedCategories = [
    {
      img: "https://www.ikea.com/global/assets/navigation/images/table-desk-systems-47423.jpeg?imwidth=400",
      title: "Table & desk systems",
    },
    {
      img: "https://www.ikea.com/global/assets/navigation/images/standing-desks-55008.jpeg?imwidth=400",
      title: "standing desks",
    },
    {
      img: "https://www.ikea.com/global/assets/navigation/images/desks-for-office-47069.jpeg?imwidth=400",
      title: "Desks for office",
    },
    {
      img: "https://www.ikea.com/in/en/navigation/images/childrens-desks-24714.jpeg?imwidth=400",
      title: "Childern's desks",
    },
    {
      img: "https://www.ikea.com/global/assets/navigation/images/desks-for-gaming-47070.jpeg?imwidth=400",
      title: "Desks for gamming",
    },
    {
      img: "https://www.ikea.com/in/en/navigation/images/laptop-tables-24830.jpeg?imwidth=400",
      title: "Laptop tables",
    },
    {
      img: "https://www.ikea.com/global/assets/navigation/images/desk-chair-sets-53249.jpeg?imwidth=400",
      title: "Desk & chair sets",
    },
  ];

  const [filter, setFilter] = useState("def");
  const [allProducts, setallProducts] = useState([]);
  useEffect(() => getProducts(), []);

  const onClick = ({ key }) => {
    setFilter(key);
    createFilter();
  };

  const getProducts = (id) => {
    fetch(`https://ikea-clone-2022.herokuapp.com/products`)
      .then((d) => d.json())
      .then((res) => {
        // console.log("res", res)
        setallProducts(res);
      });
  };

  const handleProduct = (e) => {
    console.log(e._id);
    return <Link to={`/productdetails/${e._id}`}>Login</Link>;

    //<Navigate to={`/productdetails/${e._id}`} />
  };

  const createFilter = () => {
    if (filter === "def") {
      setallProducts(allProducts);
    }

    if (filter === "prLowToHigh") {
      const payload = allProducts
        .map((product) => product)
        .sort((a, b) => a.price - b.price);
      setallProducts(payload);
    }

    if (filter === "prHighToLow") {
      const payload = allProducts
        .map((product) => product)
        .sort((a, b) => b.price - a.price);
      setallProducts(payload);
    }

    if (filter === "name") {
      const payload = allProducts
        .map((product) => product)
        .sort((a, b) => a.title.localeCompare(b.title));
      setallProducts(payload);
    }

    if (filter === "mostPopular") {
      const payload = allProducts
        .map((product) => product)
        .sort((a, b) => b.sold - a.sold);
      setallProducts(payload);
    }
  };

  const sort = (
    <Menu onClick={onClick}>
      <Menu.Item key="def">Best match</Menu.Item>
      <Menu.Item key="prLowToHigh">Price: low to high</Menu.Item>
      <Menu.Item key="prHighToLow">Price: high to low</Menu.Item>
      <Menu.Item key="name">Name</Menu.Item>
      <Menu.Item key="mostPopular">Most popular</Menu.Item>
      <Menu.Item key="width">Width</Menu.Item>
      <Menu.Item key="length">Length</Menu.Item>
    </Menu>
  );

  const price = (
    <Menu onClick={onClick}>
      <Menu.Item key="0_4991">₹0 - 4999</Menu.Item>
      <Menu.Item key="5000_99995">₹5,000 - 9,9995</Menu.Item>
      <Menu.Item key="10000_1499918">₹10,000 - 14,99918</Menu.Item>
      <Menu.Item key="15000_1999923">₹15,000 - 19,99923</Menu.Item>
      <Menu.Item key="20000+">₹20,000+</Menu.Item>
    </Menu>
  );

  const material = (
    <Menu onClick={onClick}>
      <Menu.Item key="wood">Wood</Menu.Item>
      <Menu.Item key="metal">Metal</Menu.Item>
      <Menu.Item key="upholstered">Upholstered</Menu.Item>
      <Menu.Item key="solidWood">Solid wood</Menu.Item>
      <Menu.Item key=""></Menu.Item>
    </Menu>
  );

  const color = (
    <Menu onClick={onClick}>
      <Menu.Item key="blue">Blue </Menu.Item>
      <Menu.Item key="white">White </Menu.Item>
      <Menu.Item key="beige">Beige</Menu.Item>
      <Menu.Item key="brown">Brown</Menu.Item>
      <Menu.Item key="grey">Grey</Menu.Item>
      <Menu.Item key="black">black</Menu.Item>
    </Menu>
  );

  const alltype = (
    <Menu onClick={onClick}>
      <Menu.Item key="blue">Sort </Menu.Item>
      <Menu.Item key="white">Price </Menu.Item>
      <Menu.Item key="beige">Material</Menu.Item>
      <Menu.Item key="brown">Color</Menu.Item>
    </Menu>
  );

  return (
    <div id="mainProductsDiv">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />

      <div id="productDescription">
        <h1>{topDescription.title}</h1>
        <h2>{topDescription.headline}</h2>
        <div>
          <p>{topDescription.description}</p>
        </div>
      </div>

      <div>
        <div id="productFilter">
          <Dropdown className="" overlay={sort} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <button>
                Sort<i className="fas fa-angle-down fa-lg"></i>
              </button>
            </a>
          </Dropdown>
          <Dropdown className="" overlay={price} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <button>
                Price <i className="fas fa-angle-down fa-lg"></i>
              </button>
            </a>
          </Dropdown>
          <Dropdown className="" overlay={color} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <button>
                Color <i className="fas fa-angle-down fa-lg"></i>
              </button>
            </a>
          </Dropdown>
          <Dropdown className="" overlay={material} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <button>
                Material <i className="fas fa-angle-down fa-lg"></i>
              </button>
            </a>
          </Dropdown>
          <Dropdown className="" overlay={alltype} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              {" "}
              <button>
                All filters <i className="fas fa-filter"></i>{" "}
              </button>
            </a>
          </Dropdown>
        </div>

        <div></div>
      </div>

      <br />
      <hr />

      <div id="allProducts">
        {allProducts.map((e) => (
          <div id="products" key={e._id}>
            <Link to={`/productdetails/${e._id}`}>
              <img
                className="mainImg"
                src={e.Img}
                onClick={() => handleProduct(e)}
                onMouseOver={(p) => (p.currentTarget.src = e.hoverImg)}
                onMouseOut={(p) => (p.currentTarget.src = e.Img)}
                alt=""
              />
            </Link>
            <h4>{e.title}</h4>
            <p>{e.dimensions}</p>
            <div className="price">
              <p>Rs.</p>{" "}
              <h3>
                {e.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </h3>
            </div>
            <div className="productRating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i> <p>({e.sold})</p>
            </div>
            <p>More varients</p>
            <div className="moreVarient">
              {e.varient.map((c, i) => (
                <img key={i} src={c.img} alt="" />
              ))}
            </div>
          </div>
        ))}
      </div>

      <hr />

      <div id="relatedProduct">
        <h3>Related categories</h3>

        <div className="relatedProductImages">
          {relatedCategories.map((e, i) => (
            <div id="relatedProductImg" key={i}>
              <img src={e.img} alt="" /> <p>{e.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="bottomProductDescription">
        <>
          <h2>{bottomDescription.headline}</h2>
          <div>
            <p>{bottomDescription.descriptinn}</p>
          </div>
        </>
      </div>
    </div>
  );
};
