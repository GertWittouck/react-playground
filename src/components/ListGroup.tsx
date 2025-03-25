import { useState } from "react";

// props should be immutable
interface Props {
  items: string[];
  heading: string;
  // notifier function - (item: string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook - allows us to hook into build-in features of React
  // State - can be mutable
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    // Instead of importing Fragment from react, we can use the shortcut notation <></>
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
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
