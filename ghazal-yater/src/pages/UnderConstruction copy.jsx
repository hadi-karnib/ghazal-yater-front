// src/pages/UnderConstruction2.jsx
import React from "react";
import { COMPANY_INFO } from "../constants";

export default function UnderConstruction2() {
  return (
    <div className="portfolioDetailsPage min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      {/* Local styles for gentle life/animation (scoped to this component) */}
      <style>{`
        /* --- Keyframes --- */
        @keyframes floatUpDown { 0%{ transform: translateY(0) } 50%{ transform: translateY(-8px) } 100%{ transform: translateY(0) } }
        @keyframes driftLeft { 0%{ transform: translateX(0) } 100%{ transform: translateX(-60vw) } }
        @keyframes pulseGlow { 0%{ box-shadow: 0 0 0 0 rgba(16,185,129,0.25) } 70%{ box-shadow: 0 0 0 16px rgba(16,185,129,0) } 100%{ box-shadow: 0 0 0 0 rgba(16,185,129,0) } }
        @keyframes shimmer { 0%{ transform: translateX(-100%) } 100%{ transform: translateX(120%) } }
        @keyframes sway { 0%{ transform: rotate(0deg) translateY(0) } 50%{ transform: rotate(0.6deg) translateY(-3px) } 100%{ transform: rotate(0deg) translateY(0) } }

        /* --- Decorative layers --- */
        .milk-wave {
          mask-image: radial-gradient(circle at 50% -20px, black 60%, transparent 61%);
        }
        .cloud {
          animation: driftLeft linear infinite;
          opacity: .5;
          will-change: transform;
        }
        .cloud--slow  { animation-duration: 55s; }
        .cloud--fast  { animation-duration: 35s; }
        .float        { animation: floatUpDown 6s ease-in-out infinite; }
        .sway         { animation: sway 7s ease-in-out infinite; }

        .status-dot {
          animation: pulseGlow 2.2s ease-out infinite;
        }

        /* Subtle moving cow spots layer */
        .cowspots {
          background-image:
            radial-gradient(circle at 18% 28%, rgba(0,0,0,0.07) 6%, transparent 7%),
            radial-gradient(circle at 78% 62%, rgba(0,0,0,0.06) 7%, transparent 8%),
            radial-gradient(circle at 42% 82%, rgba(0,0,0,0.05) 5%, transparent 6%),
            radial-gradient(circle at 88% 22%, rgba(0,0,0,0.05) 4%, transparent 5%);
          background-size: 220px 220px, 260px 260px, 240px 240px, 200px 200px;
          background-repeat: no-repeat;
        }

        /* Shimmer line under the hero card title */
        .shimmer::after {
          content: "";
          position: absolute;
          left: 0; top: 0; bottom: 0; width: 40%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.6), transparent);
          transform: translateX(-100%);
          animation: shimmer 3.4s ease-in-out infinite;
        }
      `}</style>

      <div
        id="wrapper"
        className="relative min-h-screen overflow-hidden"
        dir="rtl"
      >
        {/* MID LAYERS: drifting clouds + sparkles */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          {/* clouds */}
          <div className="absolute top-10 left-[60vw] cloud cloud--slow">
            <div className="h-10 w-24 rounded-full bg-white/70 blur-sm" />
          </div>
          <div className="absolute top-24 left-[80vw] cloud cloud--fast">
            <div className="h-8 w-20 rounded-full bg-white/60 blur-[2px]" />
          </div>
          <div className="absolute top-36 left-[90vw] cloud cloud--slow">
            <div className="h-6 w-16 rounded-full bg-white/70 blur-sm" />
          </div>

          {/* sparkles */}
          <div className="absolute right-10 top-28 text-amber-400/70 text-xl float">
            ✦
          </div>
          <div
            className="absolute left-8 top-44 text-emerald-400/70 text-lg float"
            style={{ animationDelay: "1.2s" }}
          >
            ✦
          </div>
          <div
            className="absolute right-20 bottom-24 text-emerald-300/70 text-xl float"
            style={{ animationDelay: "2s" }}
          >
            ✧
          </div>
        </div>

        {/* BACKGROUND: cow-spot pattern with slow sway */}
        <div
          aria-hidden
          className="cowspots pointer-events-none absolute inset-0 opacity-70 sway"
        />

        {/* MAIN */}
        <main className="relative">
          <section className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 items-center py-16 sm:py-20">
              {/* RIGHT: Content card */}
              <div className="order-2 lg:order-2">
                <div className="rounded-2xl border border-emerald-100 bg-white/70 backdrop-blur p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="status-dot inline-flex h-2 w-2 rounded-full bg-amber-500" />
                    <span className="text-xs font-semibold text-amber-700">
                      الصفحة قيد الإنشاء
                    </span>
                  </div>

                  <h1 className="relative shimmer overflow-hidden text-2xl sm:text-3xl font-extrabold text-emerald-900 mb-2">
                    قريباً جداً ✨
                  </h1>
                  <p className="text-emerald-900/80 leading-7">
                    نعمل حالياً على إطلاق موقعنا الجديد. للطلبات أو الشراكات أو
                    الدعم، يسعدنا تواصلكم عبر القنوات التالية:
                  </p>

                  {/* CTAs (no WhatsApp) */}
                  <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white shadow-sm transition hover:opacity-95 hover:scale-[1.02] active:scale-[0.99]"
                    >
                      اتصل بنا
                    </a>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold text-emerald-800 ring-1 ring-emerald-200 shadow-sm transition hover:bg-emerald-50 hover:scale-[1.02] active:scale-[0.99]"
                    >
                      بريد إلكتروني
                    </a>
                  </div>

                  {/* phone line */}
                  <p className="mt-3 text-sm text-amber-900/70">
                    أو عبر الهاتف{" "}
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="font-semibold text-emerald-900 underline decoration-emerald-300 underline-offset-2"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </p>

                  {/* feature pills */}
                  <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-amber-900/70">
                    {[
                      "🥛 حليب طازج",
                      "🌿 بدون مواد حافظة",
                      "🧊 سلسلة تبريد",
                      "🚚 توصيل موثوق",
                    ].map((txt, i) => (
                      <span
                        key={txt}
                        className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 ring-1 ring-amber-200 transition hover:shadow-sm hover:-translate-y-0.5"
                        style={{
                          animation: "floatUpDown 7s ease-in-out infinite",
                          animationDelay: `${i * 0.5}s`,
                        }}
                      >
                        {txt}
                      </span>
                    ))}
                  </div>

                  {/* about + contact blocks */}
                  <div
                    id="about"
                    className="mt-10 rounded-xl border border-emerald-100 bg-white/60 p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
                  >
                    <h2 className="text-lg font-bold text-emerald-900 mb-2">
                      من نحن
                    </h2>
                    <p className="text-sm leading-7 text-emerald-900/80">
                      مزرعة/شركة متخصصة في منتجات الألبان الطازجة عالية الجودة،
                      ملتزمون بأفضل ممارسات السلامة والتخزين والتوزيع لضمان منتج
                      يصل إليكم بأفضل حالة.
                    </p>
                  </div>

                  <div
                    id="contact"
                    className="mt-6 rounded-xl border border-emerald-100 bg-white/60 p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
                  >
                    <h2 className="text-lg font-bold text-emerald-900 mb-2">
                      التواصل
                    </h2>
                    <ul className="text-sm text-emerald-900/80 space-y-1">
                      <li>
                        الهاتف:{" "}
                        <a
                          className="underline decoration-emerald-300"
                          href={`tel:${COMPANY_INFO.phone}`}
                        >
                          {COMPANY_INFO.phone}
                        </a>
                      </li>
                      <li>
                        البريد:{" "}
                        <a
                          className="underline decoration-emerald-300"
                          href={`mailto:${COMPANY_INFO.email}`}
                        >
                          {COMPANY_INFO.email}
                        </a>
                      </li>
                      <li>
                        واتساب:{" "}
                        <span className="text-emerald-900/70">
                          {COMPANY_INFO.whatsapp}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* LEFT: Visual panel */}
              <div className="order-1 lg:order-1">
                <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none">
                  <div className="relative aspect-[4/3] rounded-3xl border border-emerald-100 bg-white shadow-sm overflow-hidden">
                    {/* gentle tint */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-emerald-100/70 via-transparent to-amber-100/60" />
                    <div className="absolute inset-0 grid place-items-center p-6">
                      {COMPANY_INFO?.logoArabic ? (
                        <img
                          src={COMPANY_INFO.logoArabic}
                          alt="الشعار"
                          className="h-24 sm:h-28 md:h-36 w-auto object-contain drop-shadow float"
                          style={{ animationDuration: "8s" }}
                        />
                      ) : (
                        <div className="text-emerald-900/50 font-bold float">
                          الشعار
                        </div>
                      )}

                      {/* bottom badges */}
                      <div className="absolute bottom-4 inset-x-4 grid grid-cols-3 gap-2 text-[11px]">
                        {["جودة عالية", "توصيل سريع", "أسعار مناسبة"].map(
                          (b, i) => (
                            <div
                              key={b}
                              className="rounded-lg bg-white/85 ring-1 ring-emerald-100 px-2 py-2 text-center hover:-translate-y-0.5 transition"
                              style={{
                                animation:
                                  "floatUpDown 7s ease-in-out infinite",
                                animationDelay: `${i * 0.4 + 0.2}s`,
                              }}
                            >
                              {b}
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {/* subtle highlight sweep */}
                    <div
                      className="absolute inset-y-0 -left-1/3 w-1/3 bg-white/20 blur-2xl rotate-6"
                      style={{ animation: "shimmer 5.2s ease-in-out infinite" }}
                    />
                  </div>
                  {/* removed floating WhatsApp button */}
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* no footer */}
      </div>
    </div>
  );
}
