import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from "../pages/Home";
import AdminTutorial from "../pages/AdminTutorial";
import UserTutorial from "../pages/UserTutorial";
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

                {/* TUTORIAL USER */}

                <Route
                    path="/user"
                    element={<UserTutorial />}
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