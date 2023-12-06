
import {useState} from "react";
import {Box, Button, Card, Paper, Tab, Tabs} from "@mui/material";
import {Link} from "react-router-dom";
import AppWindow from "./client_applications";

interface Props {
  className?: string;
  id?: string;
}
export default function App(props = {}) {
  const [curr, setCurr] = useState("Server Management");
  const projects = Array(10).fill({name:"Building a PEP LLM", text:"Test data, ignore please"});
  return (
    <div style={{
      backgroundColor:"#f6f6f6",
      width:"100vw",
      minHeight:"100vh",
    }}>
      <Paper elevation={1} style={{
        position:"fixed",
        top:"0",
        zIndex:"100",
        display:"flex",
        alignItems:"center",
        gap:"20px",
        paddingLeft:"10px",
        width:"100%",
        height:"50px",
      }}>
        <span style={{height:"30px", backgroundColor:"#ddd"}}>Company Name</span>
        <Tabs value={curr} onChange={(_, n) => {setCurr(n)}}>
          <Tab label={"Server Management"} value={"Server Management"}/>
          <Tab label={"Chat"} value={"Chat"}/>
          <Tab label={"Apps"} value={"Apps"}/>
          {/*<Tab label={"Storage"} value={"Storage"}/>*/}
        </Tabs>
      </Paper>
      <Box sx={{mt:5, p: 1}}>
      {curr == "Server Management" ?
        <><h1>Active projects</h1>
        {
          projects.map((el, idx) => (<Card sx={{margin:2, padding: 2}}>
            <h1>{el.name}</h1>
            <h5>{el.text}</h5>
            <Link to={`/${idx}`}><Button variant="contained">View details</Button></Link>
          </Card>))
        }</>
      :
      ""}
      {curr == "Chat" ?
      <></>
      :
      ""}
      {curr == "Apps" ?
      <AppWindow />
      :
      ""}
      {/* {curr == "Storage" ?
      <Storage />
      :
      ""} */}
      </Box>
    </div>
  );
};
