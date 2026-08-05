import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import TutorialContent from "../components/tutorial/TutorialContent";

const AdminTutorial = () => {
    const [activeItem, setActiveItem] = useState(null);

    return(
        <div className="min-h-screen bg-slate-100">
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-6">
                <div className="grid grid-cols-12 gap-6">

                    {/* Sidebar */}
                    <div className="col-span-3">
                        <Sidebar
                            activeItem={activeItem}
                            setActiveItem={setActiveItem}
                        />
                    </div>

                    { /* Content */ }
                    <div className="col-span-9">
                        <TutorialContent
                         activeItem={activeItem}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminTutorial;