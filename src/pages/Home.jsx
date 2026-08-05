import { HiUserGroup } from "react-icons/hi";
import { HiUser } from "react-icons/hi";

import RoleCard from "../components/common/RoleCard";

const Home = () => {
    return (
        <div className="min-h-screen bg-slate-100">
            <div className="container mx-auto">
                <div className="py-20">
                    <div className="text-center">
                        {/* Logo */}
                        {/* <img src={logo} className="mx-auto w-24" /> */}

                        <h1 className="mt-5 text-5xl font-bold">
                            Presensi Digital
                        </h1>

                        <p className="text-slate-500 mt-3">
                            Sistem Informasi Dokumentasi 
                        </p>
                        
                        <p className="text-slate-500">
                            Kabupaten Sidoarjo
                        </p>
                    </div>

                    <div className="mt-20 grid md:grid-cols-2 gap-10">
                        < RoleCard icon={<HiUserGroup />}
                            title="Admin"
                            description="Panduan Penggunaan Aplikasi Untuk Admin"
                            button="Tutorial"
                            to="/admin"
                        />

                        <RoleCard icon={<HiUser />}
                            title="Pengguna"
                            description="Tutorial Pengguaan Aplikasi Untuk Pengguna"
                            button="Tutorial"
                            to="/"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home