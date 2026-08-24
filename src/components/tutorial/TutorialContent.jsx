import {
  HiOutlineInformationCircle,
  HiOutlineLightBulb,
  HiOutlineArrowRight,
} from "react-icons/hi2";

function TutorialContent({ tutorial }) {
  if (!tutorial) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-slate-800">
            Tutorial tidak ditemukan
          </h2>

          <p className="mt-2 text-slate-500">
            Silakan pilih menu tutorial di sebelah kiri.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HEADER */}
      <div className="border-b border-slate-200 bg-white px-8 py-7">
        <p className="text-sm font-medium text-blue-600">
          Tutorial Admin
        </p>

        <h1 className="mt-1 text-3xl font-bold text-slate-900">
          {tutorial.title}
        </h1>

        <p className="mt-2 max-w-4xl text-base leading-7 text-slate-500">
          {tutorial.description}
        </p>
      </div>

      {/* CONTENT */}
      <div className="mx-auto max-w-6xl px-8 py-8">

        {/* DESKRIPSI */}
        {tutorial.description && (
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <HiOutlineInformationCircle className="h-6 w-6" />
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Tentang Halaman Ini
                </h2>

                <p className="mt-2 leading-7 text-slate-600">
                  {tutorial.description}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* GAMBAR UTAMA */}
        {tutorial.image && (
          <section className="mt-8">
            <h2 className="text-xl font-semibold text-slate-900">
              Tampilan Halaman
            </h2>

            <p className="mt-1 text-slate-500">
              Berikut merupakan tampilan halaman aplikasi.
            </p>

            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <img
                src={tutorial.image}
                alt={tutorial.title}
                className="mx-auto max-h-[650px] w-full rounded-xl object-contain"
              />
            </div>
          </section>
        )}

        {/* STEPS */}
        {tutorial.steps?.length > 0 && (
          <section className="mt-8">
            <h2 className="text-xl font-semibold text-slate-900">
              Langkah Penggunaan
            </h2>

            <p className="mt-1 text-slate-500">
              Ikuti langkah berikut secara berurutan.
            </p>

            <div className="mt-5 space-y-5">
              {tutorial.steps.map((step, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="flex gap-4 p-6">

                    {/* NOMOR */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                      {index + 1}
                    </div>

                    {/* TEKS */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900">
                        {step.title}
                      </h3>

                      <p className="mt-1 leading-7 text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* GAMBAR STEP */}
                  {step.image && (
                    <div className="border-t border-slate-100 bg-slate-50 p-5">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="mx-auto max-h-[550px] max-w-full rounded-xl border border-slate-200 object-contain shadow-sm"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TIPS */}
        {tutorial.tips && (
          <section className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <div className="flex gap-3">
              <HiOutlineLightBulb className="mt-0.5 h-6 w-6 shrink-0 text-amber-500" />

              <div>
                <h3 className="font-semibold text-amber-900">
                  Tips
                </h3>

                <p className="mt-1 leading-6 text-amber-800">
                  {tutorial.tips}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* FOOTER */}
        <div className="mt-10 flex items-center justify-center gap-2 pb-8 text-sm text-slate-400">
          <span>{tutorial.title}</span>
          <HiOutlineArrowRight className="h-4 w-4" />
          <span>Dokumentasi Presensi Digital</span>
        </div>
      </div>
    </main>
  );
}

export default TutorialContent;