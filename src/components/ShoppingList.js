import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  function handleSearch(e){
    setSearchText(e.target.value)
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} handleSearch={handleSearch} searchText={searchText}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (item.name.toLowerCase().includes(searchText.toLowerCase()) ? 
          <Item key={item.id} name={item.name} category={item.category} /> : null
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
