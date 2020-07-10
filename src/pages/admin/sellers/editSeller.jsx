import React, { useState, useEffect } from "react";
import Navbar from '../../../components/adminNavbar';
import Footer from "../../../components/footer";
import axios from 'axios'
const EditSeller=()=>{

    const[user,setUser] = useState();

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
          const user = res.data;
          setUser({ user });

          const showUser=(props)=>{
              return(
                <ul>
                {user && user.length > 0 && user.map(manush =>
                     <li>{manush.name}</li>
                )}
                </ul>
              );
          }

          console.log(res);
        })
    })


    return(
        <div>
            <Navbar/>

         <showUser user={user}></showUser>

            <Footer/>
        </div>
    );
}

export default EditSeller;