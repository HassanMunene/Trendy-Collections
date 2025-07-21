import { User } from 'lucide-react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { MdOutlineStoreMallDirectory } from "react-icons/md";

const Footer = () => {
    const helpLinks = [
        "Contact Us",
        "Shipping & Delivery",
        "Returns & Exchanges",
        "Product Care",
        "FAQ",
        "Track Order",
        "Payment Options"
    ]

    const aboutLinks = [
        "Our Story",
        "Sustainability",
        "Privacy Policy",
        "Terms of Service",
        "Careers",
        "Wholesale Inquiries",
        "Press"
    ]

    const shopLinks = [
        "New Arrivals",
        "Best Sellers",
        "Pillows",
        "Curtains",
        "Bedding",
        "Home Decor",
        "Collections"
    ]

    return (
        <footer className="bg-white border-t border-gray-200 text-sm text-gray-700">
            {/* Social Media */}
            <div className="text-center py-8 bg-gray-50">
                <p className="text-lg font-bold text-gray-900 mb-4">Follow Our Journey</p>
                <p className="text-gray-600 max-w-2xl mx-auto px-4 mb-6">
                    Join our community for styling tips, new arrivals, and exclusive offers
                </p>
                <div className="flex justify-center space-x-6">
                    <a
                        href="https://www.facebook.com/profile.php?id=61551260480648"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-pink-500 transition-colors"
                        aria-label="Facebook"
                    >
                        <FaFacebookSquare className="w-7 h-7" />
                    </a>
                    <a
                        href="https://www.instagram.com/trendy.collection01/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-pink-500 transition-colors"
                        aria-label="Instagram"
                    >
                        <FaSquareInstagram className="w-7 h-7" />
                    </a>
                    <a
                        href="https://www.tiktok.com/@trendy.collections01?_t=ZM-8yDf1B90px0&_r=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-pink-500 transition-colors"
                        aria-label="TikTok"
                    >
                        <AiFillTikTok className="w-7 h-7" />
                    </a>
                </div>
            </div>

            {/* Account and Store Locator */}
            <div className="border-y border-gray-200">
                <div className='cursor-pointer max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-6'>
                    <div className="flex items-center space-x-4 py-6">
                        <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-pink-600" />
                        </div>
                        <div className='flex flex-col'>
                            <span className="font-semibold text-gray-900">My Account</span>
                            <span className="text-sm text-gray-600">Manage your orders and preferences</span>
                        </div>
                    </div>

                    <div className="cursor-pointer flex items-center space-x-4 border-t md:border-l md:border-t-0 md:border-gray-200 md:pl-6 py-6">
                        <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                            <MdOutlineStoreMallDirectory className="w-5 h-5 text-pink-600" />
                        </div>
                        <div className='flex flex-col'>
                            <span className="font-semibold text-gray-900">Visit Us</span>
                            <span className="text-sm text-gray-600">Find our showroom locations</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Links */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Customer Service */}
                <div>
                    <h6 className="font-bold text-gray-900 mb-4 text-base">CUSTOMER SERVICE</h6>
                    <ul className="space-y-3 p-0">
                        {helpLinks.map((link) => (
                            <li key={link}>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-pink-600 transition-colors hover:underline"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* About Trendy */}
                <div>
                    <h6 className="font-bold text-gray-900 mb-4 text-base">ABOUT TRENDY</h6>
                    <ul className="space-y-3 p-0">
                        {aboutLinks.map((link) => (
                            <li key={link}>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-pink-600 transition-colors hover:underline"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Shop */}
                <div>
                    <h6 className="font-bold text-gray-900 mb-4 text-base">SHOP</h6>
                    <ul className="space-y-3 p-0">
                        {shopLinks.map((link) => (
                            <li key={link}>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-pink-600 transition-colors hover:underline"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="py-6 text-center text-gray-500 text-sm border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p>© {new Date().getFullYear()} Trendy Home Collections. All rights reserved.</p>
                    <p className="mt-2">Nairobi, Kenya | info@trendycollections.com</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer