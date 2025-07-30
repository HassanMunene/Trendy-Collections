import { Star } from 'lucide-react';
import { Link } from "react-router-dom";
import { FaWhatsapp } from 'react-icons/fa';

export function ProductCard({ product }) {
    const formatPrice = (price) => `KSh ${price?.toLocaleString() ?? ''}`;
    const discountPercentage = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

    const handleWhatsAppClick = (e) => {
        e.preventDefault();
        const message = `Hello Trendy Collections! \n\nI'm interested in:\n\n*${product.name}*\nPrice: *${formatPrice(product.price)}\n\n[View Product](${window.location.origin}/products/${product.id})`;

        // Improved WhatsApp URL with fallback
        const phone = '254712403671'; // Kenyan format
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="group relative bg-white rounded-md hover:shadow-md transition-all duration-300 overflow-hidden">
            {/* Badges - Top Left */}
            <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                {product.isNew && (
                    <span className="bg-white text-gray-900 px-2.5 py-1 text-xs font-bold rounded-full shadow-md">
                        New Arrival
                    </span>
                )}
            </div>

            {/* Image - Taller aspect ratio for curtains */}
            <div className="relative overflow-hidden">
                <Link to={`/products/${product.id}`} className="block">
                    <img
                        src={product.image}
                        alt={`${product.name} - Trendy Collections Kenya`}
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
                                {formatPrice(product?.originalPrice)}
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
                    </div>
                )}

                {/* WhatsApp Button */}
                <button
                    onClick={handleWhatsAppClick}
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white py-3 px-4 rounded-lg transition-colors duration-300 shadow hover:shadow-md mt-2"
                >
                    <FaWhatsapp className="h-5 w-5" />
                    <span className="font-medium">Order on WhatsApp</span>
                </button>
            </div>
        </div>
    );
}