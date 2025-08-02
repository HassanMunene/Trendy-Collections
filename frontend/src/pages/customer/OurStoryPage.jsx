import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Home, Sparkles, Ruler, Truck } from 'lucide-react';

const OurStoryPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200 text-pink-900 overflow-x-hidden">
            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
                <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
                    {/* Founder Image Section - Optimized for Mobile */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full lg:w-2/5"
                    >
                        <div className="relative aspect-square max-w-[280px] sm:max-w-md mx-auto">
                            {/* Responsive Image Loading */}
                            <div
                                className="absolute inset-0 bg-cover bg-center rounded-2xl shadow-xl overflow-hidden"
                                style={{
                                    backgroundImage: "url('/images/founder-photo.webp')",
                                    backgroundImage: "-webkit-image-set(url('/images/founder-photo.webp') 1x, url('/images/founder-photo.webp') 2x)"
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/30 via-pink-700/10 to-transparent" />
                            </div>

                            {/* Decorative Elements - Adjusted for Mobile */}
                            <motion.div
                                animate={{
                                    rotate: [0, 5, -5, 0],
                                    y: [0, -8, 8, 0]
                                }}
                                transition={{
                                    duration: 12,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-2 sm:p-3 rounded-lg shadow-md border border-pink-200 z-10"
                            >
                                <div className="flex items-center gap-1 sm:gap-2">
                                    <Home className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600" />
                                    <span className="text-xs sm:text-sm font-medium text-pink-800">Since 2021</span>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{
                                    rotate: [0, -3, 3, 0],
                                    x: [0, 4, -4, 0]
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 2
                                }}
                                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-gradient-to-br from-pink-500 to-pink-600 text-white p-2 sm:p-3 rounded-lg shadow-md z-10"
                            >
                                <div className="flex items-center gap-1 sm:gap-2">
                                    <Ruler className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span className="text-xs sm:text-sm font-medium">Custom Designs</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Story Content - Mobile Optimized */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="w-full lg:w-3/5 mt-6 sm:mt-0"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="inline-block mb-4 sm:mb-6"
                        >
                            <span className="text-xs sm:text-sm font-medium bg-pink-100 text-pink-700 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full">
                                Our Heritage
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
                        >
                            Crafting Homes <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-700">
                                With Love
                            </span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="text-pink-800 space-y-3 sm:space-y-4 text-sm sm:text-base"
                        >
                            <p>
                                Founded in 2021, Trendy Collections began as a passionate endeavor to <strong>redefine home aesthetics</strong> across Kenya. What started with a single sewing machine and a vision has blossomed into Nairobi's favorite destination for premium home decor.
                            </p>

                            <div className="relative bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-pink-100 mt-6">
                                <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 bg-pink-600 text-white p-1.5 sm:p-2 rounded-full">
                                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                                </div>
                                <p className="italic text-pink-700 text-sm sm:text-base">
                                    "We don't just sell curtains and pillows - we create the <strong>backdrop for your life's most precious moments</strong>."
                                </p>
                                <p className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium text-pink-600">
                                    — Founder, Trendy Collections
                                </p>
                            </div>

                            <p>
                                Our journey has been guided by three unwavering principles: <strong>quality craftsmanship</strong>, <strong>affordable luxury</strong>, and <strong>personalized service</strong>. Every stitch tells our story of dedication to transforming houses into homes.
                            </p>
                        </motion.div>

                        {/* Milestones - Responsive Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4"
                        >
                            {[
                                { icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />, number: "1000+", label: "Happy Homes" },
                                { icon: <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />, number: "10+", label: "Cities Served" },
                                { icon: <Ruler className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />, number: "500+", label: "Custom Orders" },
                                { icon: <Sparkles className="w-5 h-5 sm:w-6 text-pink-600" />, number: "99.9%", label: "Satisfaction" }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-pink-100 flex flex-col items-center text-center"
                                >
                                    <div className="mb-1 sm:mb-2">{item.icon}</div>
                                    <div className="text-xl sm:text-2xl font-bold text-pink-700">{item.number}</div>
                                    <div className="text-xs sm:text-sm text-pink-600 mt-0.5 sm:mt-1">{item.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Footer - Mobile Optimized */}
            <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="bg-white/50 backdrop-blur-sm border-t border-pink-200 py-6"
            >
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-lg sm:text-xl font-bold text-pink-900 flex items-center gap-2">
                            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600" />
                            Trendy Collections
                        </div>

                        <div className="text-xs sm:text-sm text-pink-700 text-center">
                            © {new Date().getFullYear()} Trendy Collections. Crafted with love in Nairobi.
                        </div>
                    </div>
                </div>
            </motion.footer>
        </div>
    );
};

export default OurStoryPage;