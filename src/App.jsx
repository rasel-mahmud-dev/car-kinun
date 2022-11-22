import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';
import {Box} from "@mui/material";
import Navigation from "./components/Navigation/Navigation.jsx";
import HomePage from "./pages/Homepage/HomePage.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Navigation />
        <HomePage></HomePage>
    </div>
  )
}

export default App
