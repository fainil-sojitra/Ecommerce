import React from "react";
import "./ADashboard.css";
import ASidebar from "../A-Sidebar/ASidebar";
import { Box, Toolbar } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { LineChart } from "@mui/x-charts";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import NoteIcon from "@mui/icons-material/Note";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    date: '2000-01',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    date: '2000-02',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    date: '2000-03',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    date: '2000-04',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    date: '2000-05',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    date: '2000-06',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    date: '2000-07',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    date: '2000-08',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    date: '2000-09',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    date: '2000-10',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    date: '2000-11',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    date: '2000-12',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

const monthTickFormatter = (tick) => {
  const date = new Date(tick);

  return date.getMonth() + 1;
};

const renderQuarterTick = (tickProps) => {
  const { x, y, payload } = tickProps;
  const { value, offset } = payload;
  const date = new Date(value);
  const month = date.getMonth();
  const quarterNo = Math.floor(month / 3) + 1;

  if (month % 3 === 1) {
    return <text x={x} y={y - 4} textAnchor="middle">{`Q${quarterNo}`}</text>;
  }

  const isLast = month === 11;

  if (month % 3 === 0 || isLast) {
    const pathX = Math.floor(isLast ? x + offset : x - offset) + 0.5;

    return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />;
  }
  return null;
};

const ADashboard = () => {
 
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <ASidebar />
        <Box
          // component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
          <div className="admin_dashboard_main_wrapper">
            <div className="row">
              <div className="col-xxl-3 col-md-6 col-sm-12 col-xs-12 p-2">
                <div className="shadow_box">
                  <div className="col-12 d-flex">
                    <div className="dash_icon_wrapper">
                      <div
                        className="dash_icon_center"
                        style={{ backgroundColor: "#22C55E" }}
                      >
                        <LocalMallIcon className="mt-2" fontSize="large" />
                      </div>
                    </div>
                    <div className="dash_content_wrapper">
                      <h5>Total Sales</h5>
                      <h4>3,657</h4>
                    </div>
                  </div>
                  <div className="col-12 dash_chart_wrapper">
                    <LineChart
                      series={[
                        {
                          data: [2, 4, 2, 4, 2.5, 3],
                          area: true,
                          color: ["#22C55E"],
                          showLine: true,
                        },
                      ]}
                      margin={10}
                      width={378}
                      height={130}
                      leftAxis={null}
                      bottomAxis={null}
                    />
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12 col-xs-12 p-2">
                <div className="shadow_box">
                  <div className="col-12 d-flex">
                    <div className="dash_icon_wrapper">
                      <div
                        className="dash_icon_center"
                        style={{ backgroundColor: "#FF5200" }}
                      >
                        <CurrencyRupeeIcon className="mt-2" fontSize="large" />
                      </div>
                    </div>
                    <div className="dash_content_wrapper">
                      <h5>Total Income</h5>
                      <h4>$37,802</h4>
                    </div>
                  </div>
                  <div className="col-12 dash_chart_wrapper">
                    <LineChart
                      series={[
                        {
                          data: [2, 5.5, 2, 8.5, 1.5, 5],
                          area: true,
                          color: ["#FF5200"],
                        },
                      ]}
                      margin={10}
                      width={378}
                      height={130}
                      leftAxis={null}
                      bottomAxis={null}
                    />
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12 col-xs-12 p-2">
                <div className="shadow_box">
                  <div className="col-12 d-flex">
                    <div className="dash_icon_wrapper">
                      <div
                        className="dash_icon_center"
                        style={{ backgroundColor: "#95989D" }}
                      >
                        <NoteIcon className="mt-2" fontSize="large" />
                      </div>
                    </div>
                    <div className="dash_content_wrapper">
                      <h5>Orders Paid</h5>
                      <h4>1,011</h4>
                    </div>
                  </div>
                  <div className="col-12 dash_chart_wrapper">
                    <LineChart
                      series={[
                        {
                          data: [2, 5.5, 2, 8.5, 1.5, 5],
                          area: true,
                          color: ["#95989D"],
                        },
                      ]}
                      margin={10}
                      width={378}
                      height={130}
                      leftAxis={null}
                      bottomAxis={null}
                    />
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12 col-xs-12 p-2">
                <div className="shadow_box">
                  <div className="col-12 d-flex">
                    <div className="dash_icon_wrapper">
                      <div
                        className="dash_icon_center"
                        style={{ backgroundColor: "#2275fc" }}
                      >
                        <PeopleAltIcon className="mt-2" fontSize="large" />
                      </div>
                    </div>
                    <div className="dash_content_wrapper">
                      <h5>Total Visitor</h5>
                      <h4>2,758</h4>
                    </div>
                  </div>
                  <div className="col-12 dash_chart_wrapper">
                    <LineChart
                      series={[
                        {
                          data: [2, 5.5, 2, 8.5, 1.5, 5],
                          area: true,
                          color: ["#2275fc"],
                        },
                      ]}
                      margin={10}
                      width={378}
                      height={130}
                      leftAxis={null}
                      bottomAxis={null}
                    />
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-xxl-6 col-md-12 p-2">
                <div className="shadow_box p-3 m-0">
                  <div className="col-12 titles_div">
                    <p className="fw-bold fs-3 mb-0 text-start">Top Products</p>
                  </div>
                  <div className="col-12 mt-4 d-flex">
                    <div className="col-2">
                      <div className="dash_product_wrapper">
                        <img
                          src="https://themesflat.co/html/remos/images/products/1.png"
                          alt="notFound"
                        />
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="text-start prod_name_div lh-1">
                        <p className="fs-5 fw-bold ">
                          Patimax Fragrance Long...
                        </p>
                        <p className="mb-0 text-muted">100 Items</p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="text-end prod_cpn_div lh-1">
                        <p className="text-muted">Coupon Code</p>
                        <p className="fs-5 mb-0 fw-bold">Sflat</p>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="lh-1 prod_dic_div">
                        <p className="fs-5 fw-bold ">-15%</p>
                        <p className="mb-0 text-muted">$27.00</p>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="col-12 mt-4 d-flex">
                    <div className="col-2">
                      <div className="dash_product_wrapper">
                        <img
                          src="https://themesflat.co/html/remos/images/products/9.png"
                          alt="notFound"
                        />
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="text-start lh-1 prod_name_div">
                        <p className="fs-5 fw-bold ">
                          Patimax Fragrance Long...
                        </p>
                        <p className="mb-0 text-muted">100 Items</p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="text-end lh-1 prod_cpn_div">
                        <p className="text-muted">Coupon Code</p>
                        <p className="fs-5 mb-0 fw-bold">Sflat</p>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="lh-1 prod_dic_div">
                        <p className="fs-5 fw-bold ">-15%</p>
                        <p className="mb-0 text-muted">$27.00</p>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="col-12 mt-4 d-flex">
                    <div className="col-2">
                      <div className="dash_product_wrapper">
                        <img
                          src="https://themesflat.co/html/remos/images/products/4.png"
                          alt="notFound"
                        />
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="text-start lh-1 prod_name_div">
                        <p className="fs-5 fw-bold ">
                          Patimax Fragrance Long...
                        </p>
                        <p className="mb-0 text-muted">100 Items</p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="text-end lh-1 prod_cpn_div">
                        <p className="text-muted">Coupon Code</p>
                        <p className="fs-5 mb-0 fw-bold">Sflat</p>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="lh-1 prod_dic_div">
                        <p className="fs-5 fw-bold ">-15%</p>
                        <p className="mb-0 text-muted">$27.00</p>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="col-12 mt-4 d-flex">
                    <div className="col-2">
                      <div className="dash_product_wrapper">
                        <img
                          src="https://themesflat.co/html/remos/images/products/5.png"
                          alt="notFound"
                        />
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="text-start lh-1 prod_name_div">
                        <p className="fs-5 fw-bold">
                          Patimax Fragrance Long...
                        </p>
                        <p className="mb-0 text-muted">100 Items</p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="text-end lh-1 prod_cpn_div">
                        <p className="text-muted">Coupon Code</p>
                        <p className="fs-5 mb-0 fw-bold">Sflat</p>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="lh-1 prod_dic_div">
                        <p className="fs-5 fw-bold ">-15%</p>
                        <p className="mb-0 text-muted">$27.00</p>
                      </div>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
              <div className="col-xxl-6 col-md-12 p-2">
                <div className="shadow_box p-3">
                  <div className="col-12 titles_div">
                    <p className="fw-bold fs-3 mb-0 text-start">Best Seller</p>
                  </div>
                  <div className="col-12 mt-4 d-flex">
                    <div className="col-2">
                      {/* <h6 className="text-center fs-5 fw-bold"></h6> */}
                      <div className="dash_user_wrapper m-auto">
                        <img
                          className=""
                          src="http://localhost:5000/product-images/1713771645064_profile_user.jpg"
                          alt="notFound"
                        />
                      </div>
                    </div>
                    <div className="col-5">
                      <h6 className="text-start title_h6 fs-5 fw-bold">
                        User Name
                      </h6>
                      <div className="text-start lh-1 prod_name_div">
                        <p className="text-muted">test@gmail.com</p>
                        <p className="mb-0 fs-5 fw-bold text-muted">
                          test test
                        </p>
                      </div>
                    </div>
                    <div className="col-3">
                      <h6 className="text-start title_h6 fs-5 fw-bold">
                        Categories
                      </h6>
                      <div className="text-start lh-1 prod_cpn_div">
                        <p className="text-muted">Coupon Code</p>
                        <p className="fs-5 mb-0 fw-bold text-muted">Sflat</p>
                      </div>
                    </div>
                    <div className="col-2">
                      <h6 className="text-center title_h6 fs-5 fw-bold">
                        Total
                      </h6>
                      <div className="lh-1 prod_dic_div">
                        {/* <p className="fs-5 fw-bold ">-15%</p> */}
                        <p className="mb-0 text-muted">₹270.00</p>
                      </div>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-4 col-md-6 col-sm-12 p-2">
                <div className="shadow_box p-2">
                  <div className="col-12 titles_div">
                    <p className="fw-bold fs-3 mb-0 text-start">Orders</p>
                  </div>
                  <div className="col-12 mt-4 d-flex">
                    <div className="col-3">
                      <div className="dash_product_wrapper">
                        <img
                          src="https://themesflat.co/html/remos/images/products/1.png"
                          alt="notFound"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="text-start lh-1 prod_name_div">
                        <p className="fs-5 mt-1 fw-bold ">
                          Patimax Fragrance Long...
                        </p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="text-end lh-1 prod_cpn_div">
                        <p className="fs-6 mb-0 mt-2 ">20 Nov 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-md-6 col-sm-12 p-2">
                <div className="shadow_box">
                  <div className="col-12 p-2">
                    <p className="fw-bold fs-3 mb-0 text-start">Top Products</p>
                  </div>
                  <div className="chart_div">
                    {/* <ResponsiveContainer width="100%" height="100%"> */}
                      <BarChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                          dataKey="date"
                          tickFormatter={monthTickFormatter}
                        />
                        <XAxis
                          dataKey="date"
                          axisLine={false}
                          tickLine={false}
                          interval={0}
                          tick={renderQuarterTick}
                          height={1}
                          scale="band"
                          xAxisId="quarter"
                        />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                      </BarChart>
                    {/* </ResponsiveContainer> */}
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-md-6 col-sm-12 p-2">
                <div className="shadow_box">
                  <div className="col-12 p-2">
                    <p className="fw-bold fs-3 mb-0 text-start">Recent Order</p>
                  </div>
                  <div className="chart_div">
                    <LineChart
                      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                      series={[
                        {
                          data: [2, 5.5, 2, 8.5, 1.5, 5],
                          area: true,
                          color: ["#2275fc"],
                        },
                      ]}
                      width={500}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default ADashboard;
