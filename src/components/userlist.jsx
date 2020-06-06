import React from "react";
import '../pages/login/login-page.css'
const UserList = props => {
  return (
  
    <div className="user_list">
    
      {props.userArray &&
        props.userArray.length > 0 &&
        props.userArray.map(function(user, index) {
          return (
            <li className="username_list" key={2}>
              {/* <a href="#"> */}
              <img className="user_img" src="login_bg.jpg"></img>
              <h4>{user.email}</h4>
              <div className="arrow">
            
              </div>
              {/* </a> */}
            </li>
          );
        })}
      
    </div>
  );
};

export default UserList;
