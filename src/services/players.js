const baseUrl = "http://localhost:3001/players";

const getAll = () => {
  const request = fetch(baseUrl);

  return request.then((response) => response.json());
};

const create = async (newObject) => {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newObject),
  });
  return response.json();
};

const services = { getAll, create };

export default services;
