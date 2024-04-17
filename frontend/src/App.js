import ArticleList from "./components/ArticleList";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [editArticle, setEditArticle] = useState("");
  const [token, setToken, removeToken] = useCookies(["mytoken"]);
  const [show, setShow] = useState(false);

  let navigate = useNavigate();

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
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/users/", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((resp) => {
        console.log("+++++++user+++++++");
        console.log(resp);
        console.log("++++++++++++++");
      })

      .catch((error) => console.log(error));
  }, []);
  const editBtn = (article) => {
    setEditArticle(article);
    toggleModal();
  };

  const updatedInformation = (article) => {
    const new_article = articles.map((myarticle) => {
      if (myarticle.id === article.id) {
        return article;
      } else {
        return myarticle;
      }
    });
    setArticles(new_article);
  };

  const articleForm = () => {
    setEditArticle({ title: "", description: "" });
    setShow((p) => !p);
  };
  function toggleModal() {
    setShow((p) => !p);
  }
  const insertedInformation = (article) => {
    const new_articles = [...articles, article];
    setArticles(new_articles);
  };

  const deleteBtn = (article) => {
    const new_article = articles.filter((myarticle) => {
      if (myarticle.id === article.id) {
        return false;
      }

      return true;
    });
    setArticles(new_article);
  };

  useEffect(() => {
    var user_token = token["mytoken"];
    console.log("User token is", user_token);
    if (String(user_token) === "undefined") {
      navigate("/");
    } else {
      navigate("/articles");
    }
  }, [token]);

  return (
    <>
      <ArticleList
        articles={articles}
        editBtn={editBtn}
        articleForm={articleForm}
        deleteBtn={deleteBtn}
      />
      <Form
        show={show}
        toggleModal={toggleModal}
        article={editArticle}
        updatedInformation={updatedInformation}
        insertedInformation={insertedInformation}
      />
    </>
  );
}

export default App;
