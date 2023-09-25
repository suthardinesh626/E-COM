export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    //To do: we will not hardcode server URL
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchAllProductsByFilters(filter) {
  //filter ={"category":"smartphone"}
  let queryString = "";
  for (let key in filter) {
    queryString += `${key}=${filter[key]}&`;
  }

  return new Promise(async (resolve) => {
    //To do: we will not hardcode server URL
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    const data = await response.json();
    resolve({ data });
  });
}

