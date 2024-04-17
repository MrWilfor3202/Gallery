import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import Img from "../assets/Build.gif";
function Home() {
  return (
    <>
      <Layout />
      <main role="main">
        <section
          className="jumbotron bg_ text-center"
          style={{ 
            backgroundImage: `url(${Img})`, 
            height: "100vh",
          }}
        >
          <div className="container  cbg_ pt-5 pb-5">
            <h1 className="  mt-5 text-white">
             Сайт для образовательной организации
            </h1>
            <p className="lead   txt_w">
              <br />
              Автор: студент группы ИВТ-19-1 Горбачев А.В. <br />

              <p></p>

              <a href="https://vk.com/gav20166" className="text-white">Страница автора</a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
