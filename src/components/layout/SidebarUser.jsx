import { useState } from "react";
import {
    HiOutlineBookOpen,
    HiChevronDown,
    HiOutlineHome,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

import tutorialUser from "../../data/tutorialUser";

const SidebarUser = ({ activeItem, setActiveItem }) => {
    // Menyimpan parent menu yang sedang terbuka
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (id) => {
        setOpenDropdown((prev) =>
            prev === id ? null : id
        );
    };

    return (
        <aside className="fixed left-0 top-0 z-40 h-screen w-80 border-r border-slate-200 bg-white">

            {/* =====================================================
                HEADER
            ===================================================== */}
            <div className="flex items-center gap-4 border-b border-slate-200 px-6 py-6">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50">
                    <HiOutlineBookOpen className="h-7 w-7 text-blue-600" />
                </div>

                <div className="min-w-0">
                    <h1 className="truncate text-lg font-bold text-slate-900">
                        Dokumentasi Presensi
                    </h1>

                    <p className="text-sm text-slate-500">
                        Tutorial Pengguna
                    </p>
                </div>

            </div>


            {/* =====================================================
                MENU
            ===================================================== */}
            <div className="h-[calc(100vh-105px)] overflow-y-auto px-4 py-6">

                {/* KEMBALI KE MENU UTAMA */}
                <Link
                    to="/"
                    className="
                        mb-6
                        flex w-full items-center gap-3
                        rounded-xl
                        border border-slate-200
                        bg-white
                        px-4 py-3
                        text-sm font-semibold
                        text-slate-700
                        shadow-sm
                        transition-all duration-200
                        hover:border-blue-200
                        hover:bg-blue-50
                        hover:text-blue-600
                        hover:shadow
                    "
                >
                    <div className="
                        flex h-8 w-8 shrink-0
                        items-center justify-center
                        rounded-lg
                        bg-blue-50
                    ">
                        <HiOutlineHome className="h-5 w-5 text-blue-600" />
                    </div>

                    <span>
                        Kembali ke Menu Utama
                    </span>
                </Link>


                {/* JUDUL MENU */}
                <div className="mb-5 flex items-center gap-3 px-3">
                    <span className="h-px flex-1 bg-slate-100" />

                    <p className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-slate-400
                    ">
                        Menu Tutorial
                    </p>

                    <span className="h-px flex-1 bg-slate-100" />
                </div>


                {/* DAFTAR MENU */}
                <div className="space-y-1">

                    {tutorialUser.map((menu) => {

                        const Icon = menu.icon;

                        const hasChildren =
                            menu.children &&
                            menu.children.length > 0;

                        // Apakah salah satu child sedang aktif?
                        const childActive =
                            hasChildren &&
                            menu.children.some(
                                (child) =>
                                    child.id === activeItem
                            );

                        // Parent aktif jika:
                        // 1. Tidak punya children dan id-nya aktif
                        // 2. Salah satu child sedang aktif
                        const isActive = hasChildren
                            ? childActive
                            : activeItem === menu.id;

                        const isOpen =
                            openDropdown === menu.id;

                        return (
                            <div key={menu.id}>

                                {/* =================================================
                                    PARENT MENU
                                ================================================= */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        hasChildren
                                            ? toggleDropdown(menu.id)
                                            : setActiveItem(menu.id)
                                    }
                                    className={`
                                        group
                                        flex w-full
                                        items-center gap-3
                                        rounded-xl
                                        px-3 py-3
                                        text-left
                                        transition-all duration-200

                                        ${
                                            isActive
                                                ? "bg-blue-50 font-semibold text-blue-600"
                                                : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                                        }
                                    `}
                                >

                                    {/* ICON */}
                                    {Icon && (
                                        <div
                                            className={`
                                                flex h-9 w-9
                                                shrink-0
                                                items-center justify-center
                                                rounded-lg
                                                transition

                                                ${
                                                    isActive
                                                        ? "bg-white shadow-sm"
                                                        : "bg-transparent"
                                                }
                                            `}
                                        >
                                            <Icon
                                                className={`
                                                    h-5 w-5

                                                    ${
                                                        isActive
                                                            ? "text-blue-600"
                                                            : "text-slate-600 group-hover:text-blue-600"
                                                    }
                                                `}
                                            />
                                        </div>
                                    )}

                                    {/* TITLE */}
                                    <span className="flex-1 truncate text-sm font-semibold">
                                        {menu.title}
                                    </span>

                                    {/* CHEVRON */}
                                    {hasChildren && (
                                        <HiChevronDown
                                            className={`
                                                h-4 w-4
                                                shrink-0
                                                transition-transform
                                                duration-200

                                                ${
                                                    isOpen
                                                        ? "rotate-180"
                                                        : ""
                                                }

                                                ${
                                                    isActive
                                                        ? "text-blue-600"
                                                        : "text-slate-400"
                                                }
                                            `}
                                        />
                                    )}

                                </button>


                                {/* =================================================
                                    CHILDREN
                                ================================================= */}
                                {hasChildren && isOpen && (
                                    <div className="
                                        ml-5
                                        mt-1
                                        space-y-1
                                        border-l
                                        border-slate-200
                                        pl-3
                                    ">

                                        {menu.children.map((child) => {

                                            const isChildActive =
                                                activeItem === child.id;

                                            return (
                                                <button
                                                    key={child.id}
                                                    type="button"
                                                    onClick={() =>
                                                        setActiveItem(
                                                            child.id
                                                        )
                                                    }
                                                    className={`
                                                        group
                                                        flex w-full
                                                        items-center gap-3
                                                        rounded-lg
                                                        px-3 py-2.5
                                                        text-left
                                                        text-sm
                                                        transition-all
                                                        duration-200

                                                        ${
                                                            isChildActive
                                                                ? "bg-blue-50 font-semibold text-blue-600"
                                                                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                                        }
                                                    `}
                                                >

                                                    {/* BULLET */}
                                                    <span
                                                        className={`
                                                            h-2 w-2
                                                            shrink-0
                                                            rounded-full
                                                            transition

                                                            ${
                                                                isChildActive
                                                                    ? "bg-blue-600"
                                                                    : "bg-slate-300 group-hover:bg-blue-300"
                                                            }
                                                        `}
                                                    />

                                                    {/* CHILD TITLE */}
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