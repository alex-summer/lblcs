const getAll = (url) => {
  const request = fetch(url);

  return request.then((response) => response.json());
};

const create = async (newObject, url) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newObject),
  });
  console.log(response)
  return response.json();
};

const services = { getAll, create };

export default services;
