import { HiOutlineArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const RoleCard = ({
    icon,
    title,
    description,
    button = "Tutorial",
    to,
}) => {

    return (
        <Link
            to={to}
            className="
                group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 sm:p-7"
        >

            {/* Decorative */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-50 transition-transform duration-500 group-hover:scale-150"
            />

            <div className="relative">

                {/* Ikon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/20">
                    <span className="text-xl"> {icon} </span>
                </div>

                {/* Konten */}
                <h2 className="mt-5 text-xl font-bold text-slate-900 sm:text-2xl">
                    {title}
                </h2>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500 sm:text-base">
                    {description}
                </p>

                {/* Button */}
                <div className="mt-5 flex items-center justify-between gap-3">

                    <span className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 group-hover:bg-blue-700">
                        {button}

                        <HiOutlineArrowRight
                            aria-hidden="true"
                            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </span>

                    <span className="text-xs font-medium text-slate-400">
                        Dokumentasi
                    </span>

                </div>
            </div>
        </Link>
    );
};

export default RoleCard;