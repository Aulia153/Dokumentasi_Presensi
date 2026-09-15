import {
    HiOutlineLockClosed,
    HiOutlineHome,
    HiOutlineMapPin,
    HiOutlineCalendarDays,
    HiOutlineQuestionMarkCircle,
} from "react-icons/hi2";

const images = import.meta.glob(
    "../assets/user/**/*.{png,jpg,jpeg,webp}",
    { eager: true, import: "default" }
);

// Helper: ambil gambar berdasarkan nama file saja (flat folder)
const image = (file) => images[`../assets/user/${file}`] || null;

const tutorialUser = [
    // =========================================================
    // LOGIN (punya dropdown / children)
    // =========================================================
    {
        id: "login",
        title: "Login",
        icon: HiOutlineLockClosed,
        description:
            "Panduan seputar halaman login, pemulihan akun, dan logout.",

        children: [
            // ---- Child 1: Halaman Login ----
            {
                id: "login-overview",
                title: "Halaman Login",
                type: "login",
                description:
                    "Proses login ke aplikasi Presensi Sidoarjo dilakukan menggunakan akun Single Sign-On (SSO) Kominfo yang telah terdaftar. Anda hanya perlu melakukan login dan verifikasi Captcha satu kali saja saat pertama kali memasang atau membuka aplikasi di ponsel Anda.",

                sections: [
                    {
                        title: "Buka Aplikasi Presensi Sidoarjo",
                        description:
                            "Buka aplikasi Presensi Sidoarjo di ponsel Anda. Anda akan langsung diarahkan ke halaman utama login.",
                        image: image("login-page.png"),
                    },
                    {
                        title: "Masukkan NIP dan Kata Sandi",
                        description:
                            "Pada halaman utama login, ketikkan Nomor Induk Pegawai (NIP) dan kata sandi akun SSO Kominfo Anda pada kolom yang tersedia.",
                        image: image("login.jpg"),
                    },
                    {
                        title: "Tekan Tombol Login",
                        description:
                            "Setelah NIP dan kata sandi terisi dengan benar, klik tombol 'Login' untuk melanjutkan ke proses verifikasi.",
                        image: image("veriflogin.jpg"),
                    },
                    {
                        title: "Selesaikan Verifikasi Keamanan",
                        description:
                            "Masukkan hasil dari perhitungan matematika sederhana yang muncul di layar (contoh: 23 + 6 = ?). Ketikkan jawaban yang benar pada kolom yang tersedia, lalu tekan tombol 'Verifikasi'.",
                    },
                    {
                        title: "Masuk ke Menu Utama",
                        description:
                            "Jika NIP, kata sandi, dan jawaban verifikasi sudah benar, Anda akan langsung diarahkan ke halaman Home aplikasi dan siap melakukan presensi.",
                        image: image("dashboard.png"),
                    },
                ],
                tips:
                    "Tidak perlu Log Out setiap hari, aplikasi mobile Presensi Sidoarjo dirancang agar sesi Anda tetap aktif, cukup tutup aplikasi setelah presensi. Akun SSO Anda juga dapat diakses dari beberapa perangkat HP sekaligus, namun sistem TIDAK otomatis mengeluarkan akun dari HP sebelumnya. Karena itu seluruh aktivitas pada akun Anda adalah tanggung jawab pribadi. Wajib Log Out manual jika meminjam HP rekan kerja. Lakukan Log Out atau uninstall aplikasi di HP lama saat berganti ke HP baru. Dan jangan pernah membagikan NIP serta kata sandi SSO kepada siapa pun.",
            },

            // ---- Child 2: Lupa Password ----
            {
                id: "lupa-password",
                title: "Lupa Password",
                type: "steps",
                description:
                    "Jika Anda lupa kata sandi akun SSO Kominfo, proses reset tidak dapat dilakukan otomatis di dalam aplikasi, melainkan diproses secara manual oleh tim Helpdesk Dinas Kominfo Kabupaten Sidoarjo.",

                sections: [
                    {
                        title: "Buka Halaman Login",
                        description:
                            "Buka aplikasi Presensi Sidoarjo dan pastikan Anda berada di halaman utama login (sebelum masuk ke akun).",
                        image: image("login-page.png"),
                    },
                    {
                        title: "Klik Tombol 'Lupa Password?'",
                        description:
                            "Tekan tombol 'Lupa Password?' yang terletak di bawah kolom login. Tombol ini akan menghubungkan Anda secara langsung ke WhatsApp resmi Kominfo.",
                        image: image("lupapassword.jpg"),
                    },
                    {
                        title: "Terhubung ke WhatsApp Resmi Kominfo",
                        description:
                            "Anda akan otomatis diarahkan ke aplikasi WhatsApp untuk memulai percakapan dengan petugas Helpdesk Kominfo Sidoarjo.",
                    },
                    {
                        title: "Kirimkan Informasi Diri",
                        description:
                            "Sampaikan pesan bahwa Anda ingin mereset kata sandi. Lampirkan NIP, Nama Lengkap, dan Unit Kerja/OPD Anda untuk keperluan verifikasi data.",
                    },
                    {
                        title: "Terima Kata Sandi Sementara",
                        description:
                            "Setelah data Anda diverifikasi, petugas Helpdesk akan memberikan kata sandi sementara (random password) yang bisa Anda gunakan untuk login.",
                    },
                    {
                        title: "Login dengan Kata Sandi Sementara",
                        description:
                            "Gunakan kata sandi sementara dari Helpdesk untuk login ke aplikasi Presensi Sidoarjo.",
                    },
                    {
                        title: "Wajib Ubah Kata Sandi di Situs SSO",
                        description:
                            "Segera ubah kata sandi sementara Anda melalui situs resmi sso.sidoarjokab.go.id. Kata sandi acak dari Helpdesk sulit dihafal, dan hanya Anda yang boleh memiliki akses ke akun SSO demi kerahasiaan data kepegawaian.",
                    },
                    {
                        title: "Tunggu Sinkronisasi 1–2 Menit",
                        description:
                            "Setelah berhasil mengubah kata sandi di situs SSO, berikan jeda waktu 1–2 menit agar sistem menyelesaikan proses sinkronisasi data sebelum Anda login kembali di aplikasi Presensi Sidoarjo.",
                    },
                ],
                tips:
                    "Pastikan nomor WhatsApp Anda aktif dan data diri (NIP, Nama, OPD) disiapkan sebelum menghubungi Helpdesk agar prosesnya lebih cepat.",
            },

            // ---- Child 3: Logout ----
            {
                id: "logout",
                title: "Logout",
                type: "steps",
                description:
                    "Logout digunakan untuk keluar dari aplikasi Presensi Sidoarjo. Pada aplikasi mobile, Anda sebenarnya tidak perlu logout setiap hari karena sesi akan tetap aktif.",

                sections: [
                    {
                        title: "Buka Menu Profil",
                        description:
                            "Masuk ke menu Profil yang ada di aplikasi Presensi Sidoarjo.",
                        image: image("profil.png"),
                    },
                    {
                        title: "Pilih Tombol Keluar",
                        description:
                            "Tekan tombol 'Keluar' atau 'Logout' yang berada di bagian bawah halaman Profil Anda.",
                        image: image("logout.png"),
                    },
                    {
                        title: "Sesi Akun Akan Dihapus",
                        description:
                            "Setelah logout, sistem akan menghapus sesi Anda. Pada login berikutnya, Anda wajib memasukkan NIP, kata sandi, dan menyelesaikan verifikasi keamanan kembali.",
                    },
                ],
                tips:
                    "Hindari Log Out manual jika tidak diperlukan. Cukup tutup aplikasi setelah presensi — saat dibuka kembali, Anda bisa langsung menggunakannya tanpa mengisi NIP dan verifikasi ulang.",
            },
        ],
    },

    // =========================================================
    // DASHBOARD (Presensi Masuk & Keluar)
    // =========================================================
    {
        id: "dashboard",
        title: "Dashboard",
        icon: HiOutlineHome,
        type: "dashboard",
        description:
            "Presensi harian dilakukan langsung dari halaman Beranda aplikasi Presensi Sidoarjo. Melalui halaman utama ini, Anda dapat melakukan Presensi Masuk maupun Presensi Keluar dengan menggunakan deteksi lokasi GPS dan foto wajah secara langsung.",
        sections: [
            // ---- Bagian 1: Memahami Status Tombol ----
            {
                number: 1,
                title: "Memahami Status Tombol di Halaman Beranda",
                description:
                    "Sebelum melakukan presensi, perhatikan warna dan status tombol utama di layar Beranda Anda. Tombol Abu-abu (Nonaktif): Anda sedang tidak bisa melakukan presensi karena status jadwal kerja OFF, hari libur resmi, cuti, tugas belajar, atau dalam proses banding administratif. jika diklik, layar akan menampilkan alasan spesifiknya. Tombol Biru (Check-in / Masuk): status siap untuk melakukan Presensi Masuk. Tombol Merah (Check-out / Keluar): Anda sudah melakukan presensi masuk dan siap untuk Presensi Keluar. Tombol Hijau (Done / Selesai): Anda telah menyelesaikan presensi masuk dan keluar untuk hari ini.",
                image: image("dashboard.png"),
            },

            // ---- Bagian 2: Informasi Lokasi & Jam ----
            {
                number: 2,
                title: "Informasi Lokasi & Jam",
                description:
                    "Halaman Beranda menampilkan jam sistem real-time, jam jadwal kerja, serta indikator lokasi ('Berada dalam lokasi presensi' atau jarak fisik ke titik kantor). Anda juga dapat menekan fitur 'Lokasi Saya' untuk melihat peta posisi Anda dan lokasi presensi terdekat.",
                image: image("petalokasi.png"),
            },

            // ---- Bagian 3: Langkah Melakukan Presensi ----
            {
                number: 3,
                title: "Klik Tombol Presensi",
                description:
                    "Tekan tombol Masuk (Biru) atau Keluar (Merah) pada layar Beranda untuk memulai proses presensi.",
                image: image("dashboard.png"),
            },
            {
                number: 4,
                title: "Pengambilan Foto Wajah",
                description:
                    "Kamera depan akan terbuka secara otomatis. Ambil foto swafoto (selfie) diri Anda secara langsung. Waktu pengambilan foto dibatasi 60 detik.",
                image: image("ambilfoto.jpg"),
            },
            {
                number: 5,
                title: "Pemeriksaan Pratinjau (Preview)",
                description:
                    "Layar akan menampilkan pratinjau foto beserta informasi lokasi Anda. Jika Anda terdeteksi di luar radius lokasi kantor, Anda wajib memilih alasan yang sesuai (misalnya: Perjalanan Dinas atau FWA) sebelum melanjutkan.",
                image: image("jenis-hadir.jpg"),
            },
            {
                number: 6,
                title: "Konfirmasi Presensi",
                description:
                    "Tekan tombol konfirmasi. Setelah berhasil, Anda akan otomatis diarahkan ke halaman Riwayat Presensi dan data kehadiran Anda resmi tercatat.",
                image: image("verifhadir.jpg"),
            },

            // ---- Bagian 4: Timer & Batas Jam ----
            {
                number: 7,
                title: "Ketentuan Batas Waktu (Timer)",
                description:
                    "Pengambilan foto dibatasi 60 detik dan halaman pratinjau (preview) dibatasi 120 detik. Jika waktu habis (meskipun layar HP Anda mati), sistem akan membatalkan proses dan mengembalikan Anda ke halaman Beranda. Hal ini untuk memastikan titik GPS dan waktu foto diambil secara bersamaan.",
            },
            {
                number: 8,
                title: "Pergeseran Jam Presensi",
                description:
                    "Pastikan Anda menyelesaikan proses foto dan konfirmasi sebelum batas jam presensi berakhir. Jika Anda menekan tombol di detik-detik terakhir jam kerja tetapi terlalu lama di halaman foto/pratinjau, presensi dapat gagal/dibatalkan sistem karena waktu operasional presensi telah habis saat tombol konfirmasi diklik.",
            },

            // ---- Bagian 5: Aturan Foto & Sanksi ----
            {
                number: 9,
                title: "Aturan Foto Wajah",
                description:
                    "Foto presensi wajib menampilkan 1 wajah asli pegawai yang bersangkutan secara jelas — tanpa masker, kacamata hitam, atau foto di dalam foto/layar.",
            },
            {
                number: 10,
                title: "Peringatan Penting & Sanksi",
                description:
                    "Seluruh foto dan koordinat presensi yang dikirimkan akan diverifikasi oleh sistem serta dipantau berkala oleh Admin Kepegawaian OPD. Setiap bentuk manipulasi foto atau lokasi dapat dikenakan sanksi pembatalan status presensi oleh Admin OPD dan berpotensi memengaruhi rekapitulasi kehadiran serta TPP Anda.",
            },
        ],
        tips:
            "Jika informasi lokasi atau status tombol di layar terasa belum sesuai dengan kondisi terkini, lakukan pembaruan data (refresh) dengan cara menarik layar Beranda ke bawah (pull-to-refresh).",
    },

    // =========================================================
    // RIWAYAT PRESENSI
    // =========================================================
    {
        id: "rpresensi",
        title: "Riwayat Presensi",
        icon: HiOutlineMapPin,
        type: "rekap kehadiran",
        description:
            "Panduan melihat dan filterisasi riwayat presensi harian, mingguan, dan bulanan.",
        sections: [
            {
                number: 1,
                title: "Status Presensi",
                description:
                    "Anda dapat melihat riwayat Presensi yang telah Anda lakukan di halaman ini secara detail mulai dari jam melakukan presensi hingga lokasi presensi tersebut dilakukan selama 1 minggu ini.",
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
                    "Selain itu, terdapat juga filter secara tahunan dan bulanan untuk memantau status riwayat presensi yang sudah berlangsung.",
                image: image("filter-rekap.jpg"),
            },
            {
                number: 3,
                description:
                    "Disini pada bagian Tahun bisa diatur ingin melihat 2 tahun sebelumnya, tahun ini, maupun tahun depan.",
                image: image("filter-tahun.jpg"),
            },
            {
                number: 4,
                description:
                    "Dan disini juga dapat melihat rekap berdasarkan bulan dalam setahun, 2 tahun sebelumnya, tahun ini, maupun tahun depan.",
                image: image("riwayat-bulann.png"),
            },
        ],
    },

    // =========================================================
    // JADWAL KERJA
    // =========================================================
    {
        id: "jadwal",
        title: "Jadwal Kerja",
        icon: HiOutlineCalendarDays,
        type: "hari kerja",
        description:
            "Panduan melihat jadwal kerja, shift, dan hari libur yang berlaku untuk Anda.",
        sections: [
            {
                number: 1,
                title: "Status Riwayat Jadwal",
                description:
                    "Anda dapat melihat riwayat Jadwal Kerja Anda secara detail selama 1 minggu berdasarkan jadwal reguler shift, atau pun libur dalam seminggu kedepan.",
                image: image("jadwalkerjazoom.png"),
            },
            {
                number: 2,
                title: "Filter Data",
                description:
                    "Selain itu, terdapat juga filter secara tahunan dan bulanan untuk memantau status riwayat presensi yang sudah berlangsung.",
                image: image("filter-rekap.jpg"),
            },
            {
                number: 3,
                description:
                    "Disini pada bagian Tahun bisa diatur ingin melihat 2 tahun sebelumnya, tahun ini, maupun tahun depan.",
                image: image("tahun-jadwal.png"),
            },
            {
                number: 4,
                description:
                    "Dan disini juga dapat melihat rekap berdasarkan bulan dalam setahun, 2 tahun sebelumnya, tahun ini, maupun tahun depan.",
                image: image("bulan-jadwal.png"),
            },
        ],
    },

    // =========================================================
    // PROFIL
    // =========================================================
    {
        id: "profil",
        title: "Profil",
        icon: HiOutlineQuestionMarkCircle,
        type: "profil",
        description:
            "Panduan mengelola data profil pegawai dan pengaturan akun.",
        sections: [
            {
                number: 1,
                title: "Informasi Data Diri",
                description:
                    "Anda dapat melihat detail profil anda yang berisi informasi pribadi Anda seperti berikut.",
                image: image("profil.png"),
            },
            {
                number: 2,
                title: "Pusat Bantuan",
                description:
                    "Ketika Anda menggunakan Pusat Bantuan, nanti Anda akan diarahkan secara otomatis melalui WhatsApp dengan Template yang sudah ada tinggal mengirimkan keluhan nya seperti apa.",
                image: image("helpdesk.png"),
            },
            {
                number: 3,
                title: "Logout",
                description:
                    "Ketika Anda ingin keluar dapat menggunakan tombol 'Keluar' di bawah Data Diri Profil Anda. Hindari menekan tombol Logout jika tidak diperlukan, karena sistem akan menghapus sesi Anda dan Anda wajib login ulang beserta verifikasi keamanan pada login berikutnya.",
                image: image("logout.png"),
            },
        ],
        tips:
            "Untuk penggunaan harian, tidak perlu Log Out. Cukup tutup aplikasi setelah presensi, dan saat dibuka kembali Anda bisa langsung menggunakannya.",
    },
];

export default tutorialUser;