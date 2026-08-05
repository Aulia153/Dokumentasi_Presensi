import {
    createBrowserRouter,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home"
import AdminTutorial from "../pages/AdminTutorial";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "admin",
                element: <AdminTutorial />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;