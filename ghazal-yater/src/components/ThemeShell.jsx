// src/components/ThemeShell.jsx
import React from "react";

const ThemeShell = ({
  children,
  className = "",
  contentClassName = "",
  logoSrc = "/logo-ar-trim.png",
  headline,
  subheadline,
  showCows = true, // toggle cows
}) => {
  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* SKY + SUN */}
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "linear-gradient(180deg, #E9F6FF 0%, #F7FBFF 30%, #E8F7E7 65%, #E4F2DA 100%)",
        }}
      />
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 rounded-full blur-3xl opacity-70"
        style={{
          width: 320,
          height: 320,
          background:
            "radial-gradient(circle at 50% 50%, #FFF7C2 0%, #FFE78A 45%, rgba(255,231,138,0) 70%)",
        }}
        aria-hidden
      />

      {/* FLOATING CLOUDS */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden
      >
        <div className="animate-clouds absolute top-8 left-[-15%] w-[40%] h-14 bg-white/50 rounded-full blur-xl" />
        <div className="animate-clouds2 absolute top-20 right-[-20%] w-[45%] h-16 bg-white/50 rounded-full blur-xl" />
      </div>

      <svg
        className="absolute bottom-24 left-0 w-full h-[38vh] md:h-[42vh]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="hillBack" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#B4E09D" />
            <stop offset="100%" stopColor="#7CC76B" />
          </linearGradient>
          <linearGradient id="hillFront" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#9ED678" />
            <stop offset="100%" stopColor="#63B85C" />
          </linearGradient>

          {/* silhouette cow with white outline */}
          <symbol id="cowSil" viewBox="0 0 120 70">
            <g
              fill="#1C1C1C"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            >
              <path d="M16 32 q10 -12 28 -12 h30 q16 0 24 10 q4 4 4 10 q0 8 -8 12 q-8 4 -26 4 h-26 q-20 0 -30 -8 q-6 -5 -6 -10 q0 -4 10 -6z" />
              <path d="M92 28 q12 2 22 10 q-8 6 -20 6 q-8 0 -10 -6 q1 -6 8 -10z" />
              <path d="M100 26 l8 -6 l2 8 z" />
              <rect x="36" y="46" width="5" height="16" rx="1.5" />
              <rect x="52" y="46" width="5" height="16" rx="1.5" />
              <rect x="68" y="46" width="5" height="16" rx="1.5" />
              <rect x="84" y="46" width="5" height="16" rx="1.5" />
              <path d="M20 34 q-8 10 -6 18" fill="none" strokeLinecap="round" />
              <ellipse
                cx="56"
                cy="34"
                rx="6"
                ry="4"
                fill="#F5F5F5"
                stroke="none"
              />
            </g>
          </symbol>
        </defs>

        {/* BACK HILL */}
        <path
          d="M0,224 C180,200 320,210 480,190 C640,170 820,180 980,200 C1160,220 1320,220 1440,210 L1440,320 L0,320 Z"
          fill="url(#hillBack)"
        />

        {/* FRONT HILL (drawn after cows so it overlaps their legs slightly) */}
        <path
          d="M0,250 C140,240 300,230 480,240 C680,252 880,270 1080,255 C1220,245 1350,235 1440,238 L1440,320 L0,320 Z"
          fill="url(#hillFront)"
        />
      </svg>

      {/* MILK DRIP TOP */}
      <svg
        className="absolute top-0 left-0 w-full h-28 text-white"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,0H1440V90c-50,20-100,35-160,20s-100-50-160-40-120,65-200,40-120-90-200-90S520,80,440,90,280,45,200,50,80,90,0,110Z"
        />
      </svg>

      {/* MILK RIVER BOTTOM */}
      <svg
        className="absolute bottom-0 left-0 w-full h-40 text-white"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,120c60,20,120,40,200,30s160-60,240-60,160,50,240,60,160-20,240-30,160,10,240,0,160-40,280-60v120H0Z"
        />
      </svg>

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-2xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center justify-center rounded-2xl bg-white/80 backdrop-blur ring-1 ring-amber-200 px-4 py-2">
            <img
              src={logoSrc}
              alt="Al Ghazal Dairy logo"
              className="h-14 md:h-16 object-contain"
            />
          </div>
          {headline && (
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-emerald-900 drop-shadow-sm">
              {headline}
            </h1>
          )}
          {subheadline && (
            <p className="mt-2 text-amber-900/80 md:text-lg">{subheadline}</p>
          )}
          <div
            className={`mt-5 rounded-2xl bg-white/85 backdrop-blur p-5 ring-1 ring-emerald-100 shadow-sm ${contentClassName}`}
          >
            {children}
          </div>
        </div>
      </div>

      {/* faint cow spots overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 22%, #000 6%, transparent 7%), radial-gradient(circle at 72% 30%, #000 7%, transparent 8%), radial-gradient(circle at 40% 78%, #000 5%, transparent 6%)",
          backgroundSize: "220px 220px, 260px 260px, 240px 240px",
          backgroundRepeat: "no-repeat",
        }}
      />

      <style>{`
        @keyframes floatClouds { 0% { transform: translateX(0); } 100% { transform: translateX(120%); } }
        .animate-clouds { animation: floatClouds 45s linear infinite; }
        .animate-clouds2 { animation: floatClouds 60s linear infinite; }

        @keyframes cowBob { 0%,100% { transform: translateY(0);} 50% { transform: translateY(-2px);} }
        .cow-bob  { animation: cowBob 3.8s ease-in-out infinite; }
        .cow-bob2 { animation: cowBob 4.6s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default ThemeShell;
