import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MainLayout = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="flex min-h-screen flex-col">
            {/* Header */}
            <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
                <div className="container mx-auto px-4 py-3">
                    {/* Announcement Bar about deliveries and contact */}
                    <div className="bg-[#293755] py-2 text-center text-white text-sm mb-4">
                        Just for you: 15% off your first order. Click to redeem.
                    </div>

                    {/* Logo and Navigation */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-8">
                            {/* Logo */}
                            <a href="/" className="text-2xl font-bold">Trendy Collections</a>

                            {/* Navigation */}
                            <nav className="hidden md:flex space-x-6">
                                <a href="/products?category=bed" className="text-gray-700 hover:text-gray-900">Bed</a>
                                <a href="/products?category=bath" className="text-gray-700 hover:text-gray-900">Bath</a>
                                <a href="/products?category=bundles" className="text-gray-700 hover:text-gray-900">Bundles</a>
                                <a href="/products?category=bestsellers" className="text-gray-700 hover:text-gray-900">Best Sellers</a>
                                <a href="/products/new" className="text-gray-700 hover:text-gray-900">New Arrivals</a>
                                <a href="/products/sale" className="text-gray-700 hover:text-gray-900">Sale</a>
                            </nav>
                        </div>

                        {/* User Actions */}
                        <div className="flex items-center space-x-4">
                            <button className="text-gray-700 hover:text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                            <a href="/login" className="text-gray-700 hover:text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </a>
                            <a href="/cart" className="relative text-gray-700 hover:text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#293755] text-xs text-white">0</span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-[#F1F4F6] py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* About */}
                        <div>
                            <h3 className="font-bold mb-4">About</h3>
                            <ul className="space-y-2">
                                <li><a href="/about" className="text-gray-600 hover:text-gray-800">About Us</a></li>
                                <li><a href="/press" className="text-gray-600 hover:text-gray-800">Press</a></li>
                                <li><a href="/reviews" className="text-gray-600 hover:text-gray-800">Reviews</a></li>
                                <li><a href="/stores" className="text-gray-600 hover:text-gray-800">Our Stores</a></li>
                            </ul>
                        </div>

                        {/* Community */}
                        <div>
                            <h3 className="font-bold mb-4">Community</h3>
                            <ul className="space-y-2">
                                <li><a href="/rewards" className="text-gray-600 hover:text-gray-800">Rewards Program</a></li>
                                <li><a href="/blog" className="text-gray-600 hover:text-gray-800">Blog</a></li>
                                <li><a href="/trade" className="text-gray-600 hover:text-gray-800">Trade & Hospitality</a></li>
                                <li><a href="/corporate" className="text-gray-600 hover:text-gray-800">Corporate Gifting</a></li>
                            </ul>
                        </div>

                        {/* Help */}
                        <div>
                            <h3 className="font-bold mb-4">Need Help?</h3>
                            <ul className="space-y-2">
                                <li><a href="/faq" className="text-gray-600 hover:text-gray-800">FAQ</a></li>
                                <li><a href="/returns" className="text-gray-600 hover:text-gray-800">Returns & Exchanges</a></li>
                                <li><a href="/care" className="text-gray-600 hover:text-gray-800">Care Guide</a></li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h3 className="font-bold mb-4">Get on the List</h3>
                            <p className="text-gray-600 mb-4">Sign up to know when we launch new products.</p>
                            <form className="flex">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="border border-gray-300 px-4 py-2 rounded-l-md flex-1"
                                />
                                <button
                                    type="submit"
                                    className="bg-[#293755] text-white px-4 py-2 rounded-r-md hover:bg-opacity-90"
                                >
                                    →
                                </button>
                            </form>
                            <p className="text-xs text-gray-500 mt-2">
                                Please keep me up to date with news and offers. I can unsubscribe at any time.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 border-t border-gray-200 pt-6 flex justify-between">
                        <div className="flex space-x-4">
                            <a href="/terms" className="text-sm text-gray-600 hover:text-gray-800">Terms of Service</a>
                            <a href="/privacy" className="text-sm text-gray-600 hover:text-gray-800">Privacy Policy</a>
                            <a href="/accessibility" className="text-sm text-gray-600 hover:text-gray-800">Accessibility</a>
                        </div>
                        <p className="text-sm text-gray-600">© Brooklinen 2025</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;