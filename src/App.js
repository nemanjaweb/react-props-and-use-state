import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todo List</h1>
      <Todo text="Learn React" />
      <Todo text="Master React" />
      <Todo text="Get job as React developer" />
      <Modal></Modal>
      <Backdrop></Backdrop>
    </div>
  );
}

export default App;
