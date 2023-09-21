
export function fetchAllProducts() {
  return new Promise( async (resolve) => {
    //To do: we will not hardcode server URL 
    const response = await fetch ('http://localhost:8080/products')
    const data = await response.json()
    resolve({data})
  }
  );
}
