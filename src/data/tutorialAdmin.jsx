import {
    HiOutlineLockClosed, HiOutlineHome,
    HiOutlineMapPin, HiOutlineCalendarDays,
    HiOutlineDocumentText,
} from "react-icons/hi2";

const images = import.meta.glob(
    "../assets/admin/**/*.{png,jpg,jpeg,webp}",
    {
        eager: true,
        import: "default",
    }
);

const image = (folder, file) => {
    return images[`../assets/admin/${folder}/${file}`] || null;
};

const tutorialAdmin = [

    {
        id: "login",
        title: "Login",
        icon: HiOutlineLockClosed,

        children: [
            {
                id: "login-overview",
                title: "Halaman Login",
                type: "overview",

                description:
                    "Halaman login merupakan halaman awal yang digunakan untuk mengakses Sistem Presensi Digital Kabupaten Sidoarjo menggunakan akun yang telah terdaftar.",

                image: image("login", "login-page.png"),

                sections: [
                    {
                        title: "Akses Sistem",
                        description:
                            "Buka Sistem Presensi Digital Kabupaten Sidoarjo melalui alamat yang telah disediakan.",
                    },

                    {
                        title: "Masukkan NIP",
                        description:
                            "Pada halaman login, masukkan Nomor Induk Pegawai (NIP) pada kolom yang telah disediakan.",
                        image: image("login", "login-nip.png")
                    },

                    {
                        title: "Masukkan Password",
                        description:
                            "Masukkan password akun SSO yang digunakan untuk mengakses sistem.",
                        image: image("login", "login-password.png")
                    },

                    {
                        title: "Lakukan Verifikasi",
                        description:
                            "Geser tombol verifikasi dari kiri ke kanan sampai proses verifikasi berhasil.",
                        image: image("login", "login-verifikasi.png")
                    },

                    {
                        title: "Masuk ke Sistem",
                        description:
                            "Setelah NIP, password, dan verifikasi sudah benar, klik tombol Masuk ke Sistem.",
                        image: image("login", "login-masuk.png")
                    },

                    {
                        title: "Masuk ke Dashboard",
                        description:
                            "Jika login berhasil, Anda akan langsung diarahkan ke halaman dashboard untuk melihat informasi presensi.",
                        image: image("dashboard", "dashboard-overview.png"),
                    },
                ],

                tips:
                    "Pastikan NIP dan password yang dimasukkan sudah benar. Jika verifikasi belum berhasil, ulangi dengan menggeser tombol verifikasi sampai selesai.",
            },

            {
                id: "logout",
                title: "Logout",
                type: "steps",
                description:
                    "Logout digunakan untuk keluar dari Sistem Presensi Digital setelah selesai menggunakan aplikasi.",

                sections: [
                    {
                        title: "Pilih Logout",
                        description:
                            "Setelah selesai menggunakan sistem, klik tombol Logout pada bagian kanan atas aplikasi.",
                        image: image("logout", "tombol-logout.png"),
                    },

                    {
                        title: "Konfirmasi Logout",
                        description:
                            "Setelah tombol Logout di klik, akan muncul konfirmasi \"Keluar dari Sistem?\". Periksa kembali sebelum melanjutkan",
                        image: image("logout", "tanya-logout.png"),
                    },

                    {
                        title: "Kembali ke Halaman Login",
                        description:
                            "Jika logout berhasil, sistem akan mengakhiri sesi Anda dan mengarahkan kembali ke halaman login.",
                        image: image("logout", "berhasil-logout.png")
                    },
                ],

                tips:
                    "Lakukan logout setelah selesai menggunakan sistem, terutama ketika menggunakan komputer bersama.",
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
                id: "dashboard-monitoring",
                title: "Dashboard Monitoring",
                type: "dashboard",
                description:
                    "Dashboard merupakan halaman utama yang ditampilkan setelah berhasil login. Halaman ini digunakan untuk melihat ringkasan data presensi pegawai sesuai tanggal dan OPD yang dipilih.",
                image: image("dashboard", "dashboard-overview.png"),

                sections: [
                    {
                        title: "Monitoring Presensi ASN",
                        description:
                            "Pilih tanggal dan dan OPD yang ingin dipantau. Setelah pilihan ditentukan, sistem akan menampilkan data presensi sesuai dengan pilihan tersebut.",
                        image: image("dashboard", "monitoring-dashboard.png"),
                    },

                    {
                        title: "Total ASN Aktif",
                        description:
                            "Menampilkan jumlah seluruh ASN yang masih aktif pada OPD yang dipilih. Kotak Total ASN Aktif dapat diklik untuk melihat daftar ASN yang termasuk dalam jumlah tersebut.",
                        image: image("dashboard", "total-asn.png"),
                    },

                    {
                        title: "Hadir Hari Ini",
                        description:
                            "Menampilkan jumlah ASN yang melakukan presensi hadir pada tanggal yang dipilih. Klik kotak Hadir Hari Ini untuk melihat daftar ASN yang tercatat hadir.",
                        image: image("dashboard", "hadir-hari-ini.png"),
                    },

                    {
                        title: "Terlambat",
                        description:
                            "Menampilkan jumlah ASN yang melakukan presensi setelah waktu yang telah ditentukan. Klik kotak Terlambat untuk melihat daftar ASN yang tercatat terlambat.",
                        image: image("dashboard", "terlambat.png"),
                    },

                    {
                        title: "Cuti",
                        description:
                            "Menampilkan jumlah ASN yang sedang cuti pada tanggal yang dipilih. Klik kotak Cuti untuk melihat daftar ASN yang tercatat sedang cuti.",
                        image: image("dashboard", "cuti.png"),
                    },

                    {
                        title: "Tanpa Keterangan",
                        description:
                            "Menampilkan jumlah ASN yang belum melakukan presensi atau belum memiliki keterangan pada tanggal yang dipilih. Klik kotak Tanpa Keterangan untuk melihat daftar ASN yang termasuk dalam data tersebut.",
                        image: image("dashboard", "tanpa-keterangan.png"),
                    },
                ],

                tips:
                    "Pilih tanggal dan OPD terlebih dahulu untuk menyesuaikan data yang ingin dipantau. Klik kotak informasi untuk melihat daftar ASN secara lebih detail.",
            },
        ],
    },

    //LOKASI KERJA
    {
        id: "lokasi",
        title: "Lokasi Kerja",
        icon: HiOutlineMapPin,

        children: [
            {
                id: "peta-lokasi",
                title: "Peta Lokasi",
                type: "steps",
                description:
                    "Menu peta lokasi digunakan untuk membuat dan melihat lokasi tempat kerja.",
                image: image("lokasi-kerja", "tampilan-peta-lokasi.png"),

                sections: [
                    {
                        title: "Buka Peta Lokasi",
                        description:
                            "Pilih menu Lokasi Kerja > Peta Lokasi.",
                        image: image("lokasi-kerja", "peta-lokasi.png"),
                    },

                    {
                        title: "Tambah Lokasi",
                        description:
                            "Klik tombol Tambah Lokasi Baru untuk menambahkan lokasi tempat kerja .",
                        image: image("lokasi-kerja", "tambah-lokasi.png"),
                    },

                    {
                        title: "Isi Data Lokasi",
                        description:
                            "Masukkan informasi lokasi tempat kerja sesuai data yang diperlukan.",
                        image: image("lokasi-kerja", "isi-data-lokasi.png"),
                    },

                    {
                        title: "Simpan Lokasi",
                        description:
                            "Setelah data lokasi diisi dan sudah sesuai, klik tombol Simpan lokasi untuk menyimpan data.",
                        image: image("lokasi-kerja", "simpan-lokasi.png"),
                    },

                    {
                        title: "Menunggu Persetujuan",
                        description:
                            "Setelah proses penambahan lokasi berhasil dilakukan, status data akan menjadi 'Belum Disetujui'. Selanjutnya, data akan diproses oleh Badan Kepegawaian Daerah (BKD) dan dapat digunakan setelah memperoleh persetujuan",
                    },

                    {
                        title: "Lihat peta semua kantor",
                        description:
                            "Gunakan tombol Peta Semua Kantor untuk melihat peta semua kantor yang tersedia.",
                        image: image("lokasi-kerja", "peta-semua-kantor.png"),
                    },
                ],

                tips:
                    "Pastikan data lokasi yang dimasukkan sudah sesuai sebelum menyimpan.",
            },

            {
                id: "titik-presensi",
                title: "Titik Presensi Pegawai",
                type: "steps",

                description:
                    "Menu Titik Presensi Pegawai digunakan untuk mengetahui titik lokasi tempat kerja yang dapat digunakan oleh pegawai untuk melakukan presensi.",
                image: image("lokasi-kerja", "lokasi-absensi.png"),

                sections: [
                    {
                        title: "Buka Titik Presensi",
                        description:
                            "Pilih menu Lokasi Kerja > Titik Presensi Pegawai.",
                        image: image("lokasi-kerja", "titik-presensi.png"),
                    },

                    {
                        title: "Cari Pegawai",
                        description:
                            "Untuk melihat titik presensi salah satu pegawai, masukkan nama pegawai pada kolom 'Cari Pegawai'.",
                    },

                    {
                        title: "Tampilkan data",
                        description:
                            "Klik tombol pencarian atau Refresh. Sistem akan menampilkan pegawai yang sesuai dengan kata kunci.",
                    },

                    {
                        title: "Lihat Titik Presensi",
                        description:
                            "Periksa lokasi tempat kerja yang dapat digunakan oleh pegawai tersebut.",
                    },
                ],
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
                type: "steps",
                description:
                    "Menu Hari Kerja digunakan untuk mengelola dan menetapkan jadwal hari kerja bagi pegawai dengan sistem kerja shift.",
                image: image("jadwal-kerja", "tampilan-hari-kerja.png"),

                sections: [
                    {
                        title: "Buka Hari Kerja",
                        description:
                            "Pilih menu Jadwal Kerja > Hari Kerja.",
                        image: image("jadwal-kerja", "hari-kerja.png"),
                    },

                    {
                        title: "Tambah Template",
                        description:
                            "Klik tombol Tambah Template untuk menambahkan data shift.",
                        image: image("jadwal-kerja", "hari-tambah-template.png"),
                    },

                    {
                        title: "Isi data template",
                        description:
                            "Masukkan informasi template, OPD, tipe, status, serta konfigurasi hari dan jam kerja.",
                        image: image("jadwal-kerja", "hari-isidata.png"),
                    },

                    {
                        title: "Buat template",
                        description:
                            "Klik tombol Buat Template. Jika berhasil, data shift akan tersimpan dan berhasil dibuat oleh sistem.",
                    },

                    {
                        title: "Edit Template",
                        description:
                            "Untuk mengudah bata, klik tombol edit pada data yang ingin diperbarui, kemudian lakukan perubahan pada data yang diperlukan.",
                    },

                    {
                        title: "Simpan Perubahan",
                        description:
                            "Klik tombol Update Template untuk menyimpan hasil perubahan.",
                    },
                ],
            },

            {
                id: "kebijakan-jadwal",
                title: "Kebijakan Jadwal Presensi",
                type: "steps",
                description:
                    "Menu Kebijakan Jadwal Presensi digunakan untuk mengelola dan menetapkan kebijakan jadwal kerja pegawai sebagai acuan proses presensi.",
                image: image("jadwal-kerja", "tampilan-kebijakan.png"),

                sections: [
                    {
                        title: "Buka Kebijakan Jadwal.",
                        description:
                            "Pilih menu Jadwal Kerja > Kebijakan Jadwal Presensi.",
                        image: image("jadwal-kerja", "kebijakan-jadwal.png"),
                    },

                    {
                        title: "Pilih Kebijakan",
                        description:
                            "Masukkan atau pilih nama shift pada kolom Pilih Kebijakan Presensi.",
                        image: image("jadwal-kerja", "kebijakan-pilih-kebijakan.png"),
                    },

                    {
                        title: "Pilih OPD",
                        description:
                            "Pilih OPD diinginkan.",
                        image: image("jadwal-kerja", "kebijakan-pilih-opd.png"),
                    },

                    {
                        title: "Pilih Pegawai",
                        description:
                            "Pilih pegawai yang akan ditetapkan atau dipilih.",
                        image: image("jadwal-kerja", "kebijakan-pilih-pegawai.png"),
                    },

                    {
                        title: "Simpan",
                        description:
                            "Centang nama pegawai yang dipilih kemudian klik tombol penetapan kebijakan untuk menyimpan data.",
                    },
                ],

                tips:
                    "Pastikan OPD, kebijakan, dan pegawai yang dipilih sudah sesuai.",
            },

            {
                id: "manajemen-shift",
                title: "Manajemen Shift Pegawai",
                type: "steps",
                description:
                    "Menu Manajemen Shift Pegawai digunakan untuk mengatur dan mengelola penjadwalan pegawai yang menggunakan sistem shift.",
                image: image("jadwal-kerja", "tampilan-manajemen.png"),

                sections: [
                    {
                        title: "Buka Manajemen Shift",
                        description:
                            "Pilih menu Jadwal Kerja > Manajemen Shift Pegawai.",
                        image: image("jadwal-kerja", "manajemen-shift.png"),
                    },

                    {
                        title: "Pilih OPD",
                        description:
                            "Pilih OPD yang ingin dikelola.",
                        image: image("jadwal-kerja", "manajemen-pilih-opd.png"),
                    },

                    {
                        title: "Filter Jam Kerja",
                        description:
                            "Pilih Filter Jam Kerja sesuai dengan kebutuhan.",
                        image: image("jadwal-kerja", "manajemen-filter-jam.png"),
                    },

                    {
                        title: "Pilih Pegawai",
                        description:
                            "Pilih pegawai yang jadwal shift-nya ingin diubah.",
                        image: image("jadwal-kerja", "manajemen-pegawai.png"),
                    },

                    {
                        title: "Ubah Jadwal Shift",
                        description:
                            "Lakukan perubahan jadwal shift pegawai sesuai dengan kebutuhan.",
                    },

                    {
                        title: "Simpan Perubahan",
                        description:
                            "Klik tombol Simpan untuk menyimpan perubahan jadwal shift.",
                    },

                    {
                        title: "Import Excel",
                        description:
                            "Perubahan jadwal shift juga dapat dilakukan menggunakan fitur Import Excel.",
                        image: image("jadwal-kerja", "manajemen-import-excel.png"),
                    },

                    {
                        title: "Download Template",
                        description:
                            "Unduh template Excel yang disediakan kemudian isi data pegawai dan jadwal shift yang akan diubah pada file template tersebut.",
                        image: image("jadwal-kerja", "manajemen-download-template.png"),
                    },

                    {
                        title: "Upload & Import",
                        description:
                            "Unggah file Excel yang telah diisi, kemudian klik Upload & Import untuk memproses perubahan data.",
                    },
                ],

                tips:
                    "Pastikan data Excel sudah seusai dengan template sebelum melakukan Upload & Import.",
            },
        ],
    },

    //LAPORAN
    {
        id: "laporan",
        title: "Laporan",
        icon: HiOutlineDocumentText,

        children: [
            {
                id: "laporan-presensi",
                title: "Laporan Presensi Pegawai",
                type: "steps",
                description:
                    "Menu Laporan Presensi Pegawai digunakan untuk menyajikan rekapitulasi data presensi pegawai berdasarkan periode yang dipilih.",
                image: image("laporan", "tampilan-presensi-pegawai.png"),

                sections: [
                    {
                        title: "Buka Menu Laporan Presensi",
                        description:
                            "Pilih menu Laporan > Laporan Presensi Pegawai.",
                        image: image("laporan", "presensi-pegawai.png"),
                    },

                    {
                        title: "Pilih Periode",
                        description:
                            "Tentukan periode laporan yang ingin ditampilkan.",
                        image: image("laporan", "presensi-periode.png"),
                    },

                    {
                        title: "Pilih OPD",
                        description:
                            "Pilih OPD yang ingin ditampilkan datanya.",
                        image: image("laporan", "presensi-opd.png"),
                    },

                    {
                        title: "Cari Pegawai",
                        description:
                            "Untuk mencari data pegawai, masukkan Nama Pegawai atau NIP Pegawai pada kolom pencarian.",
                        image: image("laporan", "presensi-cari.png"),
                    },

                    {
                        title: "Export Excel",
                        description:
                            "Gunakan tombol export untuk mengunduh laporan dalam format Excel.",
                        image: image("laporan", "presensi-export.png"),
                    },
                ],

                tips:
                    "Gunakan periode dan OPD yang sesuai agar laporan yang dihasilkan tepat.",
            },

            {
                id: "laporan-disiplin",
                title: "Laporan Skor Disiplin",
                type: "steps",
                description:
                    "Menu Laporan Skor Disiplin digunakan untuk menampilkan dan mencetak laporan skor disiplin pegawai berdasarkan periode yang dipilih dan digunakan sebagai bukti dukung perhitungan TPP.",
                image: image("laporan", "tampilan-skor.png"),

                sections: [
                    {
                        title: "Buka Skor Displin",
                        description:
                            "Pilih menu Laporan > Skor Disiplin.",
                        image: image("laporan", "skor-disiplin.png"),
                    },

                    {
                        title: "Pilih Periode",
                        description:
                            "Pilih Bulan dan Tahun yang ingin ditampilkan.",
                        image: image("laporan", "skor-periode.png"),
                    },

                    {
                        title: "Pilih OPD",
                        description:
                            "Pilih OPD yang ingin ditampilakan",
                        image: image("laporan", "skor-opd.png"),
                    },

                    {
                        title: "Export Laporan",
                        description:
                            "Gunakan tombol export untuk mengunduh laporan dalam format dalam format Excel.",
                        image: image("laporan", "skor-export.png"),
                    },

                    {
                        title: "Lihat dashboard skor",
                        description:
                            "Pada menu 'Laporan Skor Disiplin', pengguna dapat melihat dashboard yang menampilkan informasi Total Pegawai, rata-rata skor disiplin, jumlah pegawai tepat waktu, terlambat, lupa check out, dan tidak presensi/alpa.",
                    },

                    {
                        title: "Lihat skor pegawai",
                        description:
                            "Pengguna dapat melihat skor disiplin masing-masing pegawai yang digunakan sebagai bukti dukung perhitungan TPP (Tambahan Penghasilan Pegawai).",
                    },
                ],
            },
        ],
    },
    
];

export default tutorialAdmin;