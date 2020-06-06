import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login-page.css";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import { Formik } from "formik";
import UserList from "../../components/userlist";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {UserImg} from '../../assets/img/apple.png';

const LoginPage = (props) => {
  // const { history } = props;
  const  history  = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const initialState = {
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: null,
  };

  const [data, setData] = React.useState(initialState);
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const [user, setUser] = useState([{ email: " ", password: " " }]);
  // const [user, setUser] = useState(null);

  return (
    <Formik
      {...props}
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        console.log("Submitting");
        console.log("values", values);

        if (values.email === "admin@gmail.com" && values.password === "1234") {
          setIsLoggedIn(true);
          setUser([{email:values.email , password: values.password }]);
          console.log("User state ", user);
          history.push("/adminHome");
          // setUser({ ...user, email: values.email, password: values.password });
          
        }
        else if (values.email === "seller@gmail.com" && values.password === "4321") {
          setIsLoggedIn(true);
          setUser([{email:values.email , password: values.password }]);
          console.log("User state ", user);
          history.push("/sellerHome");
          // setUser({ ...user, email: values.email, password: values.password });
          
        }

      }}
      src
      validationSchema={Yup.object().shape({
        email: Yup.string() //should be a string
          .email() //shoulb be an email
          .required("* Email required"),
        website: Yup.string().url(),
        createdOn: Yup.date()
          .default(function () {
            return new Date();
          }),
          // .test("email-match", "email must match admin", function () {
          //   console.log("this.parent.email ", this.parent.email);
          //   return this.parent.email === "admin@gmail.com";
          // }),

        password: Yup.string()
          .required("* Password required")
          .min(4, "* Password should contain 4 characters")
          .max(4, "* Password should contain 4 characters")
          .matches(/(?=.*[0-9])/, "Password must contain a number."),
      })}
    >
      {(prop) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = prop;

        return (

          <div className="mainContent">
            <div className="userList">
              <ul>
                 <li className="username_list">
                  {isLoggedIn && <UserList userArray={user} />}
                    <img className="user_img" src={UserImg} alt=""/>
                    <h4>admin@gmail.com</h4>
                    <FontAwesomeIcon style={{marginRight:"1rem"}} icon={faChevronRight} />
             
                  </li>
                 <li className="username_list">
                    <img className="user_img" src={UserImg} alt=""/>
                    <h4>admin@gmail.com</h4>
                    <FontAwesomeIcon style={{marginRight:"1rem"}} icon={faChevronRight} />
             
                  </li>
              </ul>

              
            </div>
            <div className="loginForm">
             <div className="form-container">
              <h4 className="heading">LOGIN</h4>
                <form action="" method="post" onSubmit={handleSubmit}>

                  <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="text"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        // validate={validateEmail}
                        className={errors.email && touched.email && "error"}
                        />
                        {errors.email && touched.email && (
                          <div className="input-feedback">{errors.email}</div>
                        )}

                  <label htmlFor="email">Password</label>
                     <input
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.password && touched.password && "error"
                        }
                      />
                      {errors.password && touched.password && (
                        <div className="input-feedback">{errors.password}</div>
                      )}
                      
                    <div style={{display:"flex"}}>
                    <button
                     type="submit"
                     disabled={isSubmitting} 
                     className="loginBtn">Login</button>
                    </div>
                </form>

             </div>
            </div>

          </div>
        );
      }}
    </Formik>
  );
};

export default LoginPage;
