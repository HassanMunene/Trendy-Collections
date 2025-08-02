import React from 'react';
import { ShieldCheck, Lock, Cookie, Server, Mail } from 'lucide-react';

export const metadata = {
    title: "Privacy Policy | Trendy Collections Kenya - Your Data Security",
    description: "Learn how Trendy Collections protects your personal information in Kenya. We explain our data collection, usage, and protection practices for our home decor customers.",
    keywords: [
        "Kenya privacy policy",
        "Trendy Collections data protection",
        "Nairobi online shopping privacy",
        "GDPR compliance Kenya",
        "curtains purchase data security"
    ],
};

const PrivacyPolicyPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white text-pink-900">
            {/* Hero Section */}
            <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-600 to-pink-500">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="flex justify-center mb-4">
                        <ShieldCheck className="w-12 h-12 text-white" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Your Privacy Matters
                    </h1>
                    <p className="text-lg text-pink-100 max-w-3xl mx-auto">
                        At Trendy Collections, we protect your personal information with the same care we put into crafting our home decor products.
                    </p>
                </div>
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/images/privacy-pattern.svg')" }}></div>
            </section>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                {/* Last Updated */}
                <div className="mb-8 text-sm text-pink-600 bg-pink-50 p-3 rounded-lg inline-block">
                    Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>

                {/* Introduction */}
                <section className="mb-12">
                    <p className="text-lg mb-6">
                        This Privacy Policy explains how Trendy Collections ("we", "our" or "us") collects, uses and protects your personal information when you use our website or purchase our products in Kenya.
                    </p>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-pink-100">
                        <p className="font-medium text-pink-700">
                            By using our services, you agree to the collection and use of information in accordance with this policy. We comply with Kenya's Data Protection Act (2019) and other applicable regulations.
                        </p>
                    </div>
                </section>

                {/* Policy Sections */}
                <div className="space-y-12">
                    {/* Data Collection */}
                    <section>
                        <h4 className="flex items-center text-2xl font-bold mb-6 text-pink-800">
                            <Lock className="w-6 h-6 mr-3 text-pink-600" />
                            1. Information We Collect
                        </h4>
                        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-pink-100">
                            <div className="p-6 sm:p-8">
                                <h3 className="font-medium text-lg mb-3 text-pink-700">We may collect:</h3>
                                <ul className="space-y-3 list-disc pl-5 text-pink-800">
                                    <li><strong>Personal Identification:</strong> Name, email, phone number when you place an order</li>
                                    <li><strong>Delivery Information:</strong> Physical address for product delivery</li>
                                    <li><strong>Payment Details:</strong> M-Pesa number or Paybill transaction references (we don't store full payment info)</li>
                                    <li><strong>Usage Data:</strong> Pages visited on our site to improve your experience</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Data Usage */}
                    <section>
                        <h4 className="flex items-center text-2xl font-bold mb-6 text-pink-800">
                            <Server className="w-6 h-6 mr-3 text-pink-600" />
                            2. How We Use Your Data
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: <Mail className="w-5 h-5 text-pink-600" />,
                                    title: "Order Processing",
                                    content: "To fulfill and deliver your purchases"
                                },
                                {
                                    icon: <Cookie className="w-5 h-5 text-pink-600" />,
                                    title: "Service Improvement",
                                    content: "Enhance our website and product offerings"
                                },
                                {
                                    icon: <ShieldCheck className="w-5 h-5 text-pink-600" />,
                                    title: "Security",
                                    content: "Prevent fraud and unauthorized access"
                                },
                                {
                                    icon: <div className="w-5 h-5 text-pink-600">✉️</div>,
                                    title: "Communication",
                                    content: "Send order updates (never spam)"
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-pink-100">
                                    <div className="flex items-center mb-3">
                                        <div className="bg-pink-50 p-2 rounded-full mr-3">
                                            {item.icon}
                                        </div>
                                        <h3 className="font-medium text-pink-700">{item.title}</h3>
                                    </div>
                                    <p className="text-pink-800">{item.content}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Data Sharing */}
                    <section>
                        <h4 className="flex items-center text-2xl font-bold mb-6 text-pink-800">
                            <div className="w-6 h-6 mr-3 text-pink-600">🔒</div>
                            3. Data Sharing & Protection
                        </h4>
                        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-pink-100">
                            <div className="p-6 sm:p-8 space-y-4">
                                <p className="text-pink-800">
                                    We <strong>never sell</strong> your personal data. Limited sharing occurs only with:
                                </p>
                                <ul className="space-y-2 list-disc pl-5 text-pink-800">
                                    <li><strong>Delivery Partners:</strong> Only the necessary address/contact details to complete delivery</li>
                                    <li><strong>Payment Processors:</strong> Safely handle M-Pesa and Paybill transactions</li>
                                    <li><strong>Legal Requirements:</strong> When required by Kenyan law enforcement</li>
                                </ul>
                                <div className="mt-4 p-4 bg-pink-50 rounded-lg">
                                    <p className="text-pink-700 font-medium">
                                        All third parties must comply with Kenya's Data Protection Act and maintain confidentiality.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Cookies */}
                    <section>
                        <h4 className="flex items-center text-2xl font-bold mb-6 text-pink-800">
                            <Cookie className="w-6 h-6 mr-3 text-pink-600" />
                            5. Cookies & Tracking
                        </h4>
                        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-pink-100">
                            <div className="p-6 sm:p-8 space-y-4">
                                <p className="text-pink-800">
                                    Our website uses essential cookies for:
                                </p>
                                <ul className="space-y-2 list-disc pl-5 text-pink-800">
                                    <li>Keeping items in your cart</li>
                                    <li>Basic analytics to improve our site</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;