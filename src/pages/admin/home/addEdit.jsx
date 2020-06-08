import React , {useState} from 'react';
import Navbar from '../../../components/adminNavbar';
import './addEdit.css';
import BootstrapTable from 'react-bootstrap-table-next';
// import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

const AddEdit=()=>{

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
    // filter: textFilter(),
    sort: true

  }, {
  
    dataField: 'id',
    text: 'Seller ID',
    // filter: textFilter(),
    sort: true
  }, {
    dataField: 'email',
    text: 'Email',
    // sort: true
  }];

  const sellers= [{
    index:1,
    name: "kaka",
    id: 1010101,
    email: "kaka@gmail.com"
  },{
    index:2,
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
                  <h6>Input seller details for search :</h6>
                  <SearchBar className="searchBar" { ...props.searchProps }
              
                  placeholder="Search using name or id"/>
                  {/* <hr/> */}
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
          {/* <BootstrapTable keyField='index'
          
              headerClasses="header-class" 
              data={ sellers } 
              columns={ columns } 
              defaultSorted={ defaultSorted } 
              filter={ filterFactory() }
              hover
              style={{width:"80%"}}
              bordered={ false }/> */}
     
        </div>
        </div>

  );
 



}
    


export default AddEdit;