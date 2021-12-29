import InputField from "./InputField.js";
import List from "./List.js";

function GroceryList({ items, onItemClick, onItemAdd }) {
  return (
    <div className="grocery-list">
      <h2>Shopping list</h2>
      <InputField onSubmit={onItemAdd} />
      <List items={items} onItemClick={onItemClick} />
    </div>
  );
}

export default GroceryList;
