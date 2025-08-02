import { ChevronDown, ShoppingBag, Truck, CreditCard, RefreshCw, MessageCircle } from 'lucide-react';

export const metadata = {
    title: "FAQs | Trendy Collections Kenya - Curtains, Pillows & Home Decor",
    description: "Find answers about delivery, payments, returns, and product care for Trendy Collections' curtains, knot pillows, and home decor in Kenya.",
    keywords: [
        "Trendy Collections FAQs",
        "Kenya home decor questions",
        "curtain delivery Nairobi",
        "pillow care Kenya",
        "Nairobi furniture returns"
    ],
};

const FAQPage = () => {
    return (
        <section className="bg-[#fff5f5] py-12 sm:py-16 lg:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <header className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-light text-pink-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-pink-800/80 max-w-2xl mx-auto">
                        Everything you need to know about shopping with Trendy Collections.
                    </p>
                </header>

                {/* FAQ Accordion */}
                <div className="space-y-6">
                    {/* Delivery Section */}
                    <div className="bg-white rounded-xl border border-pink-50 overflow-hidden shadow-sm hover:shadow-md transition-all">
                        <h4 className="flex items-center px-6 py-4 bg-pink-50 text-pink-900 font-medium">
                            <Truck className="w-5 h-5 mr-3 text-pink-700" />
                            Delivery Questions
                        </h4>
                        <div className="divide-y divide-pink-50">
                            {/* Nairobi Delivery */}
                            <details className="group p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                <summary className="flex justify-between items-center cursor-pointer list-none">
                                    <span className="text-lg font-medium text-pink-900" itemProp="name">How does Nairobi delivery work?</span>
                                </summary>
                                <div className="mt-4 text-pink-800/90" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                    <div itemProp="text">
                                        <p>We offer <strong>same-day boda boda delivery</strong> within Nairobi for orders placed before 6PM:</p>
                                        <p>Cash on delivery available</p>
                                    </div>
                                </div>
                            </details>

                            {/* Upcountry Delivery */}
                            <details className="group p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                <summary className="flex justify-between items-center cursor-pointer list-none">
                                    <span className="text-lg font-medium text-pink-900" itemProp="name">Can I get delivery outside Nairobi?</span>
                                </summary>
                                <div className="mt-4 text-pink-800/90" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                    <div itemProp="text">
                                        <p>Yes! We serve all Kenya through:</p>
                                        <ul className="mt-2 space-y-2 list-disc pl-5">
                                            <li><strong>Matatu networks</strong> (your choice or our recommendation)</li>
                                            <li><strong>Speedaf Logistics</strong> to major towns (2-5 business days)</li>
                                            <li><strong>Custom arrangements</strong> for bulk orders</li>
                                        </ul>
                                        <p className="mt-3 text-sm bg-pink-50 p-3 rounded-lg">Note: Upcountry requires prepayment before dispatch</p>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>

                    {/* Payments Section */}
                    <div className="bg-white rounded-xl border border-pink-50 overflow-hidden shadow-sm hover:shadow-md transition-all">
                        <h4 className="flex items-center px-6 py-4 bg-pink-50 text-pink-900 font-medium">
                            <CreditCard className="w-5 h-5 mr-3 text-pink-700" />
                            Payment Questions
                        </h4>
                        <div className="divide-y divide-pink-50">
                            <details className="group p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                <summary className="flex justify-between items-center cursor-pointer list-none">
                                    <span className="text-lg font-medium text-pink-900" itemProp="name">What payment methods do you accept?</span>
                                </summary>
                                <div className="mt-4 text-pink-800/90" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                    <div itemProp="text">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {/* M-Pesa */}
                                            <div className="flex items-start p-4 bg-pink-50 rounded-lg">
                                                <div className="bg-pink-100 p-2 rounded-full mr-3 flex-shrink-0">
                                                    <svg className="w-5 h-5 text-pink-700" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h5 className="font-medium text-pink-900">M-Pesa</h5>
                                                    <p className="text-sm text-pink-700 mt-1">Send to: <span className="font-bold">0712 403 671</span></p>
                                                </div>
                                            </div>

                                            {/* Paybill */}
                                            <div className="flex items-start p-4 bg-pink-50 rounded-lg">
                                                <div className="bg-pink-100 p-2 rounded-full mr-3 flex-shrink-0">
                                                    <svg className="w-5 h-5 text-pink-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h5 className="font-medium text-pink-900">Paybill</h5>
                                                    <p className="text-sm text-pink-700 mt-1">
                                                        <span className="block font-bold">Business No: 492438</span>
                                                        <span className="block">Account No: 542542 (I & M Bank)</span>
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Cash on Delivery */}
                                            <div className="flex items-start p-4 bg-pink-50 rounded-lg">
                                                <div className="bg-pink-100 p-2 rounded-full mr-3 flex-shrink-0">
                                                    <svg className="w-5 h-5 text-pink-700" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M11 2h2v2h.5A1.5 1.5 0 0115 5.5V10h1v4h-1v6h1v2H8v-2h1v-6H8v-4h1V5.5A1.5 1.5 0 0110.5 4H11V2zm3 6V5.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5V8h4z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h5 className="font-medium text-pink-900">Cash on Delivery</h5>
                                                    <p className="text-sm text-pink-700 mt-1">Available within Nairobi only</p>
                                                    <p className="text-xs text-pink-500 mt-1">Pay when your order arrives</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>

                    {/* Returns & Care Section */}
                    <div className="bg-white rounded-xl border border-pink-50 overflow-hidden shadow-sm hover:shadow-md transition-all">
                        <h4 className="flex items-center px-6 py-4 bg-pink-50 text-pink-900 font-medium">
                            <RefreshCw className="w-5 h-5 mr-3 text-pink-700" />
                            Returns & Product Care
                        </h4>
                        <div className="divide-y divide-pink-50">
                            <details className="group p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                <summary className="flex justify-between items-center cursor-pointer list-none">
                                    <span className="text-lg font-medium text-pink-900" itemProp="name">What's your return policy?</span>
                                </summary>
                                <div className="mt-4 text-pink-800/90" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                    <div itemProp="text">
                                        <p>We accept returns within <strong>7 days</strong> for unused items:</p>
                                        <ul className="mt-2 space-y-2 list-disc pl-5">
                                            <li>Original tags must be attached</li>
                                            <li>Customer covers return shipping</li>
                                            <li>Refunds processed via original payment method</li>
                                        </ul>
                                        <div className="mt-3 text-sm bg-pink-50 p-3 rounded-lg">
                                            <strong>Note:</strong> Custom-made curtains/pillows are non-returnable
                                        </div>
                                    </div>
                                </div>
                            </details>

                            <details className="group p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                <summary className="flex justify-between items-center cursor-pointer list-none">
                                    <span className="text-lg font-medium text-pink-900" itemProp="name">How do I care for my curtains?</span>
                                </summary>
                                <div className="mt-4 text-pink-800/90" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                    <div itemProp="text">
                                        <p>For our Kenya's climate we recommend:</p>
                                        <ul className="mt-2 space-y-2 list-disc pl-5">
                                            <li><strong>Dust weekly</strong> with microfiber cloth</li>
                                            <li><strong>Professional cleaning</strong> every 6 months</li>
                                            <li><strong>Rotate seasonally</strong> to prevent sun damage</li>
                                        </ul>
                                        <a href="/product-care" className="mt-3 inline-block text-pink-600 underline text-sm">
                                            See detailed care guide →
                                        </a>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>

                    {/* Product Questions */}
                    <div className="bg-white rounded-xl border border-pink-50 overflow-hidden shadow-sm hover:shadow-md transition-all">
                        <h4 className="flex items-center px-6 py-4 bg-pink-50 text-pink-900 font-medium">
                            <ShoppingBag className="w-5 h-5 mr-3 text-pink-700" />
                            Product Questions
                        </h4>
                        <div className="divide-y divide-pink-50">
                            {/* Custom Curtains FAQ */}
                            <details className="group p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                <summary className="flex justify-between items-center cursor-pointer list-none">
                                    <span className="text-lg font-medium text-pink-900" itemProp="name">Do you offer custom-made curtains?</span>
                                </summary>
                                <div className="mt-4 text-pink-800/90" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                    <div itemProp="text">
                                        <p>Yes! We specialize in <strong>tailored curtains</strong> designed to your exact needs:</p>
                                        <ul className="mt-3 space-y-3 list-disc pl-5">
                                            <li>
                                                <strong>70% deposit</strong> required before production begins
                                                <div className="text-sm text-pink-600 bg-pink-50 p-2 rounded-lg mt-2">
                                                    Payable via M-Pesa/Paybill (balance paid on delivery)
                                                </div>
                                            </li>
                                            <li>
                                                <strong>Measurement service</strong> available:
                                                <ul className="mt-2 space-y-2 list-[circle] pl-5">
                                                    <li>KSh 1,500 fee for home measurements</li>
                                                    <li>Fully <strong>refundable</strong> when you order curtains</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong>Custom options</strong> include:
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                                                    <span className="flex items-center">
                                                        <svg className="w-4 h-4 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        Exact sizing
                                                    </span>
                                                    <span className="flex items-center">
                                                        <svg className="w-4 h-4 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        Fabric selection
                                                    </span>
                                                    <span className="flex items-center">
                                                        <svg className="w-4 h-4 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        Blackout lining
                                                    </span>
                                                    <span className="flex items-center">
                                                        <svg className="w-4 h-4 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        Special pleating
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="mt-4 flex flex-col sm:flex-row gap-3">
                                            <a
                                                href="https://wa.me/254712403671?text=I%20want%20custom%20curtains"
                                                className="inline-flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors"
                                            >
                                                <MessageCircle className="w-4 h-4 mr-2" />
                                                WhatsApp for Custom Order
                                            </a>
                                            <a
                                                href="/contact"
                                                className="inline-flex items-center justify-center bg-pink-100 text-pink-700 px-4 py-2 rounded-lg text-sm hover:bg-pink-200 transition-colors"
                                            >
                                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                                Book Measurement
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <a
                        href="https://wa.me/254712403671"
                        className="inline-flex items-center bg-gradient-to-r from-pink-600 to-pink-500 text-white px-8 py-4 rounded-full hover:from-pink-700 hover:to-pink-600 transition-colors shadow-lg hover:shadow-xl"
                        aria-label="Chat with Trendy Collections on WhatsApp"
                    >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Still have questions? WhatsApp Us Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQPage;