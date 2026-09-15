import { useState } from "react";
import { HiOutlineBookOpen, HiChevronDown } from "react-icons/hi2";
import tutorialUser from "../../data/tutorialUser";

const SidebarUser = ({ activeItem, setActiveItem }) => {
    // Menyimpan parent id yang sedang terbuka dropdown-nya
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (id) => {
        setOpenDropdown((prev) => (prev === id ? null : id));
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
                        const hasChildren =
                            menu.children && menu.children.length > 0;

                        // Cek apakah salah satu child sedang aktif
                        const childActive =
                            hasChildren &&
                            menu.children.some(
                                (c) => c.id === activeItem
                            );

                        // Parent dianggap aktif kalau:
                        // - tidak punya children & activeItem === menu.id, ATAU
                        // - punya children & salah satu child-nya aktif
                        const isActive = hasChildren
                            ? childActive
                            : activeItem === menu.id;

                        const isOpen = openDropdown === menu.id;

                        return (
                            <div key={menu.id}>

                                {/* PARENT BUTTON */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        hasChildren
                                            ? toggleDropdown(menu.id)
                                            : setActiveItem(menu.id)
                                    }
                                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition ${isActive
                                        ? "bg-blue-50 font-semibold text-blue-600"
                                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                                        }`}
                                >
                                    {Icon && (
                                        <Icon
                                            className={`h-5 w-5 shrink-0 ${isActive
                                                ? "text-blue-600"
                                                : "text-slate-600"
                                                }`}
                                        />
                                    )}

                                    <span className="flex-1 truncate text-sm font-semibold">
                                        {menu.title}
                                    </span>

                                    {hasChildren && (
                                        <HiChevronDown
                                            className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                                                } ${isActive
                                                    ? "text-blue-600"
                                                    : "text-slate-400"
                                                }`}
                                        />
                                    )}
                                </button>

                                {/* CHILDREN DROPDOWN */}
                                {hasChildren && isOpen && (
                                    <div className="mt-1 ml-4 space-y-1 border-l-2 border-slate-100 pl-3">
                                        {menu.children.map((child) => {
                                            const isChildActive =
                                                activeItem === child.id;

                                            return (
                                                <button
                                                    key={child.id}
                                                    type="button"
                                                    onClick={() =>
                                                        setActiveItem(child.id)
                                                    }
                                                    className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition ${isChildActive
                                                        ? "bg-blue-50 font-semibold text-blue-600"
                                                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                                        }`}
                                                >
                                                    {child.title}
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