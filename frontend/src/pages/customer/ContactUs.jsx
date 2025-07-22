import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const ContactUs = () => {
    return (
        <section className="bg-[#fff5f5] py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with pink accent */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-light text-pink-900 mb-4">
                        Connect With Us
                    </h1>
                    <p className="text-pink-800/80 max-w-2xl mx-auto">
                        We're here to help! Reach out for styling advice, product questions, or wholesale inquiries.
                    </p>
                </div>

                {/* Pink-themed contact cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {/* Location */}
                    <div className="bg-white p-6 rounded-lg border border-pink-100 hover:shadow-pink-100 hover:shadow-md transition-all">
                        <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                            <MapPin className="w-6 h-6 text-pink-600" />
                        </div>
                        <h3 className="text-lg font-medium text-pink-900 mb-2">Our Boutique</h3>
                        <p className="text-pink-800/90">
                            Royal Palm Mall, Second Floor<br />
                            Shop BF31, Wing B<br />
                            Ronald Ngala Street, Nairobi
                        </p>
                        <a
                            href="https://maps.google.com/?q=Royal+Palm+Mall+Ronald+Ngala+Nairobi"
                            target="_blank"
                            className="inline-block mt-3 text-sm text-pink-600 hover:underline"
                        >
                            View on Map →
                        </a>
                    </div>

                    {/* Phone/WhatsApp */}
                    <div className="bg-white p-6 rounded-lg border border-pink-100 hover:shadow-pink-100 hover:shadow-md transition-all">
                        <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Phone className="w-6 h-6 text-pink-600" />
                        </div>
                        <h3 className="text-lg font-medium text-pink-900 mb-2">Call/WhatsApp</h3>
                        <p className="text-pink-800/90 mb-2">
                            <a href="tel:+254712403671" className="hover:text-pink-600 transition-colors">
                                +254 712 403 671
                            </a>
                        </p>
                        <a
                            href="https://wa.me/254712403671"
                            className="inline-flex items-center text-sm text-white bg-[#25D366] px-3 py-1 rounded-full mt-1"
                        >
                            <MessageCircle className="w-4 h-4 mr-1" />
                            Chat Now
                        </a>
                    </div>

                    {/* Email */}
                    <div className="bg-white p-6 rounded-lg border border-pink-100 hover:shadow-pink-100 hover:shadow-md transition-all">
                        <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Mail className="w-6 h-6 text-pink-600" />
                        </div>
                        <h3 className="text-lg font-medium text-pink-900 mb-2">Email Us</h3>
                        <p className="text-pink-800/90">
                            <a href="mailto:info@trendycollections.co.ke" className="hover:text-pink-600 transition-colors">
                                info@trendycollections.co.ke
                            </a>
                        </p>
                        <p className="text-xs text-pink-500 mt-2">Response within 24 hours</p>
                    </div>

                    {/* Hours */}
                    <div className="bg-white p-6 rounded-lg border border-pink-100 hover:shadow-pink-100 hover:shadow-md transition-all">
                        <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Clock className="w-6 h-6 text-pink-600" />
                        </div>
                        <h3 className="text-lg font-medium text-pink-900 mb-2">Visit Us</h3>
                        <p className="text-pink-800/90">
                            Mon-Fri: 9AM - 6PM<br />
                            Saturday: 10AM - 4PM<br />
                            Sunday: Closed
                        </p>
                    </div>
                </div>

                {/* Pink-themed contact form */}
                <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg border border-pink-100 shadow-sm">
                    <h2 className="text-2xl font-light text-pink-900 mb-6">Send a Message</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-pink-800 mb-1">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 border border-pink-200 focus:border-pink-400 focus:ring-1 focus:ring-pink-200 focus:outline-none rounded-md"
                                    placeholder="Jane Muthoni"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-pink-800 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 border border-pink-200 focus:border-pink-400 focus:ring-1 focus:ring-pink-200 focus:outline-none rounded-md"
                                    placeholder="jane@example.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-pink-800 mb-1">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full px-4 py-3 border border-pink-200 focus:border-pink-400 focus:ring-1 focus:ring-pink-200 focus:outline-none rounded-md"
                                placeholder="Order Inquiry"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-pink-800 mb-1">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-4 py-3 border border-pink-200 focus:border-pink-400 focus:ring-1 focus:ring-pink-200 focus:outline-none rounded-md"
                                placeholder="Your beautiful message..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 px-6 text-sm font-medium uppercase tracking-wider hover:from-pink-600 hover:to-pink-700 transition-all rounded-md shadow-pink-200 hover:shadow-md"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Instagram CTA */}
                <div className="mt-16 text-center">
                    <p className="text-pink-900 mb-4">Follow us for daily style inspiration</p>
                    <a
                        href="https://instagram.com/yourhandle"
                        className="inline-flex items-center bg-pink-50 text-pink-600 px-6 py-3 rounded-full hover:bg-pink-100 transition-colors"
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        @trendycollectionske
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;