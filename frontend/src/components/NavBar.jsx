import React from "react";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

function NavBar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/">Login</a>
          </li>

          {user && (
            <li><button onClick={handleLogout}>Logout</button></li>
          )}

          {user && user.user.role === "teacher" && (
            <li className="nav-item">
              <a href="/homework">Homework</a>
            </li>
          )}

          {user && user.user.role === "student" && (
            <li className="nav-item">
              <a href="/home">Home</a>
            </li>
          )}

          {user && user.user.role === "office" && (
            <li className="nav-item">
              <a href="/register">Add</a>
            </li>
          )}

        </ul>
      </nav>
    </>
  );
}

export default NavBar;
