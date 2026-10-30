# Dokumentasi Presensi

Website dokumentasi/tutorial **Aplikasi Presensi Sidoarjo** (Diskominfo Kabupaten Sidoarjo), dibuat dengan **React + Vite + Tailwind CSS**. Ada dua dokumentasi:

- **Admin OPD** → `/admin`
- **Pengguna** (PNS/PPPK) → `/user`

README ini menjelaskan **cara mengubah isi dan tampilan** website: mengedit tutorial, menambah menu, mengubah sidebar ("navbar"), mengganti gambar, sampai mengirim perubahan ke GitHub.


## 1. Menjalankan project

```bash
git clone https://github.com/Aulia153/Dokumentasi_Presensi.git
cd Dokumentasi_Presensi
npm install        # untuk mengunduh dependensi di awal, hanya sekali saja
npm run dev        # untuk menjalankan server secara lokal (http://localhost:5173)
```

Perintah lain:

| Perintah          | Fungsi                                              |
| ----------------- | --------------------------------------------------- |
| `npm run dev`     | Berjalan di server lokal, dalam masa pengembangan, halaman akan refresh otomatis saat file disimpan |
| `npm run build`   | Membuat folder `dist/` (berisi semua kode dengan size yang lebih ringan)           |
| `npm run preview` | Melihat hasil `build` secara lokal                  |

> Biasakan untuk menjalankan `npm run build` sebelum push di github. Kalau build gagal di komputer Anda, deploy-nya juga akan gagal.

---

## 2. Peta struktur folder

```
Dokumentasi_Presensi/
├── index.html                  # berisi judul, tab browser, favicon
├── public/                     
└── src/
    ├── main.jsx                # halaman utama aplikasi
    ├── App.jsx                 # memanggil routes/AppRoutes
    ├── index.css               # Berisi style Tailwind + font + animasi + scrollbar
    ├── routes/
    │   └── AppRoutes.jsx       # Berisi list alamat URL tiap halaman
    ├── pages/
    │   ├── Home.jsx            # Halaman beranda (pilih Admin / Pengguna)
    │   ├── AdminTutorial.jsx   # Halaman /admin
    │   └── UserTutorial.jsx    # Halaman /user
    ├── data/
    │   ├── tutorialAdmin.jsx   # Halaman untuk mengisi konten tutorial Admin 
    │   └── tutorialUser.jsx    # Halaman untuk mengisi konten tutorial Pengguna
    ├── components/
    │   ├── layout/
    │   │   ├── SidebarAdmin.jsx   # sidebar halaman /admin
    │   │   └── SidebarUser.jsx    # sidebar halaman /user
    │   ├── tutorial/
    │   │   └── TutorialContent.jsx  # mengatur tampilan bagian tutorial (judul, gambar, langkah, tips)
    │   └── common/
    │       ├── RoleCard.jsx    # Berisi style dari kartu "Admin OPD" / "Pengguna" di beranda
    │       └── Button.jsx
    ├── layouts/                # Berisi halaman MainLayout yang digunakan untuk memanggil komponen sidebar
    └── assets/
        ├── admin/<folder>/     # Berisi gambar tutorial Admin
        └── user/               # Berisi gambar tutorial Pengguna
```

**Tutorial mengubah kode secara hardcode:**

| Jika ingin mengubah                     | Maka buka file pada folder                     |
| --------------------------------------- | ------------------------------------------- |
| Teks/langkah/tips tutorial Admin        | `src/data/tutorialAdmin.jsx`                |
| Teks/langkah/tips tutorial Pengguna     | `src/data/tutorialUser.jsx`                 |
| Tampilan sidebar                        | `components/layout/SidebarAdmin.jsx` / `SidebarUser.jsx` |
| Tampilan styling dari tutorial                   | `components/tutorial/TutorialContent.jsx`   |
| Beranda                                 | `pages/Home.jsx`, `components/common/RoleCard.jsx` |
| Alamat URL / halaman baru               | `routes/AppRoutes.jsx`                      |
| Style css (Warna, font)                      | `index.css`                                 |


## 3. Cara Mengubah isi tutorial

Struktur data (contoh dari `tutorialAdmin.jsx`):

```jsx
{
    id: "login",                       // MENU UTAMA (parent)
    title: "Login",                    // tulisan di sidebar
    icon: HiOutlineLockClosed,         // ikon di sidebar

    children: [
        {
            id: "login-overview",      // TUTORIAL (child), id harus unik
            title: "Halaman Login",
            type: "steps",
            description: "Penjelasan singkat di bagian atas halaman.",
            image: image("login", "login-page.png"),   // gambar utama (opsional)

            sections: [                // langkah-langkah
                {
                    title: "Masukkan NIP",
                    description: "Isi NIP pada kolom yang disediakan.",
                    image: image("login", "login-nip.png"),  // opsional
                },
            ],

            tips: "Kotak tips di bagian bawah (opsional).",
        },
    ],
},
```

### Simulasi

**Mengubah kalimat**: cari kalimatnya dengan `Ctrl+Shift+F` (cari di seluruh project) di VS Code, lalu edit teksnya.

**Menambah langkah**: tambahkan objek baru di dalam `sections`, jangan lupa koma antar objek:

```jsx
sections: [
    { title: "Langkah 1", description: "..." },
    { title: "Langkah 2", description: "..." },   // ← baru
],
```

**Memakai tanda kutip di dalam teks**: gunakan `\"` atau bungkus teks dengan tanda kutip lain.

```jsx
description: "Muncul konfirmasi \"Keluar dari Sistem?\".",
```

