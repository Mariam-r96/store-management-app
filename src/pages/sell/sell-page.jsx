import React, { useState } from "react";
// import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./sell-page.css";
import "../../components/styles/list.css";
import Mango from "../../assets/img/mango.png";
import Pineapple from "../../assets/img/pineapple.png";
import Apple from "../../assets/img/apple.png";
import Pomegranate from "../../assets/img/pomegranate.png";
import Toggle from "../../components/toggle";
// import FiltreSearch from "../../components/filter-search-products";
import Report from "../report/report-page";
import SelectedProducts from "../../components/selected-products";
// import NavBar from "../../components/navbar";

const SellPage = (props) => {
  // const [addClass, setaddClass] = useState(false);

  // const hoverOn = (e) => {
  //   setaddClass(true);
  //   // e.target.style.backgroundColor = "rgb(4, 48, 48)";
  //   e.target.style.backgroundColor = "rgb(10, 109, 109)";
  // };

  // const hoverOff = (e) => {
  //   setaddClass(false);
  //   e.target.style.backgroundColor = "";
  // };

  const products = [
    {
      id: 1,
      name: "Mango Juice",
      price: 50,
      img: Mango,
      quantity: 1,
    },
    {
      id: 2,
      name: "Pineapple juice",
      price: 60,
      img: Pineapple,
      quantity: 1,
    },
    {
      id: 3,
      name: "Apple Juice",
      price: 30,
      img: Apple,
      quantity: 1,
    },
    {
      id: 4,
      name: "Pomegrenate Juice",
      price: 30,
      img: Pomegranate,
      quantity: 1,
    },
  ];

  const incrementBtn = (index) => {
    let newProduct = [...product];
    newProduct[index].quantity = newProduct[index].quantity + 1;
    setProduct(newProduct);
  };
  const decrementBtn = (index) => {
    console.log("product index ", index);
    console.log("product detail ", product);
    console.log("...product detail ", [...product]);
    let newProduct = [...product];
    console.log("new product is ", newProduct);
    newProduct[index].quantity = newProduct[index].quantity - 1;
    setProduct(newProduct);
  };

  const removeItem = (index) =>{

    const removed_item = product.filter(
      (item)=> item.name === product[index].name
    );

    const undeleted_product_list =product.filter(
      (item)=> item.name !== product[index].name
    );

    if(removed_item){
      setProduct([...undeleted_product_list]);
    }
  
  }

  const [product, setProduct] = useState([]);

  const SelectProduct = (selectedProduct) => {
    // check if "product" contains selectedProduct
    const productExists = product.filter(
      (product) => product.name === selectedProduct.name
    );
    // if yes, then increase qty
    if (productExists.length >= 1) {
      // put the object to the Product with increased quantity
      const restOfProducts = product.filter(
        (product) => product.name !== selectedProduct.name
      );

      setProduct(
        [
          ...restOfProducts,
          {
            ...productExists[0],
            quantity: parseInt(productExists[0].quantity) + 1,
          },
        ].reverse()
      );
    } else {
      // add that in Product
      setProduct([...product, { ...selectedProduct }].reverse());
    }
  };

  let totalQuantity = 0;
  let totalPrice = 0;
  let tax = 5;
  product.forEach((item) => {
    totalQuantity += item.quantity;
    totalPrice += item.quantity * item.price;
  });
  totalPrice = totalPrice + (tax / 100) * totalPrice;
  // console.log("total qty ", totalQuantity);
  // console.log("total pricce ", totalPrice);

  let orders = [...product];

  // SelectedProduct component
  const filtersearchProducts = [
    {
      id: 5,
      name: "Strawberry juice",
      price: 50,
      img: Mango,
      quantity: 1,
    },
    {
      id: 6,
      name: "Lemon juice",
      price: 60,
      img: Apple,
      quantity: 1,
    },
    {
      id: 7,
      name: "Kiwi juice",
      price: 60,
      img: Mango,
      quantity: 1,
    },
    {
      id: 8,
      name: "Melon juice",
      price: 60,
      img: Apple,
      quantity: 1,
    },
  ];

  const [filteredItems, setFilteredItems] = useState([]);

  const filterList = (e) => {
    let updatedList = [...filtersearchProducts];

    console.log("product list is ", updatedList);

    if (e.target.value === "") {
      setFilteredItems([]);
    } else {
      updatedList = updatedList.filter(function (item) {
        return item.name.toLowerCase().includes(e.target.value);
      });

      setFilteredItems(updatedList);
    }
  };

  const List = (props) => {
    return (
      <div className="List">
        {props.filteredItems &&
          props.filteredItems.length === 0 &&
          props.items.map(function (item) {
            return (
              <div className="List-Card" onClick={(e) => SelectProduct(item)}>
                <div className="List-Image">
                  <img src={item.img} alt="" />
                </div>
                <p>{item.name}</p>
                <hr />
                <p>Tk. {item.price}</p>
              </div>
            );
          })}
        {props.filteredItems &&
          props.filteredItems.length > 0 &&
          props.filteredItems.map(function (item) {
            return (
              <div className="List-Card" onClick={(e) => SelectProduct(item)}>
                <div className="List-Image">
                  <img src={item.img} alt="" />
                </div>
                <p>{item.name}</p>
                <hr />
                <p>Tk. {item.price}</p>
              </div>
            );
          })}
      </div>
    );
  };

  return (
    <div>
      {/* <NavBar /> */}
      <div className="container">
        <h2>{props.hello}</h2>
        <div className="row justify-content-center align-items-center text-center pt-3">
          {/* order 3  */}
          <div className="col-md-6">
            <h2 className="selecteditems_text">Selected Items</h2>
            <div className="item_container mt-5">
              <ul className="item_list">
                <SelectedProducts
                  product={product}
                  incrementBtn={incrementBtn}
                  decrementBtn={decrementBtn}
                  removeItem={removeItem}
                />
              </ul>
            </div>
            <hr className="mt-5"></hr>
          </div>
          <div className="col-md-1 vertical_divider"></div>
{/* order1 */}
          <div className="col-md-5 popular_items_section">
            <h2>
              <span>⭐</span>Popular Items
            </h2>
            <div className="popular_items_container List">
              {products.map((product) => (
                <div
                  className="List-Card"
                  onClick={(e) => SelectProduct(product)}
                >
                  <div className="List-Image">
                    <img src={product.img} alt="" />
                  </div>
                  <p>{product.name}</p>
                  <hr />
                  <p>Tk. {product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row">
          {/* order 5 */}
          <div className="col-md-3 toggle_section"> 
            <Toggle />
          </div>
          {/* order 4 */}
          <div className="col-md-3 calculation_section">
            <h5>Tax : {tax} %</h5>
            <h5>Sub total : Tk {totalPrice}</h5>
          </div>
          <div className="col-md-1 vertical_divider"></div>
          {/* order2 */}
          <div className="col-md-5 filter_search_container mt-4">
            {/* <FiltreSearch /> */}
            <h5>Search your item</h5>
            <input
              className="form-control"
              type="text"
              placeholder="Search"
              onChange={filterList}
            ></input>
            <div className="filter_list">
              <List
                items={filtersearchProducts}
                filteredItems={filteredItems}
              />
            </div>
          </div>
        </div>
      </div>
      <Report
        arr={orders}
        vat={tax}
        total_Quantity={totalQuantity}
        total_Price={totalPrice}
      />
    </div>
  );
};

export default SellPage;
