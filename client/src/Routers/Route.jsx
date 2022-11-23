import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import Login from "../pages/Login/Login";
import HomePage from "../pages/Homepage/HomePage";
import Registration from "../pages/Registration/Registration";
import Cars from "../pages/Cars/Cars";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/login", element: <Login /> },
            { path: "/registration", element: <Registration /> },
            { path: "/cars", element: <Cars /> }
        ],
    },
]);

export default function Route() {
    return <RouterProvider router={router} />;
}