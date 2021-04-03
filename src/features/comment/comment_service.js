import { apiFetch, BASE_URL } from "../../app/apiFetch.js";

function CommentService() {
  if (!CommentService.instance) {
    CommentService.instance = this;
  }
  return CommentService.instance;
}

Comment.prototype.createPostComment = (body, post_id) =>
  apiFetch(`${BASE_URL}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: JSON.stringify({ body: body, post_id: post_id }),
  });

Comment.prototype.createReplieComment = (body, comment_id) =>
  apiFetch(`${BASE_URL}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: JSON.stringify({ body: body, comment_id: comment_id }),
  });

Comment.prototype.delete = (comment_id) =>
  apiFetch(`${BASE_URL}/comments/${comment_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });

export default CommentService;
