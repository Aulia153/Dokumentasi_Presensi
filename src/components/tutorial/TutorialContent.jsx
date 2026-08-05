const TutorialContent = ({ activeItem }) => {
    if (!activeItem) {
        return(
            <div className="bg-white rounded-3xl border border-slate-200 shadow-[8px_8px_0px_#1e293b] p-10 min-h-[700px] flex item justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">
                        Selamat Datang
                    </h1>

                    <p className="text-slate-500">
                        Pilih Tutorial
                    </p>

                </div>
            </div>
        );
    };

    return (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-[8px_8px_0px_#1e293b] p-10 min-h-[700px]">
            <p className="text-blue-600 font-semibold">
                Tutorial
            </p>

            <h1 className="text-4xl font-bold mt-2">
                {activeItem.title}
            </h1>

            <div className="mt-8 rounded-xl bg-slate-100 p-6">
                <p className="text-slate-700">
                    Konten tutorial untuk <strong>{activeItem.title}</strong> akan ditampilkan disini
                </p>
            </div>
        </div>
    );
};

export default TutorialContent;