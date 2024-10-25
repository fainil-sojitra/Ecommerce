import React from "react";
import "../styles/homeFeatures.css";
const HomeFeatures = () => {
  return (
    <>
      <div className="container features_main_div">
        <div className="row gx-0 align-items-start">
          <div className="col-lg-3 col-sm-6">
            <div className="support-wrap mb-30 d-flex">
              <div className="support-icon pr-4 icon_img">
                <img
                  src="https://flone.jamstacktemplates.dev/assets/img/icon-img/support-1.png"
                  className="img-fluid animated"
                  alt="Phoneimage"
                />
              </div>
              <div className="support-content icon_content">
                <h4>Free Shipping</h4>
                <h5>Free shipping on all order</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="support-wrap mb-30 d-flex">
              <div className="support-icon icon_img">
                <img
                  src="https://flone.jamstacktemplates.dev/assets/img/icon-img/support-2.png"
                  className="img-fluid animated"
                  alt="Phoneimage"
                />
              </div>
              <div className="support-content icon_content">
                <h4 style={{ paddingRight: "68px" }}>Support 24/7</h4>
                <h5>E-comm Service Provider</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 ml-4">
            <div className="support-wrap mb-30  d-flex">
              <div className="support-icon icon_img">
                <img
                  src="https://flone.jamstacktemplates.dev/assets/img/icon-img/support-3.png"
                  className="img-fluid animated"
                  alt="Phoneimage"
                />
              </div>
              <div className="support-content icon_content">
                <h4 style={{ paddingRight: "33px" }}>Money Return</h4>
                <h5>5 Days Return Policy</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="support-wrap mb-30 d-flex">
              <div className="support-icon icon_img">
                <img
                  src="https://flone.jamstacktemplates.dev/assets/img/icon-img/support-4.png"
                  className="img-fluid animated"
                  alt="Phoneimage"
                />
              </div>
              <div className="support-content icon_content">
                <h4 style={{ paddingRight: "52px" }}>Order Discount</h4>
                <h5>Apply uniq Coupon code</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFeatures;
