// import { useState } from 'react'
//import ToDoForm from './ToDoForm'
import { Link } from "react-router-dom";
import Todos from './Todos';

function App() {
  return (
    <>
      <Todos />
      <div className="grid justify-items-end mt-8 p-3 ">
        <button className="mt-4 bg-blue-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-full">
          <Link
            className="text-white-500 hover:text-white-700 font-semibold"
            to="/add_todo"
          >
            Add a new todo
          </Link>
        </button>
      </div>
    </>
  );
}

export default App
