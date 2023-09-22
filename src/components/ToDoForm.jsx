import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addToDo } from "../redux/toDoSlice";

const ToDoForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Setting todo
  const [toDo, setToDo] = useState({
    title: "",
    desc: "",
    date: "",
  });

  // Handling inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setToDo({
      ...toDo,
      [name]: value,
    });
  };

  // Submitting to do item
  const handleSubmit = (e) => {
    e.preventDefault();
    toDo._id = uuidv4();
    dispatch(addToDo(toDo));
    setToDo({
      title: "",
      desc: "",
      date: "",
    });
    navigate("/todos");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-2">Add a To-Do</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-600 text-sm font-medium"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            value={toDo.title}
            onChange={handleChange}
            id="title"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="desc"
            className="block text-gray-600 text-sm font-medium"
          >
            Description
          </label>
          <input
            type="text"
            name="desc"
            value={toDo.desc}
            onChange={handleChange}
            id="desc"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-gray-600 text-sm font-medium"
          >
            Due Date
          </label>
          <input
            type="date"
            name="date"
            value={toDo.date}
            onChange={handleChange}
            id="date"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Save To-Do
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;
