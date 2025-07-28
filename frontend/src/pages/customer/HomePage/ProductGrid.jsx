import { Link } from "react-router-dom";
import { Fragment } from "react";
import { products } from "@/src/Mocks/products2";
import { FaWhatsapp } from "react-icons/fa";

const ProductGrid = () => {
    // First, filter products with floral subcategory and flatten their variants
    const floralProducts = products.filter(product => product.subcategory === "floral");

    const curtains = products.filter(product => product.category === "curtains");
    const knot_pillows = products.filter(product => product.category === "knot-pillows");

    return (
        <section className="py-14 bg-white">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                {/* Three Category Grid - Enhanced */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20 sm:px-0">
                    {/* Curtains Section */}
                    <a
                        href="/products?category=curtains"
                        className="relative group overflow-hidden rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
                        aria-label="Browse Curtains Collection"
                    >
                        <div className="aspect-[4/5] bg-gradient-to-br from-pink-50 to-amber-50 relative">
                            <img
                                src="/images/curtains/plain-brown-curtain.webp"
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
                    </a>

                    {/* Pillows Section */}
                    <a
                        href="/products?category=pillow"
                        className="relative group overflow-hidden rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
                        aria-label="Browse Pillows Collection"
                    >
                        <div className="aspect-[4/5] bg-gradient-to-br from-blue-50 to-cyan-50 relative">
                            <img
                                src="/images/pillows/Royal-Azure.webp"
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
                    </a>

                    {/* Knot Pillows Section */}
                    <a
                        href="/products?subcategory=knot-pillows"
                        className="relative group overflow-hidden rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
                        aria-label="Browse Knot Pillows"
                    >
                        <div className="aspect-[4/5] bg-gradient-to-br from-amber-50 to-yellow-50 relative">
                            <img
                                src="/images/knot-pillows/brown-black-knot-pillows.webp"
                                alt="Designer knot pillows"
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-6 left-6 space-y-1">
                                <h3 className="text-white text-2xl md:text-3xl font-medium">Knot Pillows</h3>
                                <p className="text-amber-200 text-sm font-light">Limited</p>
                            </div>
                            <div className="absolute top-4 right-4">
                                <span className="bg-white/90 text-amber-600 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                                    Exclusive
                                </span>
                            </div>
                        </div>
                    </a>
                </div>

                {/* Enhanced Product Quick Links - Mobile Friendly */}
                <div className="flex flex-wrap justify-center gap-3 mb-12 px-4">
                    {[
                        { name: "Luxury", href: "/products?category=pillow&subcategory=luxury", mobileName: "Luxury" },
                        { name: "Decorative", href: "/products?category=pillow&subcategory=decorative", mobileName: "Decor" },
                        { name: "Glossy", href: "/products?category=curtains&subcategory=glossy", mobileName: "Glossy" },
                        { name: "Knot", href: "/products?category=knot-pillows", mobileName: "Knot" },
                        { name: "All Curtains", href: "/products?category=curtains", mobileName: "Curtains" }
                    ].map((link, index) => (
                        <Fragment key={link.name}>
                            <Link
                                to={link.href}
                                className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium text-xs sm:text-sm relative group px-2 py-1 sm:px-0 sm:py-0"
                            >
                                {/* Show shorter text on mobile */}
                                <span className="sm:hidden">{link.mobileName}</span>
                                <span className="hidden sm:inline">{link.name}</span>
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full sm:left-0 sm:translate-x-0"></span>
                            </Link>
                            {index < 4 && (
                                <span className="text-gray-300 text-xs self-center hidden xs:inline">•</span>
                            )}
                        </Fragment>
                    ))}
                </div>

                {/* Product Grids */}
                <div className="space-y-8">
                    {/* Flowery pillows */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
                        {floralProducts.map((product) => (
                            <div key={product.id} className="group relative">
                                <Link
                                    to={`/products/${product.id}`}
                                    className="block"
                                    aria-label={`View ${product.name}`}
                                >
                                    {/* Image Container */}
                                    <div className="relative aspect-square bg-gray-50 rounded-xl overflow-hidden mb-4 shadow-sm hover:shadow-md transition-all duration-300">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                            width={400}
                                            height={400}
                                        />

                                        {/* Badges */}
                                        <div className="absolute top-3 left-3 space-y-2">
                                            {product.isNew && (
                                                <span className="inline-block bg-white px-2.5 py-1 rounded-full text-xs font-bold shadow-md text-gray-900">
                                                    New Arrival
                                                </span>
                                            )}
                                            {product.discount && (
                                                <span className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white px-2.5 py-1 rounded-full text-xs font-bold shadow-md">
                                                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Product Info */}
                                    <div className="px-1">
                                        <h4 className="font-medium text-gray-900 mb-2 line-clamp-2 min-h-[3rem] text-lg leading-tight">
                                            {product.name}
                                        </h4>

                                        {/* Price */}
                                        <div className="mb-3">
                                            {product.originalPrice ? (
                                                <div className="flex items-baseline gap-2">
                                                    <span className="text-gray-900 font-bold text-xl">
                                                        KSh {product.price.toLocaleString()}
                                                    </span>
                                                    <span className="text-gray-400 text-sm line-through">
                                                        KSh {product.originalPrice.toLocaleString()}
                                                    </span>
                                                </div>
                                            ) : (
                                                <span className="text-gray-900 font-bold text-xl">
                                                    KSh {product.price.toLocaleString()}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </Link>

                                {/* WhatsApp Button */}
                                <button
                                    className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg transition-colors duration-300 shadow hover:shadow-md"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        // WhatsApp order logic
                                        const message = `I'm interested in ${product.name} (${product.id}) for KSh ${product.price.toLocaleString()}`;
                                        window.open(`https://wa.me/254712403671?text=${encodeURIComponent(message)}`, '_blank');
                                    }}
                                >
                                    <FaWhatsapp className="h-5 w-5" />
                                    <span>Order via WhatsApp</span>
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Curtains */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {curtains.map((product) => (
                            <div key={product.id} className="group relative">
                                <Link
                                    to={`/products/${product.id}`}
                                    className="block"
                                    aria-label={`View ${product.name}`}
                                >
                                    {/* Image Container - Modified to show top of curtains */}
                                    <div className="relative aspect-[3/4] bg-gray-50 rounded-xl overflow-hidden mb-4 shadow-sm hover:shadow-md transition-all duration-300">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-top object-cover transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                            width={400}
                                            height={533} // Taller aspect ratio to show rods
                                            style={{ objectPosition: 'top' }} // Ensures image shows from top
                                        />

                                        {/* Badges */}
                                        <div className="absolute top-3 left-3 space-y-2">
                                            {product.isNew && (
                                                <span className="inline-block bg-white px-2.5 py-1 rounded-full text-xs font-bold shadow-md text-gray-900">
                                                    New Arrival
                                                </span>
                                            )}
                                            {product.discount && (
                                                <span className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white px-2.5 py-1 rounded-full text-xs font-bold shadow-md">
                                                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Product Info */}
                                    <div className="px-1">
                                        <h4 className="font-medium text-gray-900 mb-2 line-clamp-2 min-h-[3rem] text-lg leading-tight">
                                            {product.name}
                                        </h4>

                                        {/* Price */}
                                        <div className="mb-3">
                                            {product.originalPrice ? (
                                                <div className="flex items-baseline gap-2">
                                                    <span className="text-gray-900 font-bold text-xl">
                                                        KSh {product.price.toLocaleString()}
                                                    </span>
                                                    <span className="text-gray-400 text-sm line-through">
                                                        KSh {product.originalPrice.toLocaleString()}
                                                    </span>
                                                </div>
                                            ) : (
                                                <span className="text-gray-900 font-bold text-xl">
                                                    KSh {product.price.toLocaleString()}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </Link>

                                {/* WhatsApp Button */}
                                <button
                                    className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg transition-colors duration-300 shadow hover:shadow-md"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const message = `I'm interested in ${product.name} (${product.id}) for KSh ${product.price.toLocaleString()}`;
                                        window.open(`https://wa.me/254712403671?text=${encodeURIComponent(message)}`, '_blank');
                                    }}
                                >
                                    <FaWhatsapp className="h-5 w-5" />
                                    <span>Order via WhatsApp</span>
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Knot Pillows */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {knot_pillows.map((product) => (
                            <div key={product.id} className="group relative rounded-lg transition-all duration-300 overflow-hidden">
                                {/* Badges */}
                                {product.isNew && (
                                    <div className="absolute top-3 left-3 z-10">
                                        <span className="inline-block bg-white px-2.5 py-1 rounded-full text-xs font-bold shadow-md text-gray-900">
                                            New Arrival
                                        </span>
                                    </div>
                                )}

                                {/* Image - Square aspect for pillows */}
                                <Link to={`/products/${product.id}`} className="block">
                                    <div className="aspect-square bg-gray-50 overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                    </div>
                                </Link>

                                {/* Product Info */}
                                <div className="p-4">
                                    <h4 className="font-medium text-gray-900 mb-2 line-clamp-2 min-h-[3rem]">
                                        {product.name}
                                    </h4>

                                    {/* Price */}
                                    <div className="mb-3">
                                        {product.originalPrice ? (
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-gray-900 font-bold text-lg">
                                                    KSh {product.price.toLocaleString()}
                                                </span>
                                                <span className="text-gray-400 text-sm line-through">
                                                    KSh {product.originalPrice.toLocaleString()}
                                                </span>
                                            </div>
                                        ) : (
                                            <span className="text-gray-900 font-bold text-lg">
                                                KSh {product.price.toLocaleString()}
                                            </span>
                                        )}
                                    </div>

                                    {/* WhatsApp Button */}
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const message = `I'm interested in ${product.name} (${product.id}) for KSh ${product.price.toLocaleString()}`;
                                            window.open(`https://wa.me/254712403671?text=${encodeURIComponent(message)}`, '_blank');
                                        }}
                                        className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors duration-300 text-sm"
                                    >
                                        <FaWhatsapp className="h-4 w-4" />
                                        <span>Order Now</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductGrid
