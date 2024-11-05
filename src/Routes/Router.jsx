// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import PrivateComponent from "../Components/Private/PrivateComponent";

// // Import user components
// import Home from "../Components/Home/Home";
// import Products from "../Components/Products/Products";
// import ProductDetails from "../Components/UI/ProductDetails";
// import About from "../Components/About/About";
// import Settings from "../Components/Settings/Settings";
// import MyOrder from "../pages/MyOrder";
// import MyCart from "../pages/MyCart";
// import AddressBook from "../pages/AddressBook";
// import EditAddress from "../Components/UI/EditAddress";
// import AddAddress from "../Components/UI/AddAddress";
// import EditAccount from "../pages/EditAccount";
// import Login from "../Components/Login/Login";
// import Registration from "../Components/Registration/Registration";
// import NotFound from "../pages/NotFound";

// // Import admin components
// import ALogin from "../ADMIN/Components/Login/ALogin";
// import ADashboard from "../ADMIN/Components/Dashboard/ADashboard";
// import AProducts from "../ADMIN/Components/A-Products/AProducts";
// import AOrder from "../ADMIN/Components/A-Order/AOrder";
// import TrackOrder from "../ADMIN/Components/UI/TrackOrder";
// import OrderDetails from "../ADMIN/Components/UI/OrderDetails";
// import Auser from "../ADMIN/Components/A-User/Auser";
// import UserProfile from "../ADMIN/Components/UI/UserProfile";
// import UpdateProduct from "../ADMIN/Components/UI/UpdateProduct";

// const Router = () => {
//   return (
//     <div>
//       <Routes>
//         {/* Regular user routes */}
//         <Route element={<PrivateComponent />}>
//           <Route path="/" element={<Navigate to="/login" />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/product" element={<Products />} />
//           <Route path="/product_details/:slug" element={<ProductDetails />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/setting" element={<Settings />} />
//           <Route path="/my-order" element={<MyOrder />} />
//           <Route path="/my-cart" element={<MyCart />} />
//           <Route path="/my-address" element={<AddressBook />} />
//           <Route path="/edit-address" element={<EditAddress />} />
//           <Route path="/add-address" element={<AddAddress />} />
//           <Route path="/edit-account" element={<EditAccount />} />
//           <Route path="*" element={<NotFound />} />
//         </Route>

//         {/* Admin routes */}
//         <Route path="/admin">
//           <Route path="admin-login" element={<ALogin />} />
//           <Route path="dashboard" element={<ADashboard />} />
//           <Route path="admin-product" element={<AProducts />} />
//           <Route path="admin-order" element={<AOrder />} />
//           <Route path="admin-track-order" element={<TrackOrder />} />
//           <Route path="admin-order-details" element={<OrderDetails />} />
//           <Route path="admin-user" element={<Auser />} />
//           <Route path="admin-user-profile" element={<UserProfile />} />
//           <Route path="update-product" element={<UpdateProduct />} />
//         </Route>

//         {/* Public routes */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/registration" element={<Registration />} />
//       </Routes>
//     </div>
//   );
// };

// export default Router;




import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PrivateComponent from "../Components/Private/PrivateComponent";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import NotFound from "../pages/NotFound";
import Home from "../Components/Home/Home";
import Products from "../Components/Products/Products";
import About from "../Components/About/About";
import Settings from "../Components/Settings/Settings";
import MyOrder from "../pages/MyOrder";
import MyCart from "../pages/MyCart";
import AddressBook from "../pages/AddressBook";
import EditAddress from "../Components/UI/EditAddress";
import EditAccount from "../pages/EditAccount";
import AddAddress from "../Components/UI/AddAddress";
import ProductDetails from "../Components/UI/ProductDetails";

import AdminPrivateComponent from "../ADMIN/Components/Private/AdminPrivateComponent";
import ALogin from "../ADMIN/Components/Login/ALogin";
import ADashboard from "../ADMIN/Components/Dashboard/ADashboard";
import AProducts from "../ADMIN/Components/A-Products/AProducts";
import AOrder from "../ADMIN/Components/A-Order/AOrder";
import TrackOrder from "../ADMIN/Components/UI/TrackOrder";
import OrderDetails from "../ADMIN/Components/UI/OrderDetails";
import Auser from "../ADMIN/Components/A-User/Auser";
import UserProfile from "../ADMIN/Components/UI/UserProfile";
import UpdateProduct from "../ADMIN/Components/UI/UpdateProduct";
import ASeller from "../ADMIN/Components/sellers/ASeller";
import ASellerProfile from "../ADMIN/Components/UI/ASellerProfile";
import Categorys from "../ADMIN/Components/Categorys/Categorys";
import AddCategory from "../ADMIN/Components/UI/AddCategory";
import UpdateCategory from "../ADMIN/Components/UI/UpdateCategory";
import Chat from "../ADMIN/Components/Chat/Chat";

const Router = () => {
  return (
    <div>
      {/* Login id password : fainilsojitra@gmail.com : Fainil@1104 */}
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product_details/:slug" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/my-order" element={<MyOrder />} />
          <Route path="/my-cart" element={<MyCart />} />
          <Route path="/my-address" element={<AddressBook />} />
          <Route path="/edit-address" element={<EditAddress />} />
          <Route path="/add-address" element={<AddAddress />} />
          <Route path="/edit-account" element={<EditAccount />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      {/* </Routes>
      
      <Routes> */}
        <Route element={<AdminPrivateComponent />}>
          <Route path="/" element={<Navigate to="/admin-login" />} />
          <Route path="/admin-dashboard" element={<ADashboard />} />
          <Route path="/admin-product" element={<AProducts />} />
          <Route path="/admin-update-product/:slug" element={<UpdateProduct />} />
          <Route path="/admin-order" element={<AOrder />} />
          <Route path="/admin-track-order" element={<TrackOrder />} />
          <Route path="/admin-order-details" element={<OrderDetails />} />
          <Route path="/admin-user" element={<Auser />} />
          <Route path="/admin-user-profile/:slug" element={<UserProfile />} />
          <Route path="/admin-sellers-management" element={<ASeller />} />
          <Route path="/admin-seller-profile/:slug" element={<ASellerProfile />} />
          <Route path="/admin-categorys" element={<Categorys />} />
          <Route path="/admin-add-categorys" element={<AddCategory />} />
          <Route path="/admin-update-categorys/:slug" element={<UpdateCategory />} />
          <Route path="/admin-chat" element={<Chat />} /> 
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/admin-login" element={<ALogin />} />  {/* login password = Admin@123 */}
      </Routes>
    </div>
  );
};

export default Router;
