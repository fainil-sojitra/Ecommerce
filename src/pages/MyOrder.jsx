import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import SideBar from "../Components/Settings/Sidebar/SideBar";
import Footer from "../Components/Footer/Footer";
import Tablet from "../Components/UI/Tablet";

const MyOrder = () => {
  const [width] = useWindowSize();

  function useWindowSize() {
    const [size, setSize] = useState([window.innerWidth]);

    useEffect(() => {
      const handleResize = () => setSize([window.innerWidth]);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    return size;
  }

  return (
    <>
      <Header />
      {width <= 899 ? (
        <div className="tablet_main_container">
          <Tablet />
          <div className="container mt-5">
            <div className="row pb-3">
              <div className="col-12">
                <h1 className="fw-light">My Orders</h1>
              </div>
            </div>
          </div>
          <div className="container pb-3">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Order #</th>
                  <th scope="col">Date</th>
                  <th scope="col">Order Total</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">000001</th>
                  <td>4/5/2024</td>
                  <td>₹ 281.45</td>
                  <td>Pending</td>
                  <td>View Order</td>
                </tr>
                <tr>
                  <th scope="row">000002</th>
                  <td>4/5/2024</td>
                  <td>₹ 110.00</td>
                  <td>Pending</td>
                  <td>View Order</td>
                </tr>
                <tr>
                  <th scope="row">000003</th>
                  <td>4/5/2024</td>
                  <td>₹ 345.10</td>
                  <td>Pending</td>
                  <td>View Order</td>
                </tr>
                <tr>
                  <th scope="row">000004</th>
                  <td>4/5/2024</td>
                  <td>₹ 990.00</td>
                  <td>Pending</td>
                  <td>View Order</td>
                </tr>
              </tbody>
            </table>
            <span>4 Item(s)</span>
          </div>
        </div>
      ) : (
        <div className="main_container">
          <div className="row">
            <div className="col-2 list_item_div">
              <SideBar />
            </div>
            <div className="col-10">
              <div className="container">
                <div className="row pb-3">
                  <div className="col-12">
                    <h1 className="fw-light">My Orders</h1>
                  </div>
                </div>
              </div>
              <div className="container pb-3">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Order #</th>
                      <th scope="col">Date</th>
                      <th scope="col">Order Total</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">000001</th>
                      <td>4/5/2024</td>
                      <td>₹ 281.45</td>
                      <td>Pending</td>
                      <td>View Order</td>
                    </tr>
                    <tr>
                      <th scope="row">000002</th>
                      <td>4/5/2024</td>
                      <td>₹ 110.00</td>
                      <td>Pending</td>
                      <td>View Order</td>
                    </tr>
                    <tr>
                      <th scope="row">000003</th>
                      <td>4/5/2024</td>
                      <td>₹ 345.10</td>
                      <td>Pending</td>
                      <td>View Order</td>
                    </tr>
                    <tr>
                      <th scope="row">000004</th>
                      <td>4/5/2024</td>
                      <td>₹ 990.00</td>
                      <td>Pending</td>
                      <td>View Order</td>
                    </tr>
                  </tbody>
                </table>
                <span>4 Item(s)</span>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default MyOrder;
