export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    //To do: we will not hardcode server URL
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchAllProductsByFilters(filter, sort, pagination) {
  //filter ={"category":"smartphone"}
  //sort = {_sort:"price", _order="desc"}

  //todo:on server we will support multi vaues

  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length > 0) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }

  for (let key in sort ){
    queryString += `${key}=${sort[key]}&`;
  }
  for (let key in pagination ){
    queryString += `${key}=${sort[key]}&`;
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
