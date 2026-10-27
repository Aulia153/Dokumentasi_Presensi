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
                type: "steps",
                description:
                    "Dashboard Monitoring merupakan halaman yang digunakan oleh Admin OPD untuk memantau ringkasan data presensi pegawai. Halaman ini menyajikan informasi jumlah ASN aktif, kehadiran, keterlambatan, cuti, dan ASN tanpa keterangan. Data ditampilkan berdasarkan tanggal dan OPD yang dipilih sehiingga admin dapat memeriksa kondisi presensi sesuai dengan kebutuhan.",

                sections: [
                    {
                        title: "Mengenal Dashboard Monitoring",
                        description:
                            "Dashboard monitoring menyajikan ringkasan informasi presensi ASN dalam bentuk kartu indikator. Setiap kartu menunjukkan kategori informasi yang berbeda, seperti jumlah ASN aktif, ASN yang hadir hari ini, terlambat, cuti, dan ASN tanpa keterangan. Ringkasan ini membantu Admin OPD mengetahui kondisi presensi tanpa harus memeriksa data setiap pegawai satu persatu.",
                        image: image("dashboard", "dashboard-overview.png"),
                    },

                    {
                        title: "Memilih Tanggal dan OPD",
                        description: 
                            "Sebelum membaca data pada dashboard, tentukan dahulu tanggal dan OPD  yang ingin diperiksa. Tanggal digunakan untuk menentukan periode data presensi yang ditampilkan, sedangkan OPD digunakan untuk menentukan organisasi yang datanya ingin dipantau. Pastikan pilihan tersebut sesuai agar informasi yang dibaca tidak keliru.",
                    },

                    {
                        title: "Total ASN Aktif",
                        description:
                            "Indikator Total ASN Aktif menunjukkan daftar ASN aktif pada OPD yang dipilih. Klik kartu Total ASN Aktif untuk melihat daftar ASN yang aktif pada OPD terkait.",
                        image: image("dashboard", "total-asn.png"),
                    },

                    {
                        title: "Hadir Hari Ini",
                        description:
                            "Indikator Hadir Hari Ini menunjukkan daftar ASN yang tercatat hadir pada tanggal yang dpilih. Klik kartu Hadir Hari Ini untuk melihat daftar kehadiran ASN yang termasuk dalam data kehadiran.",
                        image: image("dashboard", "hadir-hari-ini.png"),
                    },

                    {
                        title: "Terlambat",
                        description:
                            "Indikator Terlambat menunjukkan daftar ASN yang melakukan presensi setelah waktu masuk yang telah dijadwalkan. Klik kartu Terlambat untuk melihat daftar ASN yang tercatat terlambat.",
                        image: image("dashboard", "terlambat.png"),
                    },

                    {
                        title: "Cuti",
                        description:
                            "Indikator Cuti menunjukkan daftar ASN yang tercatat sedang cuti pada tanggal yang dipilih. Klik kartu Cuti untuk melihat daftar ASN yang sedang cuti.",
                        image: image("dashboard", "cuti.png"),
                    },

                    {
                        title: "Tanpa Keterangan",
                        description:
                            "Indikator Tanpa Keterangan menunjukkan daftar ASN yang belum melakukan presensi sesuai dengan jadwal kerja pada tanggal yang dipilih. Data dibagi menjadi empat kategori berdasarkan waktu kerja ASN, yaitu Semua, Berlangsung, Mendatang, dan Terlewati.",

                        points: [
                            {
                                title: "Semua",
                                description:
                                    "Menampilkan seluruh ASN yang masuk dalam daftar Tanpa Keterangan, baik yang waktu kerjanya sedang berlangsung, mendatang, maupun yang sudah terlewati."
                            },

                            {
                                title: "Berlangsung",
                                description:
                                    "Menampilkan ASN yang belum melakukan presensi ketika waktu kerjanya sedang berlangsung. Contoh: ASN dengan jadwal pukul 07.00-15.00 yang belum presensi saat diperiksa pukul 10.00"
                            },

                            {
                                title: "Mendatang",
                                description:
                                    "Menampilkan ASN yang waktu kerjanya belum dimulai. Contoh: ASN dengan jadwal pukul 15.00-23.00 yang diperiksa pukul 10.00 dan belum melakukan presensi."
                            },

                            {
                                title: "Terlewati",
                                description:
                                    "Menampilkan ASN yang belum melakukan presensi ketika waktu kerjanya sudah berlalu. Contoh: ASN dengan jadwal pukul 07.00-15.00 yang belum melakukan presensi saat diperiksa pukul 18.00"
                            },
                        ],

                        image: image("dashboard", "tanpa-keterangan.png"),
                    },
                ],

                tips:[
                    "Pilih tanggal dan OPD yang sesuai sebelum membaca ringkasan presensi.",
                    "Perhatikan setiap indikator untuk mengetahui kondisi presensi ASN.",
                    "Klik card indikator yang tersedia jika ingin melihat daftar ASN secara lebih terperinci.",
                ],
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
                    "Menu peta lokasi digunakan untuk melihat dan mengelola informasi lokasi kerja yang terdaftar dalam sistem Presensi Digital. Setiap Organisasi Perangkat Daerah (OPD) dapat memiliki beberapa titik presensi sesuai dengan lokasi kerja yang terdaftar.",
                image: image("lokasi-kerja", "tampilan-peta-lokasi.png"),

                sections: [
                    {
                        title: "Buka Peta Lokasi",
                        description:
                            "Pilih menu Lokasi Kerja > Peta Lokasi untuk membuka halaman pengelolaan lokasi tempat kerja.",
                        image: image("lokasi-kerja", "peta-lokasi.png"),
                    },

                    {
                        title: "Tambah Lokasi",
                        description:
                            "Klik tombol Tambah Lokasi Baru untuk memulai proses penambahan lokasi tempat kerja.",
                        image: image("lokasi-kerja", "tambah-lokasi.png"),
                    },

                    {
                        title: "Isi Data Lokasi",
                        description:
                            "Masukkan informkasi lokasi tempat kerja pada kolom yang tersedia. Pastikan data yang dimasukkan sesuai dengan informasi yang sebenarnya.",
                        image: image("lokasi-kerja", "isi-data-lokasi.png"),
                    },

                    {
                        title: "Simpan Lokasi",
                        description:
                            "Setelah seluruh data diperiksa dan sesuai, klik tombol Simpan lokasi untuk menyimpan informasi yang telah dimasukkan.",
                        image: image("lokasi-kerja", "simpan-lokasi.png"),
                    },

                    {
                        title: "Menunggu Persetujuan",
                        description:
                            "Setelah proses penambahan lokasi berhasil diajukan, status data akan menjadi 'Belum Disetujui'. Data selanjutnya diproses oleh Badan Kepegawaian Daerah (BPD) dan dapat digunakan setelah memperoleh persetujuan.",
                    },

                    {
                        title: "Lihat peta semua kantor",
                        description:
                            "Klik tombol Peta Semua Kantor untuk melihat peta lokasi kantor yang tersedia dalam sistem.",
                        image: image("lokasi-kerja", "peta-semua-kantor.png"),
                    },
                ],

                tips:
                    "Periksa kembali informasi lokasi sebelum menyimpannya. Pastikan data yang diajukan sesuai dengan kondisi sebenarnya.",
            },

            {
                id: "titik-presensi",
                title: "Titik Presensi Pegawai",
                type: "steps",

                description:
                    "Menu Titik Presensi Pegawai digunakan untuk melihat informasi titik lokasi presensi yang berkaitan dengan pegawai. Melalui halaman ini, Admin OPD dapat mencari pegawai dan memeriksa informasi titik presensi yang ditampilkan pada sistem. Informasi ini digunakan untuk mengetahui lokasi yang tercatat untuk pegawai terkait.",
                image: image("lokasi-kerja", "lokasi-absensi.png"),

                sections: [
                    {
                        title: "Buka Titik Presensi",
                        description:
                            "Pilih menu Lokasi Kerja > Titik Presensi Pegawai untuk membuka halaman informasi titik presensi pegawai.",
                        image: image("lokasi-kerja", "titik-presensi.png"),
                    },

                    {
                        title: "Cari Pegawai",
                        description:
                            "Gunakan kolom pencarian untuk menemukan pegawai yang ingin diperiksa. Masukkan kata kunci sesuai dengan informasi yang didukung oleh kolom pencarian pada halaman tersebut.",
                        image: image("lokasi-kerja", "cari-pegawai.png"),
                    },

                    {
                        title: "Periksa Informasi Pegawai",
                        description:
                            "Setelah data pegawai ditemukan, periksa informasi yang ditampilkan untuk memastikan bahwa data tersebut sesuai dengan pegawai yang ingin diketahui titik presensinya.",
                    },

                    {
                        title: "Periksa Titik Presensi",
                        description:
                            "Periksa informasi titik presensi yang ditampilkan untuk pada halaman mengetahui lokasi yang berkaitan dengan pegawai tersebut.",
                    },
                ],

                tips: [
                    "Gunakan kata kunci yang sesuai agar pegawai yang ingin diperiksa lebih mudah ditemukan.",
                    "Periksa kembali informasi pegawai sebelum membaca data titik presensinya.",
                    "Pastikan informasi lokasi yang ditampikan sesuai dengan pegawai yang sedang diperiksa",
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
                    "Menu Hari Kerja digunakan untuk mengelola template hari dan jam kerja yang menjadi acuan jadwal kerja pegawai. Melalui menu ini, Admin OPD dapat membuat template baru dan memperbarui template yang sudah tersedia sesuai dengan kebutuhan. Pengaturan hari dan jam kerja perlu diperhatikan agar jadwal yang digunakan sesuai dengan ketentuan kerja pegawai.",
                image: image("jadwal-kerja", "tampilan-hari-kerja.png"),

                sections: [
                    {
                        title: "Buka Hari Kerja",
                        description:
                            "Pilih menu Jadwal Kerja > Hari Kerja untuk membuka halaman pengelolaan template hari dan jam kerja. Paada halaman ini, Admin OPD dapat melihat template yang tersediia serta mengakses tindakan pengelolaan sesuai fitur yang disediakan.",
                        image: image("jadwal-kerja", "hari-kerja.png"),
                    },

                    {
                        title: "Tambah Template Hari Kerja",
                        description:
                            "Klik tombol Tambah Template untuk memulai pembuatan template baru. Template digunakan untuk menyimpan konfigurasi hari dan jam kerja agar dapat dikelola sesuai dengan kebutuhan.",
                        image: image("jadwal-kerja", "hari-tambah-template.png"),
                    },

                    {
                        title: "Isi Data Template",
                        description:
                            "Lengkapi kolom yang tersedia pada formulir template, termasuk informasi OPD, tipe, status, serta pengaturan hari dan jam kerja sesuai pilihan yang disediakan oleh sistem. Periksa kembali setiap isian agar konfigurasi yang dibuat sesuai dengan kebutuhan.",
                        image: image("jadwal-kerja", "hari-isidata.png"),
                    },

                    {
                        title: "Simpan Template",
                        description: 
                            "Setelah seluruh informasi diisi, periksa kembali data yang dimasukkan. Klik tombol Buat Template untuk menyimpan template baru sesuai dengan proses yang tersedia pada sistem.",
                    },

                    {
                        title: "Edit Template",
                        description:
                            "Untuk memperbarui template yang sudah tersedia, pilih data yang ingin diubah, kemudian klik tombol Edit. Periksa informasi yang ditampilkan dan sesuaikan bagian yang perlu diperbarui.",
                    },

                    {
                        title: "Simpan Perubahan Template",
                        description:
                            "Setelah selesai mengubah data, periksa kembali konfigurasi hari dan jam kerja. Klik tombol Update Template untuk menyimpan perubahan yang dilakukan.",
                    },
                ],

                tips: [
                    "Periksa kembali hari dan jam kerja sebelum menyimpan template.",
                    "Pastikan informasi OPD dan konfigurasi template sesuai dengan kebutuhan.",
                    "Saat memperbarui template, periksa kembali perubahan sebelum menyimpannya.",
                ],
            },

            {
                id: "kebijakan-jadwal",
                title: "Kebijakan Jadwal Presensi",
                type: "steps",
                description:
                    "Menu Kebijakan Jadwal Presensi digunakan untuk menetapkan kebijakan jadwal kerja yang menjadi acuan dalam pelaksanaan presensi pegawai. Melalui halaman ini, Admin OPD dapat memilih kebijakan presensi, menentukan OPD, serta menetapkan pegawaai yang menggunakan kebijakan tersebut. Pengaturan ini membantu memastikan jadwal kerja yang diterapkan sesuai dengan ketentuan yang berlaku bagi pegawai.",
                image: image("jadwal-kerja", "tampilan-kebijakan.png"),

                sections: [
                    {
                        title: "Buka Kebijakan Jadwal Presensi",
                        description:
                            "Pilih menu Jadwal Kerja > Kebijakan Jadwal Presensi untuk membuka halaman pengaturan kebijakan presensi. Pada halaman ini, Admin OPD dapat menentukan kebijakan yang akan diterapkan kepada pegawai.",
                        image: image("jadwal-kerja", "kebijakan-jadwal.png"),
                    },

                    {
                        title: "Pilih Kebijakan Presensi",
                        description:
                            "Pada kolom Pilih Kebijakan Presensi, pilih nama kebijakan atau jadwal yang akan digunakan. Pastikan kebijakan yang dipilih sesuai dengan ketentuan jam kerja pegawai yang akan diterapkan.",
                        image: image("jadwal-kerja", "kebijakan-pilih-kebijakan.png"),
                    },

                    {
                        title: "Pilih OPD",
                        description:
                            "Pilih Organisasi Perangkat Daerah (OPD) yang menjadi cakupan penetapan kebijakan. Pemilihan OPD membantu menentukan kelompok pegawai yang akan ditampilkan untuk proses penetapan.",
                        image: image("jadwal-kerja", "kebijakan-pilih-opd.png"),
                    },

                    {
                        title: "Pilih Pegawai",
                        description:
                            "Setelah memilih OPD, tentukan pegawai yang akan menggunakan kebijakan presensi tersebut. Periksa nama ppegawai yang akan ditampilkan dan pastikan pegawai yang dipilih sesuai dengan kebutuhan penjadwalan.",
                        image: image("jadwal-kerja", "kebijakan-pilih-pegawai.png"),
                    },

                    {
                        title: "Terapkan Kebijakan",
                        description:
                            "Centang nama pegawai yang akan ditetapkan, kemudian klik tombol Teraapkan Kebijakan untuk menyimpan data. Pastikan pilihan kebijakan, OPD, dan pegawai sudah benar sebelum menyimpan agar tidak terjadi kesalahan penetapan.",
                    },
                ],

                tips: [
                    "Periksa kembali kebijakan presensi yang dipilih sebelum menetapkannya kepada pegawai.",
                    "Pastikan OPD yang dipilih sesuai dengan pegawai yang akan ditetapkan.",
                    "Periksa nama pegawai yang dicentang sebelum menyimpan perubahan.",
                ],
            },

            {
                id: "manajemen-shift",
                title: "Manajemen Shift Pegawai",
                type: "steps",
                description:
                    "Menu Manajemen Shift Pegawai digunakan untuk melihat dan mengelola jadwal kerja pegawai yang menerapkan sistem shift. Melalui halaman ini, Admin OPD dapat memilih OPD, menyaring data berdasarkan jam kerja, melihat pegawai yang terdaftar, serta menyesuaikan jadwal shift sesuai kebutuhan operasional. Perubahan jadwal dapat dilakukan melalui pengaturan pada halaman maupun menggunakan fitur Import Excel.",
                image: image("jadwal-kerja", "tampilan-manajemen.png"),

                sections: [
                    {
                        title: "Buka Manajemen Shift Pegawai",
                        description:
                            "Pilih menu Jadwal Kerja > Manajemen Shift Pegawai untuk membuka halaman pengelolaan jadwal shift. Halaman ini digunakan untuk melihat data dan menyesuaikan jadwal kerja pegawai.",
                        image: image("jadwal-kerja", "manajemen-shift.png"),
                    },

                    {
                        title: "Pilih OPD",
                        description:
                            "Pilih OPD yang ingin dikelola. Pemilihan OPD membantu menampilkan data pegawai sesuai dengan organisasi yang dipilih.",
                        image: image("jadwal-kerja", "manajemen-pilih-opd.png"),
                    },

                    {
                        title: "Filter Jam Kerja",
                        description:
                            "Pilih Filter Jam Kerja untuk menyaring data berdasarkan jam kerja yang tersedia pada sistem. Gunakan filter ini agar data pegawai yang ditampilkan lebih sesuai dengan jadwal yang ingin diperiksa atau diubah.",
                        image: image("jadwal-kerja", "manajemen-filter-jam.png"),
                    },

                    {
                        title: "Pilih Pegawai",
                        description:
                            "Cari dan tentukan pegawai yang jadwal shift-nya akan diperbarui. Pastikan pegawai yang dipilih sudah benar sebelum melakukan perubahan jadwal.",
                        image: image("jadwal-kerja", "manajemen-pegawai.png"),
                    },

                    {
                        title: "Ubah Jadwal Shift",
                        description:
                            "Lakukan perubahan jadwal shift pada data pegawai sesuai dengan kebutuhan operasional. Periksa kembali jadwal yang dipilih agar sesuai dengan pembagian waktu kerja yang telah ditentukan.",
                    },

                    {
                        title: "Simpan Perubahan",
                        description:
                            "Setelah selesai mengubah jadwal, klik tombol penyimpanan yang tersedia pada halaman. Pastikan perubahan berhasil disimpan sebelum meninggalkan halaman.",
                    },

                    {
                        title: "Gunakan fitur Import Excel",
                        description:
                            "Jika ingin mengubah jadwal melalui berkas Excel, klik tombol Import Excel dan download template yang disediakan oleh sistem. Isi template sesuai format dan data yang diminta, kemudian ikuti proses import yang tersedia pada sistem. Pastikan data sudah diperiksa sbeelum diimport.",
                        image: image("jadwal-kerja", "manajemen-import-excel.png"),
                    },

                    {
                        title: "Upload & Import",
                        description:
                            "Unggah file Excel yang telah diisi, kemudian klik Upload & Import untuk memproses perubahan data.",
                    },
                ],

                tips: [
                    "Pilih OPD dan filter jam kerja sebelum memeriksa jadwal pegawai.",
                    "Periksa nama pegawai dan jadwal shift sebelum menyimpan perubahan.",
                    "Jika menggunakan Import Excel, gunakan template dari sistem dan pastikan format serta isi datanya sesuai.",
                ],
            },

            {
                id: "manajemen-shift-excel",
                title: "Manajemen Shift Menggunakan Excel",
                type: "steps",
                description: 
                    "Menu Manajemen Shift Menggunakan Excel menjelaskan cara menyiapkan jadwal kerja pegawai menggunakan template Excel yang disediakan oleh sistem. Melalui template ini, Admin OPD dapat mengisi NIP pegawai, tanggal jadwal, jam mulai dan selesai kerja, durasi istirahat, serta keterangan shift atau libur. Setelah template diisi sesuai dengan ketentuan, berkas dapat di upload melalui fitur Import Excel pada menu Manajemen Shift Pegawai.",
                
                sections: [
                    {
                        title: "Buka Fitur Import Excel",
                        description: 
                            "Masuk ke menu Jadwal Kerja > Manajemen Shift Pegawai. Pada halaman ini, cari fitur Import Excel yang digunakan untuk mengelola jadwal shift melalui berkas Excel.",
                    },

                    {
                        title: "Unduh Template Excel",
                        description: 
                            "Klik tombol Download pada bagian Butuh Template?. Sistem menyediakan template Excel yang dapat digunakan sebagai acuan pengisian jadwal shift. Isi template sesuai petunjuk dan jangan mengubah struktur kolom yang diperlukan.",
                    },

                    {
                        title: "Pahami Struktur Template",
                        description: 
                            "Template Excel terdiri dari tiga sheet, yaitu Template Roster, Petunjuk, dan Refernsi Jam Kerja. Isi jadwal pada sheet Template Roster, gunakan sheet Petunjuk untuk memahami aturan pengisian, dan lihat sheet Referensi Jam Kerja untuk memeriksa kombinasi jam kerja serta durasi istirahat yang tersedia.",
                    },

                    {
                        title: "Isi NIP dan Tanggal Jadwal",
                        description:
                            "Pada sheet Template Roster, isi kolom nip dengan NIP pegawai dan kolom date dengan tanggal jadwal berformat YYYY-MM-DD, misalnya 2026-10-20. Pastikan NIP sesuai dengan pegawai yang akan dijadwalkan dan tanggal ditulis menggunakan format yang telah ditentukan.",
                    },

                    {
                        title: "Isi Jam Kerja dan Durasi Istirahat",
                        description:
                            "Untuk jadwal masuk kerja, isi kolom start-time dengan jam mulai, end_time dengan jam selesai, serta break_duration _minutes dengan durasi istirahat dalam menit jika diperlukan. Format jam pada pentunjuk template adalah HH:MM:SS. Periksa sheet Referensi Jam Kerja untuk membantu memilih kombinasi jam kerja yang tersedia.",
                    },

                    {
                        title: "Isi Catatn dan Status Libur",
                        description:
                            "Kolom note dapat digunakan untuk menambahkan keterangan, misalnya Shift Pagi atau Shift Sore. kolom is_off digunakan untuk menunjukkan status jadwal: isi 0 untuk masuk kerja dan 1 untuk libur. Jika pegawai dijadwalkan libur, kolom jam mulai, jam selesai, dan durasi istirahat tidak perlu diisi. Contoh pada tenplate menggunakan catatan Libur.",
                    },

                    {
                        title: "Periksa Kembali Data Excel",
                        description:
                            "Seebelum mengimport berkas, periksa kembali NIP, tanggal, jam kerja, surasi istirahat, catatan, dan status libur. Pastikan format tanggal tetap YYYY-MM-DD dan jangan  mengubah format kolom date yang telah disiapkan sebagai teks.",
                    },

                    {
                        title: "Upload dan Import Excel",
                        description: 
                            "Pilih file, lalu klik tombol Upload & Import untuk memulai proses pengunggahan dan import data shift ke sistem. Tunggu hingga proses selesai, kemudian periksa informasi atau notifikasi yang ditampilkan aplikasi untuk mengetahui hasil import."
                    },
                ],

                tips:
                    "Gunakan template Excel yang diunduh dari sistem dan jangan mengubah nama kolomnya.",
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

    {
        id: "lapor",
        title: "lpor",
        children: [
            {
                id: "aktif",
                title: "aktif hari ini",
                type: "steps",
                description: "hari ini 1 orang yang tampil",

                 sections: [
                    {
                        title: "Buka Skor Displin",
                        description:
                            "Pilih menu Laporan > Skor Disiplin.",
                        image: image("laporan", "skor-disiplin.png"),
                    },
                 ],
            },
        ]
    }
    
];

export default tutorialAdmin;