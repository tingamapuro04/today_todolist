import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  // Setting the user
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: ""
  });


  // Handling changes in the inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // Handling submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Signing up only if the passwords match
    if (user.password === user.confirm_password) {
    dispatch(addUser(user));
    setUser({
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    });
    navigate("/todos");
    } else {
      setError(true);
      setUser({
        confirm_password: ""
      })
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-2">Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-600 text-sm font-medium"
          >
            User Name
          </label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            id="name"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-600 text-sm font-medium"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            id="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-600 text-sm font-medium"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            id="password"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirm password"
            className="block text-gray-600 text-sm font-medium"
          >
            Confirm Password
          </label>
          <input
            type="password"
            name="confirm_password"
            value={user.confirm_password}
            onChange={handleChange}
            id="confirm_password"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Sign Up
        </button>
      </form>
      <div>
        { error && <p className="text-red-500 mt-4">Wrong credentials. Review and submit again</p> }
      </div>
    </div>
  );
};

export default SignUp;
