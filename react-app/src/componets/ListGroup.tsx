//import { Fragment } from "react/jsx-runtime";// this is on way to wrap this or just use <> </> to wrap

import { useState } from "react";

// {items : [], heading: string }, we can do this my useing a  type script feture call interface that can define that shape
// and interface of a object
interface Props {
  items: string[];
  heading: string;
  // (items: string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    //in react a compoent cant reutnr more thena one element so we need to wrap it in a div or another element
    // {} helps to rending this dynamtciy
    <>
      <h1>{heading}</h1>
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
              onSelectItem(item);
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
