import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export default function ShippingDeliveryPage() {
    return (
        <section className="bg-[#fff5f5] py-12 sm:py-16 lg:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-light text-pink-900 mb-4">
                        Shipping & Delivery
                    </h1>
                    <p className="text-pink-800/80 max-w-2xl mx-auto">
                        Everything you need to know about getting your Trendy Collections order delivered.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <Card className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-pink-50">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {/* Nairobi Delivery */}
                        <AccordionItem value="nairobi" className="border-b border-pink-50">
                            <AccordionTrigger className="hover:no-underline text-left">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-pink-100 p-2 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-pink-700"
                                        >
                                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                        </svg>
                                    </div>
                                    <span className="font-medium text-pink-900 text-lg">
                                        How does delivery work within Nairobi?
                                    </span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pt-2 pb-4 pl-14 text-pink-800/90">
                                <ul className="space-y-3 list-disc pl-5">
                                    <li>We use <strong>boda boda riders</strong> for fast delivery within Nairobi.</li>
                                    <li>Payment is made <strong>after</strong> you receive and inspect your order.</li>
                                    <li>Delivery time: <strong>Same day</strong> for orders placed before 2PM.</li>
                                    <li>Free delivery within <strong>CBD areas</strong> (minimum order KSh 3,000).</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Outside Nairobi - Matatu */}
                        <AccordionItem value="outside-matatu" className="border-b border-pink-50">
                            <AccordionTrigger className="hover:no-underline text-left">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-pink-100 p-2 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-pink-700"
                                        >
                                            <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m7 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
                                        </svg>
                                    </div>
                                    <span className="font-medium text-pink-900 text-lg">
                                        How do I receive orders outside Nairobi via matatu?
                                    </span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pt-2 pb-4 pl-14 text-pink-800/90">
                                <ul className="space-y-3 list-disc pl-5">
                                    <li>You can choose your preferred <strong>matatu company</strong> or we'll recommend reliable options.</li>
                                    <li>Payment is required <strong>before</strong> we dispatch your order.</li>
                                    <li>We'll provide the <strong>matatu details</strong> and tracking information.</li>
                                    <li>Delivery time: <strong>1-3 days</strong> depending on your location.</li>
                                    <li>You'll need to <strong>pick up</strong> from your nearest matatu stage.</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>

                        {/* Outside Nairobi - Speedaf */}
                        <AccordionItem value="outside-speedaf" className="border-b border-pink-50">
                            <AccordionTrigger className="hover:no-underline text-left">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-pink-100 p-2 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-pink-700"
                                        >
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polyline points="12 6 12 12 16 14"></polyline>
                                        </svg>
                                    </div>
                                    <span className="font-medium text-pink-900 text-lg">
                                        Can I use Speedaf Logistics for delivery?
                                    </span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pt-2 pb-4 pl-14 text-pink-800/90">
                                <ul className="space-y-3 list-disc pl-5">
                                    <li>Yes! We partner with <strong>Speedaf Logistics Kenya</strong> for reliable deliveries.</li>
                                    <li>Available only if Speedaf serves <strong>your location</strong> (we'll confirm during checkout).</li>
                                    <li>Payment is required <strong>before</strong> dispatch.</li>
                                    <li>Delivery time: <strong>2-5 business days</strong>.</li>
                                    <li>You'll receive <strong>tracking information</strong> via SMS/email.</li>
                                    <li>Additional charges may apply for <strong>remote areas</strong>.</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>

                        {/* General Delivery FAQ */}
                        <AccordionItem value="general" className="border-b border-pink-50">
                            <AccordionTrigger className="hover:no-underline text-left">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-pink-100 p-2 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-pink-700"
                                        >
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                            <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                        </svg>
                                    </div>
                                    <span className="font-medium text-pink-900 text-lg">
                                        General Delivery Information
                                    </span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pt-2 pb-4 pl-14 text-pink-800/90">
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-medium text-pink-700 mb-2">Order Processing:</h4>
                                        <p>Orders take <strong>1 business day</strong> to process before dispatch.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-pink-700 mb-2">Contact Us:</h4>
                                        <p>Need help? WhatsApp us at <a href="https://wa.me/254712403671" className="text-pink-600 underline">+254 712 403 671</a> for delivery assistance.</p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </Card>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <Card className="bg-gradient-to-r from-pink-50 to-pink-100 border border-pink-200 p-6 inline-block">
                        <h3 className="text-xl font-medium text-pink-900 mb-3">Still have questions?</h3>
                        <a
                            href="https://wa.me/254712403671"
                            className="inline-flex items-center bg-white text-pink-600 px-6 py-3 rounded-full hover:bg-pink-50 transition-colors shadow-sm"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-2"
                            >
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg>
                            Chat with our delivery team
                        </a>
                    </Card>
                </div>
            </div>
        </section>
    );
}