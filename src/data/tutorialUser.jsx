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
                type: "steps",
                description:
                    "Akun SSO Anda bisa dipakai login di beberapa HP sekaligus, dan ini memang disengaja, supaya Anda tetap bisa presensi saat ganti HP baru atau dalam situasi darurat. Tapi ada satu hal penting yang perlu Anda tahu: kalau Anda login di HP lain, akun Anda TIDAK otomatis keluar dari HP sebelumnya. Artinya, siapa pun yang memegang HP lama Anda masih bisa membuka akun dan melakukan presensi atas nama Anda. Karena itu, ada beberapa aturan yang wajib Anda ikuti.",
                sections: [
                    {
                        title: "Semua Aktivitas di Akun Anda Adalah Tanggung Jawab Anda",
                        description:
                            "Setiap presensi, perubahan data, atau aktivitas apa pun yang tercatat di akun SSO Anda dianggap sebagai perbuatan Anda sendiri, meskipun sebenarnya dilakukan orang lain. Jadi, jangan sampai akun Anda dipegang orang lain.",
                    },
                    {
                        title: "Kalau Pinjam HP Orang Lain, Langsung Log Out",
                        description:
                            "Dalam kondisi mendesak, misalnya HP Anda mati, Anda mungkin perlu meminjam HP rekan kerja untuk presensi. Setelah selesai, WAJIB langsung klik Log Out. Kalau tidak, akun Anda akan tetap aktif di HP tersebut dan bisa disalahgunakan.",
                    },
                    {
                        title: "Ganti HP Baru? Bersihkan HP Lama Dulu",
                        description:
                            "Sebelum pindah ke HP baru, buka aplikasi Presensi di HP lama Anda dan klik Log Out, atau langsung hapus (uninstall) aplikasinya. Kalau tidak, akun Anda akan terus aktif di HP lama meskipun HP itu sudah tidak Anda pakai atau sudah dijual.",
                    },
                    {
                        title: "Jangan Bagikan NIP dan Kata Sandi ke Siapa Pun",
                        description:
                            "Sekalipun kepada rekan kerja yang Anda percaya, jangan pernah memberikan NIP dan kata sandi SSO Anda. Akun SSO bersifat pribadi dan tidak boleh diwakilkan.",
                    },
                    {
                        title: "Pindah ke HP Baru? Ikuti 4 Langkah Ini",
                        description:
                            "Pertama, unduh aplikasi Presensi Sidoarjo di HP baru. Kedua, login menggunakan NIP dan kata sandi SSO Anda. Ketiga, selesaikan verifikasi keamanan berupa soal matematika sederhana. Keempat, klik Log Out di aplikasi Presensi pada HP lama Anda, atau hapus aplikasinya. Tidak perlu lapor ke admin atau melakukan konfigurasi khusus.",
                    },
                ],
                tips:
                    "Intinya satu: akun SSO itu seperti KTP digital Anda, jangan sampai dipegang orang lain. Kalau akun Anda tetap login di HP lama atau HP pinjaman, semua presensi yang tercatat di akun itu dianggap sebagai presensi Anda.",
            },

            // ---- Child 2: Halaman Login ----
            {
                id: "login-overview",
                title: "Halaman Login",
                type: "login",
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
                    "Lupa kata sandi akun SSO? Tenang. Reset password tidak bisa dilakukan otomatis di aplikasi, tapi bisa dibantu langsung oleh tim Helpdesk Kominfo Sidoarjo via WhatsApp.",
                sections: [
                    {
                        title: "Buka Halaman Login",
                        description:
                            "Buka aplikasi Presensi Sidoarjo dan pastikan Anda berada di halaman login, sebelum masuk ke akun.",
                        image: image("login.jpg"),
                    },
                    {
                        title: "Klik Tombol Lupa Password",
                        description:
                            "Tekan tombol Lupa Password yang ada di bawah kolom login. Tombol ini langsung menghubungkan Anda ke WhatsApp resmi Kominfo.",
                        image: image("helpdeskl.jpg"),
                    },
                    {
                        title: "Chat dengan Petugas Helpdesk",
                        description:
                            "Anda akan otomatis diarahkan ke WhatsApp untuk memulai percakapan dengan petugas Helpdesk Kominfo Sidoarjo. Sampaikan bahwa Anda ingin mereset kata sandi. Sertakan NIP, Nama Lengkap, dan Unit Kerja atau OPD untuk keperluan verifikasi.",

                    },

                    {
                        title: "Terima Kata Sandi Sementara",
                        description:
                            "Setelah data Anda diverifikasi, petugas akan memberikan kata sandi sementara yang bersifat acak, yang bisa Anda pakai untuk login.",
                    },
                    {
                        title: "Login dengan Kata Sandi Sementara",
                        description:
                            "Gunakan kata sandi sementara dari petugas untuk login ke aplikasi Presensi Sidoarjo.",
                    },
                    {
                        title: "Wajib Ganti Kata Sandi di Situs SSO",
                        description:
                            "Segera ganti kata sandi sementara Anda di situs resmi sso.sidoarjokab.go.id. Kata sandi dari Helpdesk biasanya panjang dan susah dihafal, dan hanya Anda yang boleh tahu kata sandi akun Anda.",
                    },
                    {
                        title: "Tunggu 1 sampai 2 Menit Sebelum Login Ulang",
                        description:
                            "Setelah ganti kata sandi di SSO, beri jeda 1 sampai 2 menit supaya sistem menyelesaikan sinkronisasi data. Setelah itu, login kembali di aplikasi Presensi Sidoarjo dengan kata sandi baru Anda.",
                    },
                ],
                tips:
                    "Sebelum menghubungi Helpdesk, siapkan dulu NIP, Nama, dan OPD Anda supaya prosesnya cepat. Pastikan juga nomor WhatsApp Anda aktif.",
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
                            "Sebelum melakukan presensi, perhatikan dulu warna tombol utama yang muncul di layar Beranda Anda, karena setiap warna memiliki arti yang berbeda. Tombol Abu abu menandakan bahwa Anda sedang tidak bisa melakukan presensi, misalnya karena jadwal kerja Anda sedang OFF, hari libur resmi, cuti, tugas belajar, atau sedang dalam proses banding administratif. Jika Anda menekan tombol ini, layar akan menampilkan alasan spesifik mengapa presensi tidak tersedia untuk Anda. Tombol Biru menandakan bahwa Anda siap melakukan Presensi Masuk. Tombol Merah menandakan bahwa Anda sudah berhasil melakukan Presensi Masuk, dan sekarang siap untuk melakukan Presensi Keluar. Sedangkan Tombol Hijau menandakan bahwa Anda sudah menyelesaikan presensi masuk dan presensi keluar untuk hari itu, sehingga tidak ada lagi yang perlu Anda lakukan.",
                        image: image("home.png"),
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
                        title: "Aturan Foto Wajah",
                        description:
                            "Foto yang Anda ambil saat presensi wajib menampilkan satu wajah asli Anda secara jelas. Artinya, Anda tidak boleh menggunakan masker, kacamata hitam, atau penutup wajah lainnya yang menghalangi identifikasi. Anda juga tidak diperbolehkan menggunakan foto di dalam foto, misalnya memotret layar HP lain yang menampilkan wajah Anda. Semua aturan ini bertujuan untuk memastikan bahwa yang melakukan presensi benar benar Anda sendiri, bukan orang lain atau hanya sekadar gambar.",
                        image: image("ambilfoto.jpg"),
                    },
                    {
                        number: 4,
                        title: "Batas Waktu Foto dan Pratinjau",
                        description:
                            "Saat Anda mengambil foto wajah untuk presensi, waktu Anda dibatasi 60 detik. Setelah foto diambil, Anda akan dibawa ke halaman pratinjau atau preview, dan di halaman ini Anda punya waktu 120 detik untuk memeriksa foto serta memilih alasan kehadiran jika diperlukan. Jika waktu di salah satu tahap tersebut habis, meskipun layar HP Anda mati atau Anda menutup aplikasi, sistem akan otomatis membatalkan proses presensi dan mengembalikan Anda ke halaman Beranda. Aturan ini dibuat bukan untuk mempersulit, melainkan untuk memastikan bahwa titik GPS dan waktu pengambilan foto benar benar sinkron, sehingga data presensi Anda valid dan tidak bisa dimanipulasi.",
                        image: image("jenis-hadir.jpg"),
                    },
                    {
                        number: 5,
                        title: "Foto dan Lokasi Anda Dipantau",
                        description:
                            "Perlu Anda ketahui bahwa seluruh foto dan koordinat presensi yang Anda kirimkan akan diverifikasi oleh sistem, dan juga dipantau secara berkala oleh Admin Kepegawaian OPD. Jika ditemukan indikasi manipulasi foto atau lokasi, presensi Anda dapat dibatalkan oleh Admin OPD. Dampaknya tidak main main, karena pembatalan presensi bisa memengaruhi rekapitulasi kehadiran Anda dan berpotensi menurunkan perhitungan Tambahan Penghasilan Pegawai atau TPP Anda. Jadi, selalu lakukan presensi dengan jujur dan sesuai ketentuan.",
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
                            "Setelah foto diambil, layar akan menampilkan pratinjau foto Anda beserta informasi lokasi tempat Anda berada. Jika sistem mendeteksi bahwa Anda berada di luar radius kantor, Anda wajib memilih alasan yang sesuai, misalnya Perjalanan Dinas atau FWA, sebelum bisa melanjutkan ke tahap berikutnya. Pilihan alasan ini akan tercatat dalam sistem dan menjadi bagian dari riwayat presensi Anda.",
                        image: image("jenis-hadir.jpg"),
                    },
                    {
                        title: "Konfirmasi Presensi Masuk",
                        description:
                            "Jika semua data sudah sesuai, tekan tombol konfirmasi. Setelah presensi berhasil diproses, Anda akan otomatis diarahkan ke halaman Riwayat Presensi, dan data kehadiran masuk Anda akan tercatat secara resmi di sistem.",
                        image: image("verifhadir.jpg"),
                    },
                    {
                        title: "Tombol Berubah Menjadi Merah",
                        description:
                            "Sebagai tanda bahwa Presensi Masuk Anda berhasil, tombol di halaman Beranda akan berubah warna dari biru menjadi merah. Tombol merah ini menandakan bahwa Anda sudah siap untuk melakukan Presensi Keluar saat jam kerja Anda berakhir nanti. Anda tidak perlu melakukan apa pun lagi sampai waktunya Presensi Keluar.",
                        image: image("dashboard.png"),
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
                        image: image("ambilfoto.jpg"),
                    },
                    {
                        title: "Periksa Pratinjau Foto dan Lokasi",
                        description:
                            "Layar akan menampilkan pratinjau foto Anda beserta informasi lokasi. Jika Anda terdeteksi berada di luar radius kantor, akan muncul Notifikasi Peringatan SPT. Notifikasi ini bukan berarti presensi Anda gagal, tetapi Anda diwajibkan untuk mengunggah dokumen Surat Perintah Tugas atau SPT melalui menu Riwayat Presensi agar kehadiran Anda tetap sah secara administratif.",
                        image: image("jenis-hadir.jpg"),
                    },
                    {
                        title: "Konfirmasi Presensi Keluar",
                        description:
                            "Jika seluruh data sudah sesuai, tekan tombol konfirmasi. Setelah berhasil, Anda akan otomatis diarahkan ke halaman Riwayat Presensi, dan data kehadiran keluar Anda akan tercatat secara resmi di sistem.",
                        image: image("verifhadir.jpg"),
                    },
                    {
                        title: "Tombol Berubah Menjadi Hijau",
                        description:
                            "Sebagai tanda bahwa Presensi Keluar Anda berhasil, tombol di halaman Beranda akan berubah warna dari merah menjadi hijau. Warna hijau ini menandakan bahwa Anda sudah menyelesaikan presensi masuk dan presensi keluar untuk hari itu, sehingga seluruh kewajiban presensi harian Anda sudah terpenuhi.",
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
        type: "rekap kehadiran",
        description:
            "Halaman Riwayat Presensi adalah tempat Anda memeriksa seluruh catatan kehadiran yang sudah Anda lakukan. Di halaman ini, Anda bisa melihat detail presensi mulai dari jam masuk, jam keluar, lokasi tempat Anda melakukan presensi, sampai status kehadiran Anda pada hari tersebut. Halaman ini juga menampilkan peringatan jika ada presensi yang memerlukan tindakan lanjutan, misalnya ketika Anda melakukan Presensi Keluar di luar lokasi kantor sehingga wajib mengunggah dokumen Surat Perintah Tugas. Dengan memeriksa halaman ini secara rutin, Anda bisa memastikan bahwa semua kehadiran Anda tercatat dengan benar dan tidak ada yang perlu diperbaiki.",
        sections: [
            {
                number: 1,
                title: "Lihat Riwayat Presensi Anda",
                description:
                    "Di halaman ini, Anda bisa melihat riwayat presensi yang sudah Anda lakukan secara detail, mulai dari jam presensi sampai lokasi saat presensi dilakukan, untuk periode satu minggu terakhir. Informasi ini sangat berguna untuk memastikan bahwa kehadiran Anda tercatat dengan benar, dan untuk memeriksa apakah ada presensi yang gagal atau belum diproses oleh sistem.",
                image: image("riwayat-presensi.png"),
            },
            {
                description:
                    "Jika Anda melakukan Check out atau Presensi Keluar di luar lokasi kantor, akan muncul Notifikasi Peringatan SPT seperti ini. Notifikasi ini bukan berarti presensi Anda gagal, tetapi Anda diwajibkan untuk segera mengunggah dokumen Surat Perintah Tugas melalui halaman detail riwayat presensi, supaya kehadiran Anda tetap sah secara administratif.",
                image: image("unggah-spt.png"),
            },
            {
                number: 2,
                title: "Filter Data Presensi",
                description:
                    "Untuk mempermudah pencarian, tersedia filter tahunan dan bulanan. Dengan filter ini, Anda bisa memantau status riwayat presensi Anda dalam periode tertentu, misalnya untuk memeriksa kehadiran Anda selama satu bulan terakhir atau membandingkan kehadiran Anda di tahun sebelumnya.",
                image: image("rekap-bulan-riwayat.png"),
            },
            {
                number: 3,
                description:
                    "Di bagian Tahun, Anda hanya bisa melihat data tahun saat ini saja. Fitur ini memudahkan Anda ketika ingin melakukan pengecekan riwayat kehadiran Anda pada tahun ini.",
                image: image("bulan-rekap.png"),
            },
            {
                number: 4,
                description:
                    "Dan di bagian Bulan, Anda bisa melihat rekap per bulan dalam setahun. Sama seperti filter tahun, pilihan bulan juga hanya berlaku untuk tahun saat ini saja. Sehingga Anda punya fleksibilitas penuh untuk memeriksa riwayat presensi Anda berdasarkan bulan sebelumnya",
                image: image("riwayat-bulann.png"),
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
        type: "hari kerja",
        description:
            "Halaman Jadwal Kerja menampilkan informasi jadwal kerja yang berlaku untuk Anda, termasuk jadwal reguler, jadwal shift, dan hari libur. Dengan memahami jadwal kerja Anda, Anda bisa mempersiapkan diri dengan lebih baik, misalnya mengetahui kapan Anda harus Presensi Masuk dan kapan Anda harus Presensi Keluar. Halaman ini juga membantu Anda menghindari kesalahan seperti mencoba presensi pada hari libur, atau melewatkan jadwal shift yang seharusnya Anda jalani. Pastikan Anda memeriksa halaman ini secara rutin, terutama jika jadwal kerja Anda berubah ubah atau berbasis shift.",
        sections: [
            {
                number: 1,
                title: "Lihat Jadwal Kerja Anda",
                description:
                    "Di halaman ini, Anda bisa melihat riwayat Jadwal Kerja secara detail untuk satu minggu ke depan, apakah jadwal Anda reguler, shift, atau libur. Informasi ini memudahkan Anda mempersiapkan diri, misalnya mengatur waktu keberangkatan ke kantor atau menyesuaikan aktivitas pribadi dengan jadwal kerja Anda.",
                image: image("jadwal.png"),
            },
            {
                number: 2,
                title: "Filter Data Jadwal",
                description:
                    "Ada juga filter tahunan dan bulanan, supaya Anda bisa memantau status jadwal kerja Anda dalam periode tertentu. Fitur filter ini sangat berguna jika Anda ingin melihat pola jadwal kerja Anda selama beberapa bulan, atau memeriksa jadwal shift Anda di bulan bulan tertentu.",
                image: image("filter-jadwal1.png"),
            },
            {
                number: 3,
                description:
                    "Di bagian Tahun, Anda bisa memilih untuk melihat data tahun ini, dan tahun berikutnya. Dengan begitu, Anda bisa membandingkan jadwal kerja Anda dari waktu ke waktu, misalnya untuk melihat perubahan pola shift.",
                image: image("filter-jadwal2.png"),
            },
            {
                number: 4,
                description:
                    "Dan di bagian Bulan, Anda bisa melihat rekap per bulan dalam setahun. Sama seperti filter tahun, pilihan bulan juga mencakup tahun ini, dan tahun depan, sehingga Anda punya fleksibilitas penuh untuk memeriksa jadwal kerja Anda.",
                image: image("bulan-jadwal.png"),
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