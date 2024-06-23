import React, { Component, Suspense, useEffect } from "react";
import { HashRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./scss/style.scss";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { UserServices } from "./services/userServices";
import { actUserLogin } from "./store/user/action";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));

// Pages
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Register = React.lazy(() => import("./views/pages/register/Register"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

// Tạo một component mới để xử lý routing
function RouterContent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("ACCESS_TOKEN");
  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      UserServices.fetchMe(token)
        .then((res) => {
          if (res.data && res.data.adminResponse) {
            const currentUser = res.data.adminResponse;
            console.log(res.data.adminResponse);
            const role = res.data.roleName;
            dispatch(actUserLogin(currentUser, token, role));
          } else {
            navigate("/login");
          }
        })
        .catch((err) => {
          navigate("/login");
        });
    }
  }, [navigate, token, dispatch]);

  return null; // Không cần render gì trong trường hợp này
}

function App() {
  return (
    <>
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route
              exact
              path="/register"
              name="Register Page"
              element={<Register />}
            />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route path="*" name="Home" element={<DefaultLayout />} />
          </Routes>
          <RouterContent />
        </Suspense>
      </HashRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
