import "../Css/Cart.css";
import "antd/dist/antd.css";
import { Input, Select } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartItems,
  fetchCartItems,
  getCartLoading,
} from "../Features/Cart/actions";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { Option } = Select;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartLoading());
    dispatch(fetchCartItems());
  }, []);

  const { cartData, loading } = useSelector((state) => ({
    cartData: state.cartReducer.cartData,
    loading: state.cartReducer.loading,
  }));

  console.log(cartData);
  console.log("loading", loading);

  const data = [
    {
      productimg:
        "https://secure.ikea.com/in/en/images/products/utespelare-gaming-desk__0985179_PE816538_S3.JPG",
      productprice: "8990.00",
      id: 1,
      productname: "UTESPELARE",
      category: "gaming desk",
      color: "black",
      size: "703.011.65",
      weight: "0.06 Kg per piece",
    },
    {
      productimg:
        "https://secure.ikea.com/in/en/images/products/produkt-milk-frother__0713449_PE729532_S3.JPG",
      productprice: "99.00",
      id: 2,
      productname: "PRODUKT",
      category: "Milk-frother",
      color: "black",
      size: "703.011.65",
      weight: "0.06 Kg per piece",
    },
    {
      productimg:
        "https://secure.ikea.com/in/en/images/products/utespelare-gaming-desk__0985179_PE816538_S3.JPG",
      productprice: "8990.00",
      id: 3,
      productname: "UTESPELARE",
      category: "gaming desk",
      color: "black",
      size: "703.011.65",
      weight: "0.06 Kg per piece",
    },
    {
      productimg:
        "https://secure.ikea.com/in/en/images/products/utespelare-gaming-desk__0985179_PE816538_S3.JPG",
      productprice: "8990.00",
      id: 4,
      productname: "UTESPELARE",
      category: "gaming desk",
      color: "black",
      size: "703.011.65",
      weight: "0.06 Kg per piece",
    },
  ];
  const [subTotal, setSubtotal] = useState(0);
  const [deliveryHome, setDeliveryHome] = useState(true);
  const getSubtotal = () => {
    let ans = 0;
    cartData.forEach((el) => {
      ans += Number(el.product.price);
    });
    setSubtotal(ans);
  };

  useEffect(() => {
    getSubtotal();
  }, [cartData]);

  const handleClickHome = () => {
    setDeliveryHome(true);
  };
  const handleClickCollect = () => {
    setDeliveryHome(false);
  };

  return loading ? (
    <img
      className="loadingImage"
      src="https://cdn140.picsart.com/301568770156201.gif?to=crop&type=webp&r=-1x-1&q=95&width=1920"
      alt="loding"
    ></img>
  ) : (
    <div>
      <div className="cartHeader">
        <h1>Shopping Cart</h1>
        <div className="cartProductsDiv">
          {cartData.map((e) => (
            <div className="cartProduct" key={e._id}>
              <div>
                <img src={e.product.Img} alt="product img"></img>
              </div>
              <div>
                <h3>{e.product.title}</h3>
                <p>{e.product.dimensions}</p>
                <p>{e.product.sold} in stock</p>
              </div>
              <div className="cartButtonsDiv">
                <div>
                  <h3>Rs.{Number(e.product.price).toLocaleString()}.00</h3>
                </div>
                <div>
                  <button
                    className="cartDeleteButton"
                    onClick={() => {
                      dispatch(deleteCartItems(e._id));
                    }}
                  >
                    <span className="material-icons-outlined deleteicon">
                      delete
                    </span>
                  </button>
                  <Select defaultValue="1" style={{ width: "80px" }}>
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="3">3</Option>
                    <Option value="4">4</Option>
                    <Option value="5">5</Option>
                  </Select>
                </div>
              </div>
            </div>
          ))}
          <div className="subTotalDiv">
            <div>
              <h3>Subtotal</h3>
            </div>
            <div>
              <h3>Rs.{subTotal.toLocaleString()}.00</h3>
            </div>
          </div>
          <div className="weightDiv">
            <img
              src="images/weight.JPG"
              alt="weight"
              style={{ width: "100%" }}
            ></img>
          </div>
          <div className="buyingOptionsMainDiv">
            <h3>How would you like to recieve your order?</h3>
            <div className="buyingOptionsDiv">
              <div
                onClick={() => handleClickHome()}
                style={
                  deliveryHome
                    ? { borderBottom: "2px solid #407AB1", color: "#407AB1" }
                    : null
                }
              >
                <div>
                  <span className="material-icons-outlined">
                    local_shipping
                  </span>
                </div>
                <div>
                  <p>Home delivery</p>
                </div>
              </div>
              <div
                onClick={() => handleClickCollect()}
                style={
                  !deliveryHome
                    ? { borderBottom: "2px solid #407AB1", color: "#407AB1" }
                    : null
                }
              >
                <div>
                  <span className="material-icons-outlined">touch_app</span>
                </div>
                <div>
                  <p>Click & collect</p>
                </div>
              </div>
            </div>
          </div>
          {deliveryHome ? (
            <div>
              <p>
                Enter a PIN code to see product availability and delivery
                options.
              </p>
              <Input></Input>
              <button className="deliveryButton">Proceed</button>
            </div>
          ) : (
            <div className="clickandcollectDiv">
              <div>
                <Select defaultValue="Select store" style={{ width: "250px" }}>
                  <Option value="IKEA HYDRABAD">IKEA HYDRABAD</Option>
                  <Option value="IKEA NAVI MUMBAI">IKEA NAVI MUMBAI</Option>
                </Select>
              </div>
              <div>
                {" "}
                <Link to="/payment">
                  <button className="deliveryButton">Click & Collect</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="cartFooter">
        <div className="cartFooterBlocks">
          <div>
            {" "}
            <span className="material-icons-outlined shippingIcon">
              local_shipping
            </span>
          </div>
          <div>
            <h5>Our Delivery Service</h5>
            <p>
              Safe & contact-less delivery according to government permission.
            </p>
          </div>
        </div>
        <div className="cartFooterBlocks">
          <div>
            {" "}
            <span className="material-icons-outlined shippingIcon">
              favorite_border
            </span>
          </div>
          <div>
            <h5>Our Return Policy</h5>
            <p>
              We have made some updates to our return policy due to the COVID 19
              situation.
            </p>
          </div>
        </div>
        <div className="cartFooterBlocks">
          <div>
            {" "}
            <span className="material-icons-outlined shippingIcon">
              settings_suggest
            </span>
          </div>
          <div>
            <h5>Our Assembly Service</h5>
            <p>Sometimes it is nice to have someone else assemble it for you</p>
          </div>
        </div>
      </div>
    </div>
  );
};
