import { useEffect, useState } from "react";

import {
    HiOutlineBars3,
    HiOutlineBookOpen,
    HiOutlineChevronDown,
    HiOutlineChevronRight,
    HiOutlineXMark,
    HiOutlineHome,
} from "react-icons/hi2";

import tutorialAdmin from "../../data/tutorialAdmin";

const Sidebar = ({ activeItem, setActiveItem }) => {
    const [openMenus, setOpenMenus] = useState({});
    const [mobileOpen, setMobileOpen] = useState(false);

    /* =========================================================
       BUKA / TUTUP MENU
    ========================================================= */
    const toggleMenu = (menuId) => {
        setOpenMenus((prev) => ({
            ...prev,
            [menuId]: !prev[menuId],
        }));
    };

    /* =========================================================
       PILIH SUB MENU
    ========================================================= */
    const handleSelect = (menuId, itemId) => {
        setActiveItem(itemId);

        setOpenMenus((prev) => ({
            ...prev,
            [menuId]: true,
        }));

        setMobileOpen(false);
    };

    /* =========================================================
       OTOMATIS BUKA PARENT MENU
       JIKA CHILD SEDANG AKTIF
    ========================================================= */
    useEffect(() => {
        if (!activeItem) return;

        const parent = tutorialAdmin.find((menu) =>
            menu.children?.some((child) => child.id === activeItem)
        );

        if (parent) {
            setOpenMenus((prev) => ({
                ...prev,
                [parent.id]: true,
            }));
        }
    }, [activeItem]);

    /* =========================================================
       KEMBALI KE MENU UTAMA
    ========================================================= */
    const handleBackToHome = () => {
        window.location.href = "/";
    };

    return (
        <>
            {/* =================================================
                MOBILE BUTTON
            ================================================= */}
            <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-label="Buka menu"
                className="
                    fixed left-4 top-4 z-50
                    flex h-11 w-11 items-center justify-center
                    rounded-xl
                    border border-slate-200
                    bg-white
                    text-slate-700
                    shadow-sm
                    transition
                    hover:bg-slate-50
                    hover:shadow-md
                    lg:hidden
                "
            >
                <HiOutlineBars3 className="h-6 w-6" />
            </button>

            {/* =================================================
                OVERLAY MOBILE
            ================================================= */}
            {mobileOpen && (
                <button
                    type="button"
                    aria-label="Tutup menu"
                    onClick={() => setMobileOpen(false)}
                    className="
                        fixed inset-0 z-40
                        bg-slate-900/30
                        backdrop-blur-sm
                        lg:hidden
                    "
                />
            )}

            {/* =================================================
                SIDEBAR
            ================================================= */}
            <aside
                className={`
                    fixed left-0 top-0 z-50
                    h-screen w-[300px]
                    border-r border-slate-200
                    bg-white
                    shadow-xl
                    transition-transform duration-300

                    lg:w-80
                    lg:shadow-none

                    ${
                        mobileOpen
                            ? "translate-x-0"
                            : "-translate-x-full lg:translate-x-0"
                    }
                `}
            >
                {/* =================================================
                    HEADER
                ================================================= */}
                <div className="
                    flex items-center justify-between
                    border-b border-slate-200
                    px-5 py-5
                    sm:px-6
                ">
                    <div className="flex items-center gap-4">
                        <div className="
                            flex h-11 w-11 shrink-0
                            items-center justify-center
                            rounded-2xl
                            bg-blue-50
                        ">
                            <HiOutlineBookOpen className="
                                h-6 w-6
                                text-blue-600
                            " />
                        </div>

                        <div className="min-w-0">
                            <h1 className="
                                truncate
                                text-base font-bold
                                text-slate-900
                                sm:text-lg
                            ">
                                Dokumentasi Presensi
                            </h1>

                            <p className="
                                text-xs
                                text-slate-500
                                sm:text-sm
                            ">
                                Tutorial Admin
                            </p>
                        </div>
                    </div>

                    {/* Close Mobile */}
                    <button
                        type="button"
                        onClick={() => setMobileOpen(false)}
                        aria-label="Tutup menu"
                        className="
                            flex h-9 w-9
                            items-center justify-center
                            rounded-lg
                            text-slate-500
                            transition
                            hover:bg-slate-100
                            hover:text-slate-900
                            lg:hidden
                        "
                    >
                        <HiOutlineXMark className="h-6 w-6" />
                    </button>
                </div>

                {/* =================================================
                    MENU SIDEBAR
                ================================================= */}
                <nav className="
                    h-[calc(100vh-101px)]
                    overflow-y-auto
                    px-3 py-5
                    sm:px-4
                ">

                    {/* =================================================
                        KEMBALI KE MENU UTAMA
                    ================================================= */}
                    <button
                        type="button"
                        onClick={handleBackToHome}
                        className="
                            mb-6
                            flex w-full
                            items-center gap-3
                            rounded-xl
                            border border-slate-200
                            bg-white
                            px-3 py-3
                            text-left
                            text-sm font-semibold
                            text-slate-700
                            shadow-sm
                            transition

                            hover:border-blue-200
                            hover:bg-blue-50
                            hover:text-blue-600
                        "
                    >
                        <span className="
                            flex h-9 w-9 shrink-0
                            items-center justify-center
                            rounded-lg
                            bg-blue-50
                            text-blue-600
                        ">
                            <HiOutlineHome className="h-5 w-5" />
                        </span>

                        <span>
                            Kembali ke Menu Utama
                        </span>
                    </button>

                    {/* =================================================
                        LABEL
                    ================================================= */}
                    <div className="
                        mb-4
                        flex items-center gap-3
                        px-3
                    ">
                        <span className="
                            text-xs font-bold
                            uppercase
                            tracking-[0.12em]
                            text-slate-400
                        ">
                            Menu Tutorial
                        </span>

                        <div className="
                            h-px flex-1
                            bg-slate-100
                        " />
                    </div>

                    {/* =================================================
                        LIST MENU
                    ================================================= */}
                    <div className="space-y-1">
                        {tutorialAdmin.map((menu) => {
                            const Icon = menu.icon;

                            const hasChildren =
                                menu.children &&
                                menu.children.length > 0;

                            const isOpen =
                                Boolean(openMenus[menu.id]);

                            const childActive =
                                hasChildren &&
                                menu.children.some(
                                    (child) =>
                                        child.id === activeItem
                                );

                            return (
                                <div key={menu.id}>
                                    {/* =================================================
                                        PARENT MENU
                                    ================================================= */}
                                    <button
                                        type="button"
                                        onClick={() => {
                                            if (hasChildren) {
                                                toggleMenu(menu.id);
                                            } else {
                                                setActiveItem(menu.id);
                                                setMobileOpen(false);
                                            }
                                        }}
                                        className={`
                                            group
                                            flex w-full
                                            items-center
                                            justify-between
                                            rounded-xl
                                            px-3 py-3
                                            text-left
                                            transition

                                            ${
                                                isOpen || childActive
                                                    ? "bg-blue-50 text-blue-600"
                                                    : "text-slate-700 hover:bg-slate-50"
                                            }
                                        `}
                                    >
                                        <div className="
                                            flex min-w-0
                                            items-center gap-3
                                        ">
                                            {Icon && (
                                                <Icon
                                                    className={`
                                                        h-5 w-5
                                                        shrink-0

                                                        ${
                                                            isOpen ||
                                                            childActive
                                                                ? "text-blue-600"
                                                                : "text-slate-600 group-hover:text-blue-600"
                                                        }
                                                    `}
                                                />
                                            )}

                                            <span className={`
                                                truncate
                                                text-sm
                                                ${
                                                    isOpen ||
                                                    childActive
                                                        ? "font-semibold"
                                                        : "font-medium"
                                                }
                                            `}>
                                                {menu.title}
                                            </span>
                                        </div>

                                        {hasChildren && (
                                            isOpen ? (
                                                <HiOutlineChevronDown
                                                    className="
                                                        h-4 w-4
                                                        shrink-0
                                                        text-blue-500
                                                    "
                                                />
                                            ) : (
                                                <HiOutlineChevronRight
                                                    className="
                                                        h-4 w-4
                                                        shrink-0
                                                        text-slate-400
                                                    "
                                                />
                                            )
                                        )}
                                    </button>

                                    {/* =================================================
                                        CHILD MENU
                                    ================================================= */}
                                    {hasChildren && isOpen && (
                                        <div className="
                                            ml-5 mt-1
                                            border-l
                                            border-slate-200
                                            pl-3
                                        ">
                                            {menu.children.map(
                                                (child) => {
                                                    const isActive =
                                                        activeItem ===
                                                        child.id;

                                                    return (
                                                        <button
                                                            key={
                                                                child.id
                                                            }
                                                            type="button"
                                                            onClick={() =>
                                                                handleSelect(
                                                                    menu.id,
                                                                    child.id
                                                                )
                                                            }
                                                            className={`
                                                                group
                                                                flex w-full
                                                                items-center
                                                                gap-3
                                                                rounded-lg
                                                                px-3 py-2.5
                                                                text-left
                                                                text-sm
                                                                transition

                                                                ${
                                                                    isActive
                                                                        ? "bg-blue-50 font-semibold text-blue-600"
                                                                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                                                                }
                                                            `}
                                                        >
                                                            <span
                                                                className={`
                                                                    h-1.5 w-1.5
                                                                    shrink-0
                                                                    rounded-full

                                                                    ${
                                                                        isActive
                                                                            ? "bg-blue-600"
                                                                            : "bg-slate-300 group-hover:bg-blue-400"
                                                                    }
                                                                `}
                                                            />

                                                            <span className="
                                                                truncate
                                                            ">
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
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;