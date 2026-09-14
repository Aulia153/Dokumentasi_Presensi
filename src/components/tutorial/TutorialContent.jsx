import { useEffect, useState } from "react";

import {
    HiOutlineCheckCircle,
    HiOutlineChevronDown,
    HiOutlineInformationCircle,
    HiOutlineLightBulb,
} from "react-icons/hi2";

const TutorialContent = ({ tutorial }) => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [tutorial?.id]);

    if (!tutorial) return null;

    const isFaq = tutorial.type === "faq";

    return (
        <div className="min-h-screen bg-slate-50">
            <TutorialHeader tutorial={tutorial} />

            <main>
                <div className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8 lg:px-10">
                    {/* deskripsi */}
                    {tutorial.description && (
                        <OverviewCard
                            description={tutorial.description}
                        />
                    )}

                    {/* faq */}
                    {isFaq ? (
                        <FAQContent
                            questions={tutorial.questions ?? []}
                        />
                    ) : (
                        <>
                            {/* Image */}
                            {tutorial.image && (
                                <ImagePreview
                                    src={tutorial.image}
                                    alt={tutorial.title}
                                    main
                                />
                            )}

                            {/* Sections */}
                            {tutorial.sections?.length > 0 && (
                                <TutorialSections
                                    sections={tutorial.sections}
                                    type={tutorial.type}
                                />
                            )}
                        </>
                    )}

                    {/* Tips */}
                    {tutorial.tips && (
                        <TipsCard tips={tutorial.tips} />
                    )}
                </div>
            </main>

            {/* Footer */}
            <TutorialFooter />
        </div>
    );
};

const TutorialHeader = ({ tutorial }) => {
    return (
        <header className="border-b border-slate-200 bg-white">
            <div className="mx-auto w-full max-w-6xl px-5 py-6 sm:px-8 lg:px-10">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold text-blue-600">
                        Tutorial Admin
                    </span>

                    <span className="text-slate-300">
                        /
                    </span>

                    <span className="truncate text-slate-400">
                        {tutorial.title}
                    </span>
                </div>

                {/* Title */}
                <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    {tutorial.title}
                </h1>

                {/* Description */}
                {tutorial.description && (
                    <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-500 sm:text-base">
                        {tutorial.description}
                    </p>
                )}
            </div>
        </header>
    );
};

const OverviewCard = ({ description }) => {
    return (
        <section className="mb-7 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-start gap-4 p-5 sm:p-6">
                {/* Icon */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                    <HiOutlineInformationCircle className="h-5 w-5 text-blue-600" />
                </div>

                {/* Text */}
                <div className="min-w-0">
                    <h2 className="text-lg font-bold text-slate-900">
                        Tentang Halaman Ini
                    </h2>

                    <p className="mt-1.5 text-sm leading-6 text-slate-600 sm:text-base">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
};

const TutorialSections = ({ sections, type }) => {
    const isSteps = type === "steps";

    return (
        <section className="mt-7">
            {/* Section Heading */}
            <div className="mb-4">

                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Panduan Penggunaan
                </p>

                <h2 className="mt-1 text-2xl font-bold text-slate-900">
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
                        isSteps={isSteps}/>
                ))}
            </div>
        </section>
    );
};

const TutorialSection = ({
    section,
    isSteps,
}) => {

    return (
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="p-5 sm:p-6">
                <div className="flex items-start gap-4">
                    <SectionIcon isSteps={isSteps}/>

                    {/* Content */}
                    <div className="min-w-0 flex-1">

                        <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                            {section.title}
                        </h3>

                        {section.description && (
                            <p className="mt-1.5 text-sm leading-6 text-slate-600 sm:text-base">
                                {section.description}
                            </p>
                        )}

                    </div>
                </div>
            </div>

            {/* image */}
            {section.image && (
                <div className="border-t border-slate-100 bg-slate-50 px-4 py-4 sm:px-6">
                    <ImagePreview
                        src={section.image}
                        alt={section.title}
                    />
                </div>
            )}
        </article>
    );
};

const SectionIcon = () => {
    return (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50">
            <HiOutlineCheckCircle className="h-5 w-5 text-blue-600" />
        </div>
    );
};

const ImagePreview = ({
    src,
    alt,
    main = false,
}) => {

    const [imageType, setImageType] = useState("landscape");

    if (!src) return null;

 //Menentukan ukuran beradasarkan screenshoot asli
    const handleImageLoad = (event) => {
        const {
            naturalWidth,
            naturalHeight,
        } = event.currentTarget;

        if (!naturalWidth || !naturalHeight) {
            return;
        }

        const ratio =
            naturalWidth / naturalHeight;

        if (ratio < 0.8) {
            // Portrait
            setImageType("portrait");
        } else if (ratio >= 1.8) {
            // Sangat lebar
            setImageType("wide");
        } else if (ratio >= 1.2) {
            // Landscape
            setImageType("landscape");
        } else {
            // Square
            setImageType("square");
        }
    };

    const imageSize = main
        ? {
              portrait:"max-h-[480px] max-w-[420px]",
              landscape:"max-h-[380px] max-w-[900px]",
              wide:"max-h-[320px] max-w-[950px]",
              square:"max-h-[420px] max-w-[620px]",
          }
        : {
              portrait:"max-h-[500px] max-w-[420px]",
              landscape:"max-h-[400px] max-w-[850px]",
              wide:"max-h-[330px] max-w-[950px]",
              square:"max-h-[430px] max-w-[620px]",
          };

    return (
        <div className={` overflow-hidden rounded-xl border border-slate-200 bg-white ${main ? "mb-7" : ""}`}>

            {/* =================================================
                BROWSER HEADER
            ================================================= */}
            <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
                <span className="ml-2 text-xs font-medium text-slate-400">
                    Tampilan Sistem
                </span>
            </div>

            {/* =================================================
                IMAGE
            ================================================= */}
            <div className="flex justify-center overflow-hidden bg-slate-100 p-3 sm:p-5">
                <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    onLoad={handleImageLoad}
                    className={`block h-auto w-auto max-w-full rounded-lg border border-slate-200 bg-white object-contain shadow-sm transition-transform duration-300 hover:scale-[1.01]
                        ${imageSize[imageType]}`}/>
            </div>
        </div>
    );
};

//TIPS
const TipsCard = ({ tips }) => {
    return (
        <section className="mt-7 rounded-2xl border border-amber-200 bg-amber-50/70">
            <div className="flex items-start gap-4 p-5 sm:p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100">
                    <HiOutlineLightBulb className="h-5 w-5 text-amber-600" />
                </div>

                <div className="min-w-0">
                    <h2 className="text-lg font-bold text-amber-900">
                        Tips
                    </h2>

                    <p className="mt-1.5 text-sm leading-6 text-amber-800 sm:text-base">
                        {tips}
                    </p>
                </div>
            </div>
        </section>
    );
};

//FOOTER
const TutorialFooter = () => {
    return (
        <footer className="mt-8 border-t border-slate-200 bg-white">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-center sm:flex-row sm:px-8 sm:text-left lg:px-10">
                <p className="text-xs text-slate-400">
                    © 2026 Presensi Digital Kabupaten Sidoarjo
                </p>
            </div>
        </footer>
    );
};

export default TutorialContent;