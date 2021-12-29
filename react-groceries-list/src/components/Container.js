import React from "react";
import GroceryList from "./GroceryList";
import ShoppingCart from "./ShoppingCart";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryItems: [
        { id: 1, title: "Eggs" },
        { id: 2, title: "Cheese" },
        { id: 3, title: "Garlic" },
      ],
      shoppingListItems: [
        { id: 4, title: "Onions", amount: 1 },
        { id: 5, title: "Leeks", amount: 2 },
      ],
    };
  }

  handleClickGroceryItem(item) {
    console.log(`Clicked ${item.id}: ${item.title}`);
  }

  addAmountToItem = (item, amount) => {
    this.setState({
      shoppingListItems: this.state.shoppingListItems.map((listItem) => {
        if (listItem.title === item.title) {
          return {
            id: listItem.id,
            title: listItem.title,
            amount: listItem.amount + amount,
          };
        }
        return listItem;
      }),
    });
  };

  addGroceryItemToCart = (item) => {
    console.log(`addGroceryItemToCart: ${item.title}`);
    if (
      this.state.shoppingListItems
        .map((item) => item.title)
        .includes(item.title)
    ) {
      this.addAmountToItem(item, 1);
    } else {
      this.setState({
        shoppingListItems: [
          ...this.state.shoppingListItems,
          {
            id: item.id,
            title: item.title,
            amount: 1,
          },
        ],
      });
    }
  };

  emptyCart = () => {
    this.setState({
      shoppingListItems: [],
    });
  };

  addItemToGroceryList = (title) => {
    this.setState({
      groceryItems: [
        ...this.state.groceryItems,
        {
          id:
            this.state.groceryItems.length +
            this.state.shoppingListItems.length +
            1,
          title: title,
          amount: 1,
        },
      ],
    });
  };

  render() {
    return (
      <div className="container">
        <header>
          <h1>Grocery List</h1>
        </header>
        <main>
          <GroceryList
            items={this.state.groceryItems}
            onItemClick={this.addGroceryItemToCart}
            onItemAdd={this.addItemToGroceryList}
          />
          <ShoppingCart
            items={this.state.shoppingListItems}
            onItemClick={this.handleClickGroceryItem}
            onEmptyClick={this.emptyCart}
          />
        </main>
      </div>
    );
  }
}

export default Container;
