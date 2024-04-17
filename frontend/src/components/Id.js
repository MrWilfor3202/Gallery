import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import moment from "moment";
import Layout from "./Layout";
function Id() {
  const [articles, setArticles] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch("http://localhost:8000/api/articles/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "a2a76bcaca32becedbd9fc8542dc293f9c98b92b",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => {
        setArticles(resp);
        console.log("++++++++++++++");
        console.log(resp);
        console.log("++++++++++++++");
      })

      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Layout />

      <div className="container mt-3">
        {articles
          .filter((ff) => ff.id == id)
          .map((itm, idx) => (
            <div key={idx} className={" d-block "}>
              <Link to={"/articles"} className={"btn btn-success"}>
                назад
              </Link>

              <div class="jumbotron jumbotron-fluid">
                <img src={itm.Image} className={"img-fluid"} alt={itm.title} />
                <h1 class="display-4">{itm.title}</h1>
                <p class="lead">{itm.description}</p>
                <strong>{moment(itm.pub_date).format("ll")} </strong>
              </div>
            </div>
          ))}
      </div>
      <div className="text-muted pt-2">
        <div className="container d-flex justify-content-between">
          <p>&copy; Модуль галереи 2023</p>
          <p className="float-right">
            <a href="#">Hаверх</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Id;
