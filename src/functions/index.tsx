export const baseurl: string = "https://api.mercadolibre.com";

export interface IProduct {
  id: string;
  title: string;
  available_quantity: number;
  sold_quantity:number;
  thumbnail: string;
  price: number;
}

export async function fetchProducts(query: string): Promise<IProduct[]> {
  const url: string = `${baseurl}/sites/MLB/search?q=${query}`;
  const res: Response = await fetch(url);
  const data = await res.json();

  return data.results.slice(0, 20);
}

export async function fetchDetails(id: string): Promise<IProduct> {
  const url: string = `${baseurl}/items/${id}`;
  const res: Response = await fetch(url);
  const data = await res.json();
  return data;
}
