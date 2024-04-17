import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import Img from "../assets/build3.jpg";
function Results() {
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
            <h1 className="   txt_w">Итоги</h1>
            <p className="lead   txt_w ">
              В ходе выполнения работы был создан сайт для образовательной организации!<br />
              Были использованы ASP.NET core, EntityFramework, bootstrap.<br />
              <div className="br"></div>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Results;
