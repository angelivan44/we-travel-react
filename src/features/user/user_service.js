import { apiFetch, BASE_URL } from "../../app/apiFetch.js";

function UserService() {
  if (!UserService.instance) {
    UserService.instance = this;
  }
  return UserService.instance;
}

UserService.prototype.create = (username, email, password) =>
  apiFetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username:username, email:email, password:password}),
  });

UserService.prototype.update = (user_id, formData) =>
  apiFetch(`${BASE_URL}/users/${user_id}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: formData,
  });



UserService.prototype.following = (user_id, following_id) =>
  apiFetch(`${BASE_URL}/users/${user_id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: JSON.stringify({ following_id: following_id }),
  });

UserService.prototype.show = (user_id) =>
  apiFetch(`${BASE_URL}/users/${user_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

UserService.prototype.valid = (username, email, password) =>
  apiFetch(`${BASE_URL}/user/valid`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username:username, email: email, password: password }),
  });

UserService.prototype.index = () =>
  apiFetch(`${BASE_URL}/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

UserService.prototype.otp_valid = (id , pin)=>
apiFetch(`${BASE_URL}/user/pin`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({id :id, pin : pin}),
});

export default UserService;
