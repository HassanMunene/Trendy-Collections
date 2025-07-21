import { Heart, Star } from 'lucide-react';
import { Link } from "react-router-dom";

export function ProductCard({ product, isFavorite, onToggleFavorite }) {
    const formatPrice = (price) => `Ksh ${price.toLocaleString()}`;

    return (
        <div className="group relative">
            {/* Badges */}
            <div className="absolute top-3 left-3 z-10 flex gap-2">
                {product.isNew && (
                    <span className="bg-green-500 text-white px-2 py-1 text-xs font-medium rounded">
                        NEW
                    </span>
                )}
            </div>

            {/* Image */}
            <div className="relative group overflow-hidden">
                <Link to={`/products/${product.id}`}>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </Link>
            </div>

            {/* Product Info */}
            <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                    <div>
                        {product.originalPrice && (
                            <span className="text-sm text-gray-400 line-through mr-2">
                                {formatPrice(product.originalPrice)}
                            </span>
                        )}
                        <span className="text-lg font-bold text-gray-900">
                            {formatPrice(product.price)}
                        </span>
                    </div>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onToggleFavorite(product.id);
                        }}
                        className={`p-1 rounded-full ${isFavorite
                            ? 'text-red-500'
                            : 'text-gray-700 hover:text-red-300'
                            }`}
                        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                    >
                        <Heart className={`h-6 w-6 ${isFavorite ? 'fill-current' : ''}`} />
                    </button>
                </div>

                <p className="text-sm font-medium text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                    {product.name}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1">
                    <div className="flex">
                        {Array.from({ length: 5 }, (_, i) => (
                            <Star
                                key={`${product.id}-star-${i + 1}`}
                                className={`h-3 w-3 ${i < Math.floor(product.rating || 0)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                    <span className="text-xs text-gray-500">
                        ({product.reviewCount || 0})
                    </span>
                </div>
            </div>
        </div>
    );
}