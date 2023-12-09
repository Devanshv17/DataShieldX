import axios from 'axios';
export const startTeamServer = async (teamId) => {
    const port = 8080 + teamId;
    try {
        await axios.post(`${process.env.NEXT_PUBLIC_SERVER_CONTROLLER}/start/${teamId}/${port}`);
    }
    catch (error) {
        console.error('Error starting team:', error);
        throw error;
    }
};
export const stopTeamServer = async (teamId) => {
    try {
        await axios.post(`${process.env.NEXT_PUBLIC_SERVER_CONTROLLER}/stop/${teamId}`);
    }
    catch (error) {
        console.error('Error stopping team:', error);
        throw error;
    }
};
export const fetchLogs = async (teamId) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_CONTROLLER}/logs/${teamId}`);
        return response.data; // Assuming the response contains the logs
    }
    catch (error) {
        console.error('Error fetching logs:', error);
        throw error;
    }
};
