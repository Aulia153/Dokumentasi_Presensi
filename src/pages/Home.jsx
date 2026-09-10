import {
    HiUserGroup,
    HiUser,
    HiArrowRight,
    HiOutlineBookOpen,
    HiOutlineShieldCheck,
} from "react-icons/hi";

import RoleCard from "../components/common/RoleCard";

const Home = () => {
    return (
        <div className="home-page min-h-screen">
            {/* Background Decoration */}
            <div className="home-decoration decoration-one"></div>
            <div className="home-decoration decoration-two"></div>

            <div className="container mx-auto px-5">
                <div className="home-content">

                    {/* HEADER */}
                    <section className="home-header">

                        <div className="header-badge">
                            <HiOutlineBookOpen />
                            <span>PANDUAN APLIKASI</span>
                        </div>

                        <h1>
                            Presensi <span>Digital</span>
                        </h1>

                        <p className="header-description">
                            Sistem Informasi Dokumentasi
                        </p>

                        <p className="header-location">
                            Kabupaten Sidoarjo
                        </p>

                        <div className="header-line"></div>
                    </section>


                    {/* ROLE CARDS */}
                    <section className="role-section">

                        <div className="role-section-title">
                            <div>
                                <h2>
                                    Pilih Panduan Pengguna
                                </h2>

                                <p>
                                    Silakan pilih jenis pengguna untuk melihat
                                    panduan penggunaan aplikasi.
                                </p>
                            </div>

                            <div className="guide-icon">
                                <HiOutlineBookOpen />
                            </div>
                        </div>


                        <div className="role-grid">

                            {/* ADMIN */}
                            <RoleCard
                                icon={<HiUserGroup />}
                                title="Admin OPD"
                                description="Panduan penggunaan aplikasi untuk Admin OPD atau Kepala Sub Bagian Umum dan Kepegawaian yang bertugas mengelola presensi pegawai pada dinas masing-masing."
                                button={
                                    <>
                                        Lihat Tutorial
                                        <HiArrowRight />
                                    </>
                                }
                                to="/admin"
                                badge="Panduan Admin"
                                iconColor="blue"
                            />


                            {/* USER */}
                            <RoleCard
                                icon={<HiUser />}
                                title="Pengguna"
                                description="Panduan penggunaan aplikasi untuk PNS dan PPPK sebagai individu yang melakukan presensi melalui sistem Presensi Digital."
                                button={
                                    <>
                                        Lihat Tutorial
                                        <HiArrowRight />
                                    </>
                                }
                                to="/user"
                                badge="Panduan Pengguna"
                                iconColor="indigo"
                            />

                        </div>
                    </section>


                    {/* FOOTER INFO */}
                    <div className="home-footer">
                        <HiOutlineShieldCheck />

                        <span>
                            Sistem Presensi Digital Kabupaten Sidoarjo
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;