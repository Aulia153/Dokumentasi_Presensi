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
const image = (file) => images[`../assets/user/${file}`] || null;


const tutorialUser = [

    {
        id: "login",
        title: "Login",
        icon: HiOutlineLockClosed,
        description:
            "Semua yang perlu Anda tahu tentang masuk ke aplikasi, aturan akun, kalau lupa password, dan cara keluar dengan aman.",

        children: [
            // Aturan Penggunaan SSO 
            {
                id: "sso",
                title: "Aturan Penggunaan SSO",
                type: "info",
                description:
                    "Aplikasi Presensi Sidoarjo memberikan fleksibilitas akses di mana akun SSO Anda dapat diakses dari beberapa perangkat HP secara bersamaan. Fitur ini dirancang untuk memudahkan pegawai yang beralih ke HP baru atau perlu melakukan presensi dalam situasi darurat. Namun, perlu diperhatikan bahwa sistem tidak otomatis mengeluarkan (log out) akun Anda dari HP sebelumnya. Oleh karena itu, fleksibilitas ini membutuhkan kedisiplinan serta kesadaran ekstra dari setiap pegawai dalam menjaga keamanan data pribadi dan akun kepegawaian. Pada halaman ini, Anda akan dijelaskan beberapa aturan dalam menggunakan akun SSO.",
                sections: [
                    {
                        title: "Semua Aktivitas di Akun Anda Adalah Tanggung Jawab Anda",
                        description:
                            "Setiap presensi, perubahan data, atau aktivitas apa pun yang tercatat di akun SSO Anda dianggap sebagai perbuatan Anda sendiri, meskipun sebenarnya dilakukan orang lain. Jadi, jangan sampai akun Anda dipegang orang lain.",
                    },
                    {
                        title: "Wajib Log Out Manual Saat Meminjam HP",
                        description:
                            "Jika Anda terpaksa meminjam HP rekan kerja dalam keadaan terdesak, selalu lakukan log out segera setelah presensi selesai. Jika tidak, akun Anda akan tetap tertinggal dalam kondisi aktif di HP tersebut.",
                    },
                    {
                        title: "Bersihkan Akses di Perangkat Lama Saat Ganti HP baru",
                        description:
                            "Saat Anda berganti ke HP baru, pastikan Anda telah melakukan log out atau menghapus (uninstall) aplikasi Presensi Sidoarjo dari HP lama Anda.",
                    },
                    {
                        title: "Jangan Bagikan NIP dan Kata Sandi ke Siapa Pun",
                        description:
                            "Sekalipun kepada rekan kerja yang Anda percaya, jangan pernah memberikan NIP dan kata sandi SSO Anda. Akun SSO bersifat pribadi dan tidak boleh diwakilkan.",
                    },
                    {
                        title: "Pindah ke HP Baru? Ikuti 4 Langkah Ini",
                        description:
                            `Jika Anda mulai menggunakan HP baru, Anda tidak perlu melakukan konfigurasi khusus atau melapor ke admin. Cukup ikuti alur berikut:
                        1. Unduh Aplikasi: Pasang aplikasi Presensi Sidoarjo di HP baru Anda.
                        2. Masuk Akun: Masukkan NIP dan kata sandi SSO Anda.
                        3. Verifikasi Keamanan: Selesaikan soal matematika sederhana yang muncul pada layar login.
                        4. Amankan HP Lama: Pastikan Anda sudah mengklik tombol Log Out pada aplikasi Presensi Sidoarjo di HP lama Anda.`,
                    },
                ],
                tips:
                    "Akun SSO Anda merupakan hal yang krusial, jangan sampai dipegang orang lain. Kalau akun Anda tetap login di HP lama atau HP pinjaman, semua presensi yang tercatat di akun itu dianggap sebagai presensi Anda.",
            },

            // ---- Child 2: Halaman Login ----
            {
                id: "login-overview",
                title: "Halaman Login",
                type: "steps",
                description:
                    "Untuk masuk ke aplikasi Presensi Sidoarjo, Anda menggunakan akun SSO Kominfo yang sudah terdaftar. Cukup login dan isi verifikasi keamanan sekali saja. Setelah itu, Anda tidak perlu mengulanginya setiap hari.",
                sections: [
                    {
                        title: "Buka Aplikasi Presensi Sidoarjo",
                        description:
                            "Buka aplikasi Presensi Sidoarjo di HP Anda. Anda akan langsung disambut halaman login.",
                        image: image("screens.jpg"),
                    },
                    {
                        title: "Isi NIP dan Kata Sandi",
                        description:
                            "Masukkan Nomor Induk Pegawai (NIP) dan kata sandi akun SSO Kominfo Anda di kolom yang tersedia.Setelah NIP dan kata sandi terisi dengan benar, tekan tombol Login untuk lanjut ke tahap verifikasi.",
                        image: image("login.jpg"),
                    },
                    {
                        title: "Selesaikan Verifikasi Keamanan",
                        description:
                            "Akan muncul soal matematika sederhana, misalnya 2 + 3 = ?. Isi jawabannya di kolom yang tersedia, lalu tekan Verifikasi. Soal ini berfungsi memastikan yang login benar benar Anda.",
                        image: image("veriflogin.jpg"),
                    },

                    {
                        title: "Masuk ke Halaman Utama",
                        description:
                            "Kalau NIP, kata sandi, dan jawaban verifikasi benar, Anda akan langsung diarahkan ke halaman Beranda dan siap melakukan presensi.",
                        image: image("home.png"),
                    },
                ],
                tips:
                    "Anda tidak perlu Log Out setiap hari. Cukup tutup aplikasi setelah selesai presensi. Besoknya saat dibuka lagi, Anda bisa langsung menggunakannya tanpa mengisi NIP dan verifikasi ulang.",
            },

            // Lupa Password 
            {
                id: "lupa-password",
                title: "Lupa Password",
                type: "steps",
                description:
                    "Jika Anda lupa kata sandi akun SSO Kominfo, proses reset kata sandi tidak dapat dilakukan secara otomatis di dalam aplikasi, melainkan diproses secara manual oleh tim Helpdesk Dinas Kominfo Kabupaten Sidoarjo. Aplikasi Presensi Sidoarjo telah menyediakan tombol 'Lupa Password?' di halaman utama login untuk menghubungkan Anda secara langsung ke WhatsApp resmi Kominfo.",
                sections: [
                    {
                        title: "Buka Halaman Login",
                        description:
                            "Buka aplikasi Presensi Sidoarjo dan pastikan Anda berada di halaman login (sebelum masuk ke akun).",
                        image: image("login.jpg"),
                    },
                    {
                        title: "Klik Tombol Lupa Password?",
                        description:
                            "Tekan tombol 'Lupa Password?' yang terletak di bawah kolom login. Tombol ini langsung menghubungkan Anda ke WhatsApp resmi Kominfo.",
                        image: image("helpdeskl.jpg"),
                    },
                    {
                        title: "Terhubung ke WhatsApp Resmi Kominfo",
                        description:
                            "Anda akan otomatis diarahkan ke WhatsApp untuk memulai percakapan dengan petugas Helpdesk Kominfo Sidoarjo. Sampaikan pesan bahwa Anda ingin mereset kata sandi. Sertakan NIP, Nama Lengkap, dan Unit Kerja atau OPD untuk keperluan verifikasi. Setelah data Anda diverifikasi, petugas akan memberikan kata sandi sementara yang bersifat acak (random password), yang bisa Anda pakai untuk login.",

                    },

                    {
                        title: "Mengapa Wajib Mengubah Kata Sandi Setelah Direset?",
                        description:
                            `Setelah menerima kata sandi sementara dari Helpdesk Kominfo, Anda diwajibkan untuk segera mengubahnya melalui situs resmi sso.sidoarjokab.go.id karena alasan berikut:
                        a. Kemudahan Akses: Kata sandi acak dari Helpdesk umumnya terdiri dari kombinasi huruf dan karakter yang rumit sehingga sulit dihafalkan untuk penggunaan harian.
                        b. Kerahasiaan Data Pribadi: Mengubah kata sandi secara mandiri memastikan hanya Anda satu-satunya pihak yang memiliki akses ke akun SSO tersebut demi menjaga kerahasiaan data kepegawaian Anda.
                        c. Catatan Sinkronisasi: Setelah berhasil mengubah kata sandi di situs SSO, mohon berikan jeda waktu 1–2 menit agar sistem dapat menyelesaikan proses sinkronisasi data sebelum Anda mencoba login kembali di aplikasi Presensi Sidoarjo.`,
                    },

                ],
                tips:
                    `Sistem SSO Kominfo mensyaratkan kata sandi memiliki minimal 8 karakter dengan kombinasi huruf besar, huruf kecil, angka, dan simbol. Agar kata sandi baru Anda aman namun tetap mudah Anda ingat, gunakan rumus sederhana berikut:
                        Rumus Kombinasi: [Kata Kunci Pilihan] + [Angka] + [Simbol]
                            a. Pilih Kata yang Familiar : Gunakan nama tempat, hobi, atau frasa yang mudah Anda ingat, lalu ubah huruf pertamanya menjadi huruf besar.
                            b. Tambahkan Angka Spesifik: Gunakan gabungan angka favorit atau tahun penting (hindari tanggal lahir yang terlalu mudah ditebak).
                            c. Sisipkan Karakter Khusus/Simbol: Akhiri atau selipkan simbol seperti @, #, $, atau !. 
                        
                        Contoh Penerapan:
                            a. Sidoarjo2026! (Gabungan nama kota, tahun, dan tanda seru)
                            b. Delta35#Sda (Gabungan julukan, angka favorit, simbol, dan singkatan)
                            c.  KopiHitam123@ (Gabungan frasa favorit, angka berurutan, dan simbol)`,
            },

            // Logout
            {
                id: "logout",
                title: "Logout",
                type: "steps",
                description:
                    "Logout adalah cara keluar dari aplikasi Presensi Sidoarjo. Tapi khusus aplikasi mobile, Anda sebenarnya tidak perlu logout setiap hari, karena sesi Anda akan tetap aktif.",
                sections: [
                    {
                        title: "Buka Menu Profil",
                        description:
                            "Masuk ke menu Profil di aplikasi Presensi Sidoarjo.",
                        image: image("profil.png"),
                    },
                    {
                        title: "Tekan Tombol Keluar",
                        description:
                            "Klik tombol Keluar atau Logout yang berada di bagian bawah halaman Profil Anda.",
                        image: image("logout.png"),
                    },
                    {
                        title: "Sesi Anda Akan Dihapus",
                        description:
                            "Setelah logout, sesi Anda terhapus. Pada login berikutnya, Anda wajib memasukkan NIP, kata sandi, dan menyelesaikan verifikasi keamanan lagi dari awal.",
                    },
                ],
                tips:
                    "Kalau tidak ada alasan mendesak, jangan logout. Cukup tutup aplikasi setelah presensi. Saat dibuka lagi, Anda bisa langsung pakai tanpa isi NIP dan verifikasi ulang.",
            },
        ],
    },

    {
        id: "home",
        title: "Home",
        icon: HiOutlineHome,
        description:
            "Halaman Beranda adalah halaman pertama yang Anda lihat setelah berhasil login ke aplikasi Presensi Sidoarjo. Di halaman ini, semua aktivitas presensi harian Anda dilakukan, mulai dari Presensi Masuk saat mulai bekerja, sampai Presensi Keluar saat jam kerja berakhir. Aplikasi akan memanfaatkan deteksi lokasi GPS dan kamera depan HP Anda untuk memastikan bahwa presensi benar benar dilakukan oleh Anda, di lokasi dan waktu yang sesuai. Karena itu, penting bagi Anda untuk memahami tampilan Beranda, status tombol, informasi lokasi, dan ketentuan yang berlaku sebelum melakukan presensi.",

        children: [
            // Informasi Umum
            {
                id: "home-informasi",
                title: "Informasi Umum",
                type: "home",
                description:
                    "Sebelum mulai melakukan presensi, luangkan waktu sebentar untuk mengenali tampilan halaman Beranda. Di halaman ini Anda akan melihat tombol presensi utama, informasi jam, indikator lokasi, dan fitur peta lokasi. Memahami setiap elemen di halaman Beranda akan membantu Anda melakukan presensi dengan lancar dan menghindari kesalahan yang bisa berdampak pada rekapitulasi kehadiran Anda. Bagian ini akan menjelaskan arti warna tombol, fungsi informasi lokasi, batas waktu pengambilan foto, serta aturan dan sanksi yang perlu Anda ketahui.",

                sections: [
                    {
                        number: 1,
                        title: "Kenali Warna Tombol Presensi",
                        description:
                            `Sebelum melakukan presensi, perhatikan dulu warna tombol utama yang muncul di layar Beranda Anda, karena setiap warna memiliki arti yang berbeda. 
                           
                            1. Tombol Abu abu (Nonaktif) menandakan bahwa Anda sedang tidak bisa melakukan presensi, misalnya karena jadwal kerja Anda sedang OFF, hari libur resmi, cuti, tugas belajar, atau sedang dalam proses banding administratif. Jika Anda menekan tombol ini, layar akan menampilkan alasan spesifik mengapa presensi tidak tersedia untuk Anda. 
                            2. Tombol Biru (Check-in / Masuk) menandakan bahwa Anda siap melakukan Presensi Masuk. 
                            3. Tombol Merah (Check-out / Keluar) menandakan bahwa Anda sudah berhasil melakukan Presensi Masuk, dan sekarang siap untuk melakukan Presensi Keluar. 
                            4. Tombol Hijau (Done / Selesai) menandakan bahwa Anda sudah menyelesaikan presensi masuk dan presensi keluar untuk hari itu, sehingga tidak ada lagi yang perlu Anda lakukan.`,
                        image: image("tombol.png"),
                    },
                    {
                        number: 2,
                        title: "Cek Jam, Lokasi, dan Fitur Lokasi Saya",
                        description:
                            "Di halaman Beranda, Anda bisa melihat jam sistem secara real time, jam jadwal kerja Anda, serta indikator lokasi yang menunjukkan apakah Anda sedang berada dalam lokasi presensi atau berapa jarak fisik Anda ke titik kantor. Informasi ini sangat penting, karena presensi hanya bisa dilakukan jika Anda berada di dalam radius yang ditentukan. Jika Anda ingin melihat posisi Anda secara lebih jelas, tekan fitur Lokasi Saya. Fitur ini akan menampilkan peta yang memperlihatkan posisi Anda saat ini beserta lokasi presensi terdekat, sehingga Anda bisa memastikan bahwa Anda benar benar berada di area yang tepat.",
                        image: image("peta-lokasi.png"),
                    },

                    {
                        number: 3,
                        title: "Ketentuan Batas Waktu (Timer) & Batas Jam Presensi",
                        description:
                            `⏳ Sistem Batas Waktu (Timer): Pengambilan foto dibatasi 60 detik dan halaman pratinjau (preview) dibatasi 120 detik. Jika waktu habis (meskipun layar HP Anda mati), sistem akan membatalkan proses dan mengembalikan Anda ke halaman Beranda. (Hal ini untuk memastikan titik GPS dan waktu foto diambil secara bersamaan).
                            ⌛ Pergeseran Jam Presensi: Pastikan Anda menyelesaikan proses foto dan konfirmasi sebelum batas jam presensi berakhir. Jika Anda menekan tombol di detik-detik terakhir jam kerja tetapi terlalu lama di halaman foto/pratinjau, presensi dapat gagal/dibatalkan sistem karena waktu operasional presensi telah habis saat tombol konfirmasi diklik.`, image: image("jenis-hadir.jpg"),
                    },
                    {
                        number: 4,
                        title: "Ketentuan Foto Wajah & Sanksi Pembatalan",
                        description:
                            `📷 Aturan Foto Wajah: Foto presensi wajib menampilkan 1 wajah asli pegawai yang bersangkutan secara jelas (tanpa masker, kacamata hitam, atau foto di dalam foto/layar).
                             🚨 Peringatan Penting: Seluruh foto dan koordinat presensi yang dikirimkan akan diverifikasi oleh sistem serta dipantau berkala oleh Admin Kepegawaian OPD. Setiap bentuk manipulasi foto atau lokasi dapat dikenakan sanksi pembatalan status presensi oleh Admin OPD dan berpotensi memengaruhi rekapitulasi kehadiran serta TPP Anda.`,
                    },
                    {
                        number: 6,
                        title: "Hindari Presensi di Detik Detik Terakhir",
                        description:
                            "Salah satu kesalahan yang sering terjadi adalah menekan tombol presensi di detik detik terakhir jam kerja. Jika Anda melakukannya, lalu terlalu lama berada di halaman foto atau pratinjau, presensi Anda bisa gagal diproses oleh sistem. Penyebabnya adalah saat Anda menekan tombol konfirmasi, jam operasional presensi sudah habis, sehingga sistem menolak presensi tersebut. Untuk menghindari hal ini, biasakan melakukan presensi beberapa menit sebelum batas jam kerja berakhir, agar Anda masih punya waktu cukup untuk menyelesaikan seluruh proses.",
                    },

                ],
                tips:
                    "Jika informasi lokasi atau status tombol di layar terasa tidak sesuai dengan kondisi terkini, lakukan pembaruan data dengan cara menarik layar Beranda ke bawah atau yang biasa disebut pull to refresh. Langkah sederhana ini bisa membantu aplikasi menampilkan data terbaru.",
            },

            //Presensi Masuk
            {
                id: "presensi-masuk",
                title: "Presensi Masuk",
                type: "steps",
                description:
                    "Presensi Masuk adalah langkah pertama yang harus Anda lakukan saat mulai bekerja. Presensi ini menandai dimulainya jam kerja Anda pada hari tersebut. Tombol untuk Presensi Masuk berwarna biru, dan hanya bisa ditekan jika jadwal kerja Anda sedang aktif, artinya bukan hari libur, bukan cuti, bukan tugas belajar, dan bukan status OFF. Jika Anda mencoba menekan tombol ini saat jadwal Anda tidak aktif, sistem tidak akan memprosesnya dan akan menampilkan alasan mengapa presensi tidak tersedia. Berikut adalah langkah langkah lengkap untuk melakukan Presensi Masuk.",

                sections: [
                    {
                        title: "Tekan Tombol Masuk Berwarna Biru",
                        description:
                            "Di layar Beranda, cari tombol Masuk yang berwarna biru, lalu tekan tombol tersebut untuk memulai proses Presensi Masuk. Pastikan Anda sudah berada di lokasi yang sesuai sebelum menekan tombol ini, karena lokasi Anda akan langsung direkam oleh sistem.",
                        image: image("home.png"),
                    },
                    {
                        title: "Ambil Foto Wajah Anda",
                        description:
                            "Setelah tombol ditekan, kamera depan HP Anda akan terbuka secara otomatis. Ambil foto swafoto atau selfie Anda secara langsung. Anda tidak perlu mengatur pencahayaan atau sudut secara khusus, cukup pastikan wajah Anda terlihat jelas. Ingat, waktu pengambilan foto dibatasi 60 detik, jadi jangan terlalu lama.",
                        image: image("ambilfoto.jpg"),
                    },
                    {
                        title: "Periksa Pratinjau Foto dan Lokasi",
                        description:
                            "Setelah foto diambil, layar akan menampilkan pratinjau foto Anda beserta informasi lokasi tempat Anda berada. Jika sistem mendeteksi bahwa Anda berada di luar radius kantor, Anda wajib memilih alasan yang sesuai, misalnya Perjalanan Dinas atau FWA (Flexible Working Arrangement), sebelum bisa melanjutkan ke tahap berikutnya. Pilihan alasan ini akan tercatat dalam sistem dan menjadi bagian dari riwayat presensi Anda.",
                        image: image("Pratinjau.png"),
                    },
                    {
                        title: "Konfirmasi Presensi Masuk",
                        description:
                            "Jika semua data sudah sesuai, tekan tombol konfirmasi. Setelah presensi berhasil diproses, Anda akan otomatis diarahkan ke halaman Riwayat Presensi, dan data kehadiran masuk Anda akan tercatat secara resmi di sistem.",
                        image: image("verifhadir.png"),
                    },
                    {
                        title: "Tombol Berubah Menjadi Merah",
                        description:
                            "Sebagai tanda bahwa Presensi Masuk Anda berhasil, tombol di halaman Beranda akan berubah warna dari biru menjadi merah. Tombol merah ini menandakan bahwa Anda sudah siap untuk melakukan Presensi Keluar saat jam kerja Anda berakhir nanti. Anda tidak perlu melakukan apa pun lagi sampai waktunya Presensi Keluar.",
                        image: image("dashboard.png"),
                    },
                    {
                        title: "🟢 Batas Waktu Presensi Masuk (Check-in)",
                        description:
                            `   a. Waktu Awal Dibuka: Sistem mulai mengizinkan Presensi Masuk tepat 90 menit sebelum jam jadwal masuk kerja Anda.
                                b. Batas Akhir Ditutup: Tombol Presensi Masuk tetap aktif hingga jam jadwal pulang kerja Anda.

                                💡 Contoh Simulasi (Pegawai Reguler 07.30 – 16.00 WIB):
                                -> Anda dapat melakukan Presensi Masuk mulai pukul 06.00 WIB (90 menit sebelum jam 07.30).
                                -> Jika Anda baru melakukan presensi masuk setelah pukul 16.00 WIB, Anda dianggap Lupa Presensi Masuk.
                                ⚠️ Konsekuensi Keterlambatan: Jika Anda baru melakukan presensi masuk setelah melewati jam jadwal pulang, maka status Anda otomatis dianggap Lupa Presensi Masuk oleh sistem.`,

                    },
                ],
                tips:
                    "Pastikan Anda sudah berada dalam radius kantor, atau sudah menyiapkan alasan yang tepat seperti Perjalanan Dinas atau FWA sebelum menekan tombol Masuk. Dengan begitu, proses presensi Anda akan berjalan lancar tanpa hambatan.",
            },

            // Presensi Keluar
            {
                id: "presensi-keluar",
                title: "Presensi Keluar",
                type: "steps",
                description:
                    "Presensi Keluar adalah langkah terakhir yang harus Anda lakukan saat jam kerja Anda berakhir. Presensi ini menandai selesainya jam kerja Anda pada hari tersebut. Tombol untuk Presensi Keluar berwarna merah, dan hanya aktif setelah Anda berhasil melakukan Presensi Masuk pada hari yang sama. Jika Anda belum Presensi Masuk, tombol merah ini tidak akan muncul. Berikut adalah langkah langkah lengkap untuk melakukan Presensi Keluar.",

                sections: [
                    {
                        title: "Tekan Tombol Keluar Berwarna Merah",
                        description:
                            "Di layar Beranda, cari tombol Keluar yang berwarna merah, lalu tekan tombol tersebut untuk memulai proses Presensi Keluar. Pastikan Anda sudah menyelesaikan seluruh pekerjaan Anda hari itu, karena setelah Presensi Keluar berhasil, Anda tidak bisa membatalkannya.",
                        image: image("dashboard.png"),
                    },
                    {
                        title: "Ambil Foto Wajah Anda",
                        description:
                            "Seperti pada Presensi Masuk, kamera depan HP Anda akan otomatis terbuka. Ambil foto swafoto atau selfie Anda secara langsung. Waktu pengambilan foto tetap dibatasi 60 detik, jadi pastikan Anda melakukannya dengan cepat dan jelas.",
                        image: image("take-out.png"),
                    },
                    {
                        title: "Periksa Pratinjau Foto dan Lokasi",
                        description:
                            "Layar akan menampilkan pratinjau foto Anda beserta informasi lokasi. Jika Anda terdeteksi berada di luar radius kantor, akan muncul Notifikasi Peringatan SPT. Notifikasi ini bukan berarti presensi Anda gagal, tetapi Anda diwajibkan untuk mengunggah dokumen Surat Perintah Tugas atau SPT melalui menu Riwayat Presensi agar kehadiran Anda tetap sah secara administratif.",
                        image: image("Pratinjau.png"),
                    },
                    {
                        title: "Konfirmasi Presensi Keluar",
                        description:
                            "Jika seluruh data sudah sesuai, tekan tombol konfirmasi. Setelah berhasil, Anda akan otomatis diarahkan ke halaman Riwayat Presensi, dan data kehadiran keluar Anda akan tercatat secara resmi di sistem.",
                        image: image("verifhadir.png"),
                    },
                    {
                        title: "Tombol Berubah Menjadi Hijau",
                        description:
                            "Sebagai tanda bahwa Presensi Keluar Anda berhasil, tombol di halaman Beranda akan berubah warna dari merah menjadi hijau. Warna hijau ini menandakan bahwa Anda sudah menyelesaikan presensi masuk dan presensi keluar untuk hari itu, sehingga seluruh kewajiban presensi harian Anda sudah terpenuhi.",
                        image: image("out.png"),
                    },
                    {
                        title: "🔴 Batas Waktu Presensi Keluar (Check-out)",
                        description:
                            `   a. Waktu Awal Dibuka: Tombol Presensi Keluar akan otomatis muncul menggantikan tombol Masuk di layar Beranda segera setelah Anda berhasil menyelesaikan Presensi Masuk.
                                b. Batas Akhir Ditutup: 
                                🏢 Pegawai Reguler: Pukul 23:59 WIB pada hari yang sama (sebelum berganti hari).
                                🔄 Pegawai SHIFT: Maksimal 6 jam setelah jam jadwal pulang kerja                                
                                
                                ⚠️ Konsekuensi Keterlambatan: Jika Anda baru melakukan presensi masuk setelah melewati jam jadwal pulang, maka status Anda otomatis dianggap Lupa Presensi Masuk oleh sistem.`,

                    },
                ],
                tips:
                    "Jika Anda melakukan Presensi Keluar di luar radius kantor, segera unggah dokumen Surat Perintah Tugas atau SPT melalui menu Riwayat Presensi. Semakin cepat Anda mengunggahnya, semakin cepat pula kehadiran Anda tercatat sah secara administratif.",
            },
        ],
    },


    {
        id: "rpresensi",
        title: "Riwayat Presensi",
        icon: HiOutlineMapPin,
        type: "rekap",
        description:
            "Halaman Riwayat Presensi adalah tempat Anda memeriksa seluruh catatan kehadiran yang sudah Anda lakukan. Di halaman ini, Anda bisa melihat detail presensi mulai dari jam masuk, jam keluar, lokasi tempat Anda melakukan presensi, sampai status kehadiran Anda pada hari tersebut. Halaman ini juga menampilkan peringatan jika ada presensi yang memerlukan tindakan lanjutan, misalnya ketika Anda melakukan Presensi Keluar di luar lokasi kantor sehingga wajib mengunggah dokumen Surat Perintah Tugas. Dengan memeriksa halaman ini secara rutin, Anda bisa memastikan bahwa semua kehadiran Anda tercatat dengan benar dan tidak ada yang perlu diperbaiki.",
        sections: [
            {
                number: 1,
                title: "Informasi Elemen Riwayat Presensi",
                description:
                    `Di halaman ini, Anda bisa melihat riwayat presensi yang sudah Anda lakukan secara detail, mulai dari jam presensi sampai lokasi saat presensi dilakukan, untuk periode satu minggu terakhir. Informasi ini sangat berguna untuk memastikan bahwa kehadiran Anda tercatat dengan benar, dan untuk memeriksa apakah ada presensi yang gagal atau belum diproses oleh sistem.
                        📅 Tanggal Presensi: Tanggal dan hari pelaksanaan presensi.
                        ⏰ Jam Aktual Masuk & Keluar: Catatan jam riil saat Anda menekan tombol presensi di aplikasi.
                        🔴 Indikator Ikon Merah: Penanda khusus jika Anda tercatat mengalami keterlambatan masuk atau pulang sebelum waktunya.
                        📍 Status Radius: Keterangan apakah presensi dilakukan Di Dalam Radius atau Di Luar Radius lokasi kantor.
                        🛡️ Status Verifikasi Admin OPD: Keterangan status validasi dari Admin Kepegawaian OPD (Verified, Check In/Out Ditolak, atau Presensi Ditolak).
                        📄 Unggah / Lihat Dokumentasi SPT: Akses tombol khusus untuk mengunggah berkas Surat Perintah Tugas (SPT) jika Anda melakukan presensi di luar radius kantor`,
                image: image("riwayat-presensi.png"),
            },
            {
                number: 2,
                title: "🏷️ Arti 3 Status Verifikasi Admin OPD",
                description:
                    `Setiap data presensi yang Anda kirimkan akan diverifikasi secara berkala oleh Admin Kepegawaian OPD untuk memastikan keabsahan lokasi GPS, foto wajah, dan kelengkapan dokumen pendukung. Hasil peninjauan ini sangat penting karena menentukan keabsahan catatan kehadiran Anda dalam rekapitulasi TPP bulanan. Secara umum, terdapat 3 jenis status verifikasi yang dapat muncul pada halaman Riwayat Presensi Anda:
                        ✅ Verified (Terverifikasi):
                        Data presensi Anda (foto wajah, titik lokasi GPS, dan dokumen SPT jika ada) telah diperiksa dan dinyatakan sah/valid oleh Admin OPD. Catatan kehadiran ini aman dan siap masuk ke dalam perhitungan rekap TPP bulanan.
                        
                        ⚠️ Check In / Check Out Ditolak:
                        Salah satu dari aktivitas presensi Anda (hanya jam masuk saja atau jam keluar saja) ditolak oleh Admin OPD.
                        Penyebab umum: Foto verifikasi wajah saat presensi masuk atau keluar buram/gelap, lokasi berada di luar radius tanpa melampirkan SPT yang sesuai, atau berkas SPT dianggap tidak valid.

                        ❌ Presensi Ditolak:
                        Seluruh data presensi harian Anda pada tanggal tersebut (baik Presensi Masuk maupun Presensi Keluar) ditolak secara penuh oleh Admin OPD.
                        Status ini berakibat Anda dianggap tidak melakukan presensi sama sekali pada hari/jadwal tersebut.`,
                image: image("verifriwayat.png"),
            },
            {
                number: 3,
                title: "Filter Data Presensi",
                description:
                    "Fitur ini terletak di pojok kanan atas. Berfungsi untuk memantau status riwayat presensi Anda dalam periode tertentu, misalnya untuk memeriksa kehadiran Anda selama satu bulan terakhir di tahun ini.",
                image: image("filter-riwayat.png"),
            },
            {
                number: 4,
                title: "Bagaimana Cara Mengunggah SPT (Surat Perintah Tugas)?",
                description:
                    `1. Langkah-langkah: 
                        a. Klik Tombol "Unggah SPT": Cari tanggal presensi yang bersangkutan, lalu tekan tombol Unggah SPT.
                        b. Masuk ke Halaman Detail Riwayat: Sistem akan secara otomatis mengarahkan Anda ke halaman Detail Riwayat Presensi.
                        c. Pilih Berkas SPT: Pilih berkas dokumen dari penyimpanan HP Anda, lalu konfirmasi untuk mengirimkan file.

                    2. Syarat & Ketentuan Berkas SPT
                        📄 Format Berkas: Dokumen wajib berformat PDF.
                        💾 Ukuran Maksimal File: Ukuran file tidak boleh melebihi 5 MB.
                        🔒 Batas Pengunggahan (1 Hari = 1 SPT = 1 Kali Upload): Untuk 1 hari presensi, Anda hanya dapat mengunggah 1 dokumen SPT. Pengunggahan ini hanya dapat dilakukan 1 kali saja.
                        ⚠️ Keabsahan Dokumen: Pastikan file yang Anda unggah sudah benar, jelas, dan dapat dipertanggungjawabkan keabsahannya, karena Anda tidak dapat mengunggah ulang jika terjadi kesalahan pilih file.

                    3. Tips Pengunggahan & Cara Mengecek Dokumen Terunggah
                        📶 Perhatikan Koneksi Internet: Koneksi internet yang tidak stabil atau lambat dapat membuat proses pengiriman file menjadi lama atau bahkan timeout. Pastikan Anda berada di area dengan sinyal yang stabil saat mengunggah.
                        👁️ Memeriksa Dokumen Terunggah: Setelah proses unggah berhasil, tombol pada baris riwayat presensi tersebut akan otomatis berubah menjadi Lihat Detail. Anda dapat menekan tombol tersebut kapan saja untuk melihat kembali file SPT yang telah terkirim ke dalam sistem.`,
                image: image("unggah-spt.png"),
            },
            {
                number: 5,
                title: "💡 Apa yang Harus Dilakukan Jika Ditolak?",
                description:
                    "Jika Anda mendapati status Check In/Out Ditolak atau Presensi Ditolak, segera hubungi Admin Kepegawaian OPD di unit kerja Anda untuk mengonfirmasi alasan penolakan serta melakukan klarifikasi/penyesuaian dokumen sebelum tanggal 2 bulan berikutnya (sebelum data dikunci permanen oleh sistem untuk perhitungan TPP).",
            },
        ],
        tips:
            "Biasakan memeriksa halaman Riwayat Presensi setiap beberapa hari, supaya jika ada presensi yang gagal atau perlu unggah dokumen SPT, Anda bisa langsung menanganinya tanpa menunggu terlalu lama.",
    },


    // JADWAL KERJA

    {
        id: "jadwal",
        title: "Jadwal Kerja",
        icon: HiOutlineCalendarDays,
        type: "kerja",
        description:
            `Menu Jadwal Kerja menyajikan rincian jam kerja harian Anda secara terstruktur dalam satu tampilan bulanan. Secara otomatis, sistem akan langsung mengarahkan dan memberikan penanda khusus pada jadwal hari berjalan agar Anda dapat memantaunya dengan cepat.`,
        sections: [
            {
                number: 1,
                title: "Informasi Elemen Jadwal Kerja",
                description:
                    `Di halaman ini, Anda bisa melihat riwayat Jadwal Kerja secara detail untuk satu minggu ke depan, apakah jadwal Anda reguler, shift, atau libur. Informasi ini memudahkan Anda mempersiapkan diri, misalnya mengatur waktu keberangkatan ke kantor atau menyesuaikan aktivitas pribadi dengan jadwal kerja Anda. Berikut informasi yang tampil pada daftar jadwal kerja Anda:

                    📅 Tanggal & Hari: Urutan tanggal beserta nama hari dalam satu bulan.
                    🏷️ Label "Hari Ini": Penanda visual khusus pada baris tanggal berjalan saat ini.
                    ⏰ Jam Masuk & Pulang: Batas ketentuan jam operasional untuk Presensi Masuk dan Presensi Keluar.
                    🏢 Jenis Kerja: Keterangan apakah Anda masuk dalam skema jam kerja Reguler atau SHIFT.
                    📌 Status Kehadiran: Keterangan khusus jika tanggal tersebut berstatus OFF / Libur atau Cuti`,
                image: image("jadwal.png"),
            },
            {
                number: 2,
                title: "Filter Data Jadwal Kerja",
                description:
                    `Pemfilteran jadwal memudahkan Anda untuk melihat perencanaan jam kerja pada bulan-bulan berikutnya maupun mengecek kembali riwayat jadwal pada bulan sebelumnya. Fitur ini membantu Anda mempersiapkan dan mengonfirmasi jam kerja lebih awal. Berikut langkah-langkah menggunakan fitur filter jadwal:
                    a. Buka menu Jadwal Kerja.
                    b. Pada bagian atas layar, tekan menu dropdown Filter Bulan & Tahun.
                    c. Pilih Bulan dan Tahun yang ingin Anda lihat.
                    d. Tampilan jadwal akan otomatis diperbarui sesuai dengan periode bulan yang Anda pilih.                    `,
                image: image("filterjadwal.png"),
            },
            {
                number: 3,
                title: "Apa yang harus dilakukan jika jadwal kerja saya tidak muncul atau tidak sesuai?",
                description:
                    `Kendala jadwal kerja yang kosong atau tidak sesuai dengan kondisi riil dinas dapat menyebabkan tombol presensi di Beranda menjadi tidak aktif (disabled) atau mencatat keterlambatan yang tidak seharusnya. Mengingat perubahan jadwal oleh Admin OPD membutuhkan waktu proses dan baru bisa berlaku minimal untuk H+1, pengecekan jadwal sebaiknya dilakukan secara berkala sebelum hari H. Berikut langkah penanganannya:
                     
                     a. Lakukan Refresh Halaman: Tarik layar ke bawah (pull-to-refresh) pada halaman Jadwal Kerja atau Beranda untuk memutakhirkan data dari server.
                     b. Koordinasi dengan Admin Kepegawaian OPD: Jika jadwal masih kosong atau salah (misalnya: Anda seharusnya masuk Shift Pagi tetapi di aplikasi tertulis OFF atau Shift Malam), segera hubungi Admin Kepegawaian OPD unit kerja Anda sebelum H+1 agar jadwal dapat disesuaikan tepat waktu`,
            },
            {
                number: 4,
                title: "Arti status atau keterangan yang tampil pada halaman Jadwal Kerja",
                description:
                    `Setiap tanggal pada daftar jadwal dilengkapi dengan label status untuk memperjelas kewajiban kehadiran Anda pada hari tersebut. Memahami label ini penting agar Anda dapat membedakan hari kerja efektif dan hari bebas presensi. Berikut adalah rincian arti status pada jadwal kerja:

                    🔵 Reguler: Jam kerja standar instansi (baik skema 5 hari kerja maupun 6 hari kerja sesuai ketentuan OPD masing-masing) dengan jam masuk dan pulang yang telah ditentukan.
                    🟣 SHIFT: Jam kerja khusus pegawai dinas bergilir (shift) yang jam masuk dan pulangnya disesuaikan dengan pola roster kerja.
                    ⚪ OFF / Libur: Hari bebas kerja (akhir pekan, libur nasional, atau hari libur shift), di mana tombol presensi harian akan dinonaktifkan.
                    🟡 Cuti: Keterangan bahwa Anda terdata sedang menjalani cuti resmi yang telah disetujui di dalam sistem backend kepegawaian.`,
            },
            {
                number: 5,
                title: "Apakah bisa mengubah atau menggeser jadwal kerja sendiri di aplikasi?",
                description:
                    "Seluruh penetapan dan pembaruan jadwal kerja diatur secara terpusat oleh Admin Kepegawaian OPD masing-masing. Pegawai tidak dapat mengubah, menggeser, atau menukar jam kerja secara mandiri langsung dari aplikasi mobile. Jika terdapat penyesuaian jadwal dinas atau tukar shift, perubahan oleh Admin OPD hanya dapat diproses dan berlaku minimal untuk H+1 (hari berikutnya, tidak bisa berlaku di hari H).",
            },
            {
                number: 6,
                title: "Apakah bisa melihat jadwal rekan kerja satu tim untuk berkoordinasi atau tukar shift?",
                description:
                    `Saat ini, aplikasi Presensi Sidoarjo belum menyediakan fitur untuk melihat jadwal kerja pegawai lain maupun menu penukaran shift secara langsung di dalam aplikasi. Tampilan pada menu Jadwal Kerja bersifat pribadi (privat) dan hanya menampilkan penetapan jam kerja milik akun Anda masing-masing. Oleh karena itu, proses koordinasi penukaran shift antar-rekan kerja masih harus dilakukan secara manual di luar aplikasi sebelum dilaporkan ke pengelola kepegawaian.
                    
                    🔄 Alur Penukaran Shift Kerja saat Ini:
                    1. Koordinasi Internal: Lakukan kesepakatan penukaran jadwal shift secara langsung dengan rekan kerja yang bersangkutan.
                    2. Lapor Admin Kepegawaian OPD: Sampaikan kesepakatan penukaran shift tersebut kepada Admin Kepegawaian OPD di unit kerja Anda.
                    3. Penyesuaian di Sistem Backend (H+1): Admin OPD akan memperbarui jadwal Anda dan rekan kerja di sistem backend. Pastikan laporan disampaikan lebih awal karena perubahan jadwal oleh Admin OPD minimal berlaku untuk H+1 (tidak bisa diubah mendadak pada hari H).`,
            },

        ],
        tips:
            "Cek jadwal kerja Anda secara rutin, terutama jika Anda bekerja dengan sistem shift. Jadwal shift yang tidak Anda sadari bisa membuat Anda melewatkan waktu presensi, dan hal itu bisa berdampak pada rekapitulasi kehadiran Anda.",
    },

    // PROFIL

    {
        id: "profil",
        title: "Profil",
        icon: HiOutlineQuestionMarkCircle,
        type: "profil",
        description:
            "Halaman Profil adalah tempat Anda mengelola informasi pribadi dan pengaturan akun di aplikasi Presensi Sidoarjo. Di halaman ini, Anda bisa melihat data diri yang tersimpan, menghubungi pusat bantuan jika mengalami kendala, dan keluar dari akun jika diperlukan. Meskipun halaman ini terlihat sederhana, ada beberapa hal penting yang perlu Anda perhatikan, terutama terkait dengan tombol Logout. Pada aplikasi mobile, Anda sebenarnya tidak perlu logout setiap hari, karena sesi Anda akan tetap aktif. Logout hanya diperlukan dalam kondisi tertentu, misalnya jika Anda meminjamkan HP Anda kepada orang lain atau akan berganti ke HP baru.",
        sections: [
            {
                number: 1,
                title: "Cek Data Diri Anda",
                description:
                    "Di halaman Profil, Anda bisa melihat detail informasi pribadi Anda yang tersimpan di aplikasi, seperti nama, NIP, unit kerja, dan data kepegawaian lainnya. Pastikan data data ini sudah sesuai, karena data inilah yang akan digunakan oleh sistem untuk mencatat kehadiran Anda. Jika ada data yang menurut Anda tidak sesuai, segera hubungi pusat bantuan untuk diperbaiki.",
                image: image("profil.png"),
            },
            {
                number: 2,
                title: "Hubungi Pusat Bantuan",
                description:
                    "Jika Anda mengalami kendala saat menggunakan aplikasi, gunakan fitur Pusat Bantuan. Fitur ini akan mengarahkan Anda ke halaman FAQ (Frequently Asked Question) atau pertanyaan dan keluhan yang biasanya dialami oleh pengguna. Anda dapat mencari keluhan atau pertanyaan Anda pada fitur search berikut, yang nantinya akan memunculkan keluhan yang biasanya terjadi saat menggunakan aplikasi berikut",
                image: image("helpdesk2.png"),
            },
            {
                number: 3,
                description:
                    "Jika Anda masih belum menemukan jawaban atas keluhan Anda di halaman FAQ berikut, Anda bisa geser ke bawah halaman untuk menemukan tombol Pusat Bantuan. Fitur ini akan mengarahkan Anda secara otomatis ke WhatsApp dengan template pesan yang sudah disiapkan. Anda cukup mengisi keluhan atau pertanyaan Anda, lalu mengirimkannya ke petugas Helpdesk Kominfo Sidoarjo. Dengan template ini, Anda tidak perlu bingung harus mulai dari mana, karena pesannya sudah tersusun rapi",
                image: image("helpdesk.png"),
            },
            {
                number: 4,
                title: "Logout dari Akun",
                description:
                    "Untuk keluar dari akun, gunakan tombol Keluar yang berada di bagian bawah halaman Profil Anda. Namun perlu Anda ingat, setelah logout, sesi Anda akan dihapus oleh sistem. Artinya, pada login berikutnya Anda wajib memasukkan NIP, kata sandi, dan menyelesaikan verifikasi keamanan kembali dari awal. Karena itu, sebaiknya hindari logout jika tidak ada alasan mendesak. Cukup tutup aplikasi setelah presensi, dan saat dibuka kembali Anda bisa langsung menggunakannya.",
                image: image("logout.png"),
            },
        ],
        tips:
            "Untuk penggunaan harian, Anda tidak perlu logout. Cukup tutup aplikasi setelah presensi, dan saat dibuka kembali Anda bisa langsung menggunakannya tanpa harus mengisi NIP dan verifikasi ulang.",
    },
];

export default tutorialUser;