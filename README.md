# Dokumentasi Presensi

Website dokumentasi/tutorial **Aplikasi Presensi Sidoarjo** (Diskominfo Kabupaten Sidoarjo), dibuat dengan **React + Vite + Tailwind CSS**. Ada dua dokumentasi:

- **Admin OPD** → `/admin`
- **Pengguna** (PNS/PPPK) → `/user`

README ini menjelaskan **cara mengubah isi dan tampilan** website: mengedit tutorial, menambah menu, mengubah sidebar ("navbar"), mengganti gambar, sampai mengirim perubahan ke GitHub.

---

## Daftar Isi

1. [Menjalankan project](#1-menjalankan-project)
2. [Peta struktur folder](#2-peta-struktur-folder)
3. [Cara kerja singkat](#3-cara-kerja-singkat)
4. [Mengubah isi tutorial](#4-mengubah-isi-tutorial)
5. [Menambah tutorial / menu baru](#5-menambah-tutorial--menu-baru)
6. [Mengganti & menambah gambar](#6-mengganti--menambah-gambar)
7. [Mengubah sidebar (navbar)](#7-mengubah-sidebar-navbar)
8. [Mengubah halaman Beranda](#8-mengubah-halaman-beranda)
9. [Menambah halaman / route baru](#9-menambah-halaman--route-baru)
10. [Mengubah warna, font, judul tab](#10-mengubah-warna-font-judul-tab)
11. [Alur Git: simpan perubahan ke GitHub](#11-alur-git-simpan-perubahan-ke-github)
12. [Masalah yang ditemukan di kode saat ini](#12-masalah-yang-ditemukan-di-kode-saat-ini)

---

## 1. Menjalankan project

Butuh **Node.js** (disarankan versi LTS terbaru) dan **Git**.

```bash
git clone https://github.com/Aulia153/Dokumentasi_Presensi.git
cd Dokumentasi_Presensi
npm install        # sekali saja, untuk mengunduh dependensi
npm run dev        # jalankan server pengembangan (biasanya http://localhost:5173)
```

Perintah lain:

| Perintah          | Fungsi                                              |
| ----------------- | --------------------------------------------------- |
| `npm run dev`     | Mode pengembangan, halaman refresh otomatis saat file disimpan |
| `npm run build`   | Membuat versi produksi di folder `dist/`            |
| `npm run preview` | Melihat hasil `build` secara lokal                  |
| `npm run lint`    | Mengecek kesalahan kode dengan Oxlint               |

> Biasakan menjalankan `npm run build` sebelum push. Kalau build gagal di komputer Anda, deploy-nya juga akan gagal.

---

## 2. Peta struktur folder

```
Dokumentasi_Presensi/
├── index.html                  # judul tab browser, favicon
├── public/                     # file statis (favicon.svg, dll)
└── src/
    ├── main.jsx                # titik awal aplikasi
    ├── App.jsx                 # memanggil AppRoutes
    ├── index.css               # Tailwind + font + animasi + scrollbar
    ├── routes/
    │   └── AppRoutes.jsx       # daftar alamat URL → halaman
    ├── pages/
    │   ├── Home.jsx            # beranda (pilih Admin / Pengguna)
    │   ├── AdminTutorial.jsx   # halaman /admin
    │   └── UserTutorial.jsx    # halaman /user
    ├── data/
    │   ├── tutorialAdmin.jsx   # ISI tutorial Admin (teks, gambar, menu)
    │   └── tutorialUser.jsx    # ISI tutorial Pengguna
    ├── components/
    │   ├── layout/
    │   │   ├── SidebarAdmin.jsx   # sidebar halaman /admin
    │   │   └── SidebarUser.jsx    # sidebar halaman /user
    │   ├── tutorial/
    │   │   └── TutorialContent.jsx  # tampilan satu tutorial (judul, gambar, langkah, tips)
    │   └── common/
    │       ├── RoleCard.jsx    # kartu "Admin OPD" / "Pengguna" di beranda
    │       └── Button.jsx
    ├── layouts/                # MainLayout & MainLayoutUser
    └── assets/
        ├── admin/<folder>/     # gambar tutorial Admin, dikelompokkan per menu
        └── user/               # gambar tutorial Pengguna
```

**Aturan praktis:**

| Ingin mengubah…                         | Buka file…                                  |
| --------------------------------------- | ------------------------------------------- |
| Teks/langkah/tips tutorial Admin        | `src/data/tutorialAdmin.jsx`                |
| Teks/langkah/tips tutorial Pengguna     | `src/data/tutorialUser.jsx`                 |
| Menu di sidebar (nama, ikon, urutan)    | file `data/` yang sama (menu dibuat dari data) |
| Tampilan sidebar                        | `components/layout/SidebarAdmin.jsx` / `SidebarUser.jsx` |
| Tampilan isi tutorial                   | `components/tutorial/TutorialContent.jsx`   |
| Beranda                                 | `pages/Home.jsx`, `components/common/RoleCard.jsx` |
| Alamat URL / halaman baru               | `routes/AppRoutes.jsx`                      |
| Warna global, font                      | `index.css`                                 |

---

## 3. Cara kerja singkat

Pahami alur ini dan hampir semua perubahan jadi mudah:

```
data/tutorialAdmin.jsx   ──►  SidebarAdmin.jsx   (membuat daftar menu di kiri)
        │
        └────────────────►  AdminTutorial.jsx   (mencari tutorial yang sedang dipilih)
                                   │
                                   ▼
                          TutorialContent.jsx   (menampilkan isinya)
```

- **Isi dan menu berasal dari satu sumber**: array di `data/tutorialAdmin.jsx` atau `data/tutorialUser.jsx`. Mengubah data otomatis mengubah sidebar *dan* isi halaman.
- Tutorial yang dipilih disimpan di state `activeItem` (berisi `id` tutorial). **Pindah tutorial tidak mengubah URL**; alamatnya tetap `/admin` atau `/user`.
- Karena pencarian memakai `id`, **setiap `id` harus unik** dalam satu file data.

---

## 4. Mengubah isi tutorial

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
            type: "overview",
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

### Field yang tersedia

| Field                    | Wajib? | Fungsi |
| ------------------------ | ------ | ------ |
| `id`                     | Ya     | Pengenal unik. Jangan sama dengan `id` lain |
| `title`                  | Ya     | Judul di sidebar dan di atas halaman |
| `type`                   | Tidak  | Label jenis (`steps`, `overview`, `info`, dst.). Lihat catatan di bawah |
| `description`            | Tidak  | Paragraf pengantar |
| `image`                  | Tidak  | Gambar utama di atas langkah |
| `sections`               | Tidak  | Daftar langkah |
| `sections[].title`       | Ya*    | Judul langkah |
| `sections[].description` | Tidak  | Penjelasan langkah. `\n` dibaca sebagai baris baru |
| `sections[].image`       | Tidak  | Gambar untuk langkah itu |
| `sections[].points`      | Tidak  | Daftar poin kecil: `[{ title, description }, ...]` |
| `tips`                   | Tidak  | Kotak "Tips" di bagian bawah |

### Contoh pekerjaan umum

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

> **Catatan tentang `type`:** di kode saat ini, `TutorialContent.jsx` hanya membedakan `type: "faq"` dari yang lain. Nilai `steps`, `overview`, `info`, `home`, dll. tampil dengan tata letak yang sama. Jadi cukup ikuti pola yang sudah ada. Lihat juga [bagian 12](#12-masalah-yang-ditemukan-di-kode-saat-ini) tentang `faq`.

### Perbedaan Admin dan Pengguna

- **Admin**: hanya `children` yang bisa menjadi halaman tutorial. Menu utama tanpa `children` tidak akan menampilkan apa-apa.
- **Pengguna**: menu utama **boleh langsung menjadi halaman** tanpa `children` (contoh: menu *Rekap*, *Kerja*, *Profil* di `tutorialUser.jsx`).
- `tutorialUser.jsx` memakai `description` di level menu utama dan `image("nama-file.png")` (satu argumen). `tutorialAdmin.jsx` memakai `image("folder", "nama-file.png")` (dua argumen).

---

## 5. Menambah tutorial / menu baru

### a. Menambah tutorial di menu yang sudah ada

Tambahkan objek baru di `children` menu tersebut:

```jsx
children: [
    // ... tutorial lama ...
    {
        id: "reset-password",          // unik!
        title: "Reset Password",
        type: "steps",
        description: "Cara mereset password akun.",
        sections: [
            { title: "Buka halaman login", description: "..." },
        ],
        tips: "Hubungi admin jika gagal.",
    },
],
```

### b. Menambah menu utama baru

1. Pilih ikon di <https://react-icons.github.io/react-icons/icons/hi2/> (gunakan yang berawalan `HiOutline`).
2. Tambahkan nama ikon di `import` bagian atas file data:

```jsx
import {
    HiOutlineLockClosed, HiOutlineHome,
    HiOutlineBell,                      // ← ikon baru
} from "react-icons/hi2";
```

3. Tambahkan objek menu di array `tutorialAdmin` (atau `tutorialUser`):

```jsx
{
    id: "notifikasi",
    title: "Notifikasi",
    icon: HiOutlineBell,
    children: [
        {
            id: "notifikasi-lihat",
            title: "Melihat Notifikasi",
            type: "steps",
            description: "...",
            sections: [{ title: "Buka menu Notifikasi", description: "..." }],
        },
    ],
},
```

Selesai. Sidebar, kartu "Akses Cepat" di halaman Admin, dan jumlah menu/tutorial akan ikut ter-update otomatis.

### c. Mengubah urutan menu

Urutan di sidebar = urutan di array. Pindahkan blok `{ ... },` ke atas atau bawah.

---

## 6. Mengganti & menambah gambar

Gambar dibaca otomatis dari folder `src/assets/` memakai `import.meta.glob`.

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

## 7. Mengubah sidebar (navbar)

Website ini **tidak memakai navbar di atas**; navigasinya berupa **sidebar di kiri**. Ada dua file terpisah:

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

### Ingin menambah navbar di atas?

1. Buat `src/components/layout/Navbar.jsx`.
2. Panggil `<Navbar />` di dalam `AdminTutorial.jsx` / `UserTutorial.jsx` (di atas `<main>`), atau di `Home.jsx`.
3. Karena sidebar bersifat `fixed` dan setinggi layar penuh, tambahkan jarak atas pada sidebar/konten agar tidak tertimpa.

> `MainLayout.jsx` dan `MainLayoutUser.jsx` ada di folder `layouts/`, tetapi `AdminTutorial.jsx` dan `UserTutorial.jsx` saat ini memanggil sidebar langsung dan tidak memakainya.

---

## 8. Mengubah halaman Beranda

File: `src/pages/Home.jsx`.

Dua kartu pilihan role dibuat dengan `RoleCard`:

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

## 9. Menambah halaman / route baru

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

> Urutan route: `path="*"` (404) harus tetap **paling bawah**.

---

## 10. Mengubah warna, font, judul tab

- **Judul tab browser**: `index.html` → `<title>dokumentasi</title>`
- **Favicon**: ganti `public/favicon.svg`
- **Warna**: dikontrol lewat kelas Tailwind (`bg-blue-600`, `text-slate-700`, dll.) di setiap komponen. Untuk mengganti tema biru ke warna lain, gunakan fitur *Find & Replace* di VS Code (`Ctrl+Shift+H`): ganti `blue-` menjadi `indigo-` (cek hasilnya dulu sebelum "Replace All").
- **Font**: `index.css` memakai `Poppins`, tetapi font ini belum dimuat. Tambahkan di `<head>` pada `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

- **Animasi, scrollbar, warna blok teks**: `src/index.css`.

---

## 11. Alur Git: simpan perubahan ke GitHub

```bash
git pull                              # ambil versi terbaru dulu
git checkout -b edit-tutorial-login   # (disarankan) buat branch sendiri

# ... edit file, cek di npm run dev ...

npm run build                         # pastikan tidak error
git status                            # lihat file yang berubah
git add .
git commit -m "Perbarui tutorial login admin"
git push origin edit-tutorial-login   # lalu buat Pull Request di GitHub
```

Kalau langsung bekerja di branch utama: `git push` saja.

Tips pesan commit: awali dengan kata kerja dan sebutkan apa yang berubah, misalnya `Tambah tutorial reset password user`, `Perbaiki gambar sidebar`, `Ubah warna tombol beranda`.

> **Catatan deploy:** project ini memakai `BrowserRouter`. Pada hosting statis (Netlify, Vercel, GitHub Pages, dll.) buka langsung `/admin` atau tekan refresh bisa menghasilkan 404 kalau hosting belum diatur untuk mengarahkan semua alamat ke `index.html`. Cek pengaturan *SPA fallback / rewrites* pada hosting yang dipakai.

---

## Teknologi

React 19 · Vite · Tailwind CSS 4 · React Router 7 · React Icons · Oxlint