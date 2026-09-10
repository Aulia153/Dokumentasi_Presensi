import { useState } from "react";

import {
    HiOutlineInformationCircle,
    HiOutlineLightBulb,
    HiOutlineChevronDown,
    HiOutlineCheckCircle,
} from "react-icons/hi2";


const TutorialContent = ({ tutorial }) => {
    if (!tutorial) return null;

    return (
        <div className="min-h-screen bg-slate-50">

            {/* =====================================================
                HEADER
            ===================================================== */}
            <header className="border-b border-slate-200 bg-white">

                <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 sm:py-8 lg:px-10">

                    {/* Breadcrumb */}
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                        <span className="font-semibold text-blue-600">
                            Tutorial Admin
                        </span>

                        <span className="text-slate-300">
                            /
                        </span>

                        <span className="text-slate-400">
                            Dokumentasi Presensi
                        </span>
                    </div>


                    {/* Title */}
                    <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        {tutorial.title}
                    </h1>


                    {/* Description */}
                    {tutorial.description && (
                        <p className="mt-3 max-w-5xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
                            {tutorial.description}
                        </p>
                    )}

                </div>

            </header>


            {/* =====================================================
                CONTENT
            ===================================================== */}
            <main>

                <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-10">


                    {/* =================================================
                        OVERVIEW
                    ================================================= */}
                    {tutorial.description && (
                        <OverviewCard
                            description={tutorial.description}
                        />
                    )}


                    {/* =================================================
                        FAQ
                    ================================================= */}
                    {tutorial.type === "faq" ? (

                        <FAQContent
                            questions={tutorial.questions || []}
                        />

                    ) : (

                        <>

                            {/* =========================================
                                IMAGE OVERVIEW
                            ========================================= */}
                            {tutorial.image && (
                                <div className="mt-7">
                                    <ImagePreview
                                        src={tutorial.image}
                                        alt={tutorial.title}
                                    />
                                </div>
                            )}


                            {/* =========================================
                                SECTIONS
                            ========================================= */}
                            {tutorial.sections?.length > 0 && (
                                <TutorialSections
                                    sections={tutorial.sections}
                                    type={tutorial.type}
                                />
                            )}

                        </>

                    )}


                    {/* =================================================
                        TIPS
                    ================================================= */}
                    {tutorial.tips && (
                        <TipsCard tips={tutorial.tips} />
                    )}

                </div>


                {/* =====================================================
                    FOOTER
                ===================================================== */}
                <footer className="border-t border-slate-200 bg-white">

                    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-center sm:flex-row sm:px-8 sm:text-left lg:px-10">

                        <p className="text-sm font-semibold text-slate-700">
                            Dokumentasi Presensi Digital
                        </p>

                        <p className="text-xs text-slate-400">
                            © 2026 Presensi Digital Kabupaten Sidoarjo
                        </p>

                    </div>

                </footer>

            </main>

        </div>
    );
};


/* =====================================================
   OVERVIEW CARD
===================================================== */

