import {
    HiOutlineLightBulb,
    HiOutlineInformationCircle,
} from "react-icons/hi2";

const TutorialContent = ({ tutorial }) => {

    if (!tutorial) {
        return (
            <div className="flex min-h-screen items-center justify-center">

                <div className="text-center">

                    <HiOutlineInformationCircle className="mx-auto text-4xl text-slate-300" />

                    <p className="mt-3 text-sm text-slate-500">
                        Pilih tutorial dari menu di sebelah kiri.
                    </p>

                </div>

            </div>
        );
    }


    return (
        <main className="min-h-screen bg-[#eef5ff]">

            {/* TOP HEADER */}

            <div className="bg-white border-b border-slate-200">

                <div className="max-w-6xl mx-auto px-8 py-6">

                    <p className="text-xs font-medium text-slate-400">
                        Tutorial Admin
                        <span className="mx-2">
                            /
                        </span>
                        {tutorial.title}
                    </p>

                    <h1 className="mt-2 text-2xl font-bold text-slate-900">
                        {tutorial.title}
                    </h1>

                    <p className="mt-2 text-sm text-slate-500">
                        {tutorial.description}
                    </p>

                </div>

            </div>


            {/* CONTENT */}

            <div className="max-w-6xl mx-auto px-8 py-8">

                {tutorial.type === "overview" && (
                    <Overview tutorial={tutorial} />
                )}

                {tutorial.type === "steps" && (
                    <Steps tutorial={tutorial} />
                )}

            </div>

        </main>
    );
};


// ======================================================
// OVERVIEW
// ======================================================

function Overview({ tutorial }) {

    return (
        <div className="space-y-6">

            {/* SCREENSHOT */}

            {tutorial.image && (

                <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-[0_4px_15px_rgba(15,23,42,0.07)]">

                    <div className="overflow-hidden rounded-xl bg-slate-100 border border-slate-200">

                        <img
                            src={tutorial.image}
                            alt={tutorial.title}
                            className="w-full h-auto object-contain"
                        />

                    </div>

                </div>

            )}


            {/* DESCRIPTION */}

            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-[0_4px_15px_rgba(15,23,42,0.07)]">

                <h2 className="text-lg font-bold text-slate-900">
                    Tentang Halaman
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                    {tutorial.description}
                </p>

            </div>


            {/* SECTIONS */}

            {tutorial.sections?.length > 0 && (

                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-[0_4px_15px_rgba(15,23,42,0.07)]">

                    <h2 className="text-lg font-bold text-slate-900">
                        Bagian pada Halaman
                    </h2>

                    <div className="mt-5 space-y-3">

                        {tutorial.sections.map((section, index) => (

                            <div
                                key={index}
                                className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100"
                            >

                                <div className="flex-shrink-0">

                                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold">
                                        {index + 1}
                                    </div>

                                </div>

                                <div>

                                    <h3 className="text-sm font-semibold text-slate-800">
                                        {section.title}
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-slate-500">
                                        {section.description}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>
            )}


            {/* TIPS */}

            {tutorial.tips && (
                <Tips text={tutorial.tips} />
            )}

        </div>
    );
}


// ======================================================
// STEPS
// ======================================================

function Steps({ tutorial }) {

    return (
        <div className="space-y-6">

            {/* INTRO */}

            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-[0_4px_15px_rgba(15,23,42,0.07)]">

                <h2 className="text-lg font-bold text-slate-900">
                    Panduan
                </h2>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                    {tutorial.description}
                </p>

            </div>


            {/* STEP */}

            {tutorial.steps?.map((step, index) => (

                <div
                    key={`${tutorial.id}-${step.number}-${index}`}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-[0_4px_15px_rgba(15,23,42,0.07)]"
                >

                    {/* STEP HEADER */}

                    <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-4">

                        <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                            {step.number || index + 1}
                        </div>

                        <div>

                            <p className="text-xs text-blue-600 font-semibold">
                                LANGKAH {step.number || index + 1}
                            </p>

                            <h3 className="text-base font-bold text-slate-900">
                                {step.title}
                            </h3>

                        </div>

                    </div>


                    {/* STEP BODY */}

                    <div className="p-6">

                        <p className="text-sm leading-7 text-slate-600">
                            {step.description}
                        </p>


                        {/* IMAGE */}

                        {step.image && (

                            <div className="mt-5 rounded-xl overflow-hidden border border-slate-200 bg-slate-50">

                                <img
                                    src={step.image}
                                    alt={step.title}
                                    className="w-full h-auto object-contain"
                                />

                            </div>

                        )}

                    </div>

                </div>

            ))}


            {/* TIPS */}

            {tutorial.tips && (
                <Tips text={tutorial.tips} />
            )}

        </div>
    );
}


// ======================================================
// TIPS
// ======================================================

function Tips({ text }) {

    return (
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">

            <div className="flex gap-3">

                <HiOutlineLightBulb className="text-xl text-blue-600 flex-shrink-0" />

                <div>

                    <h3 className="text-sm font-bold text-blue-900">
                        Tips
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-blue-700">
                        {text}
                    </p>

                </div>

            </div>

        </div>
    );
}

export default TutorialContent;