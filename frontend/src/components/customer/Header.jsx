import { Search, User, Heart, ShoppingBag, AlignJustify } from 'lucide-react'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { PillowsMegaMenu } from '../common/PillowsMegaMenu';

const navigationLinks = [
    { name: 'Shop all', href: "/products?category=all" },
    { name: 'Curtains', href: '/products?category=curtains' },
    { name: 'Collections', href: '/collections' },
    { name: 'Pillows', href: '/products?category=pillow'},
]

const promotions = [
    "Free shipping on orders over Ksh. 5000",
    "New luxury pillow collection just landed!",
    "Bundle offer: Mix & match 3 pillows for Ksh. 2000"
]

const Header = () => {
    const [currentPromoIndex, setCurrentPromoIndex] = useState(0);
    const [fade, setFade] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


    useEffect(() => {
        const interval = setInterval(() => {
            // Trigger fade out
            setFade(true);

            // After fade out completes, change promotion and fade in
            setTimeout(() => {
                setCurrentPromoIndex((prevIndex) =>
                    prevIndex === promotions.length - 1 ? 0 : prevIndex + 1
                );
                setFade(false);
            }, 500); // This should match the transition duration
        }, 5000); // Change promotion every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="sticky top-0 z-50">
                {/* Announcement Bar */}
                <div className="bg-black py-2 text-center text-white text-xs">
                    We deliver countrywide! | <a href="tel:0712403671" className="underline hover:text-gray-100">Contact us at 0712403671</a>
                </div>

                <header className="bg-white shadow-sm border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Top Row - Logo, Search, User Actions */}
                        <div className="flex items-center justify-between h-16 py-4">
                            {/* Left Side - Logo and Search */}
                            <div className="flex items-center space-x-6">
                                {/* Mobile menu button */}
                                <button
                                    className="md:hidden text-gray-700 group"
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                    aria-label="Toggle menu"
                                >
                                    <AlignJustify />
                                </button>

                                {/* Logo */}
                                <Link to="/" className="flex items-center group">
                                    <span className="text-3xl font-medium tracking-tight bg-clip-text relative">
                                        TRENDY
                                    </span>
                                </Link>

                                {/* Search Bar - Desktop */}
                                <div className="hidden md:flex items-center relative w-80">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="w-full border border-gray-900 py-2 px-4 pl-10 focus:outline-none focus:ring-1 focus:ring-[#9a6546] focus:border-[#9a6546] text-sm"
                                    />
                                    <Search className="h-4 w-4 absolute right-3" />
                                </div>
                            </div>

                            {/* Right Side - User Actions */}
                            <div className="flex items-center space-x-8">
                                {/* Account */}
                                <button className="p-2 hover:bg-gray-100 rounded-md transition-colors mx-1">
                                    <User className="h-5 w-5 text-gray-600" />
                                </button>

                                {/* Favorites */}
                                <button className="p-2 hover:bg-gray-100 rounded-md transition-colors mx-1">
                                    <Heart className="h-5 w-5 text-gray-600" />
                                </button>

                                {/* Shopping Bag */}
                                <button className="p-2 hover:bg-gray-100 rounded-md transition-colors relative mx-1">
                                    <ShoppingBag className="h-5 w-5 text-gray-600" />
                                    <span className="absolute -top-1 -right-1 bg-[#9a6546] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                        0
                                    </span>
                                </button>

                                {/* Checkout Button */}
                                <button className="hidden md:block bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors rounded-md ms-4">
                                    Checkout
                                </button>
                            </div>
                        </div>

                        {/* Desktop Navigation - Centered */}
                        <nav className="hidden md:flex justify-center pt-3 pb-1">
                            <div className="flex space-x-8 items-center">
                                {navigationLinks.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className="text-sm text-gray-700 hover:text-[#9a6546] font-semibold rounded-md transition-all duration-300 relative group"
                                    >
                                        {item.name}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9a6546] transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                ))}
                                {/* Add the mega dropdown here */}
                                <PillowsMegaMenu />
                            </div>
                        </nav>

                        {/* Mobile Menu */}
                        {mobileMenuOpen && (
                            <div className="md:hidden bg-white py-4 px-4 shadow-xl rounded-lg mt-2 animate-fadeIn">
                                <nav className="flex flex-col space-y-4">
                                    {navigationLinks.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className="text-gray-700 hover:text-rose-700 transition-colors py-2 px-3 rounded-lg hover:bg-rose-50 flex items-center"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <span className="w-1.5 h-1.5 bg-gradient-to-r from-rose-700 to-pink-600 rounded-full mr-3"></span>
                                            {item.name}
                                        </Link>
                                    ))}
                                    <div className="pt-4 border-t border-gray-200">
                                        <a
                                            href="/account"
                                            className="text-gray-700 hover:text-rose-700 transition-colors py-2 px-3 rounded-lg hover:bg-rose-50 flex items-center"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <User className="h-5 w-5 mr-3" />
                                            My Account
                                        </a>
                                    </div>
                                </nav>

                                {/* Search in mobile menu */}
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Search products..."
                                            className="w-full border border-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                                        />
                                        <Search className="h-5 w-5 absolute left-3 top-2.5 text-gray-400" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </header>
            </div>

            {/* Promotional Banner with Animation */}
            <div className="bg-gradient-to-r from-pink-400 to-pink-500 text-center py-2 text-sm !h-[50px] flex justify-center items-center">
                <div className={`transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}>
                    {promotions[currentPromoIndex]}
                </div>
            </div>
        </>
    )
}

export default Header;