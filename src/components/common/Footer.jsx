const Footer = () => {
    return (
        <footer className="mt-auto border-t border-slate-200 bg-white px-6 py-5">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
                <p className="text-sm text-slate-500">
                    &copy; {new Date().getFullYear()} Presensi Digital Kabupaten Sidoarjo
                </p>

                <p className="text-sm text-slate-400">
                    Dokumentasi dan Panduan Penggunaan Aplikasi
                </p>
            </div>
        </footer>
    );
};

export default Footer;