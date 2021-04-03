import { apiFetch, BASE_URL } from "../../app/apiFetch.js";

function CommentService() {
  if (!CommentService.instance) {
    CommentService.instance = this;
  }
  return CommentService.instance;
}

Comment.prototype.create = (formData, post_id) =>
  apiFetch(`${BASE_URL}/${post_id}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: formData,
  });

Comment.prototype.update = (formData, post_id, comment_id) =>
  apiFetch(`${BASE_URL}/${post_id}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: formData,
  });

Comment.prototype.delete = (formData, post_id, comment_id) =>
  apiFetch(`${BASE_URL}/${post_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: formData,
  });

export default CommentService;
