import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const ContactUs = () => {
    return (
        <section className="bg-[#fff5f5] py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with pink accent */}
                <div className="text-center mb-12">
                    <h4 className="text-3xl sm:text-4xl font-light text-pink-900 mb-4">
                        Connect With Us
                    </h4>
                    <p className="text-pink-800/80 max-w-2xl mx-auto">
                        We're here to help! Reach out for styling advice, product questions or wholesale inquiries.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {/* Location Card */}
                    <div className="relative bg-white p-8 rounded-xl border border-pink-50 hover:border-pink-100 transition-all duration-300 group overflow-hidden hover:shadow-lg hover:shadow-pink-50">
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 to-pink-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                            <div className="bg-gradient-to-br from-pink-100 to-pink-200 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 shadow-pink-100/50">
                                <MapPin className="w-6 h-6 text-pink-700" strokeWidth={1.5} />
                            </div>
                            <h4 className="text-md font-medium text-pink-900 mb-3 text-center">Our Shop</h4>
                            <div className="space-y-2 text-center">
                                <p className="text-pink-800/90">Royal Palm Mall, Second Floor</p>
                                <p className="text-pink-800/90">Shop BF31, Wing B</p>
                                <p className="text-pink-800/90">Ronald Ngala Street</p>
                            </div>
                            <a
                                href="https://maps.google.com/?q=Royal+Palm+Mall+Ronald+Ngala+Nairobi"
                                target="_blank"
                                className="mt-4 mx-auto w-fit flex items-center text-sm font-medium text-pink-600 hover:text-pink-700 transition-colors group/link"
                            >
                                View on Map
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1">
                                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Phone/WhatsApp Card */}
                    <div className="relative bg-white p-8 rounded-xl border border-pink-50 hover:border-pink-100 transition-all duration-300 group overflow-hidden hover:shadow-lg hover:shadow-pink-50">
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 to-pink-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                            <div className="bg-gradient-to-br from-pink-100 to-pink-200 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 shadow-pink-100/50">
                                <Phone className="w-6 h-6 text-pink-700" strokeWidth={1.5} />
                            </div>
                            <h4 className="text-md font-medium text-pink-900 mb-3 text-center">Call/WhatsApp</h4>
                            <div className="space-y-3 text-center">
                                <p className="text-pink-800/90">
                                    <a href="tel:+254712403671" className="hover:text-pink-700 transition-colors font-medium">
                                        +254 712 403 671
                                    </a>
                                </p>
                                <a
                                    href="https://wa.me/254712403671"
                                    className="mx-auto w-fit inline-flex items-center text-sm font-medium text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] px-4 py-2 rounded-full transition-all shadow-sm hover:shadow-md"
                                >
                                    <MessageCircle className="w-4 h-4 mr-2" strokeWidth={1.5} />
                                    Chat Now
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Email Card */}
                    <div className="relative bg-white p-8 rounded-xl border border-pink-50 hover:border-pink-100 transition-all duration-300 group overflow-hidden hover:shadow-lg hover:shadow-pink-50">
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 to-pink-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                            <div className="bg-gradient-to-br from-pink-100 to-pink-200 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 shadow-pink-100/50">
                                <Mail className="w-6 h-6 text-pink-700" strokeWidth={1.5} />
                            </div>
                            <h4 className="text-md font-medium text-pink-900 mb-3 text-center">Email Us</h4>
                            <div className="space-y-3 text-center">
                                <p className="text-pink-800/90">
                                    <a href="mailto:info@trendycollections.co.ke" className="hover:text-pink-700 transition-colors font-medium">
                                        info@trendycollections.co.ke
                                    </a>
                                </p>
                                <div className="text-xs font-medium text-pink-500 bg-pink-50 inline-block px-2 py-1 rounded-full">
                                    Response within 24 hours
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hours Card */}
                    <div className="relative bg-white p-8 rounded-xl border border-pink-50 hover:border-pink-100 transition-all duration-300 group overflow-hidden hover:shadow-lg hover:shadow-pink-50">
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 to-pink-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                            <div className="bg-gradient-to-br from-pink-100 to-pink-200 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 shadow-pink-100/50">
                                <Clock className="w-6 h-6 text-pink-700" strokeWidth={1.5} />
                            </div>
                            <h4 className="text-md font-medium text-pink-900 mb-3 text-center">Visit Us</h4>
                            <div className="space-y-2 text-center">
                                <p className="text-pink-800/90 flex justify-between max-w-xs mx-auto">
                                    <span className="text-pink-700 font-medium">Mon-Fri:</span>
                                    <span>8AM - 6PM</span>
                                </p>
                                <p className="text-pink-800/90 flex justify-between max-w-xs mx-auto">
                                    <span className="text-pink-700 font-medium">Saturday:</span>
                                    <span>9AM - 5PM</span>
                                </p>
                                <p className="text-pink-800/90 flex justify-between max-w-xs mx-auto">
                                    <span className="text-pink-700 font-medium">Sunday:</span>
                                    <span>Closed</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Instagram CTA */}
                <div className="mt-16 text-center">
                    <p className="text-pink-900 mb-4">Follow us for daily style inspiration</p>
                    <a
                        href="https://www.instagram.com/trendy.collection01/?hl=en"
                        className="inline-flex items-center bg-pink-50 text-pink-600 px-6 py-3 rounded-full hover:bg-pink-100 transition-colors"
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        @trendy.collection01
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;