import { useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import TutorialContent from "../components/tutorial/TutorialContent";

import tutorialData from "../data/tutorialData";

const AdminTutorial = () => {

    // Tutorial pertama yang dibuka
    const firstTutorial =
        tutorialData[0]?.children?.[0] || null;

    const [selectedTutorial, setSelectedTutorial] =
        useState(firstTutorial);


    return (
        <div className="min-h-screen bg-[#eef5ff]">

            <div className="flex min-h-screen">

                {/* SIDEBAR */}

                <Sidebar
                    data={tutorialData}
                    selectedTutorial={selectedTutorial}
                    onSelectTutorial={setSelectedTutorial}
                />


                {/* CONTENT */}

                <div className="flex-1 min-w-0">

                    <TutorialContent
                        key={selectedTutorial?.id}
                        tutorial={selectedTutorial}
                    />

                </div>

            </div>

        </div>
    );
};

export default AdminTutorial;