import { Fragment } from 'react';
import { MouseEvent } from 'react';
import { useState } from 'react';

function ListGroup() {
  const list: Array<string> = ['NewYork', 'Chicago', 'Hawaii'];

  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    return list.length === 0 ? <p>No item found</p> : null;
  };

  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <Fragment>
      <h1>List</h1>
      {/* {getMessage()} */}
      {list.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {list.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}>
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
