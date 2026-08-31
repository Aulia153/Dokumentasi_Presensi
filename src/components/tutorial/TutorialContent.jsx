import { useState } from "react";

import {
    HiOutlineInformationCircle, HiOutlineLightBulb,
    HiOutlineChevronDown, HiOutlineArrowRight, HiOutlineCheckCircle,
} from "react-icons/hi2";

const TutorialContent = ({ tutorial }) => {
    if (!tutorial) return null;

    return (
        <div className="tutorial-page">

            {/* HEADER */}
            <header className="border-b border-slate-200 bg-white">

                <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10 lg:px-10">

                    <div className="flex items-center gap-2 text-sm font-medium text-blue-600">
                        <span>Tutorial Admin</span>

                        <span className="text-slate-300">
                            /
                        </span>

                        <span className="text-slate-400">
                            Dokumentasi Presensi
                        </span>
                    </div>

                    <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        {tutorial.title}
                    </h1>

                    {tutorial.description && (
                        <p className="mt-4 max-w-5xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
                            {tutorial.description}
                        </p>
                    )}
                </div>

            </header>


            {/* CONTENT */}
            <main className="bg-slate-50">

                <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">

                    {/* OVERVIEW */}
                    {tutorial.description && (
                        <OverviewCard
                            description={tutorial.description}
                        />
                    )}

                    {/* FAQ */}
                    {tutorial.type === "faq" ? (
                        <FAQContent
                            questions={tutorial.questions || []}
                        />
                    ) : (
                        <>
                            {/* IMAGE OVERVIEW */}
                            {tutorial.image && (
                                <div className="mt-8">
                                    <ImagePreview
                                        src={tutorial.image}
                                        alt={tutorial.title}
                                    />
                                </div>
                            )}

                            {/* SECTIONS */}
                            {tutorial.sections?.length > 0 && (
                                <TutorialSections
                                    sections={tutorial.sections}
                                    type={tutorial.type}
                                />
                            )}
                        </>
                    )}

                    {/* TIPS */}
                    {tutorial.tips && (
                        <TipsCard tips={tutorial.tips} />
                    )}

                    {/* FOOTER */}
                    <footer className="mt-16 border-t border-slate-200 bg-white">
                      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">

                        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">

                          <div>
                            <p className="text-sm font-semibold text-slate-700">
                              Dokumentasi Presensi Digital  
                            </p>
                          </div>

                          <div className="text-xs text-slate-400">
                            © 2026 Presensi Digital Kabupaten Sidoarjo
                          </div>
                        </div>
                      </div>
                    </footer>

                </div>
            </main>
        </div>
    );
};

const OverviewCard = ({ description }) => {};

//TUTORIAL SECTIONS
const TutorialSections = ({ sections, type }) => {
    const isSteps = type === "steps";

    return (
        <section className="mt-10">

            <div className="mb-6">

                <p className="text-sm font-semibold text-blue-600">
                    Panduan Penggunaan
                </p>

                <h2 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
                    {isSteps
                        ? "Langkah-langkah"
                        : "Informasi Fitur"}
                </h2>

            </div>

            <div className="space-y-8">
                {sections.map((section, index) => (
                    <TutorialSection
                        key={`${section.title}-${index}`}
                        section={section}
                        isSteps={isSteps}
                        index={index}
                    />
                ))}
            </div>

        </section>
    );
};

const TutorialSection = ({
    section,
    isSteps,
    index,
}) => {
    return (
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">

            {/* SECTION HEADER */}
            <div className="p-6 sm:p-7">
                <div className="flex gap-4">
                    {isSteps && section.number ? (
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-sm">
                            {section.number}
                        </div>
                    ) : (
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50">
                            <HiOutlineCheckCircle className="h-5 w-5 text-blue-600" />
                        </div>
                    )}

                    <div className="min-w-0">

                        <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                            {section.title}
                        </h3>

                        <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                            {section.description}
                        </p>

                    </div>
                </div>
            </div>

            {/* IMAGE */}
            {section.image && (
                <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                    <ImagePreview
                        src={section.image}
                        alt={section.title}
                    />
                </div>
            )}

        </article>
    );
};

//IMAGE
const ImagePreview = ({ src, alt }) => {
    return (
        <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">

            {/* Browser Header */}
            <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3">

                <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
                <span className="ml-2 text-xs font-medium text-slate-400">
                    Tampilan Sistem
                </span>

            </div>

            <div className="overflow-hidden p-3 sm:p-5">
                <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    className="w-full rounded-xl border border-slate-200 bg-white object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                />
            </div>

        </div>
    );
};

//FAQ
const FAQContent = ({ questions }) => {
    return (
        <section className="mt-10">
            <div className="mb-6">

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

//FAQ ITEM
const FAQItem = ({ item }) => {
    const [open, setOpen] = useState(false);

    return (
        <div
            className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                open
                    ? "border-blue-200 shadow-sm"
                    : "border-slate-200 hover:border-slate-300"
            }`}
        >

            {/* QUESTION */}
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
            >

                <div className="flex items-start gap-4">
                    <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
                            open
                                ? "bg-blue-600 text-white"
                                : "bg-blue-50 text-blue-600"
                        }`}
                    >
                        ?
                    </div>

                    <span className="text-sm font-semibold leading-6 text-slate-800 sm:text-base">
                        {item.question}
                    </span>

                </div>

                <HiOutlineChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                        open ? "rotate-180 text-blue-600" : ""
                    }`}
                />

            </button>

            {/* ANSWER */}
            <div className={`grid transition-all duration-300 ease-in-out ${
                    open
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                }`}
            >

                <div className="min-h-0 overflow-hidden">
                    <div className="border-t border-slate-100 px-5 pb-6 pt-5 sm:px-6">

                        {/* ANSWER */}
                        {item.answer && (
                            <p className="text-sm leading-7 text-slate-600 sm:text-base">
                                {item.answer}
                            </p>
                        )}

                        {/* ITEMS */}
                        {item.items && (
                            <div className="space-y-4">
                                {item.items.map(
                                    (subItem, index) => (
                                        <div
                                            key={index}
                                            className="rounded-xl bg-slate-50 p-4"
                                        >
                                            <h4 className="font-semibold text-slate-800">
                                                {subItem.label}
                                            </h4>

                                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                                {
                                                    subItem.description
                                                }
                                            </p>
                                        </div>
                                    )
                                )}
                            </div>
                        )}

                        {/* STEPS */}
                        {item.steps && (
                            <div className="space-y-3">
                                {item.steps.map(
                                    (step, index) => (
                                        <div
                                            key={index}
                                            className="flex gap-3"
                                        >
                                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">
                                                {index + 1}
                                            </div>

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
            </div>
        </div>
    );
};

//TIPS
const TipsCard = ({ tips }) => {
    return (
        <section className="mt-10 rounded-2xl border border-amber-200 bg-amber-50/70 p-6 sm:p-7">
            <div className="flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100">
                    <HiOutlineLightBulb className="h-6 w-6 text-amber-600" />
                </div>

                <div>
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

export default TutorialContent;