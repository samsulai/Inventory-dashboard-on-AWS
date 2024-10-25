const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const getUsers = async () => {

  const response  = await fetch(`${API_BASE_URL}/users`);
  
  if (!response.ok) {
    throw new Error(`Failed to Fetch Users : ${response.statusText}`);
  }
  return response.json();
}