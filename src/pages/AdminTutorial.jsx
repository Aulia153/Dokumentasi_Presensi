import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import TutorialContent from "../components/tutorial/TutorialContent";
import tutorialAdmin from "../data/tutorialAdmin";

const AdminTutorial = () => {
    const [activeItem, setActiveItem] = useState(null);

    // Cari parent berdasarkan ID
    const activeParent = tutorialAdmin.find(
        (item) => item.id === activeItem
    );

    // Cari child berdasarkan ID
    const activeChild = tutorialAdmin
        .flatMap((item) => item.children ?? [])
        .find((child) => child.id === activeItem);

    const activeTutorial = activeChild || activeParent || null;

    return (
        <MainLayout
            role="admin"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
        >
            {activeTutorial ? (
                <TutorialContent
                    tutorial={activeTutorial}
                    role="admin"
                />
            ) : (
                <WelcomeAdmin
                    tutorialAdmin={tutorialAdmin}
                    setActiveItem={setActiveItem}
                />
            )}
        </MainLayout>
    );
};

// HALAMAN SELAMAT DATANG ADMIN
const WelcomeAdmin = ({ tutorialAdmin, setActiveItem }) => {
    const totalMenu = tutorialAdmin.length;

    const totalTutorial = tutorialAdmin.reduce(
        (acc, item) => acc + (item.children?.length ?? 1),
        0
    );

    return (
        <div className="min-h-screen bg-slate-50">
            {/* HERO */}
            <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-8 py-14 pt-16 pl-14 lg:pt-14 lg:pl-8">
                <div className="mx-auto max-w-6xl">
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                        Dokumentasi Sistem
                    </span>

                    <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900">
                        Selamat Datang di
                        <span className="block text-blue-600">
                            Dokumentasi Presensi
                        </span>
                    </h1>

                    <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                        Panduan penggunaan Sistem Presensi Digital
                        Kabupaten Sidoarjo untuk Admin OPD dalam
                        mengelola dan memantau presensi pegawai.
                    </p>

                    <p className="mt-3 max-w-2xl text-slate-500">
                        Pelajari setiap fitur melalui panduan langkah demi
                        langkah yang telah tersedia.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <button
                            type="button"
                            onClick={() => {
                                const firstTutorial =
                                    tutorialAdmin[0]?.children?.[0];

                                const targetId =
                                    firstTutorial?.id ??
                                    tutorialAdmin[0]?.id;

                                if (targetId) {
                                    setActiveItem(targetId);
                                }
                            }}
                            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
                        >
                            Mulai Tutorial
                        </button>
                    </div>

                    {/* STATISTIK */}
                    <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4">
                        <div className="rounded-2xl border border-blue-100 bg-white/80 p-5 shadow-sm">
                            <p className="text-sm text-slate-500">
                                Menu Tutorial
                            </p>

                            <p className="mt-1 text-2xl font-bold text-slate-900">
                                {totalMenu}
                            </p>
                        </div>

                        <div className="rounded-2xl border border-blue-100 bg-white/80 p-5 shadow-sm">
                            <p className="text-sm text-slate-500">
                                Total Panduan
                            </p>

                            <p className="mt-1 text-2xl font-bold text-slate-900">
                                {totalTutorial}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PILIH MENU */}
            <section className="px-8 py-12">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-7">
                        <h2 className="text-2xl font-bold text-slate-900">
                            Mulai Dari Mana?
                        </h2>

                        <p className="mt-1 text-slate-500">
                            Pilih fitur administrasi yang ingin kamu pelajari.
                        </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {tutorialAdmin.map((menu) => {
                            const Icon = menu.icon;

                            const targetId = menu.children?.length
                                ? menu.children[0].id
                                : menu.id;

                            return (
                                <button
                                    key={menu.id}
                                    type="button"
                                    onClick={() => setActiveItem(targetId)}
                                    className="group rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                                            {Icon && (
                                                <Icon className="h-6 w-6" />
                                            )}
                                        </div>

                                        <span className="text-xl text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-500">
                                            →
                                        </span>
                                    </div>

                                    <h3 className="mt-5 text-lg font-bold text-slate-900">
                                        {menu.title}
                                    </h3>

                                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                                        {menu.description ||
                                            menu.children?.[0]?.description ||
                                            `Pelajari fitur ${menu.title}.`}
                                    </p>

                                    <div className="mt-4 text-sm font-semibold text-blue-600">
                                        Lihat Tutorial
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