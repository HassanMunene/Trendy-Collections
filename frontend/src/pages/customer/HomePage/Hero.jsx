import HeroImage2 from "../../../assets/images/hero-dt-data.jpg";

export default function () {
    return (
        <div className="bg-gray-100">
            {/* Hero Section */}
            <section className="relative h-[90vh] min-h-[500px] max-h-[800px] overflow-hidden">
                {/* Background Image - Fixed version */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${HeroImage2})`
                    }}
                >
                    {/* Gradient Overlay (more modern than plain opacity) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/20" />
                </div>

                {/* Content Container */}
                <div className="relative z-10 h-full flex items-center">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-lg">
                            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-light mb-4 leading-tight">
                                Handcrafted luxury designs
                            </h1>
                            <p className="text-white text-lg md:text-xl mb-8 font-light max-w-md">
                                From our craftsmanship
                            </p>
                            <button className="bg-white text-black px-8 py-3.5 text-sm font-medium uppercase tracking-wider hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                                SHOP PRODUCTS
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}