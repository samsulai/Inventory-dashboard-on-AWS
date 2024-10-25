const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const getProducts = async (search?: string) => {
  const queryParam = search ? encodeURIComponent(search) : '';
  const response  = await fetch(`${API_BASE_URL}/products?search=${queryParam}`);
  
  if (!response.ok) {
    throw new Error(`Failed to Fetch Products : ${response.statusText}`);
  }
  return response.json();
}