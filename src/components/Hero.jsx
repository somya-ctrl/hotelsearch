import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SUPPORTED_CITIES = [
  "Ahmedabad",
  "Bengaluru",
  "Chennai",
  "Delhi",
  "Goa",
  "Gurgaon",
  "Hyderabad",
  "Jaipur",
  "Kolkata",
  "Mumbai",
  "Noida",
  "Pune",
];

function Hero() {
  const [destination, setDestination] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(destination ? `/?location=${encodeURIComponent(destination)}` : "/");
  };

  return (
    <section className="relative isolate overflow-hidden rounded-b-3xl min-h-[80vh] flex flex-col justify-between shadow-[0_30px_60px_-25px_rgba(14,26,61,0.55)]">
      {/* Dusk skyline background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 45% at 78% 62%, rgba(232,161,92,0.55), transparent 70%), linear-gradient(180deg, #0e1a3d 0%, #3b4a8f 46%, #e8a15c 78%, #f4c579 92%, #f7d79a 100%)",
        }}
      />
      <div className="absolute left-[68%] top-[54%] -z-10 h-48 w-48 rounded-full blur-[1px]"
        style={{ background: "radial-gradient(circle at 50% 45%, #fff3d6 0%, #e8b54d 55%, rgba(232,181,77,0) 78%)" }}
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[18%] bg-gradient-to-b from-[#e8a15c]/35 to-[#0e1a3d]/85" />

      {/* Top bar */}
      <div className="relative z-10 flex items-start justify-between px-6 pt-8 sm:px-10">
        <span className="rounded-full border border-white/25 bg-black/25 px-3 py-1.5 text-xs font-mono uppercase tracking-widest text-amber-100">
          Golden hour &middot; check-in from 2pm
        </span>
      </div>

      {/* Headline */}
      <div className="relative z-10 max-w-xl px-6 sm:px-10">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-amber-200">
          Your stay, boarded
        </p>
        <h1 className="mb-4 font-serif text-4xl font-semibold leading-[1.05] text-[#fbf8f2] [text-wrap:balance] sm:text-6xl">
          Find your <em className="italic text-[#e8b54d]">perfect</em> stay
        </h1>
        <p className="max-w-[46ch] text-base leading-relaxed text-white/80">
          Search thousands of hotels across the world and lock in your next stop — no detours, no fine print.
        </p>
      </div>

      {/* Boarding-pass search card */}
      <form
        onSubmit={handleSearch}
        className="relative z-10 mx-6 mb-8 flex w-fit items-stretch rounded-2xl border border-black/10 bg-white/85 shadow-[0_20px_45px_-20px_rgba(14,26,61,0.45)] backdrop-blur-lg sm:mx-10 sm:mb-10"
      >
        <div className="flex w-48 flex-col gap-1.5 p-4">
          <label className="font-mono text-[0.65rem] uppercase tracking-wider text-gray-500">
            Destination
          </label>
          <input
            type="text"
            list="city-list"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Mumbai, Goa..."
            className="w-full bg-transparent text-sm font-semibold text-gray-900 outline-none placeholder:text-gray-400 placeholder:font-medium"
          />
          <datalist id="city-list">
            {SUPPORTED_CITIES.map((city) => (
              <option key={city} value={city} />
            ))}
          </datalist>
        </div>

        {/* Perforation */}
        <div className="relative hidden border-l-2 border-dashed border-black/10 md:block">
          <span className="absolute -left-[9px] -top-[9px] h-[18px] w-[18px] rounded-full bg-[#f0ead9]" />
          <span className="absolute -left-[9px] -bottom-[9px] h-[18px] w-[18px] rounded-full bg-[#f0ead9]" />
        </div>

        <div className="flex items-center justify-center p-4">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_22px_-8px_rgba(37,99,235,0.65)] transition-transform hover:-translate-y-0.5"
          >
            Search stays →
          </button>
        </div>
      </form>
    </section>
  );
}

export default Hero;
