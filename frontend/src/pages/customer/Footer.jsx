import { Instagram, Youtube } from 'lucide-react'

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
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Social Media */}
                <div className="text-center mb-12">
                    <h3 className="text-lg font-medium text-gray-900 mb-6">Our Social Networks</h3>
                    <div className="flex justify-center space-x-6">
                        <a href="#" className="text-gray-600 hover:text-[#9a6546] transition-colors">
                            <Instagram className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-[#9a6546] transition-colors">
                            <div className="w-6 h-6 bg-gray-600 rounded-full" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-[#9a6546] transition-colors">
                            <Youtube className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                {/* Account and Store Locator */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 pb-8 border-b border-gray-200">
                    <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                            <div className="w-4 h-4 bg-gray-600 rounded" />
                        </div>
                        <div>
                            <h4 className="font-medium text-gray-900">My Account</h4>
                            <p className="text-sm text-gray-600">Sign-in to your account</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                            <div className="w-4 h-4 bg-gray-600 rounded" />
                        </div>
                        <div>
                            <h4 className="font-medium text-gray-900">Store Locator</h4>
                            <p className="text-sm text-gray-600">Find your nearest store</p>
                        </div>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* How Can We Help */}
                    <div>
                        <h4 className="font-medium text-gray-900 mb-4 uppercase text-sm">HOW CAN WE HELP</h4>
                        <ul className="space-y-2">
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
                        <h4 className="font-medium text-gray-900 mb-4 uppercase text-sm">ABOUT US</h4>
                        <ul className="space-y-2">
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
                        <h4 className="font-medium text-gray-900 mb-4 uppercase text-sm">SHOP BY DEPARTMENT</h4>
                        <ul className="space-y-2">
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

                {/* Mobile Site Link */}
                <div className="text-center mb-8">
                    <a href="#" className="text-sm text-gray-900 underline hover:no-underline">
                        View Mobile Site
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-center text-sm text-gray-600">
                    © 2025 All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer