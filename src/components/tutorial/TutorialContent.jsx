import { useEffect, useState } from "react";

import {
    HiOutlineChevronDown,
    HiOutlineInformationCircle,
    HiOutlineLightBulb,
    HiOutlinePhoto,
} from "react-icons/hi2";

const TutorialContent = ({
    tutorial,
    role = "admin",
}) => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [tutorial?.id]);

    if (!tutorial) return null;
    tutorial

    const isFaq = tutorial.type === "faq";
    const isSteps = tutorial.type === "steps";

    const roleLabel =
        role === "user"
            ? "Tutorial Pengguna"
            : "Tutorial Admin";

    return (
        <div className="min-h-screen bg-slate-50/80">
            <TutorialHeader
                tutorial={tutorial}
                roleLabel={roleLabel}
            />

            <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                {/* INFORMASI HALAMAN */}
                {tutorial.description && (
                    <OverviewCard
                        description={tutorial.description}
                    />
                )}

                {/* KONTEN UTAMA */}
                {isFaq ? (
                    <FAQContent
                        questions={tutorial.questions ?? []}
                    />
                ) : (
                    <>
                        {/* GAMBAR UTAMA */}
                        {tutorial.image && (
                            <ImagePreview
                                src={tutorial.image}
                                alt={`Tampilan ${tutorial.title}`}
                                main
                            />
                        )}

                        {/* PANDUAN PENGGUNAAN */}
                        {tutorial.sections?.length > 0 && (
                            <TutorialSections
                                sections={tutorial.sections}
                            />
                        )}
                    </>
                )}

                {/* TIPS */}
                {tutorial.tips && (
                    <TipsCard tips={tutorial.tips} />
                )}
            </main>

            <TutorialFooter />
        </div>
    );
};


/* ============================================================
   HEADER
============================================================ */

const TutorialHeader = ({
    tutorial,
    roleLabel,
}) => {
    return (
        <header className="relative overflow-hidden border-b border-slate-200 bg-white pt-16 pl-12 sm:pl-16 lg:pt-0 lg:pl-0">
            <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-blue-50" />

            <div className="pointer-events-none absolute right-20 top-24 h-24 w-24 rounded-full bg-blue-100/40" />

            <div className="relative mx-auto max-w-6xl px-4 py-7 sm:px-6 sm:py-9 lg:px-8">
                {/* BREADCRUMB */}
                <nav
                    aria-label="Breadcrumb"
                    className="flex flex-wrap items-center gap-2 text-sm"
                >
                    <span className="font-semibold text-blue-700">
                        {roleLabel}
                    </span>

                    <span className="text-slate-300">/</span>

                    <span className="max-w-full truncate text-slate-500">
                        {tutorial.title}
                    </span>
                </nav>

                {/* JUDUL HALAMAN */}
                <div className="mt-6 flex items-start gap-4">
                    <div className="h-12 w-1 shrink-0 rounded-full bg-blue-600" />

                    <div className="min-w-0">
                        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

                            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-700">
                                Panduan Sistem
                            </span>
                        </div>

                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                            {tutorial.title}
                        </h1>

                        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                            Dokumentasi penggunaan Sistem Presensi
                            Digital Kabupaten Sidoarjo.
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
};


/* ============================================================
   OVERVIEW
============================================================ */

const OverviewCard = ({
    description,
}) => {
    return (
        <section className="mb-6 overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md">
            <div className="flex items-start gap-4 p-5 sm:p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-700">
                    <HiOutlineInformationCircle className="h-5 w-5" />
                </div>

                <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                        <h2 className="text-base font-bold text-slate-900 sm:text-lg">
                            Tentang Halaman Ini
                        </h2>

                        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-blue-700">
                            Informasi
                        </span>
                    </div>

                    <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-600 sm:text-base">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
};


/* ============================================================
   TUTORIAL SECTIONS
============================================================ */

const TutorialSections = ({
    sections,
}) => {
    return (
        <section className="mt-6">
            <div className="mb-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-700">
                    Panduan Penggunaan
                </p>

                <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                    Langkah dan Informasi Penggunaan
                </h2>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                    Pelajari setiap bagian berikut untuk memahami
                    fungsi dan cara menggunakan fitur aplikasi.
                </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                {sections.map((section, index) => (
                    <TutorialSection
                        key={`${section.title}-${index}`}
                        section={section}
                        index={index}
                        isLast={index === sections.length - 1}
                    />
                ))}
            </div>
        </section>
    );
};


/* ============================================================
   SINGLE SECTION
============================================================ */

const TutorialSection = ({
    section,
    index,
    isLast,
}) => {
    // FORMAT NOMOR SAMA DI SEMUA MENU: 01, 02, 03, ...
    const sectionNumber = String(index + 1).padStart(2, "0");

    return (
        <article
            className={`
                group relative px-5 py-6
                transition-colors duration-200
                hover:bg-blue-50/30
                sm:px-7 sm:py-7 lg:px-8
                ${!isLast ? "border-b border-slate-100" : ""}
            `}
        >
            <div className="flex items-start gap-4 sm:gap-5">
                {/* NOMOR KONSISTEN */}
                <div className="relative flex shrink-0 items-center justify-center">
                    <span
                        className="
                            absolute -left-5
                            h-6 w-1
                            rounded-r-full
                            bg-blue-600
                            opacity-0
                            transition-opacity duration-200
                            group-hover:opacity-100
                            sm:-left-7 lg:-left-8
                        "
                    />

                    <div
                        className="
                            flex h-10 w-10 shrink-0
                            items-center justify-center
                            rounded-xl
                            border border-blue-100
                            bg-blue-50
                            text-sm font-bold
                            text-blue-700
                            transition-all duration-200
                            group-hover:border-blue-600
                            group-hover:bg-blue-600
                            group-hover:text-white
                            group-hover:shadow-md
                            group-hover:shadow-blue-600/15
                        "
                        aria-label={`Bagian ${sectionNumber}`}
                    >
                        {sectionNumber}
                    </div>
                </div>

                {/* ISI KONTEN */}
                <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold leading-7 text-slate-900 transition-colors duration-200 group-hover:text-blue-800 sm:text-lg">
                        {section.title}
                    </h3>

                    {section.description && (
                        <p className="mt-2 whitespace-pre-line text-sm leading-7 text-slate-600 sm:text-base">
                            {section.description}
                        </p>
                    )}

                    {/* POIN PENJELASAN */}
                    {section.points?.length > 0 && (
                        <ul className="mt-4 space-y-3">
                            {section.points.map((point, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">

                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />

                                    <div className="min-w-0">
                                        <h4 className="text-sm font-semibold text-slate-800 sm:text-base">
                                            {point.title}
                                        </h4>

                                        <p className="mt-1 text-sm leading-6 text-slate-600">
                                            {point.description}
                                        </p>
                                    </div>    
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* GAMBAR PENDUKUNG */}
                    {section.image && (
                        <div className="mt-5">
                            <ImagePreview
                                src={section.image}
                                alt={section.title}
                            />
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
};


/* ============================================================
   IMAGE PREVIEW
============================================================ */

const ImagePreview = ({
    src,
    alt,
    main = false,
}) => {
    const [imageError, setImageError] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        setImageError(false);
        setIsExpanded(false);
    }, [src]);

    useEffect(() => {
        if (!isExpanded) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsExpanded(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isExpanded]);

    if (!src || imageError) return null;

    return (
        <>
            <figure
                className={`
                    overflow-hidden rounded-xl
                    border border-slate-200
                    bg-white
                    transition-shadow duration-200
                    hover:shadow-md
                    ${main ? "mb-6" : ""}
                `}
            >
                {/* HEADER GAMBAR */}
                <div className="flex items-center justify-between gap-3 border-b border-slate-100 bg-slate-50 px-4 py-3">
                    <div className="flex min-w-0 items-center gap-2.5">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-blue-700 shadow-sm ring-1 ring-slate-200">
                            <HiOutlinePhoto className="h-4 w-4" />
                        </div>

                        <span className="truncate text-xs font-semibold text-slate-600 sm:text-sm">
                            Tampilan Sistem
                        </span>
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsExpanded(true)}
                        className="shrink-0 rounded-lg border border-blue-100 bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 transition-colors duration-200 hover:border-blue-200 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        aria-label={`Perbesar gambar ${alt}`}
                    >
                        Perbesar
                    </button>
                </div>

                {/* GAMBAR */}
                <div className={`
                    flex justify-center bg-slate-100/70 p-3 sm:p-5
                    ${main ? "lg:p-6" : ""}
                `}>

                    <button
                        type="button"
                        onClick={() => setIsExpanded(true)}
                        className="block max-w-full cursor-zoom-in rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        aria-label={`Lihat gambar ${alt} dalam ukuran besar`}
                    >
                        <img
                            src={src}
                            alt={alt}
                            loading="lazy"
                            onError={() => setImageError(true)}
                            className={`
                                mx-auto block h-auto max-w-full rounded-lg border border-slate-200 bg-white object-contain shadow-sm
                                ${main
                                    ? "max-h-[480px] sm:max-h-[540px]"
                                    : "max-h-[360px] sm:max-h-[400px]"
                                }`}
                        />
                    </button>
                </div>

                {alt && (
                    <figcaption className="border-t border-slate-100 px-4 py-2.5 text-xs leading-5 text-slate-500">
                        {alt}
                    </figcaption>
                )}
            </figure>

            {/* MODAL GAMBAR */}
            {isExpanded && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 sm:p-8"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Gambar ${alt}`}
                    onClick={() => setIsExpanded(false)}
                >
                    <div className="relative flex max-h-full max-w-6xl flex-col items-center">
                        <button
                            type="button"
                            onClick={() => setIsExpanded(false)}
                            className="mb-3 self-end rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        >
                            Tutup 
                        </button>

                        <img
                            src={src}
                            alt={alt}
                            className="max-h-[80vh] max-w-full rounded-xl bg-white object-contain shadow-2xl"
                            onClick={(event) => event.stopPropagation()}
                        />

                        {alt && (
                            <p className="mt-3 text-center text-sm text-white">
                                {alt}
                            </p>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

/* ============================================================
   TIPS
============================================================ */

const TipsCard = ({ tips }) => {
    if (!tips || (Array.isArray(tips) && tips.length === 0)) {
        return null;
    }

    const tipsItems = Array.isArray(tips) ? tips : [tips];

    return (
        <aside className="mt-7 overflow-hidden rounded-2xl border border-amber-200/80 bg-amber-50/70">
            <div className="flex items-start gap-4 p-5 sm:p-6">

                {/* IKON */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-200/70 bg-white text-amber-600 shadow-sm">
                    <HiOutlineLightBulb className="h-5 w-5" />
                </div>

                {/* ISI */}
                <div className="min-w-0 flex-1">
                    <h2 className="text-base font-bold text-amber-950 sm:text-lg">
                        Tips Penggunaan
                    </h2>

                    <ul className="mt-3 space-y-2.5">
                        {tipsItems.map ((tips, index) => (
                            <li 
                                key={index}
                                className="flex items-start gap-3 text-sm leading-6 text-amber-900/80 sm:text-base">
                                
                                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />

                                <span className="min-w-0 flex-1">
                                    {tips}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    );
};

/* ============================================================
   FOOTER
============================================================ */

const TutorialFooter = () => {
    return (
        <footer className="mt-10 border-t border-slate-200 bg-white">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
                <div>
                    <p className="text-sm font-semibold text-slate-700">
                        Dokumentasi Presensi Digital
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                        Kabupaten Sidoarjo
                    </p>
                </div>

                <p className="text-xs text-slate-400">
                    © 2026 Presensi Digital
                </p>
            </div>
        </footer>
    );
};

export default TutorialContent;