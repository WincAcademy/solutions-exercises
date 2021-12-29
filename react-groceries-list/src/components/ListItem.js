function ListItem({ item, clickItem, showQuantities }) {
  return (
    <li
      key={item.id}
      className="list-item"
      onClick={clickItem}
      value={item.title}
    >
      <div>{item.title}</div>
      {showQuantities && (
        <div className="item-amount">Amount: {item.amount}</div>
      )}
    </li>
  );
}

export default ListItem;
