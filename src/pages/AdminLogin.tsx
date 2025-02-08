import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Field, Form, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./login.css";

// Defining the types for the Formik values
interface LoginFormValues {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const base_url = "http://localhost:3000";
  const [loggedInAlert, setLoggedInAlert] = useState<boolean>(false);
  const [failedLoginAlert, setFailedLoginAlert] = useState<boolean>(false);

  // Handle login logic
  const handleLogin = async (values: LoginFormValues) => {
    try {
      // Fetching admins from localhost
      const response = await axios.get(`${base_url}/admins`);

      const admins = response.data;
      const user = admins.find(
        (admin: { username: string; password: string }) =>
          admin.username === values.username &&
          admin.password === values.password
      );

      if (user) {
        // User is authenticated
        setLoggedInAlert(true);

        setTimeout(() => {
          setLoggedInAlert(false);
          navigate("/dashboard");
        }, 3000);

        // Set token or perform any additional actions on successful login
        localStorage.setItem("access_token", "mockToken123"); // Example token
      } else {
        setFailedLoginAlert(true);
      }
    } catch (error: any) {
      setFailedLoginAlert(true);
      console.error("Error logging in:", error);
    }
  };

  const initialValues: LoginFormValues = {
    username: "",
    password: "",
  };

  // Validation schema for Formik
  const validationSchema = Yup.object({
    username: Yup.string().min(2, "Too short").required("Field can't be empty"),
    password: Yup.string()
      .min(3, "Password too short")
      .required("Field can't be empty"),
  });

  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const handleChangeViewPassword = (
    field: boolean,
    setter: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setter(!field);
  };

  return (
    <div className="container">
      <div className="row my-5 rounded reg">
        <div className="col-12 col-md-6 d-flex flex-column align-items-center py-5">
          <div className="the-title">
            <h1 className="display-5 m-0">Welcome Back</h1>
            {loggedInAlert && (
              <div
                className="alert alert-success d-flex align-items-center justify-content-around"
                role="alert"
                style={{ maxHeight: "64px" }}
              >
                <i className="fa-solid fa-circle-check"></i>
                <div>Login Success</div>
              </div>
            )}
            {failedLoginAlert && (
              <div
                className="alert alert-danger d-flex align-items-center justify-content-around"
                role="alert"
                style={{ maxHeight: "64px" }}
              >
                <i className="fa-solid fa-circle-xmark"></i>{" "}
                <div className="d-flex flex-column">
                  <p className="m-0">Invalid Details </p>
                  <p className="m-0">
                    Try again or <NavLink to={"/register"}>Register</NavLink>
                  </p>
                </div>
              </div>
            )}
            <p>
              Don't Have An Account?{" "}
              <span className="the-link" onClick={() => navigate("/register")}>
                Register
              </span>
            </p>
          </div>

          <Formik
            initialValues={initialValues}
            onSubmit={handleLogin}
            validationSchema={validationSchema}
          >
            {(formik) => (
              <Form
                className="form-group d-flex flex-column gap-4 rounded auth justify-content-center"
                onChange={() => setFailedLoginAlert(false)}
              >
                <div>
                  <Field
                    type="text"
                    placeholder="Username/Email.."
                    className="form-control"
                    name="username"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <div className="position-relative">
                    <Field
                      type={viewPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password.."
                      className="form-control"
                      onChange={formik.handleChange}
                    />{" "}
                    <div
                      onClick={() =>
                        handleChangeViewPassword(viewPassword, setViewPassword)
                      }
                      className="the-eye position-absolute  end-0 translate-middle-y px-4 "
                    >
                      {viewPassword ? (
                        <i className="fa-regular fa-eye-slash"></i>
                      ) : (
                        <i className="fa-regular fa-eye"></i>
                      )}
                    </div>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                </div>

                <button type="submit" className="btn">
                  Sign In
                </button>
              </Form>
            )}
          </Formik>
        </div>

        <div className="col d-none d-md-flex m-2 justify-content-center">
          <img
            className="img-fluid rounded w-100"
            src="https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob3AlMjBjbG90aGVzfGVufDB8fDB8fHww"
            alt="Anime Character"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
