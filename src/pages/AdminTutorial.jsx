import { useMemo, useState } from "react";

import Sidebar from "../components/layout/SidebarAdmin";
import TutorialContent from "../components/tutorial/TutorialContent";
import tutorialAdmin from "../data/tutorialAdmin";

import {
    HiOutlineArrowRight,
    HiOutlineBookOpen,
} from "react-icons/hi2";

const AdminTutorial = () => {

    const [activeItem, setActiveItem] = useState(null);

    const allItems = useMemo(() => {
        return tutorialAdmin.flatMap(
            (menu) => menu.children || []
        );
    }, []);

    const activeTutorial = allItems.find(
        (item) => item.id === activeItem
    );

    return (
        <div className="min-h-screen bg-slate-50">

            <Sidebar
                activeItem={activeItem}
                setActiveItem={setActiveItem}
            />

            {/* MAIN */}
            <main className="min-h-screen min-w-0 transition-all duration-300 lg:ml-80">

                {activeTutorial ? (
                    <TutorialContent
                        tutorial={activeTutorial}
                    />
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


/* =====================================================
   WELCOME
===================================================== */

const WelcomeAdmin = ({
    tutorialAdmin,
    setActiveItem,
}) => {

    const totalMenu = tutorialAdmin.length;

    const totalTutorial = tutorialAdmin.reduce(
        (total, menu) =>
            total + (menu.children?.length || 0),
        0
    );

    return (
        <div className="min-h-screen">

            {/* HERO */}
            <section className="relative overflow-hidden border-b border-slate-200 bg-white">

                {/* Background decoration */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

                    <div className="max-w-4xl">

                        <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-600 sm:text-sm">

                            <HiOutlineBookOpen className="h-4 w-4" />

                            Dokumentasi Sistem

                        </div>


                        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">

                            Selamat Datang di

                            <span className="mt-2 block text-blue-600">
                                Dokumentasi Presensi
                            </span>

                        </h1>


                        <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">

                            Panduan penggunaan Sistem Presensi Digital
                            Kabupaten Sidoarjo untuk Admin.

                        </p>


                        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">

                            Pilih menu tutorial di sebelah kiri untuk
                            mempelajari fitur yang tersedia.

                        </p>


                        {/* BUTTON */}
                        <button
                            type="button"
                            onClick={() => {
                                const first =
                                    tutorialAdmin[0]?.children?.[0];

                                if (first) {
                                    setActiveItem(first.id);
                                }
                            }}
                            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md active:translate-y-0"
                        >
                            Mulai Tutorial

                            <HiOutlineArrowRight className="h-4 w-4" />
                        </button>


                        {/* STATS */}
                        <div className="mt-10 flex flex-wrap gap-8">

                            <div>
                                <p className="text-2xl font-bold text-slate-900">
                                    {totalMenu}
                                </p>

                                <p className="text-sm text-slate-500">
                                    Menu
                                </p>
                            </div>


                            <div className="h-10 w-px bg-slate-200" />


                            <div>
                                <p className="text-2xl font-bold text-slate-900">
                                    {totalTutorial}
                                </p>

                                <p className="text-sm text-slate-500">
                                    Tutorial
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* TUTORIAL LIST */}
            <section className="bg-slate-50 px-5 py-12 sm:px-8 sm:py-16 lg:px-10">

                <div className="mx-auto max-w-7xl">

                    <div className="mb-8">

                        <p className="text-sm font-semibold text-blue-600">
                            Jelajahi Dokumentasi
                        </p>

                        <h2 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
                            Mulai dari mana?
                        </h2>

                        <p className="mt-2 text-sm text-slate-500 sm:text-base">
                            Pilih fitur yang ingin kamu pelajari.
                        </p>

                    </div>


                    {/* GRID */}
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">

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
                                    className="group rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg sm:p-6"
                                >

                                    <div className="flex items-start justify-between">

                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white">

                                            {Icon && (
                                                <Icon className="h-6 w-6" />
                                            )}

                                        </div>


                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all duration-300 group-hover:bg-blue-50 group-hover:text-blue-600">

                                            <HiOutlineArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />

                                        </div>

                                    </div>


                                    <h3 className="mt-5 text-lg font-bold text-slate-900">
                                        {menu.title}
                                    </h3>


                                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                                        {firstTutorial?.description ||
                                            `Pelajari fitur ${menu.title}.`}
                                    </p>


                                    <div className="mt-5 flex items-center justify-between">

                                        <span className="text-sm font-semibold text-blue-600">
                                            Lihat Tutorial
                                        </span>

                                        <span className="text-xs text-slate-400">
                                            {menu.children?.length || 0}{" "}
                                            tutorial
                                        </span>

                                    </div>

                                </button>
                            );
                        })}

                    </div>

                </div>

            </section>

        </div>
    );
};

export default AdminTutorial;