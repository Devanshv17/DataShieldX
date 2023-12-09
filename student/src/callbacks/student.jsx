import axios from "axios";

export const fetchLogs = async (teamId) => {
    try {
    	console.log(` ${process.env.NEXT_PUBLIC_SERVER_CONTROLLER}/logs/${teamId}`);
        const response = await axios.get(` ${process.env.NEXT_PUBLIC_SERVER_CONTROLLER}/logs/${teamId}`);
        return response.data; // Assuming the response contains the logs
    }
    catch (error) {
        console.error('Error fetching logs:', error);
        throw error;
    }
};
