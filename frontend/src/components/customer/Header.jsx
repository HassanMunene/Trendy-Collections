import { User, ShoppingCart, X, ChevronRight, AlignJustify, MessageCircle } from 'lucide-react'
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { useCart } from '@/src/context/CartContext';

const navigationLinks = [
    { name: 'Shop all', href: "/products?category=all" },
    { name: 'Curtains', href: '/products?category=curtains' },
    { name: 'Collections', href: '/collections' },
    { name: 'Pillows', href: '/products?category=pillow' },
]

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const bodyRef = useRef(document.body);
    const navigate = useNavigate();
    const { cartCount, cartItems, cartTotal } = useCart();
    const [showCartDropdown, setShowCartDropdown] = useState(false);

    // Scroll effect for header
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scrolling when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            bodyRef.current.style.overflow = 'hidden';
            bodyRef.current.style.position = 'fixed';
            bodyRef.current.style.width = '100%';
        } else {
            bodyRef.current.style.overflow = '';
            bodyRef.current.style.position = '';
            bodyRef.current.style.width = '';
        }
    }, [mobileMenuOpen]);

    const handleWhatsAppOrder = () => {
        const phoneNumber = '254712403671';
        const message = `I want to order these items:\n\n${cartItems.map(item =>
            `${item.name} (${item.quantity} x KSh ${item.price.toLocaleString()})`
        ).join('\n')
            }\n\nTotal: KSh ${cartTotal.toLocaleString()}`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <>
            {/* Announcement Bar */}
            <div className="bg-gradient-to-r from-pink-600 to-pink-500 py-2 text-center text-white text-xs md:text-sm">
                <div className="container mx-auto px-4 overflow-hidden">
                    <p className="inline-flex items-center justify-center gap-2 w-full">
                        <span className="hidden sm:inline">🚚 Countrywide delivery</span>
                        <a href="tel:0712403671" className="underline hover:text-pink-200 font-medium">
                            Call us: 0712403671
                        </a>
                    </p>
                </div>
            </div>

            {/* Main Header */}
            <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-md' : 'shadow-none'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
                    {/* Top Row */}
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Left Section - Mobile Menu & Logo */}
                        <div className="flex items-center gap-2 md:gap-8">
                            {/* Mobile Menu Button */}
                            <button
                                className="md:hidden text-gray-700 p-2 !rounded-md hover:bg-pink-50 transition-colors"
                                onClick={() => setMobileMenuOpen(true)}
                                aria-label="Open menu"
                            >
                                <AlignJustify className="h-5 w-5" />
                            </button>

                            {/* Logo */}
                            <a
                                href="/"
                                className="flex items-center group transition-transform hover:scale-105"
                            >
                                <span className="text-2xl md:text-3xl font-bold tracking-tighter bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">
                                    TRENDY
                                </span>
                            </a>
                        </div>

                        {/* Center Section - Desktop Navigation */}
                        <nav className="hidden md:flex items-center justify-center flex-1 max-w-2xl">
                            <div className="flex space-x-6 lg:space-x-8">
                                {navigationLinks.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className="relative px-1 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors group"
                                    >
                                        {item.name}
                                        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                ))}
                            </div>
                        </nav>

                        {/* Right Section - Icons */}
                        <div className="flex items-center gap-3 md:gap-5">
                            {/* Search - Desktop */}
                            <button className='flex items-center p-2 !rounded-full hover:bg-pink-50 transition-colors'>
                                <a
                                    href="https://www.facebook.com/profile.php?id=61551260480648"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-pink-500 transition-colors"
                                    aria-label="Facebook"
                                >
                                    <FaFacebookSquare className="w-5 h-5" />
                                </a>
                            </button>
                            <button className='flex items-center p-2 !rounded-full hover:bg-pink-50 transition-colors'>
                                <a
                                    href="https://www.tiktok.com/@trendy.collections01?_t=ZM-8yDf1B90px0&_r=1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-pink-500 transition-colors"
                                    aria-label="TikTok"
                                >
                                    <AiFillTikTok className="w-6 h-6" />
                                </a>
                            </button>
                            <button className='hidden lg:flex items-center p-2 !rounded-full hover:bg-pink-50 transition-colors'>
                                <a
                                    href="https://www.instagram.com/trendy.collection01/?hl=en"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-pink-500 transition-colors"
                                    aria-label="Instagram"
                                >
                                    <FaSquareInstagram className="w-5 h-5" />
                                </a>
                            </button>
                            {/* Cart with Dropdown */}
                            <div className="relative">
                                <button
                                    className="flex items-center p-2 !rounded-full hover:bg-pink-50 transition-colors relative"
                                    onClick={() => {
                                        setShowCartDropdown(!showCartDropdown);
                                        if (cartCount > 0) {
                                            navigate('/cart');
                                        }
                                    }}
                                    aria-label="Cart"
                                >
                                    <ShoppingCart className="h-5 w-5 text-gray-700" />
                                    {cartCount > 0 && (
                                        <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                            {cartCount}
                                        </span>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`fixed inset-0 z-50 transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
                    <div className="relative w-full h-full bg-white">
                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-pink-600 z-50"
                            onClick={() => setMobileMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        {/* Menu Content */}
                        <div className="h-full flex flex-col pt-16 pb-8 px-6 overflow-y-auto">
                            {/* Logo */}
                            <Link
                                to="/"
                                className="mb-8 text-2xl font-bold bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent text-center"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                TRENDY
                            </Link>

                            {/* Navigation Links */}
                            <nav className="flex-1 flex flex-col space-y-4">
                                {navigationLinks.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className="py-3 px-4 text-gray-700 hover:bg-pink-50 rounded-md font-medium flex items-center justify-between border-b border-pink-100"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span>{item.name}</span>
                                        <ChevronRight className="h-5 w-5 text-pink-400" />
                                    </Link>
                                ))}
                            </nav>

                            {/* Account Links */}
                            <div className="mt-8 pt-6 border-t border-pink-100">
                                <Link
                                    to="/account"
                                    className="flex items-center justify-center py-3 px-4 text-gray-700 hover:bg-pink-50 rounded-md font-medium"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <User className="h-5 w-5 mr-2 text-pink-500" />
                                    My Account
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;