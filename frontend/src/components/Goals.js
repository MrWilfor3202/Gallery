import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import Img from "../assets/build2.jpeg";
function Goals() {
  return (
    <>
      <Layout />
      <main role="main">
        <section
          className="jumbotron bg_ text-center"
          style={{
            backgroundImage: `url(${Img})`,
            height: "95vh",
          }}
        >
          <div className="container cbg_ pt-5 pb-5">
            <h1 className="   txt_w">Цели</h1>
            <p className="lead   txt_w ">
              1.Изучить предметную область 
              <br />
              <p></p>
              2.Выбрать подходящие инструменты реализации
              <br />
              <p></p>
              3.Реализовать проект
              <p></p>
              <div className="br"></div>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Goals;
