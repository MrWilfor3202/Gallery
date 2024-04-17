import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./components/Login";
import Id from "./components/Id";
import Results from "./components/Results";
import Goals from "./components/Goals";
import Home from "./components/Home";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/goals" element={<Goals />} />
        <Route exact path="/results" element={<Results />} />
        <Route exact path="/articles" element={<App />} />
        <Route exact path="/articles/:id" element={<Id />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Router />
  </>
);
