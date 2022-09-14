import React, {useState} from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import {Todo} from './model';

// ReactNode can support loads like ReactFragment 
const App: React.FC = () => {

const [todo, setTodo] = useState<string>("");
const [todos, setTodos] = useState<Todo[]>([]);// array of a type of interfaces


const handleAdd = (e: React.FormEvent) => {
  e.preventDefault();
  
  if (todo) {
    setTodos([...todos, {id: Date.now(), todo : todo, isDone: false}]);
    setTodo("");
  }


};

//console.log(todos)
  return (
    <div className="App">
       <span className='heading'>taskify</span>
       <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
       <TodoList todos={todos} setTodos={setTodos} />

    </div>
  );
}

export default App;


