import { Link } from "react-router-dom"

const ProductGrid = () => {
    const accentChairs = [
        {
            id: 1,
            name: "Wexler chair",
            price: "ksh 450",
            image: "https://ext.same-assets.com/4184859447/3939488370.jpeg"
        },
        {
            id: 2,
            name: "Thea chair",
            price: "ksh 299",
            image: "https://ext.same-assets.com/4184859447/1822223879.jpeg"
        },
        {
            id: 3,
            name: "Rhye chair",
            price: "ksh 399",
            image: "https://ext.same-assets.com/4184859447/2465237693.jpeg"
        },
        {
            id: 4,
            name: "Eva chair",
            price: "ksh 275",
            image: "https://ext.same-assets.com/4184859447/224701922.jpeg"
        }
    ]

    const lighting = [
        {
            id: 5,
            name: "Briz flush ceiling light",
            price: "ksh 79",
            image: "https://ext.same-assets.com/4184859447/494289311.jpeg"
        },
        {
            id: 6,
            name: "Sydney ceiling light",
            price: "ksh 69",
            image: "https://ext.same-assets.com/4184859447/2078189019.jpeg"
        },
        {
            id: 7,
            name: "Layla ceiling light",
            price: "ks 329",
            image: "https://ext.same-assets.com/4184859447/4133126367.jpeg"
        },
        {
            id: 8,
            name: "Globe ceiling light",
            price: "ksh 79",
            image: "https://ext.same-assets.com/4184859447/3996853176.jpeg"
        }
    ]

    const tableLamps = [
        {
            id: 9,
            name: "Eero table lamp",
            price: "ksh 99",
            image: "https://ext.same-assets.com/4184859447/1819160200.jpeg"
        },
        {
            id: 10,
            name: "Lila pleated table lamp",
            price: "ksh 169",
            image: "https://ext.same-assets.com/4184859447/3259582105.jpeg"
        },
        {
            id: 11,
            name: "Piper table lamp",
            price: "ksh 59",
            image: "https://ext.same-assets.com/4184859447/1440530325.jpeg"
        },
        {
            id: 12,
            name: "Briz table lamp",
            price: "ksh 59",
            image: "https://ext.same-assets.com/4184859447/3319993950.jpeg"
        }
    ]

    return (
        <section className="py-16 bg-white">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                {/* Three Category Grid - Enhanced */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20 sm:px-0">
                    {/* Curtains Section */}
                    <Link
                        to="/products?category=curtains"
                        className="relative group overflow-hidden rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
                        aria-label="Browse Curtains Collection"
                    >
                        <div className="aspect-[4/5] bg-gradient-to-br from-pink-50 to-amber-50 relative">
                            <img
                                src="https://raw.githubusercontent.com/HassanMunene/trendy-frontend/main/ecommerce-images/curtains/plain-brown-curtain.webp"
                                alt="Luxury curtains collection"
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-6 left-6 space-y-1">
                                <h3 className="text-white text-2xl md:text-3xl font-medium">Curtains</h3>
                                <p className="text-pink-200 text-sm font-light">Explore 12+ designs</p>
                            </div>
                            <div className="absolute top-4 right-4">
                                <span className="bg-white/90 text-pink-600 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                                    New Arrivals
                                </span>
                            </div>
                        </div>
                    </Link>

                    {/* Pillows Section */}
                    <Link
                        to="/products?category=pillow"
                        className="relative group overflow-hidden rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
                        aria-label="Browse Pillows Collection"
                    >
                        <div className="aspect-[4/5] bg-gradient-to-br from-blue-50 to-cyan-50 relative">
                            <img
                                src="https://raw.githubusercontent.com/HassanMunene/trendy-frontend/main/ecommerce-images/pillow-cusions/Serenity-Blue-Luxe-Cushion.webp"
                                alt="Premium pillow collection"
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-6 left-6 space-y-1">
                                <h3 className="text-white text-2xl md:text-3xl font-medium">Pillows</h3>
                                <p className="text-blue-200 text-sm font-light">24+ styles available</p>
                            </div>
                            <div className="absolute top-4 right-4">
                                <span className="bg-white/90 text-blue-600 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                                    Best Seller
                                </span>
                            </div>
                        </div>
                    </Link>

                    {/* Knot Pillows Section */}
                    <Link
                        to="/products?subcategory=knot"
                        className="relative group overflow-hidden rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
                        aria-label="Browse Knot Pillows"
                    >
                        <div className="aspect-[4/5] bg-gradient-to-br from-amber-50 to-yellow-50 relative">
                            <img
                                src="https://raw.githubusercontent.com/HassanMunene/trendy-frontend/main/ecommerce-images/pillow-cusions/White-Gold-Textured-Knot-Cushion.webp"
                                alt="Designer knot pillows"
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-6 left-6 space-y-1">
                                <h3 className="text-white text-2xl md:text-3xl font-medium">Knot Pillows</h3>
                                <p className="text-amber-200 text-sm font-light">Limited edition</p>
                            </div>
                            <div className="absolute top-4 right-4">
                                <span className="bg-white/90 text-amber-600 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                                    Exclusive
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Product Links */}
                <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm">
                    <a href="#" className="text-gray-900 hover:text-[#9a6546] underline">Accent chairs</a>
                    <span className="text-gray-400">|</span>
                    <a href="#" className="text-gray-900 hover:text-[#9a6546] underline">Ceiling lights</a>
                    <span className="text-gray-400">|</span>
                    <a href="#" className="text-gray-900 hover:text-[#9a6546] underline">Desk & table lamps</a>
                </div>

                {/* Product Grids */}
                <div className="space-y-16">
                    {/* Accent Chairs */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {accentChairs.map((product) => (
                            <div key={product.id} className="group cursor-pointer">
                                <div className="aspect-square bg-[#f6f2f0] mb-4 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <h4 className="font-medium text-gray-900 mb-1">{product.name}</h4>
                                <p className="text-gray-600">{product.price}</p>
                            </div>
                        ))}
                    </div>

                    {/* Ceiling Lights */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {lighting.map((product) => (
                            <div key={product.id} className="group cursor-pointer">
                                <div className="aspect-square bg-[#f6f2f0] mb-4 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <h4 className="font-medium text-gray-900 mb-1">{product.name}</h4>
                                <p className="text-gray-600">{product.price}</p>
                            </div>
                        ))}
                    </div>

                    {/* Table Lamps */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {tableLamps.map((product) => (
                            <div key={product.id} className="group cursor-pointer">
                                <div className="aspect-square bg-[#f6f2f0] mb-4 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <h4 className="font-medium text-gray-900 mb-1">{product.name}</h4>
                                <p className="text-gray-600">{product.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductGrid
