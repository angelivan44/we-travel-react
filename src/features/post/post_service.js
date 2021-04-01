import { apiFetch, BASE_URL } from "../../app/apiFecht.js";

function PostService() {
  if (!PostService.instance) {
    PostService.instance = this;
  }
  return PostService.instance;
}

PostService.prototype.create = (formData) =>
  apiFetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers :{
      
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: formData
    
  });

PostService.prototype.update = (post_id , formData) =>
  apiFetch(`${BASE_URL}/posts/${post_id}`, {
    method: "PATCH",
    headers :{
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: formData
  });

PostService.prototype.show = (post_id ) =>
  apiFetch(`${BASE_URL}/posts/${post_id}`, {
    method: "GET",
    headers :{
      "Content-Type": "application/json",
    },
  });

PostService.prototype.index = () =>
  apiFetch(`${BASE_URL}/posts`, {
    method: "GET",
    headers :{
      "Content-Type": "application/json",
    },
  });

PostService.prototype.delete = (post_id) =>
  apiFetch(`${BASE_URL}/posts/${post_id}`, {
    method: "DELETE",
    headers :{  
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });

export default PostService;