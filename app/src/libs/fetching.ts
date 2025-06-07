const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = apiUrl;

export const fetching = async <T>(url: string): Promise<T> => {
  const path = baseUrl + url;
  try {
    const raw = await fetch(path, {
      method: "GET",
      headers: { "Content-Type": "application/json", x_api_key: apiKey },
    });
    if (!raw.ok) throw new Error("fetching failed");
    const response = await raw.json();
    return response.data;
  } catch (error) {
    throw error;
  }
};
