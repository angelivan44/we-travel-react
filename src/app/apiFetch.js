const BASE_URL = "https://we-travel-api.herokuapp.com";
// "https://travel-blog-cp.herokuapp.com"
//"http://localhost:3000"
//"https://we-travel-api.herokuapp.com"

async function apiFetch(...args) {
  const response = await fetch(...args);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.errors);
  }
  if (response.status !== 204) {
    return await response.json();
  }
  return true;
}

export { BASE_URL, apiFetch };
