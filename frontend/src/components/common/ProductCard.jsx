import { Star } from 'lucide-react';
import { Link } from "react-router-dom";
import { FaWhatsapp } from 'react-icons/fa';

export function ProductCard({ product }) {
    const formatPrice = (price) => `KSh ${price?.toLocaleString() ?? ''}`;
    const discountPercentage = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100 ): 0;

    return (
        <div className="group relative bg-white rounded-md hover:shadow-md transition-all duration-300 overflow-hidden">
            {/* Badges - Top Left */}
            <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                {product.isNew && (
                    <span className="bg-white text-gray-900 px-2.5 py-1 text-xs font-bold rounded-full shadow-md">
                        New Arrival
                    </span>
                )}
                {product.discount && (
                    <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-2.5 py-1 rounded-full text-xs font-bold shadow-md">
                        -{discountPercentage}% OFF
                    </span>
                )}
            </div>

            {/* Image - Taller aspect ratio for curtains */}
            <div className="relative overflow-hidden">
                <Link to={`/products/${product.id}`} className="block">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                    />
                </Link>
            </div>

            {/* Product Info */}
            <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors min-h-[3rem]">
                    {product.name}
                </h3>

                {/* Price Section */}
                <div className="mb-3">
                    {product.originalPrice ? (
                        <div className="flex items-baseline gap-2">
                            <span className="text-xl font-bold text-gray-900">
                                {formatPrice(product.price)}
                            </span>
                            <span className="text-sm text-gray-400 line-through">
                                {formatPrice(product.originalPrice)}
                            </span>
                        </div>
                    ) : (
                        <span className="text-xl font-bold text-gray-900">
                            {formatPrice(product.price)}
                        </span>
                    )}
                </div>

                {/* Rating */}
                {product.rating && (
                    <div className="flex items-center gap-1 mb-4">
                        <div className="flex">
                            {Array.from({ length: 5 }, (_, i) => (
                                <Star
                                    key={`${product.id}-star-${i + 1}`}
                                    className={`h-4 w-4 ${i < Math.floor(product.rating || 0)
                                        ? 'text-yellow-400 fill-current'
                                        : 'text-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                        <span className="text-xs text-gray-500">
                            ({product.reviewCount || 0} reviews)
                        </span>
                    </div>
                )}

                {/* WhatsApp Button - Replaces heart button */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        const message = `I'm interested in ${product.name} (${product.id}) for ${formatPrice(product.price)}`;
                        window.open(`https://wa.me/254712345678?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg transition-colors duration-300 shadow hover:shadow-md"
                >
                    <FaWhatsapp className="h-5 w-5" />
                    <span>Order on WhatsApp</span>
                </button>
            </div>
        </div>
    );
}