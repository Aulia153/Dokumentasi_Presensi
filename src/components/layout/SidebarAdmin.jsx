import { useEffect, useState } from "react";
import {
    HiOutlineBars3, HiOutlineBookOpen, HiOutlineChevronDown,
    HiOutlineChevronRight, HiOutlineHome, HiOutlineXMark,
} from "react-icons/hi2";

import tutorialAdmin from "../../data/tutorialAdmin";

const baseMenuClass = "group relative flex w-full items-center rounded-xl text-left transition-all duration-200";
const iconBoxClass = "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-all duration-200";

//SIDEBAR ADMIN
const SidebarAdmin = ({ activeItem, setActiveItem }) => {
    const [openMenus, setOpenMenus] = useState({});
    const [mobileOpen, setMobileOpen] = useState(false);

    //Buka Tutup menu utama
    const toggleMenu = (menuId) => {
        setOpenMenus((prev) => ({
            ...prev, [menuId]: !prev[menuId],
        }));
    };

    //Pilih tutorial 
    const handleSelectItem = (menuId, itemId) => {
        setActiveItem(itemId);

        //parent otomoatis
        setOpenMenus((prev) => ({
            ...prev, [menuId]: true,
        }));

        //tutup sidebar (tampilan movile)
        setMobileOpen(false);
    };

    useEffect(() => {
        if(!activeItem) return;

        const parentMenu = tutorialAdmin.find((menu) => 
        menu.children?.some((child) => child.id === activeItem));

        if (!parentMenu) return;

        setOpenMenus((prev) => ({
            ...prev, [parentMenu.id]: true,
        }));
    }, [activeItem]);

    //Kembali ke halaman utama
    const handleBackToHome = () => {
        window.location.href = "/";
    };

    return (
        <>
        {/* Tombol menu mobile */}
        <MobileMenuButton onClick={() => setMobileOpen(true)}/>

        {/* Mobile Overlay */}
        {mobileOpen && (
            <MobileOverlay onClick={() => setMobileOpen(false)}/>
        )}

        {/* Sidebar */}
        <aside className={`fixed left-0 top-0 z-50 flex h-screen w-[300px] flex-col border-r border-slate-200 bg-white shadow-xl shadow-slate-900/5 transition-transform duration-300 lg:w-80 lg:shadow-none
            ${ mobileOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            }`}
        >

            {/* Header */}
            <SidebarHeader onClose ={() => setMobileOpen(false)}/>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto px-3 py-5 sm:px-4">
                <BackToHomeButton onClick = {handleBackToHome}/>

                <MenuLabel/>
                <div className="space-y-1.5">
                    {tutorialAdmin.map((menu) => (
                        <SidebarMenu
                            key={menu.id}
                            menu={menu}
                            activeItem={activeItem}
                            isOpen={Boolean(openMenus[menu.id])}
                            onToggle={toggleMenu}
                            onSelect={handleSelectItem}
                        />
                    ))}
                </div>
            </nav>
            
            {/* Footer */}
            <SidebarFooter/>
        </aside>
        </>
    );
};

//Mobile Buttom
const MobileMenuButton = ({ onClick }) => (
    <button 
        type="button"
        onClick={onClick}
        aria-label="Buka menu"
        className="fixed left-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white
                    text-slate-700 shadow-sm transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md lg:hidden">
        
        <HiOutlineBars3 className="h-6 w-6"/>
    </button>   
);

//Mobile Overlay
const MobileOverlay = ({onClick}) => (
    <button
        type="button"
        aria-label="Tutup menu"
        onClick={onClick}
        className="fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-sm lg:hidden"/>
);

