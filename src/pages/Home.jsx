import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import Hero from "../components/Hero";
import HotelCard from "../components/HotelCard";
import { getHotels } from "../services/HotelApi";

function Home() {
  const [searchParams] = useSearchParams();
  const location = searchParams.get("location") || "";

  const [result, setResult] = useState({ location: null, hotels: [], error: null });
  const loading = result.location !== location;

  useEffect(() => {
    let ignore = false;

    getHotels(location ? { location, limit: 24 } : { limit: 24 })
      .then((data) => {
        if (!ignore) setResult({ location, hotels: data.data || [], error: null });
      })
      .catch(() => {
        if (!ignore) {
          setResult({ location, hotels: [], error: "Could not load hotels right now. Please try again." });
        }
      });

    return () => {
      ignore = true;
    };
  }, [location]);

  const { hotels, error } = result;

  return (
    <Layout>
      <Hero />
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            {location ? `Hotels in ${location}` : "Popular Hotels"}
          </h2>
          {!loading && !error && (
            <span className="text-sm text-gray-500">{hotels.length} results</span>
          )}
        </div>

        {loading && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-72 animate-pulse rounded-xl bg-gray-100" />
            ))}
          </div>
        )}

        {!loading && error && (
          <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
        )}

        {!loading && !error && hotels.length === 0 && (
          <div className="rounded-lg bg-gray-50 px-4 py-6 text-center text-gray-500">
            <p>No hotels found{location ? ` in "${location}"` : ""}.</p>
            <p className="mt-1 text-sm">
              Try Mumbai, Delhi, Goa, Jaipur, Bengaluru, Chennai, Hyderabad, Kolkata, Pune, Ahmedabad, Gurgaon, or Noida.
            </p>
          </div>
        )}

        {!loading && !error && hotels.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {hotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Home;
