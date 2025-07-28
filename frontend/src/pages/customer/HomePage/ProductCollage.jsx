const ProductCollage = () => {
    return (
        <section className="bg-white">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    {/* Background Image */}
                    <div className="aspect-[16/9] md:aspect-[21/9] relative overflow-hidden bg-[#f6f2f0]">
                        <img
                            src="/images/TrendyHero2.webp"
                            alt="Shop trendy"
                            className="w-full h-full object-cover"
                        />

                        {/* Shop Bedroom Button */}
                        <div className="absolute bottom-6 left-6">
                            <a href="/products?category=all">
                                <button className="bg-white bg-opacity-90 text-black px-4 py-2 text-sm font-medium hover:bg-opacity-100 transition-all">
                                    Shop With us
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductCollage;