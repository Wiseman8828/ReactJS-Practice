import { Fragment } from 'react';

function ListGroup() {
  let list: Array<string> = ['NewYork', 'Chicago', 'Hawaii'];

  list = [];
  const getMessage = () => {
    return list.length === 0 ? <p>No item found</p> : null;
  };

  return (
    <Fragment>
      <h1>List</h1>
      {getMessage()}
      {list.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
