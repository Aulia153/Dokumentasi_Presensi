import { HiMagnifyingGlass } from "react-icons/hi2";

const Navbar = () => {
    return (

        <nav className="bg-white border-b border-slate-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                <div>
                    <h1 className="text-xl font-bold text-slate-900">
                        Presensi Digital Kabupaten Sidoarjo
                    </h1>

                    <p className="text-xs text-slate-500">
                        Sistem Informasi Dokumentasi 
                    </p>
                </div>

                <div className="relative">
                    <HiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/>

                    <input
                        type="text"
                        placeholder="Cari Tutorial..."
                        className="w-64 rounded-xl border border-slate-300 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                </div>
                
            </div>
        </nav>
    );
};

export default Navbar