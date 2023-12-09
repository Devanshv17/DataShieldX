import React, { useState } from 'react';
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
export default function SignInSide() {
	// console.log(` ${process.env.NEXT_PUBLIC_STUDENT_SERVER}`);
    const [loginError, setLoginError] = useState(false);
//     const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_STUDENT_SERVER}/api/auth`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify({
                    team: data.get("team"),
                    user: data.get("username"),
                    pass: data.get("password"),
                }),
            });
            if (response.ok) {
                setLoginError(false);
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
    return (<Container component="main" maxWidth="lg">
      <Box sx={{
            marginTop: 8
        }}>
        <Grid container>
          <CssBaseline />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box sx={{
            my: 8,
            mx: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form noValidate onSubmit={handleSubmit} 
    // sx={{ mt: 1 }}
    style={{ height: "100%" }}>
                <TextField margin="normal" required fullWidth id="team" label="Team" name="team" autoComplete="team" autoFocus/>
                <TextField margin="normal" required fullWidth id="username" label="Username" name="username" autoComplete="username" autoFocus/>
                <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password"/>
                <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Sign In
                </Button>
              </form>
            </Box>
          </Grid>
          <Grid item xs={false} sm={4} md={7} sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) => t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}/>
        </Grid>
      </Box>
    </Container>);
}
