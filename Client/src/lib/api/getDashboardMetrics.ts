

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getDashBoardMetrics = async () => {
    const response  = await fetch(`${API_BASE_URL}/dashboard`);
    if (!response.ok) {
      throw new Error(`Failed to Fetch Metrics : ${response.statusText}`);
    
      }
      return response.json();
}


