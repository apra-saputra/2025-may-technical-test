const baseUrl = "http://localhost:3000";

export const fetching = async <T>(url: string): Promise<T> => {
  const path = baseUrl + url;
  try {
    const raw = await fetch(path, { method: "GET" });
    if (!raw.ok) throw new Error("fetching failed");
    const response = await raw.json();
    return response.data;
  } catch (error) {
    throw error;
  }
};
