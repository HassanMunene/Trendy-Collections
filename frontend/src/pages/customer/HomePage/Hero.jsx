import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const words = ["Luxury", "Elegant", "Premium", "Handcrafted"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="relative h-screen min-h-[600px] max-h-[1200px] overflow-hidden">
                {/* Parallax Background Image with multiple layers */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
                        style={{ backgroundImage: "url('/images/TrendyHero.webp')" }}
                    />
                    <div className="absolute inset-0 bg-black/30" />
                </div>

                {/* Gradient Overlay with directional emphasis */}
                <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/30 via-black/50 to-black/70" />

                {/* Floating decorative elements */}
                <div className="absolute top-20 right-20 z-0 w-40 h-40 rounded-full bg-pink-500/10 blur-3xl" />
                <div className="absolute bottom-1/4 left-10 z-0 w-60 h-60 rounded-full bg-amber-400/10 blur-3xl" />

                {/* Content Container */}
                <div className="relative z-20 h-full flex items-center">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl">
                            {/* Animated decorative element */}
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: 64 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="h-0.5 bg-white mb-6 opacity-80"
                            />

                            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-6 leading-tight tracking-tight">
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="block"
                                >
                                    <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-pink-100">
                                        {words[currentWordIndex]}
                                    </span>
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="block"
                                >
                                    Home Collections
                                </motion.span>
                            </h1>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="text-white/90 text-lg md:text-xl lg:text-2xl mb-10 font-light max-w-lg"
                            >
                                Timeless elegance woven into every thread of our premium home collections.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.9 }}
                            >
                                <a href="/products?category=all">
                                    <button className="group relative inline-flex items-center overflow-hidden rounded-full border-2 border-white/30 px-8 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 hover:border-white/60 hover:bg-white/10">
                                        <span className="relative z-10 text-sm font-medium uppercase tracking-widest">
                                            Discover Collections
                                        </span>
                                        <span className="ml-2 relative z-10">
                                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </span>
                                        <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </button>
                                </a>
                            </motion.div>

                            {/* Featured product tags */}
                            <motion.div
                                className="mt-12 flex flex-wrap gap-3"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 1.2 }}
                            >
                                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/10">
                                    Curtains
                                </span>
                                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/10">
                                    Pillows
                                </span>
                                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/10">
                                    +12 Collections
                                </span>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Animated Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.5 }}
                >
                    <div className="flex flex-col items-center">
                        <span className="text-xs text-white/80 tracking-widest mb-2">EXPLORE</span>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <ChevronDown className="w-5 h-5 text-white/70" />
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}