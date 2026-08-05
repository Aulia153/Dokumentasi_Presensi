import { HiMagnifyingGlass } from "react-icons/hi2";

const Navbar = () => {
    return (

        <nav className="ng-white border-b border-slate-200 shadow-sm">
            <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

                <div>
                    <h1 className="text-2xl font-bold">
                        Tutorial Admin
                    </h1>

                    <p className="text-slate-500">
                        Presensi Digital Kabupaten Sidoarjo 
                    </p>
                </div>

                <div className="relative">
                    <HiMagnifyingGlass className="absolute left-3 top-3 text-gray-400"/>

                    <input className="
                        w-72
                        rounded-xl
                        border
                        border-slate-300
                        py-2
                        pl-10
                        pr-4
                        outline-none
                        focus:border-blue-500"

                        placeholder="Cari Tutorial..."
                    />

                </div>
            </div>
        </nav>
    )
}

export default Navbar