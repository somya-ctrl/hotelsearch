import { Link } from "react-router-dom";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

function HotelCard({ hotel }) {
  return (
    <Link
      to={`/hotel/${hotel.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={hotel.thumbnail}
          alt={hotel.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-gray-800 shadow">
          <FaStar className="text-amber-400" />
          {hotel.rating}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="line-clamp-1 text-lg font-semibold text-gray-900">{hotel.name}</h3>
        <p className="flex items-center gap-1.5 text-sm text-gray-500">
          <FaMapMarkerAlt className="text-blue-600" />
          {hotel.location}
        </p>
        <div className="mt-auto flex items-end justify-between pt-2">
          <div>
            <span className="text-lg font-bold text-blue-600">
              ₹{Number(hotel.price).toLocaleString("en-IN")}
            </span>
            <span className="text-xs text-gray-500"> / night</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default HotelCard;
