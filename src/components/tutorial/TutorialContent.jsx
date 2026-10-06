import { useEffect, useState } from "react";

import {
    HiOutlineChevronDown,
    HiOutlineInformationCircle,
    HiOutlineLightBulb,
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

    const isFaq = tutorial.type === "faq";
    const isSteps = tutorial.type === "steps";

    const roleLabel =
        role === "user"
            ? "Tutorial Pengguna"
            : "Tutorial Admin";

    return (
        <div className="min-h-screen bg-slate-50">
            <TutorialHeader
                tutorial={tutorial}
                roleLabel={roleLabel}
            />

            <main>
                <div className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8 lg:px-10">

                    {/* INFORMASI HALAMAN */}
                    {tutorial.description && (
                        <OverviewCard
                            description={tutorial.description}
                        />
                    )}

                    {/* FAQ */}
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
                                    alt={tutorial.title}
                                    main
                                />
                            )}

                            {/* PANDUAN */}
                            {tutorial.sections?.length > 0 && (
                                <TutorialSections
                                    sections={tutorial.sections}
                                    isSteps={isSteps}
                                />
                            )}
                        </>
                    )}

                    {/* TIPS */}
                    {tutorial.tips && (
                        <TipsCard tips={tutorial.tips} />
                    )}
                </div>
            </main>

            <TutorialFooter />
        </div>
    );
};


/* ============================================================
   HEADER
============================================================ */

