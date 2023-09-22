import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SignIn = () => {
  const user_one = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  // Setting error
  const [error, setError] = useState(false);
  // Setting user
  const [user, setUser] = useState({
    password: ""
  });

  // Handle Change
  const handleChange = (e) => {
    // Finding the exact input being changed at a particular time 
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // Handling the submit action
  const handleSubmit = (e) => {
    e.preventDefault();
    // Signing in only if the passwords match
    if (user.password === user_one.password) {
      setUser({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
      });
      navigate("/todos");
    } else {
      setUser({
        password: ""
      });
      setError(true);
      
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h3 className="text-lg content-center font-semibold mb-2">Sign In</h3>
      <form onSubmit={handleSubmit} className="flex flex-col items-start">
        <div className="mb-4 w-full">
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
        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Sign In
          </button>
        </div>
      </form>

      <div className="mb-3">
        {error && (
          <p className="text-red-500 mt-4">
            Wrong Password. Review and submit again
          </p>
        )}
      </div>
      <div className="flex w-full justify-end">
        <Link className="" to="/signup">
          <span className="text-violet-400">No Account! Sign up Here!</span>
        </Link>
        <br />
      </div>
    </div>
  );
};

export default SignIn;
