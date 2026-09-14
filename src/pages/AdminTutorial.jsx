import { useEffect, useState } from "react";

import Sidebar from "../components/layout/SidebarAdmin";
import TutorialContent from "../components/tutorial/TutorialContent";
import tutorialAdmin from "../data/tutorialAdmin";

import {
    HiOutlineArrowRight,
    HiOutlineBookOpen,
    HiOutlineShieldCheck,
} from "react-icons/hi2";

// Ambil semua tutorial dari children
const allTutorials = tutorialAdmin.flatMap(
    (menu) => menu.children || []
);

const AdminTutorial = () => {
    const [activeItem, setActiveItem] = useState(null);
    // Cari tutorial yang sedang aktif
    const activeTutorial = allTutorials.find(
        (item) => item.id === activeItem
    );

    useEffect(() => {
        if (activeItem) {
            window.scrollTo({top: 0, behavior: "smooth",});
        }}, [activeItem]);

    return (
        <div className="min-h-screen bg-slate-50">

            {/* SIDEBAR */}
            <Sidebar activeItem={activeItem} setActiveItem={setActiveItem}/>

            {/* MAIN */}
            <main className="min-h-screen min-w-0 lg:ml-80">
                {activeTutorial ? (
                    <TutorialContent tutorial={activeTutorial}/>
                ) : (
                    <WelcomeAdmin
                        tutorialAdmin={tutorialAdmin}
                        setActiveItem={setActiveItem}
                    />
                )}

            </main>
        </div>
    );
};

//WELCOME ADMIN
const WelcomeAdmin = ({tutorialAdmin, setActiveItem, }) => {
    const totalMenu = tutorialAdmin.length;
    const totalTutorial = tutorialAdmin.reduce(
        (total, menu) =>
            total + (menu.children?.length || 0),
        0);

    const firstTutorial =
        tutorialAdmin[0]?.children?.[0];
    const handleStart = () => {
        if (firstTutorial) {
            setActiveItem(firstTutorial.id);}
    };

    return (
        <div className="min-h-screen">
            {/* HERO */}
            <section className="border-b border-slate-200 bg-white">
                <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8 lg:px-10">
                    <div className="grid items-center gap-8 lg:grid-cols-[1fr_260px]">
                        {/* LEFT */}
                        <div>
                            {/* Label */}
                            <div className="inline-flex items-center gap-2 rounded-lg border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                                <HiOutlineBookOpen className="h-4 w-4" />
                                Dokumentasi Sistem
                            </div>

                            {/* Title */}
                            <h1 className=" mt-5 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                                Selamat Datang di
                                <span className="block text-blue-600">
                                    Dokumentasi Presensi
                                </span>
                            </h1>

                            {/* Description */}
                            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                                Panduan penggunaan Sistem Presensi Digital
                                Kabupaten Sidoarjo untuk Admin OPD dalam
                                mengelola dan memantau presensi pegawai.
                            </p>

                            <p className="mt-2 text-sm text-slate-400">
                                Pilih menu tutorial pada sidebar untuk
                                mempelajari fitur yang tersedia.
                            </p>

                            {/* Button */}
                            <button
                                type="button"
                                onClick={handleStart}
                                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
                                Mulai Tutorial
                                <HiOutlineArrowRight className="h-4 w-4" />
                            </button>
                        </div>

                        {/* RIGHT SUMMARY */}
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                            <div className="border-b border-slate-200 pb-4">
                                <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                                    Dokumentasi Admin
                                </p>

                                <p className="mt-1 text-sm text-slate-500">
                                    Panduan penggunaan sistem
                                </p>
                            </div>

                            {/* Statistics */}
                            <div className="grid grid-cols-2 divide-x divide-slate-200 py-5">
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-slate-900">
                                        {totalMenu}
                                    </p>

                                    <p className="mt-1 text-xs text-slate-500">
                                        Menu
                                    </p>
                                </div>

                                <div className="text-center">
                                    <p className="text-2xl font-bold text-slate-900">
                                        {totalTutorial}
                                    </p>

                                    <p className="mt-1 text-xs text-slate-500">
                                        Tutorial
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* QUICK ACCESS */}
            <section className="bg-slate-50 px-6 py-8 sm:px-8 lg:px-10">
                <div className="mx-auto max-w-6xl">
                    {/* Section Heading */}
                    <div className="mb-5">
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-700">
                            Akses Cepat
                        </p>

                        <div className="mt-1 flex items-center justify-between">
                            <div>
                                <h2 className=" text-2xl font-bold text-slate-900">
                                    Mulai dari sini
                                </h2>

                                <p className="mt-1 text-sm text-slate-500">
                                    Pilih bagian dokumentasi yang ingin dipelajari.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Cards */}
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {tutorialAdmin.map((menu) => {
                            const Icon = menu.icon;
                            const firstTutorial =
                                menu.children?.[0];

                            return (
                                <button
                                    key={menu.id}
                                    type="button"
                                    onClick={() => {
                                        if (firstTutorial) {
                                            setActiveItem(
                                                firstTutorial.id
                                            );
                                        }
                                    }}
                                    className="group rounded-xl border border-slate-200 bg-white p-5 text-left transition duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md">

                                    {/* Icon + Arrow */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                                            {Icon && (
                                                <Icon className="h-5 w-5" />
                                            )}
                                        </div>

                                        <HiOutlineArrowRight className=" h-4 w-4 text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600"/>
                                    </div>

                                    {/* Title */}
                                    <h3 className="mt-4 text-base font-bold text-slate-900">
                                        {menu.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-1.5 line-clamp-2 text-sm leading-5 text-slate-500">
                                        {firstTutorial?.description ||
                                            `Pelajari fitur ${menu.title}.`}
                                    </p>

                                    {/* Bottom */}
                                    <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                                        <span className="text-xs font-semibold text-blue-700">
                                            Buka Panduan
                                        </span>

                                        <span className="text-xs text-slate-400">
                                            {menu.children?.length || 0} tutorial
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FOOTER */}

            <footer className="border-t border-slate-200 bg-white">
                <div className="mx-auto flex items-center justify-center gap-2 px-6 py-5 text-xs text-slate-400">
                    <HiOutlineShieldCheck className="h-4 w-4 text-blue-600"/>

                    <span>
                        Sistem Presensi Digital Kabupaten Sidoarjo
                    </span>
                </div>
            </footer>

        </div>
    );
};

export default AdminTutorial;