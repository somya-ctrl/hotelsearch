import { Link } from "react-router-dom";
import { FaHotel, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer(){
    return(
        <footer className="bg-gray-900 text-gray-300 mt-10">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
                <div>
                    <div className="flex items-center gap-2 text-xl font-bold text-white">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                            <FaHotel />
                        </span>
                        HotelHub
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-gray-400">
                        Find and book the best hotels for your next trip, hassle-free.
                    </p>
                </div>

                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
                    <ul className="mt-4 space-y-2 text-sm">
                        <li>
                            <Link to="/" className="transition-colors hover:text-white">Home</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-400">
                        <li>support@hotelhub.com</li>
                        <li>+1 (555) 123-4567</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Follow Us</h3>
                    <div className="mt-4 flex gap-3">
                        <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-blue-600 hover:text-white">
                            <FaFacebookF />
                        </a>
                        <a href="#" aria-label="Twitter" className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-blue-600 hover:text-white">
                            <FaTwitter />
                        </a>
                        <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-blue-600 hover:text-white">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
                &copy; 2026 HotelHub. All rights reserved.
            </div>
        </footer>
    );
}
export default Footer;