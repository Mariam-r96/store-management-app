import React from  'react';
import Navbar from '../../../components/adminNavbar';
import Seller from '../../../assets/icons/person.png'
import Product from '../../../assets/icons/product.png'
import './home.css';
import { Link } from "react-router-dom";


const AdminPanel=()=>{
    return(
    <div>
     <Navbar/>
        <div className="Icon-container">
        <Link  to="/addEdit" style={{textDecoration:"none"}}>
        <div className="Icon-card">
            <div className="Icon-image">
                <img src={Seller} alt=""/>
            </div>
            <p>Sellers</p>
        </div>
        </Link>
        <div className="Icon-card">
            <div className="Icon-image">
                <img src={Product} alt=""/>
            </div>
            <p>Products</p>
        </div>
        </div>
    
    
    </div>
    );
}

export default AdminPanel;