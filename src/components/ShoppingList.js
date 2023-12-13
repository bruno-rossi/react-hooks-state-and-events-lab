import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setCategory] = useState("All");

  // Define handleFilter function to set the category according to the select element's value:
  function handleFilter(event) {
    // setCategory(category => category = event.target.value);
    setCategory(event.target.value);
  }

  const filteredItems = items.filter((item => {
    // if (selectedCategory === "All" ) {
    //   return true;
    // } else {
    //   return item.category === selectedCategory;
    // }

    return selectedCategory === "All" || item.category === selectedCategory;

  }));

  console.log(filteredItems);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={event => handleFilter(event)} value={selectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
