import React from "react";
import "./styles/selectedProduct.css";
import { Form,Button, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const SelectedProducts = props => {
  return (
    <>
      {props.product &&
        props.product.length > 0 &&
        props.product.map(function(item, index) {
          return (
            <li className="selected-item">
              <div className="item" key={item.id} value={item}>
                {item.name}
              </div>
              <div className="Quantity">
                <span className="input-group-btn">
                  <Button
                    type="button"
                    onClick={() => {
                      props.incrementBtn(index);
                    }}
                    className="custom_qtyBtn"
                    data-type="plus"
                    data-field={item.quantity}
                    
                  >
                    <span className="increment">+</span>
                  </Button>
                </span>
                <Form>
                <FormControl
                  type="text"
                  className="qty_input text-center"
                  id="quantity_placeholder"
                  value={item.quantity}
                  maxlength="2"
                  min="1"
                  max="15"
                /></Form>
                <span className="input-group-btn">
                  <Button
                    type="button"
                    onClick={() => {
                      props.decrementBtn(index);
                    }}
                    className="custom_qtyBtn"
                    data-type="minus"
                    data-field={item.quantity}
                  >
                    <span className="decrement">-</span>
                  </Button>
                </span>
              </div>
              <FontAwesomeIcon icon={faTrash} 
              className="remove-icon" 
              onClick={() => {
                props.removeItem(index);
              }}
              />
            </li>
          );
        })}
    </>
  );
};

export default SelectedProducts;