//Sidebar Header
const SidebarHeader = ({onClose}) => (
    <div className="shrink-0 border-b border-slate-200 px-5 py-5 sm:px-6">
        <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
                
                {/* Ikon Aplikasi */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600">
                    <HiOutlineBookOpen className="h-6 w-6"/>
                </div>

                <div className="min-w-0">
                    <h1 className="truncate text-base font-bold tracking-tight text-slate-900 sm:text-lg">
                        Dokumentasi Presensi
                    </h1>

                    <div className="mt-1 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-600"/>

                        <p className="text-xs font-medium text-slate-500 sm:text-sm">
                            Tutorial Admin
                        </p>
                    </div>
                </div>
            </div>

            {/* Mobile toggle tutup */}
            <button
                type="button"
                onClick={onClose}
                aria-label="Tutup menu"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors
                            hover:bg-slate-100 hover:text-slate-700 lg:hidden">
                
                <HiOutlineXMark className="h-6 w-6"/>
            </button>   
        </div>
    </div>
);

//Back to home
const BackToHomeButton = ({onClick}) => (
    <button 
        type="button"
        onClick={onClick}
        className="group mb-6 flex w-full items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-3
                    text-left transition-all duration-200 hover:border-blue-200 hover:bg-blue-50/70 hover:shadow-sm">
        
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600
                        transition-colors duration-200 group-hover:bg-blue-100 group-hover:text-blue-600">
            
            <HiOutlineHome className="h-5 w-5"/>
        </span>

        <span className="min-w-0 flex-1">
            <span className="block text-sm font-semibold text-slate-700 transition-colors group-hover:text-blue-700">
                Kembali ke Menu Utama
            </span>

            <span className="mt-0.5 block text-xs text-slate-400">
                Pilih menu lainnya
            </span>
        </span>

        <HiOutlineChevronRight className="h-4 w-4 shrink-0 text-slate-400 transition-all duration-200 group-hover:translate-x-1 group-hover:text-blue-600"/>
    </button>
);

//Menu Label
const MenuLabel = () => (
    <div className="mb-3 flex items-center gap-3 px-3">
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
            Menu Tutorial 
        </span>

        <div className="h-px flex-1 bg-slate-100"/>
    </div>
);

//Parent Menu
const SidebarMenu = ({
    menu, activeItem, isOpen, 
    onToggle, onSelect,
}) => {
    const Icon = menu.icon;

    const hasChildren = Boolean (
        menu.children && menu.children.length > 0 
    );
    const hasActiveChild = hasChildren && menu.children.some(
        (child) => child.id === activeItem
    );

    const isActive = isOpen || hasActiveChild;

    const handleClick = () => {
        if (hasChildren) {
            onToggle(menu.id);
            return;
        }

        onSelect(menu.id, menu.id);
    };

    return (
        <div>
            <button
                type="button"
                onClick={handleClick}
                aria-expanded={hasChildren ? isOpen : undefined}
                className={`
                    ${baseMenuClass}
                    justify-between gap-3 border px-3 py-2
                    ${
                        isActive
                            ? "border-blue-100 bg-blue-50/80 text-blue-700"
                            : "border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }
            `}>

                <div className="flex min-w-0 items-center gap-3">
                    {Icon && (
                        <span
                            className={`
                                ${iconBoxClass}
                                ${isActive
                                    ? "bg-white text-blue-600 shadow-sm ring-1 ring-blue-100"
                                    : "text-slate-500 group-hover:bg-white group-hover:text-blue-600"
                                }
                        `}>
                            <Icon className="h-5 w-5"/>
                        </span>
                    )}

                    <span
                        className={`truncate text-sm
                            ${isActive ? "font-semibold" : "font-medium"}
                        `}
                    >
                        {menu.title}
                    </span>
                </div>

                {hasChildren && (
                    <span className="ml-2 flex h-6 w-6 shrink-0 items-center justify-center">
                        {isOpen ? (
                            <HiOutlineChevronDown className="h-4 w-4 text-blue-500"/>
                        ) : (
                            <HiOutlineChevronRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5"/>
                        )}
                    </span>
                )}
            </button>

            {/* Submenu */}
            {hasChildren && isOpen && (
                <SubMenu
                    items={menu.children}
                    activeItem={activeItem}
                    menuId={menu.id}
                    onSelect={onSelect}
                />
            )}
        </div>
    );
};

//Sub Menu
const SubMenu = ({ items, activeItem, menuId, onSelect}) => (
    <div className="relative ml-5 mt-1 space-y-0.5 border-l border-slate-200 pl-3">
        {items.map((item) => {
            const isActive = activeItem === item.id;

            return (
                <button
                    key={item.id}
                    type="button"
                    onClick={() => onSelect(menuId, item.id)}
                    className={`group flex w-full items-center gap-3 rounded-lg px-3 py-2.5
                        text-left text-sm transition-all duration-200
                        ${ isActive
                            ? "bg-blue-50 font-semibold text-blue-700"
                            : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                        }
                `}>
                    
                    <span className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-200
                        ${isActive
                            ? "bg-blue-600 ring-4 ring-blue-100"
                            : "bg-slate-300 group-hover:bg-blue-400"
                        }
                    `}/>

                    <span className="truncate">{item.title}</span>
                </button>
            );
        })}
    </div>
);

//Footer sidebar
const SidebarFooter = () => (
    <div className="hidden shrink-0 border-t border-slate-100 px-5 py-4 lg:block">
        <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"/>

            <span>Dokumentasi Presensi Digital</span>
        </div>
    </div>
);

export default SidebarAdmin;