import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const getLinkClasses = (path: string) => {
    return location.pathname === path
      ? "font-bold text-white"
      : "text-gray-200";
  };
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-md">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className={`hover:underline ${getLinkClasses("/")}`}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`hover:underline ${getLinkClasses("/about")}`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`hover:underline ${getLinkClasses("/contact")}`}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/tasks"
            className={`hover:underline ${getLinkClasses("/tasks")}`}
          >
            Tasks
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
