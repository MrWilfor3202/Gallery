import React, { useState, useEffect } from "react";
import APISerive from "./APIService";
import { useCookies } from "react-cookie";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function Form(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState(null);

  const [token] = useCookies(["mytoken"]);

  useEffect(() => {
    setTitle(props.article.title);
    setDescription(props.article.description);
    setImages(props.article.Image);
  }, [props.article]);

  const updateArticle = () => {
    APISerive.UpdateArticle(
      props.article.id,
      { title, description, images },
      token["mytoken"]
    ).then((resp) => props.updatedInformation(resp));
    props.toggleModal();
    window.location.reload();
  };

  const insertArticle = () => {
    if (title !== "" && description !== "" && images != null) {
      APISerive.InsertArticle(
        { title, description, images },
        token["mytoken"]
      ).then((resp) => props.insertedInformation(resp));
      setTitle("");
      setDescription("");
      setImages(null);
      props.toggleModal();
    } else {
      alert("заполнить поле...");
    }
  };

  return (
    <div>
      <Modal show={props.show}>
        <Modal.Header>
          <Modal.Title>Модуль галереи</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="title">Название</label>
          <input
            maxLength={100}
            type="text"
            value={title}
            className="form-control"
            placeholder="Введите назвавние поста"
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <label htmlFor="description">Описание</label>
          <textarea
            maxLength={500}
            type="text"
            value={description}
            className="form-control"
            placeholder="Введите описание поста"
            rows="3"
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <label htmlFor="images"> Загрузите картинку: </label>
          <input
            type="file"
            name="images"
            className="form-control"
            onChange={(e) => setImages(e.target.files[0])}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.toggleModal}>
            Закрыть
          </Button>
          {props.article.id ? (
            <button onClick={updateArticle} className="btn btn-success">
              Обновить
            </button>
          ) : (
            <button onClick={insertArticle} className="btn btn-primary">
              Выложить
            </button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Form;
