import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme.js";
import Route from "./Routers/Route";
import AppProvider from "./store/AppProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AppProvider>
            <ThemeProvider theme={theme}>
                <Route />
            </ThemeProvider>
        </AppProvider>
    </React.StrictMode>
);
