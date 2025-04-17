import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold">Hello Header</h1>
      <nav className="space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-red-400 text-white px-3 py-1 rounded"
              : "hover:underline"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            isActive
              ? "bg-red-400 text-white px-3 py-1 rounded"
              : "hover:underline"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;