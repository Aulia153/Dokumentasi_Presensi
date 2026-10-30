import { useEffect, useState } from "react";
import {
    HiOutlineBars3, HiOutlineBookOpen, HiOutlineChevronDown,
    HiOutlineChevronRight, HiOutlineHome, HiOutlineXMark,
} from "react-icons/hi2";

import tutorialUser from "../../data/tutorialUser";

const SidebarUser = ({ activeItem, setActiveItem }) => {
    const [openMenus, setOpenMenus] = useState({});
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleMenu = (menuId) => {
        setOpenMenus((prev) => ({
            ...prev,
            [menuId]: !prev[menuId],
        }));
    };

    const handleSelectItem = (menuId, itemId) => {
        setActiveItem(itemId);

        setOpenMenus((prev) => ({
            ...prev,
            [menuId]: true,
        }));

        setMobileOpen(false);
    };

    useEffect(() => {
        if (!activeItem) return;

        const parentMenu = tutorialUser.find((menu) =>
            menu.children?.some((child) => child.id === activeItem)
        );

        if (parentMenu) {
            setOpenMenus((prev) => ({
                ...prev,
                [parentMenu.id]: true,
            }));
        }
    }, [activeItem]);

    const handleBackToHome = () => {
        window.location.href = "/";
    };

    return (
        <>
            {!mobileOpen && (
                <button
                    type="button"
                    onClick={() => setMobileOpen(true)}
                    aria-label="Buka menu navigasi"
                    className="fixed left-4 top-4 z-40 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-md transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 lg:hidden"
                >
                    <HiOutlineBars3 className="h-6 w-6" />
                </button>
            )}

            {mobileOpen && (
                <button
                    type="button"
                    aria-label="Tutup menu navigasi"
                    onClick={() => setMobileOpen(false)}
                    className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-[2px] lg:hidden"
                />
            )}

            <aside
                className={`fixed inset-y-0 left-0 z-50 flex h-dvh w-[290px] flex-col border-r border-slate-200/80 bg-white shadow-xl shadow-slate-900/5 transition-transform duration-300 ease-out sm:w-[300px] lg:w-80 lg:translate-x-0 lg:shadow-none ${
                    mobileOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                {/* Header */}
                <div className="shrink-0 border-b border-slate-100 px-5 py-5">
                    <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm shadow-blue-600/20">
                            <HiOutlineBookOpen className="h-6 w-6" />
                        </div>

                        <div className="min-w-0 flex-1">
                            <h1 className="truncate text-base font-bold tracking-tight text-slate-900">
                                Dokumentasi Presensi
                            </h1>

                            <div className="mt-1.5 flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                                <p className="text-xs font-medium text-slate-500">
                                    Tutorial Pengguna
                                </p>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => setMobileOpen(false)}
                            aria-label="Tutup menu"
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-2 focus-visible:outline-blue-600 lg:hidden"
                        >
                            <HiOutlineXMark className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* Navigation */}
                <nav
                    aria-label="Navigasi tutorial pengguna"
                    className="flex-1 overflow-y-auto px-4 py-5"
                >
                    <button
                        type="button"
                        onClick={handleBackToHome}
                        className="group mb-7 flex w-full items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 text-left transition duration-200 hover:border-blue-200 hover:bg-blue-50/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition group-hover:bg-blue-100 group-hover:text-blue-700">
                            <HiOutlineHome className="h-5 w-5" />
                        </span>

                        <span className="min-w-0 flex-1">
                            <span className="block text-sm font-semibold text-slate-700 group-hover:text-blue-700">
                                Menu Utama
                            </span>
                            <span className="mt-0.5 block text-xs text-slate-400">
                                Kembali ke beranda
                            </span>
                        </span>

                        <HiOutlineChevronRight className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-blue-600" />
                    </button>

                    <div className="mb-3 flex items-center gap-3 px-2">
                        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
                            Menu Tutorial
                        </span>
                        <span className="h-px flex-1 bg-slate-100" />
                    </div>

                    <div className="space-y-1">
                        {tutorialUser.map((menu) => (
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
                <div className="shrink-0 border-t border-slate-100 px-5 py-4">
                    <div className="flex items-center gap-2.5">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                            <HiOutlineBookOpen className="h-4 w-4" />
                        </span>
                        <div>
                            <p className="text-xs font-semibold text-slate-600">
                                Presensi Digital
                            </p>
                            <p className="mt-0.5 text-[11px] text-slate-400">
                                Dokumentasi aplikasi
                            </p>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
};

const SidebarMenu = ({
    menu,
    activeItem,
    isOpen,
    onToggle,
    onSelect,
}) => {
    const Icon = menu.icon;
    const hasChildren = Boolean(menu.children?.length);

    const hasActiveChild =
        hasChildren &&
        menu.children.some((child) => child.id === activeItem);

    const isActive = isOpen || hasActiveChild;

    const handleClick = () => {
        if (hasChildren) {
            onToggle(menu.id);
        } else {
            onSelect(menu.id, menu.id);
        }
    };

    return (
        <div>
            <button
                type="button"
                onClick={handleClick}
                aria-expanded={hasChildren ? isOpen : undefined}
                className={`group flex w-full items-center justify-between gap-3 rounded-xl border px-3 py-2.5 text-left transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-600 ${
                    isActive
                        ? "border-blue-100 bg-blue-50 text-blue-700"
                        : "border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
            >
                <span className="flex min-w-0 items-center gap-3">
                    {Icon && (
                        <span
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition ${
                                isActive
                                    ? "bg-white text-blue-600 shadow-sm"
                                    : "text-slate-500 group-hover:bg-white group-hover:text-blue-600"
                            }`}
                        >
                            <Icon className="h-5 w-5" />
                        </span>
                    )}

                    <span
                        className={`truncate text-sm ${
                            isActive ? "font-semibold" : "font-medium"
                        }`}
                    >
                        {menu.title}
                    </span>
                </span>

                {hasChildren && (
                    isOpen ? (
                        <HiOutlineChevronDown className="h-4 w-4 shrink-0 text-blue-600" />
                    ) : (
                        <HiOutlineChevronRight className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:translate-x-0.5" />
                    )
                )}
            </button>

            {hasChildren && isOpen && (
                <div className="relative ml-5 mt-1.5 space-y-1 border-l border-slate-200 pl-3">
                    {menu.children.map((item) => {
                        const selected = activeItem === item.id;

                        return (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => onSelect(menu.id, item.id)}
                                aria-current={selected ? "page" : undefined}
                                className={`group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-600 ${
                                    selected
                                        ? "bg-blue-50 font-semibold text-blue-700"
                                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                                }`}
                            >
                                <span
                                    className={`h-1.5 w-1.5 shrink-0 rounded-full transition ${
                                        selected
                                            ? "bg-blue-600 ring-4 ring-blue-100"
                                            : "bg-slate-300 group-hover:bg-blue-400"
                                    }`}
                                />
                                <span className="truncate">{item.title}</span>
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default SidebarUser;