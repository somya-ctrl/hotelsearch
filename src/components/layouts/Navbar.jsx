import {Link} from "react-router-dom";
import { FaHotel } from "react-icons/fa";
function Navbar(){
    return(
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <Link to ="/" className="flex items-center gap-2 text-2xl font-bold text-blue-600 transition-colors hover:text-blue-700">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
                        <FaHotel />
                    </span>
                    HotelHub
                </Link>
                <div className="flex items-center gap-8">
                    <Link to ="/" className="font-medium text-gray-600 transition-colors hover:text-blue-600">
                        Home
                    </Link>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;