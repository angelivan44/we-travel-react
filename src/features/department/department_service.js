import { apiFetch, BASE_URL } from "../../app/apiFecht.js";

function DepartmentService() {
  if (!DepartmentService.instance) {
    DepartmentService.instance = this;
  }
  return DepartmentService.instance;
}

DepartmentService.prototype.index = () =>
  apiFetch(`${BASE_URL}/departments`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

DepartmentService.prototype.show = (department_id) =>
  apiFetch(`${BASE_URL}/departments/${department_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

DepartmentService.prototype.create = (formData) =>
  apiFetch(`${BASE_URL}/departments`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: formData,
  });

DepartmentService.prototype.update = (department_id, formData) =>
  apiFetch(`${BASE_URL}/departments/${department_id}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: formData,
  });

DepartmentService.prototype.delete = (department_id) =>
  apiFetch(`${BASE_URL}/departments/${department_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });

export default DepartmentService;
