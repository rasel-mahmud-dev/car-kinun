import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme.js";
import Route from "./Routers/Route";
import AppProvider from "./store/AppProvider";

import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
        <AppProvider>
            <ThemeProvider theme={theme}>
                <Route />
            </ThemeProvider>
        </AppProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
