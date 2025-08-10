export type BackendError = {
  success?: boolean;
  message?: string;
  errors?: { field: string; message: string }[];
};

export async function submitForm(data) {
  try {
    const response = await fetch("http://localhost:5000/api/forms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw result;
    }

    return result;
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
}

export async function fetchFormSubmissions() {
  try {
    const response = await fetch("http://localhost:5000/api/forms", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.json();

    if (!response.ok) {
      throw result;
    }

    return result.data || [];
  } catch (error) {
    console.error("Error fetching form submissions:", error);
    throw error;
  }
} 
