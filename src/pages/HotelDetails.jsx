import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import Layout from "../components/layouts/Layout";
import { getHotelById } from "../services/HotelApi";

function HotelDetails() {
  const { id } = useParams();
  const [result, setResult] = useState({ id: null, hotel: null, error: null, activePhoto: 0 });
  const loading = result.id !== id;
  const { hotel, error, activePhoto } = result;

  useEffect(() => {
    let ignore = false;

    getHotelById(id)
      .then((data) => {
        if (!ignore) setResult({ id, hotel: data.data, error: null, activePhoto: 0 });
      })
      .catch(() => {
        if (!ignore) {
          setResult({ id, hotel: null, error: "Could not load this hotel right now. Please try again.", activePhoto: 0 });
        }
      });

    return () => {
      ignore = true;
    };
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="mx-auto max-w-5xl animate-pulse px-6 py-10">
          <div className="h-6 w-32 rounded bg-gray-100" />
          <div className="mt-6 h-96 rounded-2xl bg-gray-100" />
          <div className="mt-6 h-8 w-2/3 rounded bg-gray-100" />
          <div className="mt-3 h-4 w-1/3 rounded bg-gray-100" />
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="mx-auto max-w-2xl px-6 py-16 text-center">
          <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
          <Link to="/" className="mt-6 inline-flex items-center gap-2 font-medium text-blue-600 hover:text-blue-700">
            <FaArrowLeft /> Back to results
          </Link>
        </div>
      </Layout>
    );
  }

  const photos = hotel.photos?.length ? hotel.photos : [hotel.thumbnail];

  return (
    <Layout>
      <div className="mx-auto max-w-5xl px-6 py-10">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600">
          <FaArrowLeft /> Back to results
        </Link>

        <div className="mt-6 overflow-hidden rounded-2xl">
          <img
            src={photos[activePhoto]}
            alt={hotel.name}
            className="h-80 w-full object-cover sm:h-[26rem]"
          />
        </div>

        {photos.length > 1 && (
          <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
            {photos.map((photo, index) => (
              <button
                key={photo}
                type="button"
                onClick={() => setResult((prev) => ({ ...prev, activePhoto: index }))}
                className={`h-20 w-28 flex-none overflow-hidden rounded-lg ring-2 transition-colors ${
                  index === activePhoto ? "ring-blue-600" : "ring-transparent"
                }`}
              >
                <img src={photo} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        )}

        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{hotel.name}</h1>
            <p className="mt-2 flex items-center gap-1.5 text-gray-500">
              <FaMapMarkerAlt className="text-blue-600" />
              {hotel.location}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-600">
              <FaStar />
              {hotel.rating}
            </span>
            <div className="text-right">
              <span className="text-2xl font-bold text-blue-600">
                ₹{Number(hotel.price).toLocaleString("en-IN")}
              </span>
              <span className="text-sm text-gray-500"> / night</span>
            </div>
          </div>
        </div>

        <p className="mt-6 max-w-3xl leading-relaxed text-gray-600">{hotel.description}</p>
      </div>
    </Layout>
  );
}
export default HotelDetails;
