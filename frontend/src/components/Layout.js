import React from "react";
import { useCookies } from "react-cookie";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, NavLink } from "react-router-dom";
function Layout({ children }) {
  const [token, SetToken, removeToken] = useCookies(["mytoken"]);

  const logoutBtn = () => {
    removeToken(["mytoken"]);
    localStorage.removeItem("username");
    localStorage.removeItem("token");
  };
  return (
    <>
      <header>
        <div className="navbar navbar-light bg-light box-shadow">
          <div className="container d-flex justify-content-between">
            <div class="d-flex align-items-center  text-black">
              <Link
                class="nav-link"
                to="/home"
                style={{ margin: "0 60px 0 0 " }}
              >
                <strong>В общем </strong>
              </Link>
              <Link
                class="nav-link"
                to="/goals"
                style={{ margin: "0 60px 0 0 " }}
              >
                <strong> Задачи </strong>
              </Link>

              <Link
                class="nav-link"
                to="/results"
                style={{ margin: "0 60px 0 0 " }}
              >
                <strong>Итоги </strong>
              </Link>

              <Link
                class="nav-link    d-flex align-items-center "
                to="/articles"
                style={{ margin: "0 60px 0 0 " }}
              >
                <strong >Галерея</strong>
              </Link>
            </div>

            <div className="d-flex align-items-center">

              <Dropdown className="m-3">
                <Dropdown.Toggle
                  variant="secondary"
                  color="text-white"
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
      {children}
    </>
  );
}

export default Layout;
