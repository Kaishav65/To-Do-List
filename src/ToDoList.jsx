import React from "react";
import { useState } from "react";
import "./ToDoList.css";
import DeleteList from "./DeleteList";
const ToDoList = () => {
  const [inputItems, setInputItems] = useState("");
  const [items, setItems] = useState([]);

  const itemEvents = (event) => {
    setInputItems(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputItems];
    });
    setInputItems("");
  };
  const deleteitems = (id) => {
    console.log("Item has been deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
    <div className="main_div">

      <div className="center_div">
        <br />
        <h2 style={{ textAlign: "center" }}>ToDo List</h2>
        <br />
        <input className="inToDo"
          style={{ marginLeft: "30px" }}
          type="text"
          placeholder="Enter your Task"
          value={inputItems}
          onChange={itemEvents}
        />
        <button onClick={listOfItems}>+</button>
        <ol>
          {items.map((itemVal, index) => {
            return (
              <DeleteList
                key={index}
                id={index}
                text={itemVal}
                onSelect={deleteitems}
              />
            );
          })}
        </ol>
      </div>
      </div>
    </>
  );
};
export default ToDoList;
