import React from "react";
import APISerive from "./APIService";
import { useCookies } from "react-cookie";
import moment from "moment";
import Layout from "./Layout";
import Img from "../assets/GreenAppleStudio.png";

function ArticleList(props) {
  const [token] = useCookies(["mytoken"]);
  const { articleForm } = props;
  const editBtn = (article) => {
    props.editBtn(article);
  };

  const deleteBtn = (article) => {
    APISerive.DeleteArticle(article.id, token["mytoken"])
      .then(() => props.deleteBtn(article))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Layout />
      <main role="main">
        <section
          className="jumbotron bg_ text-center"
          style={{
            backgroundImage: `url(${Img})`,
          }}
        >
          <div className="container cbg_ pt-5 pb-5">
            <h1 className="jumbotron-heading txt_w">Галерея</h1>
          </div>
        </section>


        <p></p>
        <p></p>
        <p></p>
        <p></p>

        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              {props.articles.map((itm, idx) => (
                <div className="col-md-4" key={idx}>
                  <div className="card mb-4 box-shadow">
                    <img
                      className="card-img-top"
                      src={itm.Image}
                      style={{ height: "200px", objectFit: "cover" }}
                      alt={itm.description}
                    />
                    <div className="card-body">
                      <h4>
                        {itm.title?.length > 20
                          ? itm.title.substring(0, 20) + "..."
                          : itm.title}
                      </h4>
                      <p className="card-text">
                        {itm.description.length > 40
                          ? itm.description.substring(0, 40) + "..."
                          : itm.description}
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            onClick={() => editBtn(itm)}
                            type="button"
                            className="btn btn-sm btn-outline-success"
                          >
                            Обновить
                          </button>
                          <button
                            onClick={() => deleteBtn(itm)}
                            type="button"
                            className="btn btn-sm btn-outline-danger"
                          >
                            Удалить
                          </button>
                        </div>
                        <small className="text-muted">
                          {moment(itm.pub_date).format("ll")}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <div class="position-absolute start-50 translate-middle">
      <button className="btn btn-primary d-flex align-items-cente" onClick={articleForm}>
              Пополнить галерею
      </button>
      <p></p>
      <p></p>
      <p></p>
      </div>
    </>
  );
}

export default ArticleList;
