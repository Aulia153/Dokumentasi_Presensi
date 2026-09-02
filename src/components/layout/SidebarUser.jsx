import { useState } from "react";
import {
    HiOutlineChevronDown,
    HiOutlineChevronRight,
    HiOutlineBookOpen,
} from "react-icons/hi2";

import tutorialUser from "../../data/tutorialUser";

const SidebarUser = ({ activeItem, setActiveItem }) => {
    const [openMenus, setOpenMenus] = useState({
        login: true,
    });

    const toggleMenu = (menuId) => {
        setOpenMenus((prev) => ({
            ...prev,
            [menuId]: !prev[menuId],
        }));
    };

    const handleSubmenuClick = (itemId) => {
        setActiveItem(itemId);
    };

    return (
        <aside className="fixed left-0 top-0 z-40 h-screen w-80 border-r border-slate-200 bg-white">

            {/* HEADER */}
            <div className="flex items-center gap-4 border-b border-slate-200 px-6 py-6">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50">
                    <HiOutlineBookOpen className="h-7 w-7 text-blue-600" />
                </div>

                <div>
                    <h1 className="text-lg font-bold text-slate-900">
                        Dokumentasi Presensi
                    </h1>

                    <p className="text-sm text-slate-500">
                        Tutorial Pengguna
                    </p>
                </div>
            </div>

            {/* MENU */}
            <div className="h-[calc(100vh-105px)] overflow-y-auto px-4 py-6">

                <p className="mb-5 px-3 text-sm font-semibold uppercase tracking-wide text-slate-400">
                    Menu Tutorial
                </p>

                <div className="space-y-1">

                    {tutorialUser.map((menu) => {
                        const Icon = menu.icon;
                        const isOpen = openMenus[menu.id];

                        return (
                            <div key={menu.id}>

                                {/* MENU UTAMA */}
                                <button
                                    type="button"
                                    onClick={() => toggleMenu(menu.id)}
                                    className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left transition hover:bg-slate-50"
                                >
                                    <div className="flex min-w-0 items-center gap-3">

                                        {Icon && (
                                            <Icon className="h-5 w-5 shrink-0 text-slate-600" />
                                        )}

                                        <span className="truncate text-sm font-semibold text-slate-800">
                                            {menu.title}
                                        </span>
                                    </div>

                                    {menu.children?.length > 0 && (
                                        isOpen ? (
                                            <HiOutlineChevronDown className="h-4 w-4 shrink-0 text-slate-500" />
                                        ) : (
                                            <HiOutlineChevronRight className="h-4 w-4 shrink-0 text-slate-500" />
                                        )
                                    )}
                                </button>

                                {/* SUB MENU */}
                                {menu.children?.length > 0 && isOpen && (
                                    <div className="ml-5 mt-1 border-l border-slate-200 pl-3">

                                        {menu.children.map((child) => {

                                            const isActive =
                                                activeItem === child.id;

                                            return (
                                                <button
                                                    key={child.id}
                                                    type="button"
                                                    onClick={() =>
                                                        handleSubmenuClick(
                                                            child.id
                                                        )
                                                    }
                                                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition ${isActive
                                                        ? "bg-blue-50 font-semibold text-blue-600"
                                                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                                                        }`}
                                                >

                                                    <span
                                                        className={`h-2 w-2 shrink-0 rounded-full ${isActive
                                                            ? "bg-blue-600"
                                                            : "bg-slate-300"
                                                            }`}
                                                    />

                                                    <span className="truncate">
                                                        {child.title}
                                                    </span>

                                                </button>
                                            );
                                        })}

                                    </div>
                                )}

                            </div>
                        );
                    })}

                </div>
            </div>
        </aside>
    );
};

export default SidebarUser;