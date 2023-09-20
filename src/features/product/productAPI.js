
export function fetchAllProducts() {
  return new Promise( async (resolve) => {
    //To do: we will not hardcode server URL 
    const response = await fetch ('http://localhost:808/products')
    const data = await response.json()
    resolve({data})
  }
  );
}
