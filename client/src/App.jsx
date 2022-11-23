import { useState } from 'react'
import './App.scss'
import Button from '@mui/material/Button';
import {Box} from "@mui/material";
import Navigation from "./components/Navigation/Navigation.jsx";
import HomePage from "./pages/Homepage/HomePage.jsx";
import Login from "./pages/Login/Login.jsx";
import {Outlet} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Navigation />
       <Outlet />
    </div>
  )
}

export default App
