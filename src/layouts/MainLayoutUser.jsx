import SidebarUser from "../components/layout/SidebarUser";

const MainLayoutUser = ({ children, activeItem, setActiveItem }) => {
    return (
        <div className="min-h-screen bg-slate-100 text-slate-800">
            <SidebarUser
                activeItem={activeItem}
                setActiveItem={setActiveItem}
            />

            {/* CONTENT AREA */}
            {/* pt-16 memberi jarak atas untuk mobile, pl-4 sm:pl-6 untuk padding internal */}
            <main className="min-h-screen w-full transition-all duration-200 pt-16 lg:pt-0 lg:pl-80">
                <div className="p-4 sm:p-6 lg:p-8">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default MainLayoutUser;