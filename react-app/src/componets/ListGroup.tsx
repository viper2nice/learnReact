//import { Fragment } from "react/jsx-runtime";// this is on way to wrap this or just use <> </> to wrap

import { useState } from "react";

function ListGroup() {
  let items = ["New York", "Tokyo", "London", "Paris", "San Francisco"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    //in react a compoent cant reutnr more thena one element so we need to wrap it in a div or another element
    // {} helps to rending this dynamtciy
    <>
      <h1>List </h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
