import TrendyHero from "../../../assets/images/TrendyHero.webp";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="relative h-screen min-h-[600px] max-h-[1200px] overflow-hidden">
                {/* Parallax Background Image */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${TrendyHero})` }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />

                {/* Content Container */}
                <div className="relative z-10 h-full flex items-center">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl">
                            {/* Subtle decorative element */}
                            <div className="w-16 h-0.5 bg-white mb-6 opacity-80" />
                            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-6 leading-tight tracking-tight">
                                <span className="block fade-in-up-delay-200">Handcrafted</span>
                                <span className="block fade-in-up-delay-400">Luxury Designs</span>
                            </h1>

                            <p className="text-white/90 text-lg md:text-xl lg:text-2xl mb-10 font-light max-w-lg fade-in-up-delay-600">
                                Timeless elegance woven into every thread of our premium home collections.
                            </p>

                            <div className="fade-in-up-delay-800">
                                <button className="group relative flex items-center gap-2 bg-transparent text-white px-0 py-3 text-sm font-medium uppercase tracking-widest hover:text-white/80 transition-all duration-500 overflow-hidden">
                                    <a className="flex items-center gap-2 bg-transparent" href="/products?category=all">
                                        <span className="relative z-10">Discover Collections</span>
                                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        <span className="absolute bottom-0 left-0 h-px w-full bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 fade-in-delay-1500">
                    <div className="animate-bounce flex flex-col items-center">
                        <span className="text-xs text-white/80 tracking-widest mb-2">SCROLL</span>
                        <div className="w-px h-8 bg-white/50"></div>
                    </div>
                </div>
            </section >
        </div >
    )
}