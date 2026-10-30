import SidebarAdmin from "../components/layout/SidebarAdmin";
import Footer from "../components/common/Footer";
import SidebarUser from "../components/layout/SidebarUser";

const MainLayout = ({
    children,
    role = "admin",
    activeItem,
    setActiveItem,
}) => {
    const isUser = role === "user";

    return (
        <div className="min-h-screen bg-slate-100 text-slate-800">

            {isUser ? (
                <SidebarUser
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                />
            ) : (
                <SidebarAdmin
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                />
            )}

            <div className="flex min-h-screen min-w-0 flex-col lg:ml-80">
                <main className="min-w-0 flex-1">
                    {children}
                </main>

                <Footer/>
            </div>
        </div>
    );
};

export default MainLayout;