import { Plus } from 'lucide-react'

const ProductCollage = () => {
    const hotspots = [
        {
            id: 1,
            name: "Patti rug",
            price: "ksh 160-380",
            top: "75%",
            left: "15%"
        },
        {
            id: 2,
            name: "Bern bedside",
            price: "ksh 249",
            top: "45%",
            left: "85%"
        },
        {
            id: 3,
            name: "Meiko bed",
            price: "ksh 649-849",
            top: "55%",
            left: "50%"
        },
        {
            id: 4,
            name: "Bern chest",
            price: "ksh 529",
            top: "65%",
            left: "75%"
        }
    ]

    return (
        <section className="bg-white">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    {/* Background Image */}
                    <div className="aspect-[16/9] md:aspect-[21/9] relative overflow-hidden bg-[#f6f2f0]">
                        <img
                            src="https://raw.githubusercontent.com/HassanMunene/trendy-frontend/refs/heads/main/ecommerce-images/TrendyHero2.webp"
                            alt="Shop trendy"
                            className="w-full h-full object-cover"
                        />

                        {/* Shop Bedroom Button */}
                        <div className="absolute bottom-6 left-6">
                            <button className="bg-white bg-opacity-90 text-black px-4 py-2 text-sm font-medium hover:bg-opacity-100 transition-all">
                                Shop With us
                            </button>
                        </div>

                        {/* Hotspots */}
                        {hotspots.map((hotspot) => (
                            <div
                                key={hotspot.id}
                                className="absolute group cursor-pointer"
                                style={{ top: hotspot.top, left: hotspot.left }}
                            >
                                {/* Plus Icon */}
                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <Plus className="w-4 h-4 text-gray-900" />
                                </div>

                                {/* Product Info Tooltip */}
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="bg-white p-3 rounded shadow-lg whitespace-nowrap">
                                        <h4 className="font-medium text-gray-900 text-sm">{hotspot.name}</h4>
                                        <p className="text-gray-600 text-sm">{hotspot.price}</p>
                                        <button className="text-xs text-[#9a6546] hover:underline mt-1">
                                            Shop now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductCollage;