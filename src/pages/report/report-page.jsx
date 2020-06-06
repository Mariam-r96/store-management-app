import React from "react";
import { Table } from "react-bootstrap";
import NavBar from "../../components/navbar";

const Report = (props) => {
  return (
    <>
      {/* <NavBar /> */}
      <div className="report text-center">
        <h1>{props.hello}</h1>
        <h1>Today's Report</h1>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Item name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {props.arr &&
              props.arr.length > 0 &&
              props.arr.map(function (item, index) {
                return (
                  <>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>Tk. {item.price * item.quantity}</td>
                    </tr>
                  </>
                );
              })}
            <tr>
              <td colSpan="3">Total Price (including vat = {props.vat}%)</td>
              <td>Tk.{props.total_Price}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Report;
