import Todo from "./Todo";
import { useSelector } from "react-redux";
const Todos = () => {
  const todos = useSelector((state) => state.todoList.todos)
  return (
    <div className="p-7">
      <ul>
        {todos.map((todo) => (
          <Todo
            id={todo._id}
            key={todo._id}
            title={todo.title}
            desc={todo.desc}
          />
        ))}
      </ul>
    </div>
  );
}

export default Todos
