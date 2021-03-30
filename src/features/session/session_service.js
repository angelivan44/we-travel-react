import { apiFetch, BASE_URL } from "../../app/apiFecht.js";

function SessionService() {
  if (!SessionService.instance) {
    SessionService.instance = this;
  }
  return SessionService.instance;
}

SessionService.prototype.login = (credentials) =>
  apiFetch(`${BASE_URL}/login`, {
    method: "POST",
    headers :{
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials)
    
  });

  SessionService.prototype.logout = (id) =>
  apiFetch(`${BASE_URL}/logout`, {
    method: "DELETE",
  });

  

export default SessionService;