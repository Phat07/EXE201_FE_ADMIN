import React, { useState } from "react";
// import { Link } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserServices } from "../../../services/userServices";
import { actUserLogin } from "../../../store/user/action";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    // rememberMe: false,
  });
  const navigate = useNavigate();
  const user = useSelector((state) => state.USER.currentUser);
  console.log("user", user);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: val });
  };
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    UserServices.loginUser(formData)
      .then((resFetchMe) => {
        console.log("resFetchMe", resFetchMe);
        if (resFetchMe?.data?.user?.role_id?.title !== "ADMIN") {
          toast.error("Just Admin login to Website");
          return;
        }
        const token = resFetchMe.data.token;
        const currentUser = resFetchMe.data.user;
        const role = resFetchMe.data.user.title;
        UserServices.fetchMe(token)
          .then((res) => {
            dispatch(actUserLogin(currentUser, token, role));
            toast.success(
              `Bạn đã đăng nhập với role ${resFetchMe?.data?.user?.role_id?.title}. Chào mừng đã vào cổng`
            );
            navigate("/");
          })
          .catch((err) => alert("Login or password failed"));
      })
      .catch((error) => {
        if (error.response) {
          // console.log(error);
          toast.error(error.response.data.message);
        } else if (error.request) {
          toast.error("Network error:", error.request);
        } else {
          toast.error("Error:", error.message);
        }
      });
  };
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">
                      Sign In to your account
                    </p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        type="text"
                        name="username"
                        placeholder="Enter username"
                        autoComplete="username"
                        value={formData.userName}
                        onChange={handleChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        name="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        style={{ width: "500px" }}
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton
                          color="primary"
                          className="px-4"
                          onClick={handleSubmit}
                        >
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              {/* <CCard
                className="text-white bg-primary py-5"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Link to="/register">
                      <CButton
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard> */}
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
