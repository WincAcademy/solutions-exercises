import React from "react";
import List from "../components/List/List";

const ShoppingCart = ({ groceryItems, handleClickEmptyCart }) => {
  return (
    <React.Fragment>
      <button className="button-primary" onClick={handleClickEmptyCart}>
        Leeg de winkelmand
      </button>
      <List readonly={true} items={groceryItems} />
    </React.Fragment>
  );
};

export default ShoppingCart;
