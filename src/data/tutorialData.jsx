import {
    HiOutlineLockClosed, HiOutlineHome,
    HiOutlineMapPin, HiOutlineCalendarDays,
    HiOutlineDocumentText, HiOutlineCog6Tooth, HiOutlineQuestionMarkCircle,
} from "react-icons/hi2";

const images = import.meta.glob(
    "../assets/tutorial/**/*.{png,jpg,jpeg,webp}",
    {
        eager: true,
        import: "default",
    }
);

const image = (folder, file) => {
    return images[`../assets/tutorial/${folder}/${file}`] || null;
};

const tutorialData = [

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
                            "Aplikasi Presensi Digital Kabupaten Sidoarjo, dapat diakses melalui: https://presensi.sidoarjokab.go.id",
                    },

                    {
                        title: "NIP",
                        description:
                            "Untuk melakukan login, masukkan Nomor Induk Pegawai (NIP) yang telah terdaftar pada sistem.",
                        image: image("login", "login-nip.png")
                    },

                    {
                        title: "Password",
                        description:
                            "Setelah itu, masukkan password. Password pada aplikasi presensi sama dengan password yang terdaftar pada aplikasi SSO.",
                        image: image("login", "login-password.png")
                    },

                    {
                        title: "Verifikasi",
                        description:
                            "Geser tombol verifikasi untuk memastikan proses login yang dilakukan oleh pengguna.",
                        image: image("login", "login-verifikasi.png")
                    },

                    {
                        title: "Masuk ke Sistem",
                        description:
                            "Klik tombol Masuk ke Sistem setelah seluruh data dan verifikasi selesai.",
                        image: image("login", "login-masuk.png")
                    },

                    {
                        title: "Berhasil Login",
                        description:
                            "Jika proses login berhasil, sistem akan masuk ke halaman Dashboard",
                        image: image("dashboard", "dashboard-overview.png"),
                    },
                ],

                tips:
                    "Pastikan NIP dan password sudah sesuai dengan akun SSO sebelum melakukan login.",
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
                            "Klik tombol Logout pada bagian kanan atas aplikasi.",
                        image: image("logout", "tombol-logout.png"),
                    },

                    {
                        title: "Pop Up Logout",
                        description:
                            "Setelah tombol Logout di klik, akan muncul pop up Keluar dari Sistem?",
                        image: image("logout", "tanya-logout.png"),
                    },

                    {
                        title: "Kembali ke Halaman Login",
                        description:
                            "Setelah berhasil logout, sistem akan mengarahkan kembali ke halaman login.",
                        image: image("logout", "berhasil-logout.png")
                    },
                ],

                tips:
                    "Selalu lakukan logout setelah selesai menggunakan sistem, terutama ketika menggunakan komputer bersama.",
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
                    "Dashboard merupakan halaman utama setelah pengguna berhasil login. Halaman ini digunakan untuk memantau kondisi presensi pegawai berdasarkan tanggal dan OPD yang dipilih.",
                image: image("dashboard", "dashboard-overview.png"),

                sections: [
                    {
                        title: "Monitoring Presensi ASN",
                        description:
                            "Pilih tanggal dan satuan kerja yang ingin di monitoring.",
                        image: image("dashboard", "monitoring-dashboard.png"),
                    },

                    {
                        title: "Total ASN Aktif",
                        description:
                            "Menampilkan jumlah ASN yang aktif pada data yang sedang dipantau.",
                        image: image("dashboard", "total-asn.png"),
                    },

                    {
                        title: "Hadir Hari Ini",
                        description:
                            "Menampilkan jumlah pegawai yang hadir pada tanggal yang dipilih.",
                        image: image("dashboard", "hadir-hari-ini.png"),
                    },

                    {
                        title: "Terlambat",
                        description:
                            "Menampilkan jumlah pegawai yang melakukan presensi melewati waktu yang telah ditentukan.",
                        image: image("dashboard", "terlambat.png"),
                    },

                    {
                        title: "Cuti",
                        description:
                            "Menampilkan jumlah pegawai yang cuti pada tanggal yang dipilih",
                        image: image("dashboard", "cuti.png"),
                    },

                    {
                        title: "Tanpa Keterangan",
                        description:
                            "Menampilkan jumlah pegawai yang belum melakukan presensi atau tidak memiliki keterangan.",
                        image: image("dashboard", "tanpa-keterangan.png"),
                    },
                ],

                tips:
                    "Gunakan filter tanggal dan satker terlebih dahulu agar informasi dashboard sesuai dengan data yang ingin dipantau.",
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
                    },

                    {
                        title: "Pilih OPD",
                        description:
                            "Pilih OPD yang ingin ditampilakan",
                    },

                    {
                        title: "Export Laporan",
                        description:
                            "Gunakan tombol export untuk mengunduh laporan dalam format dalam format Excel.",
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

export default tutorialData;