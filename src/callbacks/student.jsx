import axios from "axios";
export const fetchLogs = async (teamId) => {
    try {
        const response = await axios.get(` ${process.env.SERVER}/logs/${teamId}`);
        return response.data; // Assuming the response contains the logs
    }
    catch (error) {
        console.error('Error fetching logs:', error);
        throw error;
    }
};
