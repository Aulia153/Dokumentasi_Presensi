import {
    HiOutlineLockClosed, HiOutlineHome,
    HiOutlineMapPin, HiOutlineCalendarDays,
    HiOutlineDocumentText, HiOutlineCog6Tooth, HiOutlineQuestionMarkCircle,
} from "react-icons/hi2";

//Import Gambar
const images = import.meta.glob(
    "../assets/user/**/*.{png,jpg,jpeg,webp}",
    {
        eager: true,
        import: "default",
    }
);

// Helper mengambil gambar
const image = (file) => {
    return images[`../assets/user/${file}`] || null;
};

const tutorialUser = [

    //LOGIN
    {
        id: "login",
        title: "Login",
        icon: HiOutlineLockClosed,

        children: [
            {
                id: "login-overview",
                title: "Halaman Login",
                type: "login",

                description:
                    "Halaman login digunakan untuk mengakses Sistem Presensi Digital Kabupaten Sidoarjo menggunakan akun yang telah terdaftar.",
                image: image("login-page.png"),

                sections: [
                    {
                        title: "Isi NIP dan Password",
                        description:
                            "Masukkan Nomor Induk Pegawai (NIP) dan Password yang telah terdaftar pada sistem.",
                        image: image("login.jpg"),
                    },

                    {
                        title: "Verifikasi Login",
                        description:
                            "Mohon untuk diisi hasil dari Operasi bilangan acak agar dapat melakukan verifikasi Login",
                        image: image("veriflogin.jpg"),
                    },
                    {
                        title: "Masuk ke Halaman Dashboard",
                        description:
                            "Setelah data telah terisi semua dan telah melakukan verifikasi, anda dapat mengakse laman dashboard untuk melakukan Absensi",
                        image: image("dashboard.png"),
                    },

                    {
                        title: "Lupa Password",
                        description:
                            " Jika Anda mengalami Lupa Password, klik tombol Lupa Password yang nantinya akan diarahkan ke Help Desk Diskominfo Via WhatsApp",
                        image: image("lupapassword.jpg"),
                    },
                ],
            },

        ],
    },

    //DASHBOARD
    {
        id: "dashboard",
        title: "Dashboard",
        icon: HiOutlineHome,

        children: [
            {
                id: "dashboard-overview",
                title: "Dashboard Utama",
                type: "dashboard",
                description:
                    "Dashboard merupakan halaman utama setelah pengguna berhasil login. Halaman ini digunakan untuk melakukan Presensi Masuk dan Presensi Keluar",
                sections: [
                    {
                        title: "Presensi",
                        description:
                            "Digunakan untuk Presensi Masuk dan Presensi Keluar",
                        image: image("dashboard.png"),
                    },

                    {
                        title: "Presensi Masuk",
                        description:
                            "Klik Tombol 'Masuk' di bawah ini untuk melakukan Absensi Masuk yang nantinya akan diarahkan Absensi berdasarkan potret diri dan Live Location yang telah ditentukan secara real-time",
                    },

                    {
                        title: "Presensi Keluar",
                        description:
                            "Klik Tombol 'Keluar' di bawah ini untuk melakukan Absensi Masuk yang nantinya akan diarahkan Absensi berdasarkan potret diri dan Live Location yang telah ditentukan secara real-time",
                    },

                    {
                        title: "Peta Lokasi",
                        description:
                            "Fitur ini diugunakan untuk menampilkan Lokasi Anda saat ini secara real-time",
                        image: image("petalokasi.png"),
                    },
                ]
            },
        ],
    },

    //rpresensi
    {
        id: "rpresensi",
        title: "Riwayat Presensi",
        icon: HiOutlineMapPin,

        children: [
            {
                id: "rpresen",
                title: "Rekap Kehadiran",
                type: "rekap kehadiran",
                description:
                    "Panduan melihat dan filterisasi riwayat presensi harian, mingguan, dan bulanan",

                sections: [
                    {
                        number: 1,
                        title: "Status Presensi",
                        description:
                            "Anda dapat melihat riwayat Presensi yang telah Anda lakukan di halaman ini secara detail mulai dari jam melakukan presensi hingga lokasi presensi tersebut dilakukan selama 1 minggu ini",
                        image: image("riwayat-absen-zoom.jpg"),
                    },
                    {
                        description:
                            "Apabila Anda melakukan Checkout atau Presensi Keluar diluar lokasi yang seharusnya, Anda akan mendapat Notifikasi Peringatan SPT seperti berikut.",
                        image: image("unggah-spt.png"),
                    },

                    {
                        number: 2,
                        title: "Filterisasi Data",
                        description:
                            "Selain itu, terdapat juga filter secara tahunan dan bulanan untuk memantau status riwayat presensi yang sudah berlangsung",
                        image: image("filter-rekap.jpg"),
                    },

                    {
                        number: 3,
                        description:
                            "Disini pada bagian Tahun bisa diatur ingin melihat 2 tahun sebelumnya, tahun ini, maupun tahun depan",
                        image: image("filter-tahun.jpg"),
                    },

                    {
                        number: 4,
                        description:
                            "Dan disini juga dapat melihat rekap berdasarkan bulan dalam setahun, 2 tahun sebelumnya, tahun ini, maupun tahun depan ",
                        image: image("riwayat-bulann.png"),

                    },

                ],

                // tips:]
                //     "Pastikan data lokasi yang dimasukkan sudah sesuai sebelum menyimpan.",
            },
        ],
    },

    //JADWAL KERJA
    {
        id: "jadwal",
        title: "Jadwal Kerja",
        icon: HiOutlineCalendarDays,

        children: [
            {
                id: "hari-kerja",
                title: "Hari Kerja",
                type: "hari kerja",
                description:
                    "Panduan melihat jadwal kerja, shift, dan hari libur yang berlaku untuk Anda",
                sections: [
                    {
                        number: 1,
                        title: "Status Riwayat Jadwal",
                        description:
                            "Anda dapat melihat riwayat Jadwal Kerja Anda secara detail selama 1 minggu berdasarkan jadwal reguler shift, atau pun libur dalam seminggu kedepan",
                        image: image("jadwalkerjazoom.png"),
                    },

                    {
                        number: 2,
                        title: "Filter Data",
                        description:
                            "Selain itu, terdapat juga filter secara tahunan dan bulanan untuk memantau status riwayat presensi yang sudah berlangsung",
                        image: image("filter-rekap.jpg"),
                    },

                    {
                        number: 3,
                        description:
                            "Disini pada bagian Tahun bisa diatur ingin melihat 2 tahun sebelumnya, tahun ini, maupun tahun depan",
                        image: image("tahun-jadwal.png"),
                    },

                    {
                        number: 4,
                        description:
                            "Dan disini juga dapat melihat rekap berdasarkan bulan dalam setahun, 2 tahun sebelumnya, tahun ini, maupun tahun depan ",
                        image: image("bulan-jadwal.png"),

                    },
                ],
            },
        ],
    },

    {
        id: "profil",
        title: "Profil",
        icon: HiOutlineQuestionMarkCircle,

        children: [
            {
                id: "detailprofil",
                title: "Profil",
                type: "profil",
                description:
                    "Panduan mengelola data profil pegawai dan pengaturan akun",
                sections: [
                    {
                        number: 1,
                        title: "Informasi Data Diri",
                        description:
                            "Anda dapat melihat detail profil anda yang berisi informasi pribadi Anda seperti berikut",
                        image: image("profil.png"),
                    },

                    {
                        number: 2,
                        title: "Pusat Bantuan",
                        description:
                            "Ketika Anda menggunakan Pusat Bantuan, nanti Anda akan diarahkan secara otomatis melalui WhatsApp dengan Template yang sudah ada tinggal mengirimkan keluhan nya seperti apa",
                        image: image("helpdesk.png"),
                    },
                    {
                        number: 3,
                        title: "Logout",
                        description:
                            "Ketika Anda ingin keluar dapat menggunakan tombol 'Keluar' di bawah Data Diri Profil Anda",
                        image: image("logout.png"),
                    },

                ],
            },
        ]

    },
];

export default tutorialUser;