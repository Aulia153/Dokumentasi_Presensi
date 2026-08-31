import {
    HiOutlineLockClosed, HiOutlineHome, 
    HiOutlineMapPin, HiOutlineCalendarDays, 
    HiOutlineDocumentText, HiOutlineCog6Tooth, HiOutlineQuestionMarkCircle,
} from "react-icons/hi2";

//Import Gambar
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

const tutorialData = [
    
    //LOGIN
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
                    "Halaman login merupakan halaman awal untuk mengakses Sistem Presensi Digital Kabupaten Sidoarjo menggunakan akun yang telah terdaftar.",

                image: image("login", "login-page.png"),

                sections: [
                    {
                        title: "NIP",
                        description:
                            "Masukkan Nomor Induk Pegawai (NIP) yang telah terdaftar pada sistem.",
                        image: image("login", "login-nip.png")
                    },

                    {
                        title: "Password",
                        description:
                            "Gunakan password yang sama dengan akun SSO.",
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
                        number: 1,
                        title: "Pilih Logout",
                        description:
                            "Klik tombol Logout pada bagian kanan atas aplikasi.",
                        image: image("logout", "tombol-logout.png"),
                    },

                    {
                        number: 2,
                        title: "Pop Up Logout",
                        description: 
                            "Setelah tombol Logout di klik, akan muncul pop up Keluar dari Sistem?",
                        image: image("logout", "tanya-logout.png"),
                    },

                    {
                        number: 3,
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
                            "Setelah data lokasi  diisi dan sudah sesuai, klik tombol Simpan lokasi untuk menyimpan data.",
                        image: image("lokasi-kerja", "simpan-lokasi.png"),
                    },

                    {
                        title: "Menunggu Persetujuan",
                        description: 
                            "Setelah berhasil ditambahkan, status lokasi menjadi Belum Disetujui. Data selanjutnya diproses oleh BKD dan dapat digunakan setelah memperoleh persetujuan.",
                    },

                    {
                        title: "Lihat peta semua kantor",
                        description:
                            "Gunakan tombol Peta Semua Kantor untuk melihat lokasi kantor yang tersedia.",
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
                            "Masukkan nama pegawai pada kolom Cari Pegawai.",
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

                sections: [
                    {
                        title: "Buka Hari Kerja",
                        description:
                            "Pilih menu Jadwal Kerja > Hari Kerja.",
                    },

                    {
                        title: "Tambah Template",
                        description:
                            "Klik tombol Tambah Template untuk menambahkan data shift.",
                    },

                    {
                        title: "Isi data template",
                        description: 
                            "Masukkan informasi template, OPD, tipe, status, serta konfigurasi hari dan jam kerja.",
                    },

                    {
                        title: "Buat template",
                        description: 
                            "Klik tombol Buat Template. Jika berhasil, data shift akan tersimpan.",
                    },

                    {
                        title: "Edit Template",
                        description: 
                            "Klik tombol edit pada data yang ingin diperbarui, kemudian lakukan perubahan.",
                    },

                    {
                        title: "Simpan Perubahan",
                        description: 
                            "Klik tombol Update Template untuk menyimpan perubahan.",
                    },
                ],
            },

            {
                id: "kebijakan-jadwal",
                title: "Kebijakan Jadwal Presensi",
                type: "steps",
                description: 
                    "Menu Kebijakan Jadwal Presensi digunakan untuk mengelola kebijakan jadwal kerja sebagai acuan proses presensi.",
                
                sections: [
                    {
                        number: 1,
                        title: "Bukan Kebijakan Jadwal.",
                        description: 
                            "Pilih menu Jadwal Kerja > Kebijakan Jadwal Presensi.",
                    },

                    {
                        number: 2,
                        title: "Pilih Kebijakan",
                        description: 
                            "Masukkan atau pilih nama shift pada kolom Pilih Kebijakan Presensi.",
                    },

                    {
                        number: 3,
                        title: "Pilih OPD",
                        description:
                            "Pilih OPD diinginkan.",
                    },

                    {
                        number: 4,
                        title: "Pilih Pegawai",
                        description:
                            "Pilih pegawai yang akan ditetapkan atau dipilih.",
                    },

                    {
                        number: 5,
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
                    "Menu Manajemen Shift Pegawai digunakan untuk mengatur pembagian shift kerja setiap hari kepada pegawai.",
                
                sections: [
                    {
                        number: 1,
                        title: "Buka Manajemen Shift",
                        description:
                            "Pilih menu Jadwal Kerja > Manajemen Shift Pegawai.",
                    },

                    {
                        number: 2,
                        title: "Pilih OPD",
                        description:
                            "Pilih OPD yang ingin dikelola.",
                    },

                    {
                        number: 3, 
                        title: "Filter Jam Kerja",
                        description:
                            "Pilih Filter Jam Kerja sesuai dengan kebutuhan.",
                    },

                    {
                        number: 4,
                        title: "Pilih Pegawai",
                        description:
                            "Pilih pegawai yang jadwal shift-nya ingin diubah.",
                    },

                    {
                        number: 5,
                        title: "Ubah Jadwal Shift",
                        description: 
                        "Lakukan perubahan jadwal shift pegawai sesuai dengan kebutuhan.",
                    },

                    {
                        number: 6,
                        title: "Simpan Perubahan",
                        description:
                            "Klik tombol Simpan untuk menyimpan perubahan jadwal shift.",
                    },

                    {
                        number: 7,
                        title: "Import Excel",
                        description: 
                            "Perubahan jadwal juga dapat dilakukan menggunakan fitur Import Excel.",
                    },

                    {
                        number: 8,
                        title: "Download Template",
                        description: 
                            "Unduh template Excel yang disediakan kemudian isi data pegawai dan jadwal shift.",
                    },

                    {
                        number: 9,
                        title: "Upload & Import",
                        description:
                            "Unggah file Excel yang sudah diisi kemudian klik Upload & Import untuk memproses perubahan.",
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

                sections: [
                    {
                        number: 1,
                        title: "Buka Menu Laporan Presensi",
                        description:
                            "Pilih menu Laporan > Laporan Presensi Pegawai.",
                    },

                    {
                        number: 2,
                        title: "Pilih Periode",
                        description:
                            "Tentukan periode laporan yang ingin ditampilkan.",
                    },

                    {
                        number: 3,
                        title: "Pilih OPD",
                        description: 
                            "Pilih OPD yang ingin ditampilkan datanya.",
                    },

                    {
                        number: 4,
                        title: "Export Excel",
                        description:
                            "Gunakan tombol export untuk mengunduh laporan dalam format Excel.",
                    },

                    {
                        number: 5,
                        title: "Cari Pegawai",
                        description: 
                            "Masukkan Nama Pegawai atau NIP Pegawai pada kolom pencarian.",
                    },

                    {
                        number: 6,
                        title: "Verifikasi Foto",
                        description:
                            "Untuk melakukan verifikasi foto, pilih data yang diperlukan kemudian pilih Tindakan Persetujuan, masukkan Catatan Verifikasi, lalu simpan.",
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
                    "Menu Laporan Skor Disiplin digunakan untuk menampilkan dan mencetak laporan skor disiplin pegawai berdasarkan periode yang dipilih.",

                sections: [
                    {
                        number: 1,
                        title: "Buka Skor Displin",
                        description:
                            "Pilih menu Laporan > Skor Disiplin.",
                    },

                    {
                        number: 2,
                        title: "Pilih Periode",
                        description:
                            "Pilih Bulan dan Tahun yang ingin ditampilkan.",
                    },

                    {
                        number: 3,
                        title: "Pilih OPD",
                        description:
                            "Pilih OPD yang ingin ditampilakan",
                    },

                    {
                        number: 4,
                        title: "Export Laporan",
                        description: 
                            "Gunakan tombol export untuk mengunduh laporan dalam format dalam format Excel.",
                    },

                    {
                        number: 5,
                        title: "Lihat dashboard skor",
                        description:
                            "Dashboard menampilkan Total Pegawai, rata-rata skor disiplin, jumlah pegawai tepat waktu, terlambat, lupa check out, dan tidak presensi/alpa.",
                    },

                    {
                        number: 6, 
                        title: "Lihat skor pegawai",
                        description:
                            "Pengguna dapat melihat skor disiplin masing-masing pegawai yang digunakan sebagao bukti dukung perhitungan TPP.",
                    },
                ],

                tips:
                    "Skor disiplin digunakan sebagai bukti dukung dalam perhitungan Tambahan Pengahasilan Pegawai (TPP).",
            },
        ],
    },

    //FAQ
    {
        id: "faq",
        title: "FAQ",
        icon: HiOutlineQuestionMarkCircle,

        children: [
            {
                id: "faq-presensi",
                title: "FAQ Admin",
                type: "faq",
                description:
                    "Panduan melakukan Presensi Masuk dan Presensi Keluar melalui halaman Beranda aplikasi Presensi Sidoarjo.",

                questions: [
                    {
                        question: "Bagaimana cara melakukan Presensi Masuk dan Presensi Keluar?",
                        answer: 
                            `Presensi harian dilakukan langsung dari halaman Beranda aplikasi Presensi Sidoarjo. Pengguna dapat melakukan 
                            Presensi Masuk maupun Presensi Leluar dengan menggunakan deteksi lokasi GPS dan foto wajah secara langsung.`.trim(),
                    },

                    {
                        question: "Apa arti warna tombol presensi?",
                        items: [
                            {
                                label: "Abu-abu - Nonaktif",
                                description: 
                                    "Presensi tidak dapat dilakukan karena jadwal kerja OFF, hari libur resmi, cuti, tugas belajar, atau proses banding administratif.",
                            },

                            {
                                label: "Biru- Check-in / Masuk",
                                description:
                                    "Menunjukkan bahwa pengguna telah melakukan Presensi Masuk dan dapat melakukan Presensi Keluar.",
                            },

                            {
                                label: "Hijau - Done / Selesai",
                                description: 
                                    "Menunjukkan bahwa Presensi Masuk dan Presensi Keluar telah selesai dilakukan.",
                            },
                        ],
                    },

                    {
                        question: "Apa saja informasi yang tersedia di halaman Beranda?",
                        items: [
                            {
                                label: "Jam Sistem",
                                description:
                                    "Menampilkan waktu sistem secara real-time.",
                            },
                            
                            {
                                label: "Jadwal Kerja",
                                description: 
                                    "Menampilkan jam jadwal kerja pengguna.",
                            },

                            {
                                label: "Status Lokasi",
                                description:
                                    "Menampilkan apakah pengguna berada dalam lokasi presensi atau menampilkan jarak pengguna dari titik kantor.",
                            },

                            {
                                label: "Lokasi Saya",
                                description:
                                    "Digunakan untuk melihat posisi pengguna dan lokasi presensi terdekat pada peta.",
                            },
                        ],
                    },

                    {
                        question: "Bagaimana langkah melakukan presensi?",
                        steps: [
                            "Tekan tombol masuk berwarna biru atau tombol keluar berwarna merah pada halaman Beranda.",
                        ],
                    },
                ],
            },
        ],
    },
];

export default tutorialData;