const TutorialHeader = ({
    tutorial, roleLabel,
}) => {
    return (
        <header className="relative overflow-hidden border-b border-slate-200 bg-white">
            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-blue-50/70"/>
            <div className="pointer-events-none absolute right-20 top-20 h-24 w-24 rounded-full bg-blue-100/40"/>

            <div className="relative mx-auto w-full max-w-6xl px-5 py-7 sm:px-8 lg:px-10">

                {/* BREADCRUMB */}
                <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold text-blue-600">
                        {roleLabel}
                    </span>

                    <span className="text-slate-300">
                        /
                    </span>

                    <span className="truncate text-slate-400">
                        {tutorial.title}
                    </span>
                </div>

                {/* TITLE */}
                <div className="mt-5 flex items-start gap-4">
                    <div className="mt-1 h-10 w-1 shrink-0 rounded-full bg-blue-600"/>

                    <div>
                        
                        <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                            Panduan Sistem
                        </p>

                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            {tutorial.title}
                        </h1>

                        <p className="mt-2 text-sm text-slate-500">
                            Panduan dan penjelasan penggunaan Sistem Presensi Digital Kabupaten Sidoarjo.
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

const OverviewCard = ({ description }) => {
    return (
        <section className="relative mt-1 overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/50 shadow-sm">
            <div className="absolute left-0 top-0 h-full w-1 bg-blue-600"/>

            <div className="flex items-start gap-4 p-6 sm:p-7">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm shadow-blue-600/20">
                    <HiOutlineInformationCircle className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                        <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                            Tentang Halaman Ini
                        </h2>

                        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-600">
                            Informasi
                        </span>
                    </div>

                    <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">
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
    sections, isSteps,
}) => {
    return (
        <section className="mt-8">

            {/* JUDUL */}
            <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
                    Panduan Penggunaan
                </p>

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    {isSteps
                        ? "Langkah-langkah Penggunaan"
                        : "Informasi dan Penggunaan"}
                </h2>

                {!isSteps && (
                    <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-500 sm:text-base">
                        Berikut penjelasan mengenai fitur, aturan, dan hal-hal yang perlu diperhatikan saat menggunakan aplikasi.
                    </p>
                )}
            </div>

            {/* SATU FORM PANDUAN */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

                {sections.map((section, index) => (
                    <TutorialSection
                        key={`${section.title}-${index}`}
                        section={section}
                        isSteps={isSteps}
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
    isSteps,
    isLast,
}) => {
    return (
        <div className={`relative px-6 py-7 sm:px-8 sm:py-8 ${!isLast ? "border-b border-slate-100" : ""}`}>
            <div className="flex items-start gap-4">

                {/* NOMOR LANGKAH */}
                {isSteps && section.number && (
                    <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-sm shadow-blue-600/20">
                        {section.number}
                    </div>
                )}

                {/* ISI */}
                <div className="min-w-0 flex-1">

                    <h3 className="text-lg font-bold leading-7 text-slate-900 sm:text-xl">
                        {section.title}
                    </h3>

                    {section.description && (
                        <p className="mt-2 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">
                            {section.description}
                        </p>
                    )}

                    {/* GAMBAR */}
                    {section.image && (
                        <div className="mt-6">
                            <ImagePreview
                                src={section.image}
                                alt={section.title}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};


/* ============================================================
   IMAGE PREVIEW
============================================================ */

const ImagePreview = ({
    src, alt, main = false,
}) => {
    if (!src) return null;

    return (
        <div
            className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ${main ? "mb-8" : ""}`}>

            {/* BROWSER HEADER */}
            <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-300" />

                <span className="ml-2 text-xs font-medium text-slate-400">
                    Tampilan Sistem
                </span>
            </div>

            {/* IMAGE */}
            <div className="flex justify-center overflow-hidden bg-slate-100 p-3 sm:p-5">
                <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    className="block h-auto max-h-[520px] max-w-full rounded-xl border border-slate-200 bg-white object-contain shadow-sm"/>
            </div>
        </div>
    );
};


/* ============================================================
   FAQ
============================================================ */

const FAQContent = ({ questions }) => {
    if (!questions.length) return null;

    return (
        <section className="mt-8">

            <div className="mb-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-600">
                    Pertanyaan Umum
                </p>

                <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    FAQ
                </h2>

                <p className="mt-2 text-sm text-slate-500 sm:text-base">
                    Pilih pertanyaan untuk melihat penjelasannya.
                </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                {questions.map((item, index) => (
                    <FAQItem
                        key={`${item.question}-${index}`}
                        item={item}
                        isLast={index === questions.length - 1}
                    />
                ))}
            </div>
        </section>
    );
};


/* ============================================================
   FAQ ITEM
============================================================ */

const FAQItem = ({
    item,
    isLast,
}) => {
    const [open, setOpen] = useState(false);

    return (
        <div
            className={`
                ${!isLast ? "border-b border-slate-100" : ""}
            `}
        >
            <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                className="
                    flex w-full
                    items-center justify-between
                    gap-4
                    px-6 py-5
                    text-left
                    transition
                    hover:bg-slate-50
                    sm:px-8
                "
            >
                <div className="flex min-w-0 items-start gap-3">

                    <span
                        className={`
                            flex h-8 w-8 shrink-0
                            items-center justify-center
                            rounded-lg
                            text-sm font-bold
                            ${
                                open
                                    ? "bg-blue-600 text-white"
                                    : "bg-blue-50 text-blue-600"
                            }
                        `}
                    >
                        ?
                    </span>

                    <span className="text-sm font-semibold leading-6 text-slate-800 sm:text-base">
                        {item.question}
                    </span>
                </div>

                <HiOutlineChevronDown
                    className={`
                        h-5 w-5 shrink-0
                        transition-transform duration-200
                        ${
                            open
                                ? "rotate-180 text-blue-600"
                                : "text-slate-400"
                        }
                    `}
                />
            </button>

            {open && (
                <div className="px-6 pb-6 sm:px-8">
                    <div className="border-l-2 border-blue-100 pl-4">

                        {item.answer && (
                            <p className="text-sm leading-7 text-slate-600 sm:text-base">
                                {item.answer}
                            </p>
                        )}

                        {item.items?.length > 0 && (
                            <div className="space-y-3">
                                {item.items.map(
                                    (subItem, index) => (
                                        <div key={index}>
                                            <h4 className="text-sm font-semibold text-slate-800 sm:text-base">
                                                {subItem.label}
                                            </h4>

                                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                                {subItem.description}
                                            </p>
                                        </div>
                                    )
                                )}
                            </div>
                        )}

                        {item.steps?.length > 0 && (
                            <div className="space-y-3">
                                {item.steps.map(
                                    (step, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3"
                                        >
                                            <span className="
                                                flex h-6 w-6 shrink-0
                                                items-center justify-center
                                                rounded-full
                                                bg-blue-50
                                                text-xs font-bold
                                                text-blue-600
                                            ">
                                                {index + 1}
                                            </span>

                                            <p className="text-sm leading-6 text-slate-600">
                                                {step}
                                            </p>
                                        </div>
                                    )
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};


/* ============================================================
   TIPS
============================================================ */

const TipsCard = ({ tips }) => {
    return (
        <section className="
            mt-8
            rounded-2xl
            border border-amber-200
            bg-amber-50/70
        ">
            <div className="flex items-start gap-4 p-5 sm:p-6">

                <div className="
                    flex h-10 w-10 shrink-0
                    items-center justify-center
                    rounded-xl
                    bg-amber-100
                ">
                    <HiOutlineLightBulb className="h-5 w-5 text-amber-600" />
                </div>

                <div className="min-w-0">
                    <h2 className="text-lg font-bold text-amber-900">
                        Tips
                    </h2>

                    <p className="mt-2 text-sm leading-7 text-amber-800 sm:text-base">
                        {tips}
                    </p>
                </div>
            </div>
        </section>
    );
};


/* ============================================================
   FOOTER
============================================================ */

const TutorialFooter = () => {
    return (
        <footer className="mt-8 border-t border-slate-200 bg-white">
            <div className="
                mx-auto
                flex max-w-6xl
                flex-col
                items-center
                justify-between
                gap-2
                px-5 py-5
                text-center
                sm:flex-row
                sm:px-8
                sm:text-left
                lg:px-10
            ">
                <p className="text-sm font-semibold text-slate-700">
                    Dokumentasi Presensi Digital
                </p>

                <p className="text-xs text-slate-400">
                    © 2026 Presensi Digital Kabupaten Sidoarjo
                </p>
            </div>
        </footer>
    );
};

export default TutorialContent;