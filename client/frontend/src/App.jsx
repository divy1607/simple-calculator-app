import Card from '@mui/material/Card';
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import axios from 'axios';
import Appbar from './components/Appbar.jsx';
import Scientific from './components/Scientific.jsx';
import Simple from './components/Simple.jsx';
import Landing from './components/Landing.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      backgroundColor: "#e5ff9e"
    }}
    >
      <Router>
        <Appbar></Appbar>
          <Routes>
            <Route path = {"/simple"} element={<Simple/>}></Route>
            <Route path = {"/scientific"} element={<Scientific />}></Route>
            <Route path = {"/"} element = {<Landing/>}></Route>
          </Routes>
      </Router>
    </div>
  )
}


export default App
