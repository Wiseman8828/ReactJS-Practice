import { Fragment } from 'react';
import { MouseEvent } from 'react';

function ListGroup() {
  const list: Array<string> = ['NewYork', 'Chicago', 'Hawaii'];

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
        {list.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
