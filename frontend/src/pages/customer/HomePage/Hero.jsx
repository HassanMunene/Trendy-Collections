import TrendyHero from "../../../assets/images/TrendyHero.webp";
import { ArrowRight } from "lucide-react"; // or any other arrow icon from your preferred library

export default function HeroSection() {
    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="relative h-screen min-h-[600px] max-h-[1200px] overflow-hidden">
                {/* Parallax Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${TrendyHero})`, willChange: 'transform' }}
                >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
                </div>

                {/* Content Container */}
                <div className="relative z-10 h-full flex items-center">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl">
                            {/* Subtle decorative element */}
                            <div className="w-16 h-0.5 bg-white mb-6 opacity-80" />

                            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-6 leading-tight tracking-tight">
                                <span className="block opacity-0 animate-[fadeInUp_1s_0.2s_ease-out_forwards]">Handcrafted</span>
                                <span className="block opacity-0 animate-[fadeInUp_1s_0.4s_ease-out_forwards]">Luxury Designs</span>
                            </h1>

                            <p className="text-white/90 text-lg md:text-xl lg:text-2xl mb-10 font-light max-w-lg opacity-0 animate-[fadeInUp_1s_0.6s_ease-out_forwards]">
                                Timeless elegance woven into every thread of our premium home collections
                            </p>

                            <div className="opacity-0 animate-[fadeInUp_1s_0.8s_ease-out_forwards]">
                                <button className="group relative flex items-center gap-2 bg-transparent text-white px-0 py-3 text-sm font-medium uppercase tracking-widest hover:text-white/80 transition-all duration-500 overflow-hidden">
                                    <span className="relative z-10">Discover Collections</span>
                                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    <span className="absolute bottom-0 left-0 h-px w-full bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 opacity-0 animate-[fadeIn_1s_1.5s_ease-out_forwards]">
                    <div className="animate-bounce flex flex-col items-center">
                        <span className="text-xs text-white/80 tracking-widest mb-2">SCROLL</span>
                        <div className="w-px h-8 bg-white/50"></div>
                    </div>
                </div>
            </section>
        </div>
    )
}