import React, { useState, useEffect } from "react";
// import Footer from "../../../components/footer";
import './editSeller.css'
import axios from 'axios'
import { faPersonBooth } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from 'formik';
import * as Yup from 'yup';
const EditSeller=()=>{

    const[user,setUser] = useState([]);

    let filtered_seller ={
        name :'',
        email:'',
        password:'',
        contact:'',
        address:''
        
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
        //   setUser(res.data);

        //   console.log(res.data);
        })
    })

    const handleKeyDown = (e)=>{
      search(e.target.value)
    }

    const search=(value)=>{
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {

         const allUsers= res.data;

        
         const filtred_result = allUsers.filter(
             seller => parseInt(value) === seller.id
         )

         console.log("filtered results " ,filtred_result)

         setUser(filtred_result);

   
        })
    }

    const formik = useFormik({
        initialValues: {
            name : "",
            contact: "",
            email:"",
            password:"",
            file:"",
        },

        // validationSchema: Yup.object({
        //     name: Yup.string()
        //       .max(35, '* Must be 15 characters or less'),
        //       // .required('* Name required'),
        //     contact: Yup.string()
        //       .max(11, '* Must be 11 characters')
        //       .min(11, '* Must be 11 characters')
        //       // .required('* Contact number required')
        //       .matches(/^\d+$/, "* Invalid number"),
        //     // address: Yup.string()
        //     //   .required('* Address required'),
        //     email: Yup.string()
        //       .email('* Invalid email address'),
        //       // .required('* Email required'),
        //     // password: Yup.string()
        //     //   .required('* Password Required'),
        //     file: Yup.string()
        //       .required('Required'),
        //   }),

        onSubmit: values => {
          console.log("working laert")
          alert(JSON.stringify(values, null, 2));

          axios.post(`https://jsonplaceholder.typicode.com/posts`,values)
          .then(response=>{
            console.log(response)
          })
          .catch(error=>{
            console.log(error)
          })
        },

    
      });

      user.map(person=>{
          return(

            filtered_seller={
                name: person.name,
                contact: person.phone,
                address: `${person.address.street} , ${person.address.city}, ${person.address.suite}`,
                email: person.email,
                password:'',
          
               
            }
          )
         
      })

 

    return(
        <div>

         <section className="edit-section">
             <form action="" method="post">
                 <div className="search-container">
                    <input 
                    type="text"
                    className="search-box"
                    placeholder="Search ..."
                    onChange={handleKeyDown}
                    />
                 </div>
                <br></br>
                </form>

                <div className="edit-form">
                <form action="" method="post" id="signUp_form" onSubmit={formik.handleSubmit}>
                    <label htmlFor="name">Name :</label>
                    <input 
                    type="text" 
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    placeholder={filtered_seller.name}
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
                    placeholder={filtered_seller.contact}
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
                    placeholder={filtered_seller.address}
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
                        placeholder={filtered_seller.email}
                        onBlur={formik.handleBlur}/>
                     
                                            
                        <label htmlFor="password">Password :</label>
                        <input type="text" 
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        placeholder={"password"}
                        onBlur={formik.handleBlur}/>
                           {formik.touched.email && formik.errors.email ? (
                                <div className="error">{formik.errors.email}</div>
                        ) : null}
                          {formik.touched.password && formik.errors.password ? (
                            <div className="error passwordError">{formik.errors.password}</div>
                        ) : null}
                        <br/>
                    </div>
{/* 
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
                    </div> */}
                   <div className="submit_btn">
                    <button type="submit">SAVE CHANGES</button>
                    </div>
                </form>
                </div>
            

         </section>

            {/* <Footer/> */}
  
        </div>
    );

   
}


export default EditSeller;