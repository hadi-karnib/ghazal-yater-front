// src/components/UnderConstruction.jsx
import React from "react";
import { COMPANY_INFO } from "../constants";
import ThemeShell from "../components/ThemeShell";

const UnderConstruction = () => (
  <ThemeShell
    logoSrc={COMPANY_INFO.logoArabic}
    headline="الصفحة قيد الإنشاء"
    subheadline="للطلبات أو الشراكات أو الدعم، تواصل معنا"
  >
    <div className="flex flex-col items-center gap-3">
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white shadow-sm transition hover:opacity-90"
        >
          اتصل بنا
        </a>
        <a
          href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold text-emerald-800 ring-1 ring-emerald-200 shadow-sm transition hover:bg-emerald-50"
        >
          واتساب
        </a>
        <a
          href={`mailto:${COMPANY_INFO.email}`}
          className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold text-emerald-800 ring-1 ring-emerald-200 shadow-sm transition hover:bg-emerald-50"
        >
          بريد إلكتروني
        </a>
      </div>

      <p className="text-sm text-amber-900/70">
        أو عبر الهاتف{" "}
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="font-semibold text-emerald-900 underline decoration-emerald-300"
        >
          {COMPANY_INFO.phone}
        </a>
      </p>

      <div className="mt-4 flex items-center gap-3 text-xs text-amber-900/70">
        <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 ring-1 ring-amber-200">
          🥛 حليب طازج
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 ring-1 ring-amber-200">
          🌿 بدون مواد حافظة
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 ring-1 ring-amber-200">
          🧊 سلسلة تبريد
        </span>
      </div>
    </div>
  </ThemeShell>
);

export default UnderConstruction;
