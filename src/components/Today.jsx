import { useSelector } from "react-redux";
import Todo from "./Todo";

const Today = () => {
  // getting todays date
  const todayDate = new Date();
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  // Formatting date
  const today = todayDate.toLocaleDateString("en-US", options);
  // Getting all the todos
  const todos = useSelector((state) => state.todoList.todos);
  // Filtering out todays todos
  const todays = todos.filter((item) => new Date(item.date).toLocaleDateString("en-US", options) === today);
  return (
    <div>
      <ul>
        {todays.map((todo) => (
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

export default Today;