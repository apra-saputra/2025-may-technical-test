// Expect a cold start of 5 to 10 secs on this service
const API_BASE_URL = "https://project-tempest-hiring.up.railway.app";

/**
 * TASK: Implement API client for fetching data from the backend API endpoint
 */
export const apiClient = async (url) => {
  const path = `${API_BASE_URL}/${url}`;
  try {
    const raw = await fetch(path, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!raw.ok) {
      console.log(raw);
      throw new Error(`Fetching failed, status: ${raw.status}`);
    }
    const response = await raw.json();

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
