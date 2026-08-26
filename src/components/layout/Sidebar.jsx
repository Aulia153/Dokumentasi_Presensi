import { useEffect, useState } from "react";
import {
    HiOutlineChevronDown,
    HiOutlineChevronRight,
    HiOutlineBookOpen,
    HiOutlineBars3,
    HiOutlineXMark,
} from "react-icons/hi2";

import tutorialData from "../../data/tutorialData";

const Sidebar = ({ activeItem, setActiveItem }) => {
    const [openMenus, setOpenMenus] = useState({});
    const [mobileOpen, setMobileOpen] = useState(false);

    // Buka / tutup menu
    const toggleMenu = (menuId) => {
        setOpenMenus((prev) => ({
            ...prev,
            [menuId]: !prev[menuId],
        }));
    };

    // Klik submenu
    const handleSubmenuClick = (menuId, itemId) => {
        setActiveItem(itemId);

        // Parent otomatis terbuka
        setOpenMenus((prev) => ({
            ...prev,
            [menuId]: true,
        }));

        // Tutup sidebar di mobile
        setMobileOpen(false);
    };

    // Kalau activeItem berubah dari Welcome,
    // parent menu otomatis terbuka
    useEffect(() => {
        if (!activeItem) return;

        const parentMenu = tutorialData.find((menu) =>
            menu.children?.some((child) => child.id === activeItem)
        );

        if (parentMenu) {
            setOpenMenus((prev) => ({
                ...prev,
                [parentMenu.id]: true,
            }));
        }
    }, [activeItem]);

    return (
        <>
            {/* =========================
                MOBILE HAMBURGER
            ========================== */}
            <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="fixed left-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-200 hover:shadow-md lg:hidden"
                aria-label="Buka menu"
            >
                <HiOutlineBars3 className="h-6 w-6" />
            </button>

            {/* =========================
                OVERLAY MOBILE
            ========================== */}
            {mobileOpen && (
                <div
                    onClick={() => setMobileOpen(false)}
                    className="fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-sm lg:hidden"
                />
            )}

            {/* =========================
                SIDEBAR
            ========================== */}
            <aside
                className={`
                    fixed left-0 top-0 z-50 h-screen w-[300px]
                    border-r border-slate-200 bg-white
                    shadow-xl lg:w-80 lg:shadow-none
                    transition-transform duration-300 ease-out
                    ${
                        mobileOpen
                            ? "translate-x-0"
                            : "-translate-x-full lg:translate-x-0"
                    }
                `}
            >
                {/* HEADER */}
                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-5 sm:px-6 sm:py-6">

                    <div className="flex items-center gap-4">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50">
                            <HiOutlineBookOpen className="h-6 w-6 text-blue-600" />
                        </div>

                        <div>
                            <h1 className="text-base font-bold text-slate-900 sm:text-lg">
                                Dokumentasi Presensi
                            </h1>

                            <p className="text-xs text-slate-500 sm:text-sm">
                                Tutorial Admin
                            </p>
                        </div>

                    </div>

                    {/* CLOSE MOBILE */}
                    <button
                        type="button"
                        onClick={() => setMobileOpen(false)}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 lg:hidden"
                    >
                        <HiOutlineXMark className="h-6 w-6" />
                    </button>

                </div>

                {/* MENU */}
                <div className="h-[calc(100vh-101px)] overflow-y-auto px-3 py-6 sm:px-4">

                    <p className="mb-5 px-3 text-xs font-bold uppercase tracking-[0.12em] text-slate-400 sm:text-sm">
                        Menu Tutorial
                    </p>

                    <div className="space-y-1">

                        {tutorialData.map((menu) => {
                            const Icon = menu.icon;
                            const isOpen = !!openMenus[menu.id];

                            return (
                                <div key={menu.id}>

                                    {/* MENU UTAMA */}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            toggleMenu(menu.id)
                                        }
                                        className={`
                                            group flex w-full items-center
                                            justify-between rounded-xl
                                            px-3 py-3 text-left
                                            transition-all duration-200
                                            ${
                                                isOpen
                                                    ? "bg-blue-50/70"
                                                    : "hover:bg-slate-50"
                                            }
                                        `}
                                    >

                                        <div className="flex min-w-0 items-center gap-3">

                                            {Icon && (
                                                <Icon
                                                    className={`
                                                        h-5 w-5 shrink-0
                                                        transition-all duration-200
                                                        ${
                                                            isOpen
                                                                ? "text-blue-600"
                                                                : "text-slate-600 group-hover:text-blue-600"
                                                        }
                                                    `}
                                                />
                                            )}

                                            <span
                                                className={`
                                                    truncate text-sm font-semibold
                                                    ${
                                                        isOpen
                                                            ? "text-slate-900"
                                                            : "text-slate-800"
                                                    }
                                                `}
                                            >
                                                {menu.title}
                                            </span>

                                        </div>

                                        {menu.children?.length > 0 && (
                                            isOpen ? (
                                                <HiOutlineChevronDown
                                                    className="h-4 w-4 shrink-0 text-slate-500"
                                                />
                                            ) : (
                                                <HiOutlineChevronRight
                                                    className="h-4 w-4 shrink-0 text-slate-500"
                                                />
                                            )
                                        )}

                                    </button>

                                    {/* SUBMENU */}
                                    {menu.children?.length > 0 &&
                                        isOpen && (
                                            <div className="ml-5 mt-1 border-l border-slate-200 pl-3">

                                                {menu.children.map(
                                                    (child) => {
                                                        const isActive =
                                                            activeItem ===
                                                            child.id;

                                                        return (
                                                            <button
                                                                key={child.id}
                                                                type="button"
                                                                onClick={() =>
                                                                    handleSubmenuClick(
                                                                        menu.id,
                                                                        child.id
                                                                    )
                                                                }
                                                                className={`
                                                                    group flex w-full
                                                                    items-center gap-3
                                                                    rounded-xl px-3 py-3
                                                                    text-left text-sm
                                                                    transition-all duration-200
                                                                    ${
                                                                        isActive
                                                                            ? "translate-x-0.5 bg-blue-50 font-semibold text-blue-600 shadow-sm"
                                                                            : "text-slate-500 hover:translate-x-0.5 hover:bg-slate-50 hover:text-slate-800"
                                                                    }
                                                                `}
                                                            >

                                                                <span
                                                                    className={`
                                                                        h-2 w-2 shrink-0 rounded-full
                                                                        transition-all duration-200
                                                                        ${
                                                                            isActive
                                                                                ? "scale-110 bg-blue-600"
                                                                                : "bg-slate-300 group-hover:bg-blue-300"
                                                                        }
                                                                    `}
                                                                />

                                                                <span className="truncate">
                                                                    {
                                                                        child.title
                                                                    }
                                                                </span>

                                                            </button>
                                                        );
                                                    }
                                                )}

                                            </div>
                                        )}

                                </div>
                            );
                        })}

                    </div>

                </div>
            </aside>
        </>
    );
};

export default Sidebar;