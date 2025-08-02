import React from 'react';
import { FileText, Scale, Truck, CreditCard, Shield, Smartphone } from 'lucide-react';

export const metadata = {
    title: "Terms of Service | Trendy Collections Kenya - Purchase Agreement",
    description: "Terms and conditions for purchasing from Trendy Collections Kenya. Understand your rights and obligations when buying our home decor products online.",
    keywords: [
        "Kenya terms of service",
        "Trendy Collections purchase terms",
        "Nairobi online shopping agreement",
        "curtains return policy Kenya",
        "M-Pesa payment terms"
    ],
};

const TermsOfServicePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white text-pink-900">
            {/* Hero Section */}
            <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-600 to-pink-500">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="flex justify-center mb-4">
                        <Scale className="w-12 h-12 text-white" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-lg text-pink-100 max-w-3xl mx-auto">
                        Clear guidelines for purchasing from Trendy Collections Kenya
                    </p>
                </div>
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/images/legal-pattern.svg')" }}></div>
            </section>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                {/* Effective Date */}
                <div className="mb-8 text-sm text-pink-600 bg-pink-50 p-3 rounded-lg inline-block">
                    Effective: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>

                {/* Introduction */}
                <section className="mb-12">
                    <p className="text-lg mb-6">
                        These Terms of Service ("Terms") govern your use of Trendy Collections' website and purchases. By placing an order, you agree to these Terms and our Privacy Policy.
                    </p>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-pink-100">
                        <p className="font-medium text-pink-700">
                            Please read these Terms carefully before purchasing. We reserve the right to update these Terms at any time.
                        </p>
                    </div>
                </section>

                {/* Terms Sections */}
                <div className="space-y-12">
                    {/* Ordering Process */}
                    <section>
                        <h4 className="flex items-center text-2xl font-bold mb-6 text-pink-800">
                            <FileText className="w-6 h-6 mr-3 text-pink-600" />
                            1. Ordering & Payment
                        </h4>
                        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-pink-100">
                            <div className="p-6 sm:p-8 space-y-4">
                                <div className="flex items-start mb-4">
                                    <div className="bg-pink-50 p-2 rounded-full mr-4 mt-1">
                                        <Smartphone className="w-5 h-5 text-pink-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-lg mb-2 text-pink-700">How to Order</h4>
                                        <ul className="space-y-2 list-disc pl-5 text-pink-800">
                                            <li>Browse our catalog and add items to your cart</li>
                                            <li>Proceed to checkout with accurate delivery details</li>
                                            <li>You can then send us a message via Whatsapp on the products you have choosen</li>
                                            <li>You'll receive an order confirmation via WhatsAppS</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-pink-50 p-2 rounded-full mr-4 mt-1">
                                        <CreditCard className="w-5 h-5 text-pink-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-lg mb-2 text-pink-700">Payment Terms</h4>
                                        <ul className="space-y-2 list-disc pl-5 text-pink-800">
                                            <li>All prices are in Kenyan Shillings (KES)</li>
                                            <li>Full payment required before production begins</li>
                                            <li>M-Pesa payments must include your order number as reference</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* User Responsibilities */}
                    <section>
                        <h4 className="flex items-center text-2xl font-bold mb-6 text-pink-800">
                            <Shield className="w-6 h-6 mr-3 text-pink-600" />
                            4. User Responsibilities
                        </h4>
                        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-pink-100">
                            <div className="p-6 sm:p-8 space-y-4">
                                <h4 className="font-medium text-lg mb-2 text-pink-700">When using our services, you agree:</h4>
                                <ul className="space-y-3 list-disc pl-5 text-pink-800">
                                    <li>To provide accurate measurements - we're not liable for incorrect customer-provided dimensions</li>
                                    <li>To examine all products upon delivery and report damages within 48 hours</li>
                                    <li>That custom orders cannot be returned unless defective</li>
                                    <li>To maintain appropriate insurance for high-value orders</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Final Acceptance */}
                <section className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-pink-100 to-pink-50 p-8 rounded-2xl border border-pink-200 inline-block max-w-2xl">
                        <h3 className="text-xl font-medium text-pink-900 mb-3">By placing an order, you confirm that:</h3>
                        <ul className="text-left list-disc pl-5 space-y-2 mb-6 text-pink-800 inline-block">
                            <li>You've read and accept these Terms</li>
                            <li>You're authorized to make the purchase</li>
                            <li>All provided information is accurate</li>
                        </ul>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <p className="text-pink-700 font-medium">
                                Need clarification? <a href="https://wa.me/254712403671" className="text-pink-600 underline">Chat with us on WhatsApp</a> before ordering.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TermsOfServicePage;