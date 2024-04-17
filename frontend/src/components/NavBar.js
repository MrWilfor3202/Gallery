import React from "react";
import { useCookies } from "react-cookie";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";

function NavBar() {
  const [token, SetToken, removeToken] = useCookies(["mytoken"]);

  const logoutBtn = () => {
    removeToken(["mytoken"]);
    localStorage.removeItem("username");
    localStorage.removeItem("token");
  };

  return (
    <>
      <header>
        <div className="navbar navbar-dark bg-dark box-shadow">
          <div className="container d-flex justify-content-between">
            <a href="#" className="navbar-brand d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="mr-2"
              >
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
            </a>
            <div className="d-flex align-items-center">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarHeader"
                aria-controls="navbarHeader"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <Dropdown className="m-3">
                <Dropdown.Toggle
                  variant="secondary"
                  color="text-black"
                  id="dropdown-basic"
                >
                  {localStorage.getItem("username")}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    href="#"
                    onClick={logoutBtn}
                    className={"btn btn-danger"}
                  >
                    Выйти
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
