import SidebarUser from "../components/layout/SidebarUser";

const MainLayoutUser = ({ children }) => {
    return (
        <div className="min-h-screen bg-slate-100 text-slate-800">
            <div className="flex min-h-screen">
                <SidebarUser />

                {/* CONTENT */}
                <main className="flex-1 min-w-0">
                    {children}
                </main>

            </div>
        </div>
    );
};

export default MainLayoutUser;