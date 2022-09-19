import React from 'react';
import InputTodo from './components/InputTodo';
import ShowTodo from './components/ShowTodo';

export default function App() {
  return (
    <div>
      <h1>My Todo App</h1>
      <InputTodo />
      <ShowTodo />
    </div>
  );
}
