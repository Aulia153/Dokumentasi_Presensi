import { 
    HiOutlineLockClosed, HiOutlineHome, HiOutlineMapPin, HiOutlineCalendarDays,
    HiOutlineDocumentText, HiOutlineCog6Tooth, HiOutlineQuestionMarkCircle,
} from "react-icons/hi2";

const tutorialData = [
    {
        id: "login",
        title: "Login",
        icon: HiOutlineLockClosed,
        children: [
            {
                id: "overview",
                title: "Overview",
            },
            {
                id: "login-sso",
                title: "Login SSO",
            },
            {
                id: "logout",
                title: "Logout",
            },
        ], 
    },

    {
        id: "dashboard",
        title: "Dashboard",
        icon: HiOutlineHome,
        children: [
            {
                id: "dashboard-home",
                title: "Dashboard Utama",
            },
            {
                id: "monitoring",
                title: "Monitoring Presensi",
            },
            {
                id: "statistik",
                title: "Statistik Kehadiran"
            },
        ],
    },

    {
        id: "lokasi",
        title: "Lokasi Kerja",
        icon: HiOutlineMapPin,
        children: [
            {
                id: "lihat-lokasi",
                title: "Melihat Lokasi",
            },
            {
                id: "edit-lokasi",
                title: "Edit Lokasi",
            },
        ],
    },

    {
        id: "jadwal",
        title: "Jadwal Kerja",
        icon: HiOutlineCalendarDays,
        children: [
            {
                id: "tambah-jadwal",
                title: "Melihat Jadwal",
            },
            {
                id: "tambah-jadwal",
                title: "Tambah Jadwal",
            },
        ],
    },

    {
        id: "laporan",
        title: "Laporan",
        icon: HiOutlineDocumentText,
        children: [
            {
                id: "rekap",
                title: "Rekap Presensi",
            },
            {
                id: "export",
                title: "Export Laporan",
            },
        ],
    },

    {
        id: "Pengaturan",
        title: "Pengaturan",
        icon: HiOutlineCog6Tooth,
        children: [
            {
                id: "profil",
                title: "Profil Admin",
            },
            {
                id: "hal-akses",
                title: "Hak Akses",
            },
        ],
    },

    {
        id: "faq",
        title: "FAQ",
        icon: HiOutlineQuestionMarkCircle,
        children: [],
    },
];

export default tutorialData;