import { Check, Truck, Lock, Box, Star, Clock } from 'lucide-react';

const Sidebar = () => {
    return (
        <aside className="lg:w-72 w-full ps-4 py-8 lg:sticky top-15 self-start">
            <div className="bg-white rounded-lg shadow-xl border border-rose-100 py-6 px-2 h-full flex flex-col justify-between">
                <div className="flex flex-col gap-8">
                    <h4 className="font-bold !text-rose-600 text-center font-serif mb-2">Why Shop With Us?</h4>
                    <div className="space-y-6">
                        {/* Feature 1 */}
                        <div className="flex items-start gap-2">
                            <div className="w-10 h-10 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center p-2">
                                <Check className='h-6 w-6' />
                            </div>
                            <div>
                                <h4 className="text-base font-semibold">Premium Quality</h4>
                                <p className="text-sm text-gray-600">Crafted with top-tier materials from ethical sources.</p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-start gap-2">
                            <div className="w-10 h-10 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <Truck className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Flexible Delivery Options</h4>
                                <p className="text-sm text-gray-600 mb-3">We deliver Countrywide with multiple options</p>

                                <div className="grid grid-cols-1 gap-3">
                                    {/* Standard Delivery */}
                                    <div className="flex items-start gap-2 p-3 bg-white rounded-lg border border-gray-100 hover:border-rose-200 transition-colors">
                                        <div className="w-8 h-8 bg-green-50 text-green-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium">Standard</h4>
                                            <p className="text-xs text-gray-500">1 business day</p>
                                            <p className="text-xs text-gray-400 mt-1">Countrywide</p>
                                        </div>
                                    </div>

                                    {/* Pickup Mtaani - Nairobi Only */}
                                    <div className="flex items-start gap-2 p-3 bg-white rounded-lg border border-gray-100 hover:border-rose-200 transition-colors">
                                        <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-1">
                                                <h4 className="text-sm font-medium">Pickup Mtaani</h4>
                                                <span className="text-[10px] bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded-full">Nairobi</span>
                                            </div>
                                            <p className="text-xs text-gray-500">Same day collection</p>
                                            <p className="text-xs text-gray-400 mt-1">Select locations</p>
                                        </div>
                                    </div>

                                    {/* Speedaf */}
                                    <div className="flex items-start gap-2 p-3 bg-white rounded-lg border border-gray-100 hover:border-rose-200 transition-colors">
                                        <div className="w-8 h-8 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium">Speedaf Express</h4>
                                            <p className="text-xs text-gray-500">1 business day</p>
                                            <p className="text-xs text-gray-400 mt-1">Major cities</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom: Trust & Social Proof */}
                <div className="mt-12 pt-6 border-t border-gray-100">
                    {/* Social Media Links */}
                    <div className="flex justify-center gap-4 mb-6">
                        {['facebook', 'instagram', 'pinterest'].map((social) => (
                            <a key={social} href="#" className="w-10 h-10 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center hover:bg-rose-100 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d={social === 'facebook' ? "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" :
                                        social === 'instagram' ? "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" :
                                            "M12.813 0c-2.65 0-4.945.633-6.609 1.902-1.732 1.324-2.637 3.328-2.637 5.566 0 1.935.616 3.563 1.707 4.793.996 1.117 2.191 1.695 3.715 1.819v-3.002c-.574-.09-1.066-.328-1.473-.707-.492-.46-.766-1.13-.766-1.973 0-1.559 1.043-3.344 2.715-4.547 1.68-1.207 3.785-1.816 6.148-1.816h.395v12.719c0 .633-.32 1.363-.707 1.746-.387.383-1.113.707-1.746.707h-1.582c-.633 0-1.363-.32-1.746-.707-.383-.387-.707-1.113-.707-1.746V8.926h-1.527v11.363c0 1.324.547 2.508 1.473 3.383.93.879 2.117 1.328 3.383 1.328h1.582c1.324 0 2.508-.547 3.383-1.473.879-.93 1.328-2.117 1.328-3.383V2.203h-2.02V.305h1.723c.633 0 1.113.273 1.438.602.328.328.602.805.602 1.438v18.512c0 1.809-.766 3.383-2.02 4.488-1.258 1.109-2.832 1.656-4.488 1.656h-1.582c-1.809 0-3.383-.766-4.488-2.02-1.109-1.258-1.656-2.832-1.656-4.488V7.488c-2.324-.273-4.328-1.656-5.566-3.715C.633 2.508 0 .301 0 0h12.813z"} />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
                {/* Bottom: Trust & Badge */}
                <div className="space-y-2">
                    <div className="flex justify-center gap-2">
                        {/* Secure Payments */}
                        <div className="flex flex-col items-center group">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
                                <Lock className="w-5 h-5 text-green-600" />
                            </div>
                            <span className="sr-only">Secure Payments</span>
                        </div>

                        {/* Fast Delivery */}
                        <div className="flex flex-col items-center group">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
                                <Box  className="w-5 h-5 text-blue-600" />
                            </div>
                            <span className="sr-only">Nationwide Delivery</span>
                        </div>

                        {/* Verified Reviews */}
                        <div className="flex flex-col items-center group">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
                                <Star className="w-5 h-5 text-amber-500" />
                            </div>
                            <span className="sr-only">Verified Reviews</span>
                        </div>

                        {/* Customer Support */}
                        <div className="flex flex-col items-center group">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
                                <Clock className="w-5 h-5 text-rose-600" />
                            </div>
                            <span className="sr-only">24/7 Support</span>
                        </div>
                    </div>

                    {/* Customer Count - Kept as text for social proof */}
                    <p className="text-xs text-center text-gray-400 mt-2">
                        Trusted by 10,000+ Kenyans
                    </p>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;