**Menghapus tutorial**: hapus seluruh blok `{ ... },` child tersebut. Kalau semua child dalam satu menu dihapus, hapus juga menu utamanya.


## 4. Mengganti & menambah gambar

Gambar akan dibaca otomatis dari folder `src/assets/` memakai `import.meta.glob`.

**Admin**: letakkan di `src/assets/admin/<nama-folder>/<nama-file>`

```jsx
image: image("login", "login-page.png"),
// → src/assets/admin/login/login-page.png
```

**Pengguna**: letakkan langsung di `src/assets/user/`

```jsx
image: image("dashboard.png"),
// → src/assets/user/dashboard.png
```

Langkah menambah gambar baru:

1. Salin file ke folder yang sesuai.
2. Panggil di data dengan `image(...)`.
3. Simpan, lalu cek di browser.

Hal yang perlu diperhatikan:

- **Ekstensi yang dibaca**: `png`, `jpg`, `jpeg`, `webp`. File `.svg` atau `.gif` **tidak** akan terbaca.
- **Nama harus persis sama**, termasuk huruf besar-kecil dan ekstensi. Di komputer Windows yang lolos, di server (Linux) bisa gagal.
- Kalau nama salah, `image()` mengembalikan `null` dan **gambar tidak muncul tanpa pesan error**. Ini penyebab paling umum "kok gambarnya hilang".
- Untuk menambah **folder baru** di admin (misalnya `notifikasi`), cukup buat `src/assets/admin/notifikasi/` lalu panggil `image("notifikasi", "file.png")`.
- Kompres gambar (misalnya ke `.webp`) agar website tetap ringan.

---

## 5. Mengubah sidebar 
Sidebar ini navigasinya berupa **sidebar di kiri**. Ada dua file terpisah:

- `src/components/layout/SidebarAdmin.jsx` → halaman `/admin`
- `src/components/layout/SidebarUser.jsx` → halaman `/user`

> Perubahan di satu file **tidak otomatis** berlaku di file satunya. Kalau ingin sama, ubah keduanya.

Di dalam file, sidebar dipecah menjadi komponen kecil:

| Komponen           | Bagian yang diubah                                      |
| ------------------ | ------------------------------------------------------- |
| `SidebarHeader`    | Judul "Dokumentasi Presensi", label "Tutorial Admin", ikon aplikasi |
| `BackToHomeButton` | Tombol "Kembali ke Menu Utama"                          |
| `MenuLabel`        | Tulisan kecil "Menu Tutorial"                           |
| `SidebarMenu`      | Tampilan menu utama (ikon, panah buka/tutup)            |
| `SubMenu`          | Tampilan sub-menu (tutorial)                            |
| `SidebarFooter`    | Tulisan di bagian bawah "Dokumentasi Presensi Digital"  |
| `MobileMenuButton` / `MobileOverlay` | Tombol hamburger dan latar gelap di HP |

Contoh: mengganti teks header

```jsx
<h1 className="...">Dokumentasi Presensi</h1>
// ubah menjadi
<h1 className="...">Panduan Presensi Sidoarjo</h1>
```

### Mengubah lebar sidebar

Lebar sidebar `lg:w-80` (320 px) harus **sama** dengan margin konten `lg:ml-80`:

- Sidebar: `SidebarAdmin.jsx` / `SidebarUser.jsx` → `lg:w-80`
- Konten: `AdminTutorial.jsx` / `UserTutorial.jsx` → `lg:ml-80`

Kalau ingin lebih sempit, ubah **keduanya** ke nilai yang sama, misalnya `lg:w-72` dan `lg:ml-72`. Kalau tidak sama, sebagian konten akan tertutup sidebar.

### Mengubah warna aktif sidebar

Cari kelas `blue-` di file sidebar (contoh `bg-blue-50`, `text-blue-700`) lalu ganti ke warna Tailwind lain, misalnya `emerald-` atau `indigo-`.

---

## 6. Mengubah halaman Beranda

File: `src/pages/Home.jsx`.

Terdapat dua kartu pilihan role dibuat dengan `RoleCard`:

```jsx
<RoleCard
    icon={<HiUserGroup />}
    title="Admin OPD"
    description="Panduan penggunaan aplikasi untuk Admin OPD ..."
    button="Buka Dokumentasi"
    to="/admin"
/>
```

- Ganti `title` / `description` / `button` untuk mengubah teks.
- `to` adalah alamat tujuan dan harus sama dengan `path` di `AppRoutes.jsx`.
- Gaya kartu (warna, bayangan, hover) ada di `components/common/RoleCard.jsx`.

---

## 7. Menambah halaman / route baru

Contoh: halaman `/faq`.

**1. Buat halaman** `src/pages/Faq.jsx`

```jsx
const Faq = () => <div className="p-8">Halaman FAQ</div>;
export default Faq;
```

**2. Daftarkan di** `src/routes/AppRoutes.jsx`

```jsx
import Faq from "../pages/Faq";

// di dalam <Routes>
<Route path="/faq" element={<Faq />} />
```

**3. Tautkan** dari halaman lain dengan `Link` (bukan `<a href>`, supaya tidak reload):

```jsx
import { Link } from "react-router-dom";
<Link to="/faq">Lihat FAQ</Link>
```
---

## 8. Mengubah style

- **Judul tab browser**: `index.html` → `<title>dokumentasi</title>`
- **Favicon**: ganti `public/favicon.svg`
- **Animasi, scrollbar, warna blok teks**: `src/index.css`.
---