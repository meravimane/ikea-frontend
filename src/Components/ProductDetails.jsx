import "../Css/ProductDetails.css";
import { Image } from "antd";
import React, { useEffect, useState } from "react";
import { Drawer } from "antd";
import { Link, useParams } from "react-router-dom";
import {
  getDetailsByApi,
  getProductLoading,
} from "../Features/ProductDetails/actions";
import { sendCartItems } from "../Features/Cart/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const ProductDetails = () => {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductLoading());
    dispatch(getDetailsByApi(id));
  }, []);

  const { data, loading } = useSelector((state) => ({
    data: state.detailsReducer.data,
    loading: state.detailsReducer.loading,
  }));

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const showDrawer1 = () => {
    setVisible1(true);
    dispatch(sendCartItems(data._id));
  };

  const onClose1 = () => {
    setVisible1(false);
  };

  return loading ? (
    <img
      className="loadingImage"
      src="https://cdn140.picsart.com/301568770156201.gif?to=crop&type=webp&r=-1x-1&q=95&width=1920"
      alt="loding"
    ></img>
  ) : (
    <div>
      <div className="routeTextPath">
        <p>
          Products {`>`} Furniture {`>`} Sofas & armchairs {`>`} Fabric sofas{" "}
          {`>`}
          Two-seat sofas {`>`} GAMMALBYN 2-seat sofa
        </p>
      </div>
      <div className="productDetailsDiv">
        <div className="productImagesDiv">
          <div>
            <Image src={data.productDetailPage[0].img} alt="sofa"></Image>
          </div>
          <div>
            <Image src={data.productDetailPage[1].img} alt="sofa"></Image>
          </div>
          <div>
            <Image src={data.productDetailPage[2].img} alt="sofa"></Image>
          </div>
          <div>
            <Image src={data.productDetailPage[3].img} alt="sofa"></Image>
          </div>
        </div>
        <div className="productPriceDiv">
          <p className="validTillPrice">
            Price valid until {new Date().toISOString().slice(0, 10)}
          </p>
          <div className="priceSubdivs">
            <div>
              <h2>{data.title}</h2>
              <p>{data.dimensions}</p>
            </div>
            <div>
              <h2>Rs.{Number(data.price).toLocaleString()}.00</h2>
              <p>Rs.{(Number(data.price) + 5000).toLocaleString()}.00</p>
            </div>
          </div>
          <p style={{ margin: 0 }}>Price inc. of all taxes</p>
          <p>
            Price valid {new Date().toISOString().slice(0, 10)} or while supply
            lasts
          </p>
          <p>
            <span className="material-icons-outlined starIconSize">star</span>
            <span className="material-icons-outlined starIconSize">star</span>
            <span className="material-icons-outlined starIconSize ">star</span>
            <span className="material-icons-outlined starIconSize">star</span>
            <span className="material-icons-outlined starIconSize">
              star_half
            </span>
          </p>
          <div>
            <span>Eligible for delivery?</span>
            <input placeholder="eg.411001" className="pinInput"></input>
            <button className="checkPinButton">Check</button>
            <p>
              {" "}
              <span className="material-icons-outlined productDetailsPageIcons">
                local_shipping
              </span>{" "}
              {data.sold} Available in stock
            </p>
          </div>
          <div>
            <button className="addToShoppingCartBtn" onClick={showDrawer1}>
              <span className="material-icons-outlined heartIconBtn">
                favorite_border
              </span>{" "}
              Add to shopping cart
            </button>
          </div>
          <div>
            <p>
              <span className="material-icons-outlined productDetailsPageIcons">
                store
              </span>
              Check in-store stock
            </p>
          </div>
        </div>
      </div>
      <div className="productQualityDiv">
        <p>
          Mix and match your choice of table top and legs – or choose this
          ready-made combination. Strong and light-weight, made with a technique
          that uses less raw materials, reducing the impact on the environment.
        </p>
        <p>Delivery and assembly prices not included</p>
      </div>
      <div className="productExtrasDiv">
        <div>
          <h1>Product details</h1>
        </div>
        <div onClick={showDrawer}>
          <span className="material-icons-outlined arrowPosition">
            arrow_forward
          </span>
        </div>
      </div>
      <div className="productExtrasDiv measurementsDiv">
        <div>
          <h1>Measurements</h1>
        </div>
        <div>
          <span className="material-icons-outlined arrowPosition">
            arrow_forward
          </span>
        </div>
      </div>
      <div>
        <h1 className="viewedHeading">Others also viewed</h1>
        <div className="viewedProductSlider">
          <div>
            <div>
              <img
                src="https://www.ikea.com/in/en/images/products/klippan-2-seat-sofa-bomstad-black__0827136_pe709127_s5.jpg?f=xxs"
                alt="sofaimg"
              ></img>
            </div>
            <div>
              <h4>KLIPPAN</h4>
              <p>2-seat sofa</p>
              <h3>Rs.24,999</h3>
              <p>
                <span className="material-icons-outlined starIconSize">
                  star
                </span>
                <span className="material-icons-outlined starIconSize">
                  star
                </span>
                <span className="material-icons-outlined starIconSize ">
                  star
                </span>
                <span className="material-icons-outlined starIconSize">
                  star
                </span>
                <span className="material-icons-outlined starIconSize">
                  star_half
                </span>
              </p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://www.ikea.com/in/en/images/products/ormaryd-2-seat-sofa-dark-blue__0921645_pe787924_s5.jpg?f=xxs"
                alt="sofaimg"
              ></img>
            </div>
            <div>
              <h4>ORMARYD</h4>
              <p>2-seat sofa</p>
              <h3>Rs.15,999</h3>
              <p>
                <span className="material-icons-outlined starIconSize">
                  star
                </span>
                <span className="material-icons-outlined starIconSize">
                  star
                </span>
                <span className="material-icons-outlined starIconSize ">
                  star
                </span>
                <span className="material-icons-outlined starIconSize">
                  star
                </span>
                <span className="material-icons-outlined starIconSize">
                  star_half
                </span>
              </p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://www.ikea.com/in/en/images/products/ormaryd-2-seat-sofa-dark-red__0921669_pe787930_s5.jpg?f=xxs"
                alt="sofaimg"
              ></img>
            </div>
            <div>
              <h4>ORMARYD</h4>
              <p>2-seat sofa</p>
              <h3>Rs.15,999</h3>
              <p>
                <span className="material-icons-outlined starIconSize">
                  star
                </span>
                <span className="material-icons-outlined starIconSize">
                  star
                </span>
                <span className="material-icons-outlined starIconSize ">
                  star
                </span>
                <span className="material-icons-outlined starIconSize">
                  star
                </span>
                <span className="material-icons-outlined starIconSize">
                  star_half
                </span>
              </p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://www.ikea.com/in/en/images/products/hemlingby-2-seat-sofa-knisa-dark-grey__0835072_pe736542_s5.jpg?f=xxs"
                alt="sofaimg"
              ></img>
            </div>
            <div>
              <h4>HEMLINGBY</h4>
              <p>2-seat sofa</p>
              <h3>Rs.10,990</h3>
              <p>
                <span className="material-icons-outlined starIconSize">
                  star
                </span>
                <span className="material-icons-outlined starIconSize">
                  star
                </span>
                <span className="material-icons-outlined starIconSize ">
                  star
                </span>
                <span className="material-icons-outlined starIconSize">
                  star
                </span>
                <span className="material-icons-outlined starIconSize">
                  star_half
                </span>
              </p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://www.ikea.com/in/en/images/products/linanaes-2-seat-sofa-vissle-dark-grey__0962405_pe808064_s5.jpg?f=xxs"
                alt="sofaimg"
              ></img>
            </div>
            <div>
              <h4>LINANAS</h4>
              <p>2-seat sofa</p>
              <h3>Rs.19,990</h3>
              <p>
                <span className="material-icons-outlined starIconSize">
                  star
                </span>
                <span className="material-icons-outlined starIconSize">
                  star
                </span>
                <span className="material-icons-outlined starIconSize ">
                  star
                </span>
                <span className="material-icons-outlined starIconSize">
                  star
                </span>
                <span className="material-icons-outlined starIconSize">
                  star_half
                </span>
              </p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://www.ikea.com/in/en/images/products/ektorp-2-seat-sofa__0818548_pe774479_s5.jpg?f=xxs"
                alt="sofaimg"
              ></img>
            </div>
            <div>
              <h4>EKTORP</h4>
              <p>2-seat sofa</p>
              <h3>Rs.19,999</h3>
              <p>
                <span className="material-icons-outlined starIconSize">
                  star
                </span>
                <span className="material-icons-outlined starIconSize">
                  star
                </span>
                <span className="material-icons-outlined starIconSize ">
                  star
                </span>
                <span className="material-icons-outlined starIconSize">
                  star
                </span>
                <span className="material-icons-outlined starIconSize">
                  star_half
                </span>
              </p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://www.ikea.com/in/en/images/products/ektorp-2-seat-sofa__0818536_pe774467_s5.jpg?f=xxs"
                alt="sofaimg"
              ></img>
            </div>
            <div>
              <h4>EKTORP</h4>
              <p>2-seat sofa</p>
              <h3>Rs.25,990</h3>
              <p>
                <span className="material-icons-outlined starIconSize">
                  star
                </span>
                <span className="material-icons-outlined starIconSize">
                  star
                </span>
                <span className="material-icons-outlined starIconSize ">
                  star
                </span>
                <span className="material-icons-outlined starIconSize">
                  star
                </span>
                <span className="material-icons-outlined starIconSize">
                  star_half
                </span>
              </p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://www.ikea.com/in/en/images/products/kivik-two-seat-sofa-orrsta-light-grey__0788728_pe763704_s5.jpg?f=xxs"
                alt="sofaimg"
              ></img>
            </div>
            <div>
              <h4>KIVIK</h4>
              <p>Two-seat sofa</p>
              <h3>Rs.34,990</h3>
              <p>
                <span className="material-icons-outlined starIconSize">
                  star
                </span>
                <span className="material-icons-outlined starIconSize">
                  star
                </span>
                <span className="material-icons-outlined starIconSize ">
                  star
                </span>
                <span className="material-icons-outlined starIconSize">
                  star
                </span>
                <span className="material-icons-outlined starIconSize">
                  star_half
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Drawer title="" placement="right" onClose={onClose} visible={visible}>
          <h1>Product details</h1>
          <p>MRP Rs.{Number(data.price).toLocaleString()}.00 (inc. tax)</p>
          <p>
            Durable metal springs in the seat give the sofa a springy comfort,
            allowing you to sit, relax and enjoy it for many years.
          </p>
          <div className="sideDrawerProductDetails">
            <h3>Materials & care</h3>
          </div>
          <div className="sideDrawerProductDetails">
            <h3>Sustainability & enviornment</h3>
          </div>
          <div className="sideDrawerProductDetails">
            <h3>Assembly & documents</h3>
          </div>
        </Drawer>
        <Drawer
          title=""
          placement="right"
          onClose={onClose1}
          visible={visible1}
        >
          <h1>Added to cart.</h1>
          <p>MRP Rs.{Number(data.price).toLocaleString()}.00 (inc. tax)</p>
          <Link to="/cart">
            <button
              className="addToShoppingCartBtn"
              style={{ paddingTop: "10px" }}
            >
              Go To Cart
            </button>
          </Link>
        </Drawer>
      </div>
    </div>
  );
};
