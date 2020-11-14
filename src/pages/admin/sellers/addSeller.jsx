import React,{useState} from 'react';
import Navbar from '../../../components/adminNavbar';
import './addSeller.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Footer from "../../../components/footer"
import axios from 'axios';

const AddSeller =()=>{

    const [isActive,setActive]= useState(false);
    const [fileChosen, setFileChosen]= useState("No file chosen...");

    var generator = require('generate-password');

    var auto_password = generator.generate({
      length: 4,
      numbers: true,
      lowercase: true,
      uppercase: true
    });

    const formik = useFormik({
        initialValues: {
            name : "",
            contact: "",
            email:"",
            password:"",
            file:"",
        },

        validationSchema: Yup.object({
            name: Yup.string()
              .max(15, '* Must be 15 characters or less')
              .required('* Name required'),
            contact: Yup.string()
              .max(11, '* Must be 11 characters')
              .min(11, '* Must be 11 characters')
              .required('* Contact number required')
              .matches(/^\d+$/, "* Invalid number"),
            address: Yup.string()
              .required('* Address required'),
            email: Yup.string()
              .email('* Invalid email address')
              .required('* Email required'),
            password: Yup.string()
              .required('* Password Required'),
            file: Yup.string()
              .required('Required'),
          }),

        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));

          axios.post(`https://jsonplaceholder.typicode.com/posts`,values)
          .then(response=>{
            console.log(response);
          })
          .catch(error=>{
            console.log(error);
          })
        },

    
      });


    const selectedFile=(e)=>{
        let file_name = e.target.value;

        if (/^\s*$/.test(file_name)) {
            setActive(false);
           
        }
        else{
            setActive(true);
            setFileChosen(file_name.replace("C:\\fakepath\\", ""))
        }
    }

    return(
     <div>
        <Navbar/>
        <div className="main-add-container">
            <div className="add-section">
                <form action="" method="post" id="signUp_form" onSubmit={formik.handleSubmit}>
                    <label htmlFor="name">Name :</label>
                    <input 
                    type="text" 
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    onBlur={formik.handleBlur}/>
                      {formik.touched.name && formik.errors.name ? (
                        <div className="error">{formik.errors.name}</div>
                    ) : null}
                    <br/>

                    <label htmlFor="contact">Contact Number :</label>
                    <input 
                    type="text" 
                    name="contact"
                    onChange={formik.handleChange}
                    value={formik.values.contact}
                    onBlur={formik.handleBlur}/>
                      {formik.touched.contact && formik.errors.contact ? (
                            <div className="error">{formik.errors.contact}</div>
                     ) : null}
                    <br/>

                    <label htmlFor="address">Address :</label>
                    <textarea 
                    rows="5" cols="60" 
                    name="address"
                    id="address"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                    onBlur={formik.handleBlur}>
                    </textarea>
                    {formik.touched.address && formik.errors.address ? (
                        <div className="error">{formik.errors.address}</div>
                    ) : null}
                    <br/>
                    
                    <div id="email_pass">
                        <label htmlFor="email">Email :</label>
                        <input type="text" 
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}/>
                     
                                            
                        <label htmlFor="password">Password :</label>
                        <input type="text" 
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password = auto_password}
                        onBlur={formik.handleBlur}/>
                           {formik.touched.email && formik.errors.email ? (
                                <div className="error">{formik.errors.email}</div>
                        ) : null}
                          {formik.touched.password && formik.errors.password ? (
                            <div className="error passwordError">{formik.errors.password}</div>
                        ) : null}
                        <br/>
                    </div>

                    <div className={`file-upload ${isActive ? "active" : " "}`}>
                        <div className="file-select">
                            <div className="file-select-button" id="fileName">Choose File</div>
                        <div className="file-select-name" id="noFile">{`${isActive ? fileChosen : fileChosen}`}</div> 
                            <input type="file" 
                            name="file" 
                            id="chooseFile" 
                            onChange={(event)=>{
                               
                                formik.handleChange("file")(event);
                                selectedFile(event);

                            }}
                     
                            value={formik.values.file}/>
                        </div>
                    </div>
                   <div className="submit_btn">
                    <button type="submit">ADD SELLER</button>
                    </div>
                </form>
            </div>
        </div>
     <Footer/>
     </div>
    )
}

export default AddSeller;