const OverviewCard = ({ description }) => {
    return (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

            <div className="flex items-start gap-4">

                {/* Icon */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 sm:h-11 sm:w-11">

                    <HiOutlineInformationCircle className="h-5 w-5 text-blue-600 sm:h-6 sm:w-6" />

                </div>


                {/* Content */}
                <div className="min-w-0">

                    <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                        Tentang Halaman Ini
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                        {description}
                    </p>

                </div>

            </div>

        </section>
    );
};


/* =====================================================
   TUTORIAL SECTIONS
===================================================== */

const TutorialSections = ({ sections, type }) => {

    const isSteps = type === "steps";

    return (
        <section className="mt-8">

            {/* Heading */}
            <div className="mb-5">

                <p className="text-sm font-semibold text-blue-600">
                    Panduan Penggunaan
                </p>

                <h2 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
                    {isSteps
                        ? "Langkah-langkah"
                        : "Informasi Fitur"}
                </h2>

            </div>


            {/* Sections */}
            <div className="space-y-5">

                {sections.map((section, index) => (

                    <TutorialSection
                        key={`${section.title}-${index}`}
                        section={section}
                        isSteps={isSteps}
                    />

                ))}

            </div>

        </section>
    );
};


/* =====================================================
   SINGLE SECTION
===================================================== */

const TutorialSection = ({
    section,
    isSteps,
}) => {

    return (
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md">


            {/* SECTION HEADER */}
            <div className="p-5 sm:p-6">

                <div className="flex items-start gap-4">

                    {/* Number / Icon */}
                    {isSteps && section.number ? (

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-sm">
                            {section.number}
                        </div>

                    ) : (

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50">

                            <HiOutlineCheckCircle className="h-5 w-5 text-blue-600" />

                        </div>

                    )}


                    {/* Text */}
                    <div className="min-w-0">

                        <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                            {section.title}
                        </h3>

                        {section.description && (
                            <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                                {section.description}
                            </p>
                        )}

                    </div>

                </div>

            </div>


            {/* =================================================
                IMAGE SECTION
            ================================================= */}
            {section.image && (

                <div className="px-4 pb-4 sm:px-5 sm:pb-5">

                    <ImagePreview
                        src={section.image}
                        alt={section.title}
                    />

                </div>

            )}

        </article>
    );
};


/* =====================================================
   IMAGE PREVIEW
===================================================== */

const ImagePreview = ({ src, alt }) => {

    if (!src) return null;

    return (
        <div className="group overflow-hidden rounded-xl border border-slate-200 bg-slate-100">

            {/* Browser Header */}
            <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2.5">

                <span className="h-2.5 w-2.5 rounded-full bg-red-300" />

                <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />

                <span className="h-2.5 w-2.5 rounded-full bg-green-300" />

                <span className="ml-2 text-xs font-medium text-slate-400">
                    Tampilan Sistem
                </span>

            </div>


            {/* Image */}
            <div className="overflow-hidden bg-slate-100 p-2.5 sm:p-4">

                <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    className="block h-auto w-full rounded-lg border border-slate-200 bg-white object-contain transition duration-500 group-hover:scale-[1.005]"
                />

            </div>

        </div>
    );
};


/* =====================================================
   FAQ
===================================================== */

const FAQContent = ({ questions }) => {

    return (
        <section className="mt-8">

            {/* Heading */}
            <div className="mb-5">

                <p className="text-sm font-semibold text-blue-600">
                    Pertanyaan Umum
                </p>

                <h2 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
                    FAQ Admin
                </h2>

                <p className="mt-2 text-sm text-slate-500 sm:text-base">
                    Klik pertanyaan untuk melihat penjelasan.
                </p>

            </div>


            {/* FAQ List */}
            <div className="space-y-3">

                {questions.map((item, index) => (

                    <FAQItem
                        key={`${item.question}-${index}`}
                        item={item}
                    />

                ))}

            </div>

        </section>
    );
};


/* =====================================================
   FAQ ITEM
===================================================== */

const FAQItem = ({ item }) => {

    const [open, setOpen] = useState(false);

    return (
        <div
            className={`overflow-hidden rounded-xl border bg-white transition-all duration-300 ${
                open
                    ? "border-blue-200 shadow-sm"
                    : "border-slate-200 hover:border-blue-100 hover:shadow-sm"
            }`}
        >

            {/* QUESTION */}
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5 sm:py-5"
            >

                <div className="flex min-w-0 items-start gap-3">

                    {/* Question Icon */}
                    <div
                        className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold transition-colors ${
                            open
                                ? "bg-blue-600 text-white"
                                : "bg-blue-50 text-blue-600"
                        }`}
                    >
                        ?
                    </div>


                    {/* Question */}
                    <span className="text-sm font-semibold leading-6 text-slate-800 sm:text-base">
                        {item.question}
                    </span>

                </div>


                {/* Chevron */}
                <HiOutlineChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                        open
                            ? "rotate-180 text-blue-600"
                            : ""
                    }`}
                />

            </button>


            {/* ANSWER */}
            <div
                className={`grid transition-all duration-300 ease-in-out ${
                    open
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                }`}
            >

                <div className="min-h-0 overflow-hidden">

                    <div className="border-t border-slate-100 px-4 pb-5 pt-4 sm:px-5 sm:pb-6">

                        {/* =========================================
                            SIMPLE ANSWER
                        ========================================= */}
                        {item.answer && (
                            <p className="text-sm leading-7 text-slate-600 sm:text-base">
                                {item.answer}
                            </p>
                        )}


                        {/* =========================================
                            ITEMS
                        ========================================= */}
                        {item.items && (

                            <div className="space-y-3">

                                {item.items.map((subItem, index) => (

                                    <div
                                        key={index}
                                        className="rounded-xl bg-slate-50 p-4"
                                    >

                                        <h4 className="text-sm font-semibold text-slate-800 sm:text-base">
                                            {subItem.label}
                                        </h4>

                                        <p className="mt-1 text-sm leading-6 text-slate-600">
                                            {subItem.description}
                                        </p>

                                    </div>

                                ))}

                            </div>

                        )}


                        {/* =========================================
                            STEPS
                        ========================================= */}
                        {item.steps && (

                            <div className="space-y-3">

                                {item.steps.map((step, index) => (

                                    <div
                                        key={index}
                                        className="flex items-start gap-3"
                                    >

                                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">
                                            {index + 1}
                                        </div>

                                        <p className="text-sm leading-6 text-slate-600">
                                            {step}
                                        </p>

                                    </div>

                                ))}

                            </div>

                        )}

                    </div>

                </div>

            </div>

        </div>
    );
};


/* =====================================================
   TIPS
===================================================== */

const TipsCard = ({ tips }) => {

    return (
        <section className="mt-8 rounded-2xl border border-amber-200 bg-amber-50/70 p-5 sm:p-6">

            <div className="flex items-start gap-4">

                {/* Icon */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100">

                    <HiOutlineLightBulb className="h-5 w-5 text-amber-600" />

                </div>


                {/* Content */}
                <div className="min-w-0">

                    <h2 className="text-lg font-bold text-amber-900">
                        Tips
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-amber-800 sm:text-base sm:leading-7">
                        {tips}
                    </p>

                </div>

            </div>

        </section>
    );
};


export default TutorialContent;