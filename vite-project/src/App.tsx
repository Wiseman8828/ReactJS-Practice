// import Message from './Message'
// import ListGroup from './components/ListGroup';
import ChildrenImplementation from './components/Children';

function App() {
  const list: Array<string> = ['NewYork', 'Chicago', 'Hawaii'];

  // function handleOnSelect(item: string) {
  //   console.log(item);
  // }

  return (
    <div>
      {/* <ListGroup list={list} heading="City" onSelectItem={handleOnSelect} /> */}
      <ChildrenImplementation>child</ChildrenImplementation>
    </div>
  );
}

export default App;
