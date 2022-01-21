import { Input, Select, Modal } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import "../Css/PaymentPage.css";
import { fetchCartItems, getCartLoading } from "../Features/Cart/actions";

export const PaymentPage = () => {
  const { Option } = Select;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    return <Navigate to="/"></Navigate>;
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
  console.log(loading);

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

  return (
    <div>
      <div className="paymentPageLogoContainer"></div>
      <div className="mainPaymentPageContainer">
        <div>
          <div>
            <h2 className="titleBoldPaymentPage">
              BUY ONLINE & COLLECT YOURSELF
            </h2>
            <h4>
              Your desired collection date:{" "}
              <Select
                defaultValue={
                  new Date().toISOString().slice(0, 10) + " 12:00 - 13:00"
                }
                style={{ width: "200px" }}
              >
                <Option
                  value={
                    new Date().toISOString().slice(0, 10) + " 12:00 - 13:00"
                  }
                >
                  {" "}
                  {new Date().toISOString().slice(0, 10) + " 12:00 - 13:00"}
                </Option>
                <Option
                  value={
                    new Date().toISOString().slice(0, 10) + " 13:30 - 14:30"
                  }
                >
                  {" "}
                  {new Date().toISOString().slice(0, 10) + " 13:30 - 14:30"}
                </Option>{" "}
                <Option
                  value={
                    new Date().toISOString().slice(0, 10) + " 15:00 - 16:00"
                  }
                >
                  {" "}
                  {new Date().toISOString().slice(0, 10) + " 15:00 - 16:00"}
                </Option>{" "}
                <Option
                  value={
                    new Date().toISOString().slice(0, 10) + " 16:30 - 17:30"
                  }
                >
                  {" "}
                  {new Date().toISOString().slice(0, 10) + " 16:30 - 17:30"}
                </Option>
                <Option
                  value={
                    new Date().toISOString().slice(0, 10) + " 18:00 - 19:00"
                  }
                >
                  {" "}
                  {new Date().toISOString().slice(0, 10) + " 18:00 - 19:00"}
                </Option>
              </Select>
            </h4>
            <p className="idProofPaymentPage">
              Please don’t miss your slot, and carry a valid government issued
              photo ID to collect the delivery.
            </p>
          </div>
          <div>
            <h4>Pick up location</h4>
            <h4>IKEA Navi Mumbai</h4>
            <p className="addressPaymentPage">IKEA India Private Limited</p>
            <p className="addressPaymentPage">
              Plot No 15-15A-C, VIL - TURBHE MIDC TTC INDUSTRIAL AREA<br></br>
              400705 Navi Mumbai<br></br>
              MAHARASHTRA<br></br>
              India
            </p>
            <p className="parkingPaymentPage">
              Entry gate No 2, Parking Area P2 and follow the Click and Collect
              Signs
            </p>
          </div>
          <div className="mapDivPaymentPage">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d120658.61038392677!2d73.018696!3d19.082126!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe2aa5a7c8cba696b!2zMTnCsDA0JzU1LjciTiA3M8KwMDEnMDcuMyJF!5e0!3m2!1sen!2sus!4v1642597728071!5m2!1sen!2sus"
              width="300"
              height="300"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              title="ikeamumbaimap"
            ></iframe>
          </div>
          <div>
            <h2 className="titleBoldPaymentPage">Invoice data</h2>
          </div>
          <div>
            <p className="namePanPaymentPage">Enter your name as per PAN</p>
            <p className="inputLablePaymentPage">First name*:</p>
            <Input className="inputPaymentPage"></Input>
            <p className="inputLablePaymentPage">Middle name:</p>
            <Input className="inputPaymentPage"></Input>
            <p className="inputLablePaymentPage">Last name*:</p>
            <Input className="inputPaymentPage"></Input>
            <p className="inputLablePaymentPage">PAN:</p>
            <Input className="inputPaymentPage"></Input>
            <p className="inputLablePaymentPage">Address*:</p>
            <Input className="inputPaymentPage"></Input>
            <p className="inputLablePaymentPage">Address 2:</p>
            <Input className="inputPaymentPage"></Input>
            <p className="inputLablePaymentPage">Landmark:</p>
            <Input className="inputPaymentPage"></Input>
            <p className="inputLablePaymentPage">PIN Code:</p>
            <Input className="inputPaymentPage"></Input>
            <p className="inputLablePaymentPage">City:</p>
            <Input className="inputPaymentPage"></Input>
            <p className="inputLablePaymentPage">State:</p>
            <Input className="inputPaymentPage"></Input>
            <p className="inputLablePaymentPage">Country:</p>
            <Input className="inputPaymentPage"></Input>
            <p className="inputLablePaymentPage">Email*:</p>
            <Input className="inputPaymentPage"></Input>
            <p className="inputLablePaymentPage">Verify email address*:</p>
            <Input className="inputPaymentPage"></Input>
            <p className="inputLablePaymentPage">Phone:</p>
            <Input className="inputPaymentPage"></Input>
            <p className="addressPaymentPage">
              It is absolutely important that you enter a valid phone number so
              we are able to reach you if necessary.
            </p>
            <p className="addressPaymentPage">
              Please read our Terms and Conditions and Privacy policy , this is
              to protect your data carefully.
            </p>
            <button className="checkoutBtnPaymentPage" onClick={showModal}>
              Checkout
            </button>
          </div>
        </div>
        <div>
          <div className="orderSummaryPaymentPage">
            <h2 className="titleBoldPaymentPage">Order summary</h2>
            <div>
              {cartData.map((e) => {
                return (
                  <div key={e._id} className="productsPaymentPage">
                    <div>
                      <img src={e.product.Img} alt="productImg"></img>
                    </div>
                    <div>
                      <h4>{e.product.title}</h4>
                      <p>{e.product.dimensions}</p>
                      <p>Rs.{e.product.price.toLocaleString()}.00</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="subTotalPaymentPage">
              <div>
                <h4>Total amount:</h4>
              </div>
              <div>
                <h4>Rs.{subTotal.toLocaleString()}.00</h4>
              </div>
            </div>
            <p>All prices are inclusive of taxes</p>
            <Modal
              title="Success"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Link to="/">
                <h1>Order Placed Successfully.</h1>
              </Link>
            </Modal>
          </div>
        </div>
      </div>
      <div>
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
                We have made some updates to our return policy due to the COVID
                19 situation.
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
              <p>
                Sometimes it is nice to have someone else assemble it for you
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="footerTextPaymentPage">
          We use the latest technology to encrypt all personal information which
          you submit through our site or checkout.
        </p>
      </div>
    </div>
  );
};
