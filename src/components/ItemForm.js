import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [name, setName] = useState("")
  const [category, setCategory] = useState("Produce")

  function onClickSubmit(e){
    e.preventDefault()
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: name,
      category: category,
    };
    onItemFormSubmit(newItem)
  }

  function onChangeName(e){
    setName(e.target.value)
  }

  return (
    <form className="NewItem">
      <label>
        Name:
        <input type="text" name="name" onChange={onChangeName} value={name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={e => setCategory(e.target.value)} value={category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onClick={onClickSubmit}>Add to List</button>
    </form>
  );
}

export default ItemForm;
