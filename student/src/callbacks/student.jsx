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

export const getProject = async (teamId) => {
	try {
		let resp = await axios.get(`${process.env.NEXT_PUBLIC_STUDENT_SERVER}/api/getProject?id=${teamId}`)
		return resp.data.project
	} catch (error) {
		console.error(`Error getting project ${teamId}`)
		throw error;
	}
}

export const getApps = async () => {
	try {
		let resp = await axios.get(`${process.env.NEXT_PUBLIC_STUDENT_SERVER}/api/getApps`)
		return resp.data
	} catch (error) {
		console.error("Error getting apps")
		throw error
	}
}

export const requestApp = async (project_id, app) => {
	try {
		let resp = await axios.post(`${process.env.NEXT_PUBLIC_STUDENT_SERVER}/api/requestApps`, {project_id, apps:[app]})
		if (resp.status == 200) console.log("Successful request apps")
		else throw new Error(`Status code ${resp.status}`)
	} catch (error) {
		console.error("Error requesting apps")
		throw error
	}
}
