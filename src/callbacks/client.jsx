import axios from 'axios';
export const startTeamServer = async (teamId) => {
    const port = 8080 + teamId;
    try {
        await axios.post(`http://localhost:8000/start/${teamId}/${port}`);
    }
    catch (error) {
        console.error('Error starting team:', error);
        throw error;
    }
};
export const stopTeamServer = async (teamId) => {
    try {
        await axios.post(`http://localhost:8000/stop/${teamId}`);
    }
    catch (error) {
        console.error('Error stopping team:', error);
        throw error;
    }
};
export const fetchLogs = async (teamId) => {
    try {
        const response = await axios.get(`http://localhost:8000/logs/${teamId}`);
        return response.data; // Assuming the response contains the logs
    }
    catch (error) {
        console.error('Error fetching logs:', error);
        throw error;
    }
};
