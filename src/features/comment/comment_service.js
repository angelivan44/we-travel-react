import { apiFetch, BASE_URL } from "../../app/apiFetch.js";

function CommentService() {
  if (!CommentService.instance) {
    CommentService.instance = this;
  }
  return CommentService.instance;
}

CommentService.prototype.createPostComment = (body, post_id) =>
  apiFetch(`${BASE_URL}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: JSON.stringify({ body: body, post_id: post_id }),
  });

CommentService.prototype.createReplieComment = (body, comment_id) =>
  apiFetch(`${BASE_URL}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: JSON.stringify({ body: body, comment_id: comment_id }),
  });

CommentService.prototype.delete = (comment_id) =>
  apiFetch(`${BASE_URL}/comments/${comment_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });

export default CommentService;
