import './App.css';
import {Container} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import Todo from "./components/Todo"
import TodoForm from './components/TodoForm';

import {Provider} from "react-redux"
// import from ""
function App() {
  return (
    <Provider>
      <Container>
        <Todo />
        <TodoForm />
      </Container>
    </Provider>
  );
}

export default App;
