import {
    HiUserGroup,
    HiUser,
    HiOutlineBookOpen,
    HiOutlineShieldCheck,
} from "react-icons/hi";

import RoleCard from "../components/common/RoleCard";

const Home = () => {
    return (
        <div className="min-h-screen bg-slate-50">

            {/* =====================================
                HERO
            ====================================== */}
            <section className="relative overflow-hidden border-b border-slate-200 bg-white">

                {/* Decorative Circle */}
                <div className="
                    pointer-events-none
                    absolute -right-24 -top-24
                    h-64 w-64
                    rounded-full
                    bg-blue-50
                " />

                <div className="
                    pointer-events-none
                    absolute -bottom-28 -left-24
                    h-56 w-56
                    rounded-full
                    bg-slate-100
                " />

                <div className="
                    relative mx-auto
                    max-w-6xl
                    px-5
                    py-12
                    text-center
                    sm:px-8
                    sm:py-14
                ">

                    {/* Badge */}
                    <div className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-lg
                        border border-blue-100
                        bg-blue-50
                        px-4 py-2
                        text-xs
                        font-bold
                        tracking-wide
                        text-blue-700
                    ">
                        <HiOutlineBookOpen className="h-4 w-4" />

                        PANDUAN APLIKASI
                    </div>


                    {/* Title */}
                    <h1 className="
                        mt-5
                        text-4xl
                        font-bold
                        tracking-tight
                        text-slate-900
                        sm:text-5xl
                    ">
                        Presensi{" "}
                        <span className="text-blue-700">
                            Digital
                        </span>
                    </h1>


                    {/* Location */}
                    <p className="
                        mt-2
                        text-lg
                        font-medium
                        text-slate-500
                    ">
                        Kabupaten Sidoarjo
                    </p>


                    {/* Description */}
                    <p className="
                        mx-auto
                        mt-4
                        max-w-2xl
                        text-sm
                        leading-6
                        text-slate-500
                        sm:text-base
                    ">
                        Panduan penggunaan Sistem Presensi Digital
                        Kabupaten Sidoarjo untuk membantu pengguna
                        memahami fitur dan alur penggunaan aplikasi.
                    </p>

                </div>

            </section>


            {/* =====================================
                DOCUMENTATION
            ====================================== */}
            <main>

                <section className="
                    mx-auto
                    max-w-6xl
                    px-5
                    py-9
                    sm:px-8
                    sm:py-11
                ">

                    {/* Section Header */}
                    <div className="
                        mb-6
                        flex
                        items-end
                        justify-between
                        border-b
                        border-slate-200
                        pb-4
                    ">

                        <div>

                            <p className="
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.12em]
                                text-blue-700
                            ">
                                Dokumentasi
                            </p>

                            <h2 className="
                                mt-1
                                text-2xl
                                font-bold
                                text-slate-900
                                sm:text-3xl
                            ">
                                Pilih Panduan
                            </h2>

                            <p className="
                                mt-1
                                text-sm
                                text-slate-500
                            ">
                                Pilih panduan sesuai dengan jenis pengguna.
                            </p>

                        </div>


                        <div className="
                            hidden
                            h-10 w-10
                            items-center
                            justify-center
                            rounded-xl
                            bg-blue-50
                            text-blue-700
                            sm:flex
                        ">
                            <HiOutlineBookOpen className="h-5 w-5" />
                        </div>

                    </div>


                    {/* Role Cards */}
                    <div className="
                        grid
                        gap-5
                        md:grid-cols-2
                    ">

                        <RoleCard
                            icon={<HiUserGroup />}
                            title="Admin OPD"
                            description="Panduan penggunaan aplikasi untuk Admin OPD atau Kepala Sub Bagian Umum dan Kepegawaian yang bertugas mengelola presensi pegawai pada dinas masing-masing."
                            button="Buka Dokumentasi"
                            to="/admin"
                        />

                        <RoleCard
                            icon={<HiUser />}
                            title="Pengguna"
                            description="Panduan penggunaan aplikasi untuk PNS dan PPPK sebagai individu yang melakukan presensi melalui sistem Presensi Digital."
                            button="Buka Dokumentasi"
                            to="/user"
                        />

                    </div>

                </section>

            </main>


            {/* =====================================
                FOOTER
            ====================================== */}
            <footer className="
                border-t
                border-slate-200
                bg-white
            ">

                <div className="
                    mx-auto
                    flex
                    max-w-6xl
                    items-center
                    justify-center
                    px-5
                    py-5
                    text-center
                    sm:px-8
                ">

                    <div className="
                        flex
                        items-center
                        gap-2
                        text-xs
                        text-slate-500
                        sm:text-sm
                    ">

                        <HiOutlineShieldCheck
                            className="h-4 w-4 text-blue-600"
                        />

                        <span>
                            Sistem Presensi Digital Kabupaten Sidoarjo
                        </span>

                    </div>

                </div>

            </footer>

        </div>
    );
};

export default Home;