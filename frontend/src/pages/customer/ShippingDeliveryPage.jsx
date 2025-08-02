import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { ScanText, Building2, Clock, Info, MessageSquare } from "lucide-react";

export const metadata = {
    title: "Shipping & Delivery Policy | Trendy Collections Kenya",
    description: "Learn about our delivery options in Nairobi (boda boda) and across Kenya (matatu/Speedaf). Cash on delivery available in Nairobi.",
    keywords: ["Trendy Collections delivery", "Nairobi home decor shipping", "Kenya curtains delivery", "boda boda delivery Nairobi", "Speedaf Logistics Kenya"],
};

export default function ShippingDeliveryPage() {
    return (
        <section className="bg-[#fff5f5] py-12 sm:py-16 lg:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <header className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-light text-pink-900 mb-4">
                        Shipping & Delivery
                    </h1>
                    <p className="text-pink-800/80 max-w-2xl mx-auto">
                        Everything you need to know about getting your Trendy Collections order delivered.
                    </p>
                </header>

                {/* FAQ Accordion */}
                <article itemScope itemType="https://schema.org/FAQPage">
                    <Card className="bg-white p-6 sm:p-8 rounded-xl border border-pink-50">
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {/* Nairobi Delivery */}
                            <AccordionItem value="nairobi" className="border-b border-pink-50" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                <AccordionTrigger className="hover:no-underline text-left">
                                    <div className="flex items-center space-x-3">
                                        <div className="bg-pink-100 p-2 rounded-full">
                                            <Building2 width={20} height={20} className="text-pink-700" />
                                        </div>
                                        <span itemProp="name" className="font-medium text-pink-900 text-lg">
                                            How does delivery work within Nairobi?
                                        </span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pt-2 pb-4 pl-14 text-pink-800/90" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                    <div itemProp="text">
                                        <ul className="space-y-3 list-disc pl-5">
                                            <li>We use <strong>boda boda riders</strong> for fast delivery within Nairobi.</li>
                                            <li>Payment is made <strong>after</strong> you receive and inspect your order.</li>
                                            <li>Delivery time: <strong>Same day</strong> for orders placed before 6PM.</li>
                                        </ul>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            {/* Outside Nairobi - Matatu */}
                            <AccordionItem value="outside-matatu" className="border-b border-pink-50" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                <AccordionTrigger className="hover:no-underline text-left">
                                    <div className="flex items-center space-x-3">
                                        <div className="bg-pink-100 p-2 rounded-full">
                                            <ScanText width={20} height={20} className="text-pink-700" />
                                        </div>
                                        <span itemProp="name" className="font-medium text-pink-900 text-lg">
                                            How do I receive orders outside Nairobi via matatu?
                                        </span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pt-2 pb-4 pl-14 text-pink-800/90" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                    <div itemProp="text">
                                        <ul className="space-y-3 list-disc pl-5">
                                            <li>You can choose your preferred <strong>matatu company</strong> or we'll recommend reliable options.</li>
                                            <li>Payment is required <strong>before</strong> we dispatch your order.</li>
                                            <li>We'll provide the <strong>matatu details</strong> and tracking information.</li>
                                            <li>Delivery time: <strong>1-3 days</strong> depending on your location.</li>
                                        </ul>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            {/* Outside Nairobi - Speedaf */}
                            <AccordionItem value="outside-speedaf" className="border-b border-pink-50" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                <AccordionTrigger className="hover:no-underline text-left">
                                    <div className="flex items-center space-x-3">
                                        <div className="bg-pink-100 p-2 rounded-full">
                                            <Clock width={20} height={20} className="text-pink-700" />
                                        </div>
                                        <span itemProp="name" className="font-medium text-pink-900 text-lg">
                                            Can I use Speedaf Logistics for delivery?
                                        </span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pt-2 pb-4 pl-14 text-pink-800/90" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                    <div itemProp="text">
                                        <ul className="space-y-3 list-disc pl-5">
                                            <li>Yes! We partner with <strong>Speedaf Logistics Kenya</strong> for reliable deliveries.</li>
                                            <li>Available only if Speedaf serves <strong>your location</strong> (we'll confirm during checkout).</li>
                                            <li>Payment is required <strong>before</strong> dispatch.</li>
                                            <li>Delivery time: <strong>2-5 business days</strong>.</li>
                                            <li>You'll receive <strong>tracking information</strong> via SMS/email.</li>
                                        </ul>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            {/* General Delivery FAQ */}
                            <AccordionItem value="general" className="border-b border-pink-50" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                <AccordionTrigger className="hover:no-underline text-left">
                                    <div className="flex items-center space-x-3">
                                        <div className="bg-pink-100 p-2 rounded-full">
                                            <Info width={20} height={20} className="text-red-700" />
                                        </div>
                                        <span itemProp="name" className="font-medium text-pink-900 text-lg">
                                            Need Delivery Help?
                                        </span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pt-2 pb-4 pl-14 text-pink-800/90" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                    <div className="space-y-4" itemProp="text">
                                        <div>
                                            <h4 className="font-medium text-pink-700 mb-2">Contact Us:</h4>
                                            <p>Need help? WhatsApp us at <a href="https://wa.me/254712403671" className="text-pink-600 underline">+254 712 403 671</a> for delivery assistance.</p>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </Card>
                </article>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <Card className="bg-gradient-to-r from-pink-50 to-pink-100 border border-pink-200 p-6 inline-block">
                        <h3 className="text-xl font-medium text-pink-900 mb-3">Still have questions?</h3>
                        <a
                            href="https://wa.me/254712403671"
                            className="inline-flex gap-2 items-center bg-white text-pink-600 px-6 py-3 rounded-full hover:bg-pink-50 transition-colors shadow-sm"
                        >
                            <MessageSquare width={20} height={20} />
                            Chat with our delivery team
                        </a>
                    </Card>
                </div>
            </div>
        </section>
    );
}