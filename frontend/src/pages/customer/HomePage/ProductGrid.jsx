import { Link } from "react-router-dom";
import { Fragment } from "react";
import { products } from "@/src/Mocks/products2";

const ProductGrid = () => {
    // First, filter products with floral subcategory and flatten their variants
    const floralProducts = products
        .filter(product => product.subcategory === "floral")
        .flatMap(product =>
            product.variants.map(variant => ({
                ...variant,
                category: product.category,
                description: product.description,
                rating: product.rating,
                reviews: product.reviews,
                isNew: product.isNew
            }))
        );

    const curtains = products.filter(product => product.category === "curtains");
    const knot_pillows = products.filter(product => product.category === "knot-pillows");

    return (
        <section className="py-14 bg-white">
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
                    </Link>

                    {/* Pillows Section */}
                    <Link
                        to="/products?category=pillow"
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
                    </Link>

                    {/* Knot Pillows Section */}
                    <Link
                        to="/products?subcategory=knot-pillows"
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
                    </Link>
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
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {floralProducts.map((product) => (
                            <Link to={`/products/${product.id}`} key={product.id} className="group cursor-pointer">
                                <div className="aspect-square bg-[#f6f2f0] mb-4 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <h4 className="font-medium text-gray-900 mb-1">{product.name}</h4>
                                <p className="text-gray-600">{product.price}</p>
                            </Link>
                        ))}
                    </div>

                    {/* Curtains */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {curtains.map((product) => (
                            <Link to={`/products/${product.id}`} key={product.id} className="group cursor-pointer">
                                <div className="aspect-square bg-[#f6f2f0] mb-4 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <h4 className="font-medium text-gray-900 mb-1">{product.name}</h4>
                                <p className="text-gray-600">{product.price}</p>
                            </Link>
                        ))}
                    </div>

                    {/* Knot Pillows */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {knot_pillows.map((product) => (
                            <Link to={`/products/${product.id}`} key={product.id} className="group cursor-pointer">
                                <div className="aspect-square bg-[#f6f2f0] mb-4 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <h4 className="font-medium text-gray-900 mb-1">{product.name}</h4>
                                <p className="text-gray-600">{product.price}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductGrid
