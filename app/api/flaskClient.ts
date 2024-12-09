import axios from "axios";

const flaskAPI = axios.create({
  baseURL: "http://127.0.0.1:8080",
});

const predictFood = async (file: File): Promise<object> => {
  try {
    const formData = new FormData();
    formData.append("image", file);

    const res = await flaskAPI.post<{ predicted_label: string }>(
      "/predict-cnn",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    return res.data;
  } catch (error) {
    console.error("Error while calling Flask API:", error);
    throw new Error("Failed to fetch prediction");
  }
};

export default predictFood;
