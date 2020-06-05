import React from "react";
import GroceryList from "./containers/GroceryList";
import ShoppingCart from "./containers/ShoppingCart";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryInput: "",
      groceryItems: [
        { id: 1, title: "appels" },
        { id: 2, title: "pak melk" },
        { id: 3, title: "chocolade" }
      ],
      shoppingListItems: [{ id: 1, title: "chocolade", amount: 2 }]
    };
  }
  render() {
    const addNewShoppingListItem = itemTitle => {
      const newShoppingItem = {
        id: this.state.shoppingListItems.length + 1,
        title: itemTitle,
        amount: 1
      };

      this.setState(prevState => {
        const newList = prevState.shoppingListItems.concat(newShoppingItem);
        return {
          shoppingListItems: newList
        };
      });
    };
    const addAmountToItem = itemTitle => {
      // We maken een copy van de state, want je kunt de state niet direct muteren.
      const shoppingList = [...this.state.shoppingListItems];
      const newList = shoppingList.map(shoppingItem => {
        if (shoppingItem.title === itemTitle) {
          shoppingItem.amount++;
        }
        return shoppingItem;
      });
      this.setState({ shoppingListItems: newList });
    };

    const handleClickGroceryItem = event => {
      const clickedItem = event.target.getAttribute("value");
      const currentShoppingList = this.state.shoppingListItems;
      const shoppingListItem = currentShoppingList.filter(
        item => item.title === clickedItem
      );

      shoppingListItem.length === 0
        ? addNewShoppingListItem(clickedItem)
        : addAmountToItem(clickedItem);
    };

    const emptyCart = () => {
      this.setState({ shoppingListItems: [] });
    };

    const addGrocery = grocery => {
      const item = { id: this.state.groceryItems.length + 1, title: grocery };
      // We gebruiken concat, omdat concat een nieuwe array returned.
      // Push methode werkt niet omdat je dan direct de state zou muteren.
      this.setState({ groceryItems: this.state.groceryItems.concat(item) });
    };

    return (
      <div className="container">
        <div className="groceries-list groceries">
          <h1>Boodschappenlijst</h1>
          <GroceryList
            addGrocery={addGrocery}
            groceryItems={this.state.groceryItems}
            handleClickGroceryItem={handleClickGroceryItem}
          />
        </div>
        <div className="groceries-list basket">
          <h1>Winkelmand</h1>
          <ShoppingCart
            handleClickEmptyCart={emptyCart}
            groceryItems={this.state.shoppingListItems}
          />
        </div>
      </div>
    );
  }
}

export default Container;
