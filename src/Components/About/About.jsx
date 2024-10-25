import React from "react";
import "./about.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import aboutSection2 from "../../IMAGES/about_section2.avif";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import SyncRoundedIcon from "@mui/icons-material/SyncRounded";

const About = () => {
  return (
    <>
      <Header />
      <div className="About_main_div">
        <div className="about_title_wrapper">
          <div className="about_title_content">
            <p className="sale_title">WE SALE BRANDED CLOTHS</p>
            <p className="about_title">About Us</p>
          </div>
        </div>

        <div className="about_detail_section">
          <div className="about_detail_wrapper row">
            <div className="about_content_wrapper col-7">
              <div className="content_title col-12">
                <h2>
                  Why&nbsp;<span>E-Shop</span>
                </h2>
              </div>
              <div className="row about_features_wrapper">
                <div className="about_content col-6  ">
                  <div className="delivery_icon">
                    <LocalShippingRoundedIcon />
                  </div>
                  <div className="about_content_text_wrapper">
                    <div className="content_text_title_wrapper">
                      <p>Home Delivery</p>
                    </div>
                    <div className="content_text_wrapper">
                      <p>
                        sit voluptatem accusantium dolore mque laudantium, totam
                        rem aperiam, eaque ipsa quae ab illo.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="about_content col-6 ">
                  <div className="price_icon">
                    <CurrencyRupeeRoundedIcon />
                  </div>
                  <div className="about_content_text_wrapper">
                    <div className="content_text_title_wrapper">
                      <p>Best Price</p>
                    </div>
                    <div className="content_text_wrapper">
                      <p>
                        sit voluptatem accusantium dolore mque laudantium, totam
                        rem aperiam, eaque ipsa quae ab illo.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="about_content col-6 ">
                  <div className="box_icon">
                    <BusinessCenterRoundedIcon />
                  </div>
                  <div className="about_content_text_wrapper">
                    <div className="content_text_title_wrapper">
                      <p>Custom Box</p>
                    </div>
                    <div className="content_text_wrapper">
                      <p>
                        sit voluptatem accusantium dolore mque laudantium, totam
                        rem aperiam, eaque ipsa quae ab illo.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="about_content col-6 ">
                  <div className="refund_icon">
                    <SyncRoundedIcon />
                  </div>
                  <div className="about_content_text_wrapper">
                    <div className="content_text_title_wrapper">
                      <p>Quick Refund</p>
                    </div>
                    <div className="content_text_wrapper">
                      <p>
                        sit voluptatem accusantium dolore mque laudantium, totam
                        rem aperiam, eaque ipsa quae ab illo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about_img_wrapper col-5 ">
              <img src={aboutSection2} alt="about_img" />
            </div>
          </div>
        </div>

        <div className="discount_section">
          <div className="discount_content_wrapper">
            <p className="discount_content">
              December sale is on! <br /> with big <span>Discount...</span>
            </p>
          </div>
          <div className="discount_persentage_cont_wrapper">
            <span className="persentage_content">Sale! Upto</span>
            <span className="dis_persentage">
              <span> 50% </span> off
            </span>
          </div>
        </div>

        <div className="ourteam_section">
          <div className="ourteam_content_wrapper mb-5">
            <div className="ourteam_title_wrapper">
              <p className="ourteam_title">
                Our <span>Team</span>
              </p>
            </div>
            <div className="ourteam_text_wrapper">
              <p className="ourteam_text text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, fuga quas itaque eveniet beatae optio.
              </p>
            </div>
          </div>
          <div className="ourteam_card_wrapper">
            <div className="team_img_wrapper">
              <img
                src="https://img.freepik.com/free-photo/medium-shot-smiley-woman-indoors_23-2148875315.jpg"
                alt="fashion designer"
              />
            </div>
            <div className="team_img_wrapper">
              <img
                src="https://img.freepik.com/free-photo/man-tailor-working-his-factory_1303-28516.jpg"
                alt="fashion designer"
              />
            </div>
            <div className="team_img_wrapper">
              <img
                src="https://img.freepik.com/free-photo/woman-tailor-working-sewing-factory_1303-15838.jpg"
                alt="fashion designer"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
