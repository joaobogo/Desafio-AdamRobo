export const baseurl: string = "https://api.mercadolibre.com";

export async function fetchProducts(query: string) {
  const url: string = `${baseurl}/sites/MLB/search?q=${query}`;
  const res: Response = await fetch(url);
  const data = await res.json();

  return data.results.slice(0, 20);
}

export async function fetchDetails(id: string) {
  const url: string = `${baseurl}/items/${id}`;
  const res: Response = await fetch(url);
  const data = await res.json();
  return data;
}
