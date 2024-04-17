export default class APISerive {
  static UpdateArticle(article_id, body, token) {
    const formData = new FormData();
    formData.append("title", body.title);
    formData.append("description", body.description);
    formData.append("Image", body.images);
    return fetch(`http://127.0.0.1:8000/api/articles/${article_id}/`, {
      method: "PUT",
      headers: {
        Authorization: `Token ${token}`,
      },
      body: formData,
    }).then((resp) => resp.json().then((res) => console.log(res)));
  }

  static InsertArticle(body, token) {
    const formData = new FormData();
    formData.append("title", body.title);
    formData.append("description", body.description);
    formData.append("Image", body.images);
    return fetch(`http://127.0.0.1:8000/api/articles/`, {
      method: "POST",
      headers: {
        Authorization: `Token ${token}`,
      },
      body: formData,
    }).then((resp) => resp.json());
  }

  static DeleteArticle(article_id, token) {
    return fetch(`http://127.0.0.1:8000/api/articles/${article_id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });
  }

  static LoginUser(body) {
    return fetch(`http://127.0.0.1:8000/auth/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static RegisterUser(body) {
    return fetch(`http://127.0.0.1:8000/api/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }
}
