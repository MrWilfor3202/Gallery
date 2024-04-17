import React, { useState, useEffect } from "react";
import { renderMatches, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import APIService from "./APIService";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useCookies(["mytoken"]);
  let navigate = useNavigate();
  const [isLogin, setLogin] = useState(true);

  useEffect(() => {
    var user_token = token["mytoken"];
    console.log("Login User token is", user_token);
    console.log("Data type", typeof token["mytoken"]);

    if (String(user_token) === "undefined") {
      navigate("/");
    } else {
      navigate("/articles");
    }
  }, [token]);

  
  const loginBtn = () => {
    if (username.trim().length !== 0 && password.trim().length) {
      console.log("Username And Password Are Set");
      APIService.LoginUser({ username, password })
        .then((resp) => {
          setToken("mytoken", resp.token);
          localStorage.setItem("username", username);
          localStorage.setItem("token", resp.token);
        })
        .catch((error) => console.log(error));
    } else {
      console.log("Username And Password Are Not Set");
      navigate("/");
    }
  };

  const RegisterBtn = () => {
    if (username.trim().length !== 0 && password.trim().length !== 0) {
      console.log("Username and password are set");
      APIService.RegisterUser({ username, password })
        .then(() => loginBtn())
        .catch((error) => console(error));
    } else {
      navigate("/");
      console.log("Username and password are not set");
    }
  };

  const loginStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL + "img/greenAppleLogo.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    "min-height": "50%",
    "min-width": "100%",
    height: "50vh",
    backgroundPosition: "center",
    margin: 0,
  };

  const redButton = 
  {
    background: "red"
  }

  const lightNav =
  {
    background: "white"
  }
  

  return (
    <div className="App" align = "center" style={lightNav}>
      <div className="container-fluid bg color" align = "center">
        <div className="row" align = "center">
          <br/>
          <br />
          <div className="col-sm-8 full-img" style={loginStyle}></div>
          <p></p>
          <div class="row justify-content-md-center">
          <div className="col-sm-4"  align = "center">
          <p class="text-dark">
            {isLogin ? <h3>Аутентификация</h3> : <h3>Регистрация</h3>}
            </p> 
            <div className="form-group">
            <p class="text-dark">
              <label htmlFor="username" >Имя пользователя: </label>
              </p> 
              <input
                type="text"
                value={username}
                className="form-control"
                placeholder="Введите логин"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="form-group">
            <p class="text-dark">
              <label htmlFor="password">Пароль: </label>
              </p> 
              <input
                type="password"
                value={password}
                className="form-control"
                placeholder="Введите пароль"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <br />

            <div>
              {isLogin ? (
                <div>
                  <button onClick={loginBtn} className="btn btn-primary d-flex align-items-cente" align = "center">
                    Войти
                  </button>
                  <p> </p>
                  <button
                    onClick={() => setLogin(false)}
                    className="btn btn-primary d-flex align-items-cente"
                  >
                    Зарегистрироваться
                  </button>
                  <p></p>
                  <p></p>
                  <p></p>
                </div>
              ) : (
                <div>
                  <button onClick={RegisterBtn} className="btn btn-primary d-flex align-items-cente" align = "center">
                    Зарегистрироваться
                  </button>
                  <br />
                    <button
                      className="btn btn-primary d-flex align-items-cente"
                      onClick={() => setLogin(true)}
                    >
                      Войти
                    </button>
                    <p></p>
                    <p></p>
                </div>
              )}
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
