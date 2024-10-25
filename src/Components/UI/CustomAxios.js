import axios from "axios";
// import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const token = JSON.parse(localStorage.getItem("client_login_token"));
export const CustomAxios = axios.create({
  baseURL: `${process.env.REACT_APP_API}`,
  headers: { Authorization: `Bearer ${token}` },
});

CustomAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      swal({
        title: "User Not Valid!",
        text: "Try Again!",
        icon: "warning",
      });
    //   const navigate = useNavigate()
      setTimeout(() => {
        localStorage.clear();
        // navigate("/login");
      window.location.href = '/login';
      }, 2000);
    }
  }
);

export default CustomAxios;
