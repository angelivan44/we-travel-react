import { apiFetch, BASE_URL } from "../../app/apiFetch.js";

function LikeService() {
  if (!LikeService.instance) {
    LikeService.instance = this;
  }
  return LikeService.instance;
}

LikeService.prototype.create = (formData) =>
  apiFetch(`${BASE_URL}/likes`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: formData,
  });

LikeService.prototype.createLikeComment = (comment_id) =>
  apiFetch(`${BASE_URL}/likes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: JSON.stringify({comment_id:comment_id}),
  });


LikeService.prototype.delete = (like_id) =>
  apiFetch(`${BASE_URL}/likes/${like_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });

export default LikeService;
