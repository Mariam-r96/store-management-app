import React, { useState } from "react";

import Mango from "../assets/img/mango.png";
import Apple from "../assets/img/apple.png";
import SelectedProducts from "./selected-products";
import List from "./list";

const FilterSearch = (props) => {
  const products = [
    {
      id: 5,
      name: "Strawberry",
      price: 50,
      img: Mango,
      quantity: 1,
    },
    {
      id: 6,
      name: "Lemon",
      price: 60,
      img: Apple,
      quantity: 1,
    },
    {
      id: 7,
      name: "Kiwi",
      price: 60,
      img: Mango,
      quantity: 1,
    },
  ];

  // ===============================
  // Hooks
  // ===============================

  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  // ===============================
  // Helpers
  // ===============================

  function setUpSearchTerm(event) {
    setSearch(event.target.value);
  }

  function incrementBtn(index) {
    let newProduct = [...product];
    newProduct[index].quantity = newProduct[index].quantity + 1;
    setProduct(newProduct);
  }

  function decrementBtn(index) {
    console.log("product index ", index);
    console.log("product detail ", filteredItems);
    console.log("...product detail ", [...filteredItems]);
    let newProduct = [...product];
    console.log("new product is ", newProduct);
    newProduct[index].quantity = newProduct[index].quantity - 1;
    setProduct(newProduct);
  }

  // ===============================

  let filteredItems = products.filter(function (item) {
    return item.name.toLowerCase().includes(search);
  });

  return (
    <div className="FilterSearch">
      <h5>Search your item</h5>
      <input
        className="form-control mt-5"
        type="text"
        placeholder="Search"
        onChange={setUpSearchTerm}
        value={search}
      ></input>

      <List
        items={products}
        product={product}
        setProduct={setProduct}
        filteredItems={filteredItems}
      />

      <div className="item_container mt-5">
        <ul className="item_list">
          <SelectedProducts
            product={product}
            incrementBtn={incrementBtn}
            decrementBtn={decrementBtn}
          />
        </ul>
      </div>
    </div>
  );
};

export default FilterSearch;
