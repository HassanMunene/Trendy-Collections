import React from "react";
import { AlignJustify } from "lucide-react";

const Header = ({ scrolled, mobileMenuOpen, setMobileMenuOpen }) => {
    return (
        <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${scrolled ? 'bg-white shadow-xl' : 'bg-white/95 backdrop-blur-md'}`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    {/* Mobile menu button on mobile screens */}
                    <button
                        className="md:hidden text-gray-700 group"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <AlignJustify />
                    </button>

                    {/* Logo when we hover we underline */}
                    <a href="/" className="flex items-center group">
                        <span className="text-2xl font-bold bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent relative">
                            Trendy Collections
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-700 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                    </a>

                    {/* Navigation - Desktop with animated underline */}
                    <nav className="hidden md:flex space-x-4">
                        {[
                            { name: 'Pillows', href: '/products?category=pillow' },
                            { name: 'Curtains', href: '/products?category=curtains' },
                            { name: 'Best Sellers', href: '/products?category=bestsellers' },
                            { name: 'New Arrivals', href: '/products/new' }
                        ].map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="relative px-4 py-2 bg-rose-50 text-gray-700 font-medium rounded-md hover:bg-rose-100 transition-all duration-300 group"
                            >
                                {item.name}
                                <span className="absolute inset-0 border border-rose-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-rose-700 to-pink-600 transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]"></span>
                            </a>
                        ))}
                    </nav>

                    {/* User Actions with tooltips */}
                    <div className="flex items-center space-x-6">
                        <button
                            className="text-gray-700 hover:text-rose-700 transition-colors hidden sm:block relative group"
                            aria-label="Search"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                Search
                            </span>
                        </button>

                        <a
                            href="/account"
                            className="text-gray-700 hover:text-rose-700 transition-colors hidden sm:block relative group"
                            aria-label="Account"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                Account
                            </span>
                        </a>

                        <a
                            href="/cart"
                            className="relative text-gray-700 hover:text-rose-700 transition-colors group"
                            aria-label="Cart"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-rose-700 to-pink-600 text-xs text-white transform transition-transform duration-200 group-hover:scale-110">
                                3
                            </span>
                            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                Cart (3)
                            </span>
                        </a>
                    </div>
                </div>

                {/* Enhanced Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white py-4 px-4 shadow-xl rounded-lg mt-2 animate-fadeIn">
                        <nav className="flex flex-col space-y-4">
                            {[
                                { name: 'Bed', href: '/products?category=bed' },
                                { name: 'Bath', href: '/products?category=bath' },
                                { name: 'Living', href: '/products?category=living' },
                                { name: 'Best Sellers', href: '/products?category=bestsellers' },
                                { name: 'New Arrivals', href: '/products/new' }
                            ].map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-700 hover:text-rose-700 transition-colors py-2 px-3 rounded-lg hover:bg-rose-50 flex items-center"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-rose-700 to-pink-600 rounded-full mr-3"></span>
                                    {item.name}
                                </a>
                            ))}
                            <div className="pt-4 border-t border-gray-200">
                                <a
                                    href="/account"
                                    className="text-gray-700 hover:text-rose-700 transition-colors py-2 px-3 rounded-lg hover:bg-rose-50 flex items-center"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
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
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-2.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header;