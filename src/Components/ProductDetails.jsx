import "../Css/ProductDetails.css";
import { Image } from "antd";
import React, { useState } from "react";
import { Drawer } from "antd";
export const ProductDetails = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
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
            <Image
              src="https://www.ikea.com/in/en/images/products/gammalbyn-2-seat-sofa-brown__1030890_pe836424_s5.jpg?f=s"
              alt="sofa"
            ></Image>
          </div>
          <div>
            <Image
              src="https://www.ikea.com/in/en/images/products/gammalbyn-2-seat-sofa-brown__1030891_pe836423_s5.jpg?f=s"
              alt="sofa"
            ></Image>
          </div>
          <div>
            <Image
              src="https://www.ikea.com/in/en/images/products/gammalbyn-2-seat-sofa-brown__0989120_pe818391_s5.jpg?f=s"
              alt="sofa"
            ></Image>
          </div>
          <div>
            <Image
              src="https://www.ikea.com/in/en/images/products/gammalbyn-2-seat-sofa-brown__0989121_pe818389_s5.jpg?f=s"
              alt="sofa"
            ></Image>
          </div>
        </div>
        <div className="productPriceDiv">
          <p className="validTillPrice">
            Price valid until {new Date().toISOString().slice(0, 10)}
          </p>
          <div className="priceSubdivs">
            <div>
              <h2>GAMMALBYN</h2>
              <p>2-seat sofa, brown</p>
            </div>
            <div>
              <h2>Rs.18,990</h2>
              <p>Rs.21,990</p>
            </div>
          </div>
          <p style={{ margin: 0 }}>Price inc. of all taxes</p>
          <p>
            Price valid {new Date().toISOString().slice(0, 10)} or while supply
            lasts
          </p>
          <p>
            <span class="material-icons-outlined starIconSize">star</span>
            <span class="material-icons-outlined starIconSize">star</span>
            <span class="material-icons-outlined starIconSize ">star</span>
            <span class="material-icons-outlined starIconSize">star</span>
            <span class="material-icons-outlined starIconSize">star_half</span>
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
              9 Available in stock
            </p>
          </div>
          <div>
            <button className="addToShoppingCartBtn">
              <span className="material-icons-outlined heartIconBtn">
                favorite_border
              </span>{" "}
              Add to shopping cart
            </button>
          </div>
          <div>
            <p>
              <span class="material-icons-outlined productDetailsPageIcons">
                store
              </span>
              Check in-store stock
            </p>
          </div>
        </div>
      </div>
      <div className="productQualityDiv">
        <p>
          Have a seta and watch a movie with family or enjoy a good book. You
          sit really comfortably on this artificial leather sofa with polyster
          sofa with polyester-filled removable cushons. Also avaliable as a
          3-seat sofa.
        </p>
        <p>Delivery and assembly prices not included</p>
      </div>
      <div className="productExtrasDiv">
        <div>
          <h1>Product details</h1>
        </div>
        <div onClick={showDrawer}>
          <span class="material-icons-outlined arrowPosition">
            arrow_forward
          </span>
        </div>
      </div>
      <div className="productExtrasDiv measurementsDiv">
        <div>
          <h1>Measurements</h1>
        </div>
        <div>
          <span class="material-icons-outlined arrowPosition">
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
                <span class="material-icons-outlined starIconSize">star</span>
                <span class="material-icons-outlined starIconSize">star</span>
                <span class="material-icons-outlined starIconSize ">star</span>
                <span class="material-icons-outlined starIconSize">star</span>
                <span class="material-icons-outlined starIconSize">
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
                <span class="material-icons-outlined starIconSize">star</span>
                <span class="material-icons-outlined starIconSize">star</span>
                <span class="material-icons-outlined starIconSize ">star</span>
                <span class="material-icons-outlined starIconSize">star</span>
                <span class="material-icons-outlined starIconSize">
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
                <span class="material-icons-outlined starIconSize">star</span>
                <span class="material-icons-outlined starIconSize">star</span>
                <span class="material-icons-outlined starIconSize ">star</span>
                <span class="material-icons-outlined starIconSize">star</span>
                <span class="material-icons-outlined starIconSize">
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
                <span class="material-icons-outlined starIconSize">star</span>
                <span class="material-icons-outlined starIconSize">star</span>
                <span class="material-icons-outlined starIconSize ">star</span>
                <span class="material-icons-outlined starIconSize">star</span>
                <span class="material-icons-outlined starIconSize">
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
                <span class="material-icons-outlined starIconSize">star</span>
                <span class="material-icons-outlined starIconSize">star</span>
                <span class="material-icons-outlined starIconSize ">star</span>
                <span class="material-icons-outlined starIconSize">star</span>
                <span class="material-icons-outlined starIconSize">
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
                <span class="material-icons-outlined starIconSize">star</span>
                <span class="material-icons-outlined starIconSize">star</span>
                <span class="material-icons-outlined starIconSize ">star</span>
                <span class="material-icons-outlined starIconSize">star</span>
                <span class="material-icons-outlined starIconSize">
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
                <span class="material-icons-outlined starIconSize">star</span>
                <span class="material-icons-outlined starIconSize">star</span>
                <span class="material-icons-outlined starIconSize ">star</span>
                <span class="material-icons-outlined starIconSize">star</span>
                <span class="material-icons-outlined starIconSize">
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
                <span class="material-icons-outlined starIconSize">star</span>
                <span class="material-icons-outlined starIconSize">star</span>
                <span class="material-icons-outlined starIconSize ">star</span>
                <span class="material-icons-outlined starIconSize">star</span>
                <span class="material-icons-outlined starIconSize">
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
          <p>MRP Rs.30,786 (inc. tax)</p>
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
      </div>
    </div>
  );
};
