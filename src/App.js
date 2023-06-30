import './App.css';
import TodoList from './components/TodoList';
import TodoWrapper from './components/TodoWrapper';

function App() {
  return (
    <div className="App">
      <TodoWrapper/>
      <TodoList/>
    </div>
  );
}

export default App;
