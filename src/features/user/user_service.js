import { apiFetch, BASE_URL } from "../../app/apiFetch.js";

function UserService() {
  if (!UserService.instance) {
    UserService.instance = this;
  }
  return UserService.instance;
}

UserService.prototype.create = (formData) =>
  apiFetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: formData,
  });

UserService.prototype.update = (user_id, formData) =>
  apiFetch(`${BASE_URL}/users/${user_id}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: formData,
  });

UserService.prototype.following = (user_id, followig_id) =>
  apiFetch(`${BASE_URL}/users/${user_id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: JSON.stringify(followig_id),
  });

UserService.prototype.show = (user_id) =>
  apiFetch(`${BASE_URL}/users/${user_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

UserService.prototype.valid = (email, password) =>
  apiFetch(`${BASE_URL}/user/valid`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  });

UserService.prototype.index = () =>
  apiFetch(`${BASE_URL}/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

export default UserService;
