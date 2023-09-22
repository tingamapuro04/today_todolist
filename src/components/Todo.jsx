/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from "react-icons/fa";
import { deleteToDo } from "../redux/toDoSlice";
import { useDispatch } from "react-redux";

const Todo = ({title, desc, id}) => {
  // displaying each todo
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    let target_id = e.currentTarget.parentElement.parentElement.id;
    dispatch(deleteToDo(target_id));
  };

  // Handling a todo
  const handleUpdate = (e) => {
    let target_id = e.currentTarget.parentElement.parentElement.id;
    navigate(`/todos/${target_id}`);
  }


  return (
    <div
      id={id}
      className="p-4 mb-2 border border-gray-300 rounded-md shadow-md flex items-center space-x-4 transition-all px-6"
    >
      <div className="flex-1 space-x-6 w-10/12 flex items-center">
        <h6 className="w-1/3 text-rose-950 hover:text-pink-600 ease-in-out duration-1000">
          <strong>{title}</strong>
        </h6>
        <p className="text-base w-2/3  text-gray-600">{desc}</p>
      </div>
      <div className="space-x-2 w-2/12  flex items-center justify-end">
        <FaEdit
          onClick={handleUpdate}
          className="text-blue-500 text-lg hover:text-blue-300 cursor-pointer mx-2"
        />
        <FaTrash
          className="text-red-500 text-lg hover:text-red-300 cursor-pointer"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default Todo;
