import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  // toggling the menu in the different views
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="/todos" className="text-white text-lg font-semibold">
            .Do.U
          </a>

          <div>
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none lg:hidden"
            >
              {isOpen ? (
                <IoMdClose size={24} color="white" />
              ) : (
                <CiMenuBurger size={24} color="white" />
              )}
            </button>
          </div>
          {/*listing of the todos */}
          <ul
            className={`${
              isOpen
                ? "fixed top-0 left-0 h-screen w-full bg-zinc-400 flex flex-col items-center justify-center space-y-3.5"
                : "hidden"
            } lg:flex lg:space-x-4 mt-0 lg:mt-0`}
          >
            
            <li>
              <a
                href="/todos/today"
                className={
                  isOpen ? "text-white text-2xl hover:text-3xl" : "text-white"
                }
              >
                Today&apos;s todos
              </a>
            </li>
            <li>
              <a
                href="/todos"
                className={
                  isOpen ? "text-white text-2xl hover:text-3xl" : "text-white"
                }
              >
                All todos
              </a>
            </li>

            <li>
              <button
                onClick={toggleMenu}
                className={
                  isOpen
                    ? "text-white mt-4 lg:mt-0 focus:outline-none"
                    : "hidden"
                }
              >
                <IoMdClose size={24} color="white" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
