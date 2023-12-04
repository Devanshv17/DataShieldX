import axios from "axios";

export const fetchLogs = async (teamId: number) => {
    try {
      const response = await axios.get(`http://localhost:8000/logs/${teamId}`);
      return response.data; // Assuming the response contains the logs
    } catch (error) {
      console.error('Error fetching logs:', error);
      throw error;
    }
  };