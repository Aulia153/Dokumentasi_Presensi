import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from "../pages/Home";
import AdminTutorial from "../pages/AdminTutorial";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {

    return (
        <BrowserRouter>

            <Routes>

                {/* LANDING PAGE */}

                <Route
                    path="/"
                    element={<Home />}
                />


                {/* TUTORIAL ADMIN */}

                <Route
                    path="/admin"
                    element={<AdminTutorial />}
                />


                {/* 404 */}

                <Route
                    path="*"
                    element={<NotFound />}
                />

            </Routes>

        </BrowserRouter>
    );
};

export default AppRoutes;