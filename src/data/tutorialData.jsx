import {
    HiOutlineLockClosed,
    HiOutlineHome,
    HiOutlineMapPin,
    HiOutlineCalendarDays,
    HiOutlineDocumentText,
    HiOutlineCog6Tooth,
    HiOutlineQuestionMarkCircle,
} from "react-icons/hi2";

// ======================================================
// IMPORT SEMUA GAMBAR TUTORIAL
// ======================================================

const images = import.meta.glob(
    "../assets/tutorial/**/*.{png,jpg,jpeg,webp}",
    {
        eager: true,
        import: "default",
    }
);

// Helper mengambil gambar
const image = (folder, file) => {
    return images[`../assets/tutorial/${folder}/${file}`] || null;
};


// ======================================================
// DATA TUTORIAL
// ======================================================

const tutorialData = [

    // ==================================================
    // LOGIN
    // ==================================================

    {
        id: "login",
        title: "Login",
        icon: HiOutlineLockClosed,

        children: [

            // ------------------------------------------
            // HALAMAN LOGIN
            // ------------------------------------------

            {
                id: "login-overview",
                title: "Halaman Login",
                type: "overview",

                description:
                    "Halaman login digunakan untuk mengakses Sistem Presensi Digital Kabupaten Sidoarjo menggunakan akun yang telah terdaftar.",

                image: image("login", "login-page.png"),

                sections: [
                    {
                        title: "NIP",
                        description:
                            "Digunakan untuk memasukkan Nomor Induk Pegawai yang telah terdaftar pada sistem.",
                    },

                    {
                        title: "Password",
                        description:
                            "Digunakan untuk memasukkan password akun SSO yang digunakan untuk mengakses sistem.",
                    },

                    {
                        title: "Ingat Saya",
                        description:
                            "Centang pilihan ini apabila ingin menyimpan sesi login pada perangkat.",
                    },

                    {
                        title: "Verifikasi Keamanan",
                        description:
                            "Digunakan untuk memastikan bahwa pengguna merupakan pengguna yang valid dan bukan robot.",
                    },

                    {
                        title: "Geser untuk Verifikasi",
                        description:
                            "Geser tombol verifikasi hingga proses keamanan berhasil.",
                    },

                    {
                        title: "Masuk ke Sistem",
                        description:
                            "Klik tombol Masuk ke Sistem setelah seluruh data dan verifikasi selesai.",
                    },
                ],

                tips:
                    "Pastikan NIP, password, dan verifikasi keamanan sudah benar sebelum masuk ke sistem.",
            },


            // ------------------------------------------
            // LOGIN KE SISTEM
            // ------------------------------------------

            {
                id: "login-system",
                title: "Login ke Sistem",
                type: "steps",

                description:
                    "Ikuti langkah berikut untuk masuk ke Sistem Presensi Digital Kabupaten Sidoarjo.",

                steps: [

                    {
                        number: 1,
                        title: "Masukkan NIP",

                        description:
                            "Masukkan Nomor Induk Pegawai pada kolom NIP.",

                        image: image("login", "login-nip.png"),
                    },

                    {
                        number: 2,
                        title: "Masukkan Password",

                        description:
                            "Masukkan password akun SSO pada kolom password.",

                        image: image("login", "login-password.png"),
                    },

                    {
                        number: 3,
                        title: "Lakukan Verifikasi",

                        description:
                            "Geser tombol verifikasi keamanan hingga proses verifikasi berhasil.",

                        image: image("login", "login-verifikasi.png"),
                    },

                    {
                        number: 4,
                        title: "Masuk ke Sistem",

                        description:
                            "Setelah seluruh data terisi dan verifikasi berhasil, klik tombol Masuk ke Sistem.",
                    },
                ],

                tips:
                    "Jika login gagal, periksa kembali NIP, password, dan proses verifikasi keamanan.",
            },


            // ------------------------------------------
            // LOGOUT
            // ------------------------------------------

            {
                id: "logout",
                title: "Logout",
                type: "steps",

                description:
                    "Logout digunakan untuk keluar dari Sistem Presensi Digital setelah selesai menggunakan aplikasi.",

                steps: [

                    {
                        number: 1,
                        title: "Pilih Logout",

                        description:
                            "Klik tombol Logout pada bagian kanan atas halaman sistem.",
                    },

                    {
                        number: 2,
                        title: "Kembali ke Halaman Login",

                        description:
                            "Setelah berhasil logout, sistem akan mengarahkan kembali ke halaman login.",
                    },
                ],

                tips:
                    "Selalu lakukan logout setelah selesai menggunakan sistem, terutama ketika menggunakan komputer bersama.",
            },
        ],
    },


    // ==================================================
    // DASHBOARD
    // ==================================================

    {
        id: "dashboard",
        title: "Dashboard",
        icon: HiOutlineHome,

        children: [
            {
                id: "dashboard-overview",
                title: "Dashboard Utama",
                type: "overview",

                description:
                    "Dashboard merupakan halaman utama yang menampilkan ringkasan informasi presensi pegawai.",

                sections: [
                    {
                        title: "Ringkasan Presensi",
                        description:
                            "Menampilkan informasi jumlah pegawai dan status kehadiran.",
                    },

                    {
                        title: "Grafik Kehadiran",
                        description:
                            "Menampilkan informasi kehadiran pegawai dalam bentuk grafik.",
                    },
                ],

                tips:
                    "Gunakan dashboard untuk melihat kondisi presensi secara cepat.",
            },

            {
                id: "monitoring",
                title: "Monitoring Presensi",
                type: "steps",

                description:
                    "Monitoring digunakan untuk melihat kondisi presensi pegawai.",

                steps: [
                    {
                        number: 1,
                        title: "Buka Dashboard",
                        description:
                            "Masuk ke menu Dashboard melalui navigasi utama.",
                    },

                    {
                        number: 2,
                        title: "Lihat Data Presensi",
                        description:
                            "Periksa informasi kehadiran yang ditampilkan pada dashboard.",
                    },
                ],
            },
        ],
    },


    // ==================================================
    // LOKASI KERJA
    // ==================================================

    {
        id: "lokasi",
        title: "Lokasi Kerja",
        icon: HiOutlineMapPin,

        children: [
            {
                id: "lihat-lokasi",
                title: "Lihat Lokasi",
                type: "steps",

                description:
                    "Panduan untuk melihat daftar lokasi kerja.",

                steps: [
                    {
                        number: 1,
                        title: "Buka Lokasi Kerja",
                        description:
                            "Pilih menu Lokasi Kerja pada navigasi.",
                    },

                    {
                        number: 2,
                        title: "Lihat Daftar Lokasi",
                        description:
                            "Sistem akan menampilkan daftar lokasi kerja yang tersedia.",
                    },
                ],
            },
        ],
    },


    // ==================================================
    // JADWAL KERJA
    // ==================================================

    {
        id: "jadwal",
        title: "Jadwal Kerja",
        icon: HiOutlineCalendarDays,

        children: [
            {
                id: "lihat-jadwal",
                title: "Melihat Jadwal",
                type: "steps",

                description:
                    "Panduan untuk melihat jadwal kerja pegawai.",

                steps: [
                    {
                        number: 1,
                        title: "Buka Jadwal Kerja",
                        description:
                            "Pilih menu Jadwal Kerja pada navigasi.",
                    },

                    {
                        number: 2,
                        title: "Pilih Jadwal",
                        description:
                            "Lihat jadwal kerja yang tersedia pada sistem.",
                    },
                ],
            },
        ],
    },


    // ==================================================
    // LAPORAN
    // ==================================================

    {
        id: "laporan",
        title: "Laporan",
        icon: HiOutlineDocumentText,

        children: [
            {
                id: "rekap-laporan",
                title: "Rekap Presensi",
                type: "steps",

                description:
                    "Panduan untuk melihat rekapitulasi data presensi.",

                steps: [
                    {
                        number: 1,
                        title: "Buka Menu Laporan",
                        description:
                            "Pilih menu Laporan pada navigasi.",
                    },

                    {
                        number: 2,
                        title: "Pilih Rekap Presensi",
                        description:
                            "Pilih menu Rekap Presensi untuk melihat data.",
                    },
                ],
            },

            {
                id: "export-laporan",
                title: "Export Laporan",
                type: "steps",

                description:
                    "Panduan untuk mengunduh laporan presensi.",

                steps: [
                    {
                        number: 1,
                        title: "Pilih Data",
                        description:
                            "Tentukan data laporan yang ingin diunduh.",
                    },

                    {
                        number: 2,
                        title: "Export",
                        description:
                            "Klik tombol Export untuk mengunduh laporan.",
                    },
                ],
            },
        ],
    },


    // ==================================================
    // PENGATURAN
    // ==================================================

    {
        id: "pengaturan",
        title: "Pengaturan",
        icon: HiOutlineCog6Tooth,

        children: [
            {
                id: "profil-admin",
                title: "Profil Admin",
                type: "steps",

                description:
                    "Panduan mengelola informasi profil administrator.",

                steps: [
                    {
                        number: 1,
                        title: "Buka Profil",
                        description:
                            "Buka menu profil administrator.",
                    },

                    {
                        number: 2,
                        title: "Ubah Informasi",
                        description:
                            "Perbarui informasi profil sesuai kebutuhan.",
                    },
                ],
            },
        ],
    },


    // ==================================================
    // FAQ
    // ==================================================

    {
        id: "faq",
        title: "FAQ",
        icon: HiOutlineQuestionMarkCircle,

        children: [
            {
                id: "faq-umum",
                title: "Pertanyaan Umum",
                type: "overview",

                description:
                    "Bagian FAQ berisi pertanyaan yang sering ditanyakan oleh pengguna sistem.",

                sections: [
                    {
                        title: "Tidak bisa login",
                        description:
                            "Periksa kembali NIP, password, dan verifikasi keamanan.",
                    },

                    {
                        title: "Lupa password",
                        description:
                            "Gunakan mekanisme pengaturan password yang tersedia pada sistem SSO.",
                    },
                ],
            },
        ],
    },
];

export default tutorialData;