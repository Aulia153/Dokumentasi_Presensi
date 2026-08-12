import { useState } from "react";
import {
    HiOutlineChevronDown,
    HiOutlineChevronRight,
    HiOutlineBookOpen,
} from "react-icons/hi2";

const Sidebar = ({
    data,
    selectedTutorial,
    onSelectTutorial,
}) => {

    const [openMenus, setOpenMenus] = useState({
        login: true,
    });

    const toggleMenu = (menuId) => {
        setOpenMenus((prev) => ({
            ...prev,
            [menuId]: !prev[menuId],
        }));
    };

    return (
        <aside className="w-[280px] min-h-screen bg-white border-r border-slate-200 shadow-[4px_0_15px_rgba(15,23,42,0.08)]">

            {/* HEADER */}
            <div className="px-5 py-6 border-b border-slate-200">

                <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                        <HiOutlineBookOpen className="text-xl text-blue-600" />
                    </div>

                    <div>
                        <h1 className="text-sm font-bold text-slate-900">
                            Dokumentasi Presensi
                        </h1>

                        <p className="text-xs text-slate-500">
                            Tutorial Admin
                        </p>
                    </div>

                </div>

            </div>


            {/* MENU */}
            <div className="p-4">

                <p className="px-3 mb-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Menu Tutorial
                </p>


                <div className="space-y-1">

                    {data.map((menu) => {

                        const Icon = menu.icon;

                        const isOpen = !!openMenus[menu.id];

                        return (
                            <div key={menu.id}>

                                {/* MENU UTAMA */}

                                <button
                                    type="button"
                                    onClick={() => toggleMenu(menu.id)}
                                    className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition"
                                >

                                    <div className="flex items-center gap-3">

                                        {Icon && (
                                            <Icon className="text-lg" />
                                        )}

                                        <span>
                                            {menu.title}
                                        </span>

                                    </div>


                                    {isOpen ? (
                                        <HiOutlineChevronDown />
                                    ) : (
                                        <HiOutlineChevronRight />
                                    )}

                                </button>


                                {/* SUB MENU */}

                                {isOpen && menu.children && menu.children.length > 0 && (

                                    <div className="ml-4 mt-1 pl-3 border-l border-slate-200">

                                        <div className="space-y-1">

                                            {menu.children.map((child) => {

                                                const active =
                                                    selectedTutorial?.id === child.id;

                                                return (
                                                    <button
                                                        key={child.id}
                                                        type="button"
                                                        onClick={() =>
                                                            onSelectTutorial(child)
                                                        }
                                                        className={`
                                                            w-full
                                                            text-left
                                                            px-3
                                                            py-2.5
                                                            rounded-lg
                                                            text-sm
                                                            transition
                                                            ${
                                                                active
                                                                    ? "bg-blue-50 text-blue-600 font-semibold"
                                                                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                                                            }
                                                        `}
                                                    >

                                                        <div className="flex items-center gap-2">

                                                            <span
                                                                className={`
                                                                    w-1.5
                                                                    h-1.5
                                                                    rounded-full
                                                                    ${
                                                                        active
                                                                            ? "bg-blue-600"
                                                                            : "bg-slate-300"
                                                                    }
                                                                `}
                                                            />

                                                            <span>
                                                                {child.title}
                                                            </span>

                                                        </div>

                                                    </button>
                                                );
                                            })}

                                        </div>

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

export default Sidebar;