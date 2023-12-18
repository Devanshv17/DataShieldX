import React, { useState } from 'react';
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";


export default function SignInSide() {
	// console.log(` ${process.env.NEXT_PUBLIC_STUDENT_SERVER}`);
    const [loginError, setLoginError] = useState(false);
//     const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const creds = {
                    team: data.get("team"),
                    username: data.get("username"),
                    password: data.get("password"),
                }

        console.log(creds)
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_STUDENT_SERVER}/api/auth`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify({
                    team: data.get("team"),
                    username: data.get("username"),
                    password: data.get("password"),
                }),
            });
            if (response.ok) {
                setLoginError(false);
                if (typeof window !== undefined) {//put credentials into localstorage
                	localStorage.setItem("creds", JSON.stringify(creds))
                }
                // Redirect to /student/dashboard upon successful login
                window.location.assign('/student/dashboard/');
            }
            else {
                setLoginError(true);
            }
        }
        catch (error) {
            console.error('Error during login:', error);
            setLoginError(true);
        }
    };
    return (
    <Grid container spacing={4} sx={{width:"90vw", height:"90vh", p:"50px", m:"auto"}}> 
    	<Grid item xs={12} md={6}>
				<form noValidate onSubmit={handleSubmit} style={{
    			borderRadius:"50px",
    			backgroundColor:"#badeff40",
    			display:"flex",
    			flexDirection:"column",
    			alignItems:"center",
    			padding:"30px",
    			width:"80%",
    			height:"100%"
    		}}>
						<img src="/assets/logo.jpg" marginTop="20px" alt="Company Logo" width="250px" height="60px" borderRadius="50%" />
						<CssBaseline />
						<Typography component="h1" variant="h5" align='center'>
								Sign in
						</Typography>
						<TextField margin="normal" required fullWidth id="team" label="Team" name="team" autoComplete="team" autoFocus />
						<TextField margin="normal" required fullWidth id="username" label="Username" name="username" autoComplete="username" autoFocus />
						<TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
						<Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, alignSelf:"stretch" }}>
								Sign In
						</Button>
				</form>
			</Grid>
			<Grid item xs={0} md={6} sx={{
				backgroundImage: 'url("/assets/login_image.png")',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}} />
		</Grid>
);
}
