import React from 'react';
import Navbar from '../../../components/adminNavbar';
import './SellerDataPage.css';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const SellerData=()=>{

  const { SearchBar } = Search;

  const afterSearch = (newResult) => {
    console.log(newResult);
  };

  const columns = [{
    dataField: 'index',
    text: 'Sl. No',
    searchable: false
    // sort: true
  }, {
    dataField: 'name',
    text: 'Seller Name',
    sort: true

  }, {
  
    dataField: 'id',
    text: 'Seller ID',
    sort: true
  }, {
    dataField: 'email',
    text: 'Email',
  }];

  const sellers= [{
    index:1,
    name: "kaka",
    id: 1010101,
    email: "kaka@gmail.com"
  },{
    index: 2,
    name: "ramu",
    id: 1016501,
    email: "ramu@gmail.com"
  },{
    index:3,
    name: "alibaba",
    id: 4510101,
    email: "raju@gmail.com"
  },];

  const defaultSorted = [{
    dataField: 'name'
  }];

  
 

    return(
      <div>
          <Navbar/>
        
        <div className="content-box">
          <h1>Seller Data</h1>
          <ToolkitProvider
            keyField="index"
            data={ sellers }
            columns={ columns }
            search={ { afterSearch }}
            style={{width:"80%"}}
          >
            {
              props => (
                <div>
                  <div className="search-section">
                    <h6>Input seller details for search :</h6>
                    <SearchBar className="searchBar" { ...props.searchProps }
                    placeholder="Search using name or id"/>
                  </div>

                  <div className="button-section">

                  <Link  to="/addSeller" style={{textDecoration:"none"}}>
                    <div className="addBtn">ADD
                      <FontAwesomeIcon icon={faPlus} />
                    </div>
                  </Link>
                  
                    <div className="editBtn">EDIT
                      <FontAwesomeIcon icon={faEdit} />
                    </div>
                  </div>
                  <BootstrapTable
                    { ...props.baseProps }
                    headerClasses="header-class" 
                    defaultSorted={ defaultSorted } 
                    // bordered={ false }
                    hover
                  />
                </div>
              )
            }
          </ToolkitProvider>
     
        </div>
        </div>

  );
 



}
    


export default SellerData;