import Sidebar from "../components/layout/Sidebar";

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-slate-100 text-slate-800">
            <div className="flex min-h-screen">
                <Sidebar />

                {/* CONTENT */}
                <main className="flex-1 min-w-0">
                    {children}
                </main>

            </div>
        </div>
    );
};

export default MainLayout;