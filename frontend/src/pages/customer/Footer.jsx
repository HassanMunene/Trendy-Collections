import { User, Store } from 'lucide-react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { MdOutlineStoreMallDirectory } from "react-icons/md";

const Footer = () => {
    const helpLinks = [
        "Frequently Asked Questions",
        "Contact Us",
        "Track My Order",
        "Delivery",
        "Arrange a Return",
        "Inspiration",
        "nextpay Credit Account Information"
    ]

    const aboutLinks = [
        "About MADE",
        "Terms & Conditions",
        "Manually Manage Cookies",
        "Cookies & Privacy",
        "Modern Slavery Statement",
        "Gender Pay Report",
        "Corporate Responsibility Report"
    ]

    const shopLinks = [
        "Living Room",
        "Dining Room",
        "Bedroom",
        "Garden",
        "Furniture",
        "Lighting"
    ]

    return (
        <footer className="bg-gray-100 border-t text-sm text-gray-700">
            {/* Social Media */}
            <div className="text-center mb-12 mt-4">
                <p className="text-md font-bold text-gray-900 mb-6">Our Social Networks</p>
                <div className="flex justify-center space-x-6">
                    <a href="#" className="text-gray-600 hover:text-[#9a6546] transition-colors">
                        <FaFacebookSquare className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-[#9a6546] transition-colors">
                        <FaSquareInstagram className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-[#9a6546] transition-colors">
                        <AiFillTikTok className="w-6 h-6" />
                    </a>
                </div>
            </div>

            {/* Account and Store Locator */}
            <div className="mb-6 border-t border-b">
                <div className='flex gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className="flex items-center space-x-4 pt-3 pb-3">
                        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                            <User className="w-8 h-8" />
                        </div>
                        <div className='flex flex-col pe-12'>
                            <span className="font-semibold text-gray-900">My Account</span>
                            <span className="text-sm text-gray-600">Sign-in to your account</span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 border-l border-gray-300 px-4">
                        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                            <MdOutlineStoreMallDirectory className="w-8 h-8" />
                        </div>
                        <div className='flex flex-col'>
                            <span className="font-semibold text-gray-900">Our Store Location</span>
                            <span className="text-sm text-gray-600">Find our nearest store</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Links */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {/* How Can We Help */}
                <div>
                    <h6 className="font-medium text-gray-900 mb-4 uppercase text-sm">HOW CAN WE HELP</h6>
                    <ul className="space-y-2 p-0">
                        {helpLinks.map((link) => (
                            <li key={link}>
                                <a href="#" className="text-sm text-gray-600 hover:text-[#9a6546] transition-colors">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* About Us */}
                <div>
                    <h6 className="font-medium text-gray-900 mb-4 uppercase text-sm">ABOUT US</h6>
                    <ul className="space-y-2 p-0">
                        {aboutLinks.map((link) => (
                            <li key={link}>
                                <a href="#" className="text-sm text-gray-600 hover:text-[#9a6546] transition-colors">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Shop by Department */}
                <div>
                    <h6 className="font-medium text-gray-900 mb-4 uppercase text-sm">SHOP BY DEPARTMENT</h6>
                    <ul className="space-y-2 p-0">
                        {shopLinks.map((link) => (
                            <li key={link}>
                                <a href="#" className="text-sm text-gray-600 hover:text-[#9a6546] transition-colors">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-md text-gray-600">
                © {new Date().getFullYear()} All rights reserved.
            </div>
        </footer>
    )
}

export default Footer