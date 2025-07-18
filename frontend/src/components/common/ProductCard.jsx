import { Heart, Star, ShoppingCart } from 'lucide-react';
import { useNavigate } from "react-router-dom";


export default function ProductCard({ product, isFavorite, onToggleFavorite }) {
    const formatPrice = (price) => `ksh${price.toLocaleString()}`;
    const navigate = useNavigate();

    const getColorDots = (colors) => {
        const colorMap = {
            'Grey': '#6B7280',
            'Grey Stripe': '#9CA3AF',
            'White': '#FFFFFF',
            'Off White': '#F9FAFB',
            'Off White Boucle': '#F3F4F6',
            'Natural Oak': '#D2B48C',
            'Dark Oak': '#8B4513',
            'Blue': '#3B82F6',
            'Forest Green': '#16A34A',
            'Navy': '#1E3A8A',
            'Natural': '#F5F5DC',
            'Light Grey': '#E5E7EB',
            'Natural Wood': '#CD853F',
            'Cream': '#FFFDD0',
            'Pink': '#EC4899',
            'Light Natural': '#FAF7F0'
        };

        return colors.slice(0, 4).map((color) => (
            <div
                key={color}
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: colorMap[color] || '#D1D5DB' }}
                title={color}
                aria-label={color}
            />
        ))
    }

    const handleProductClick = (productId) => {
        console.log("Clickkkeekekekd");
        navigate(`/products/${productId}`);
    }

    return (
        <div
            className="bg-white overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer relative"
            onClick={() => handleProductClick(product.id)}
        >
            {/* Badges */}
            <div className="absolute top-3 left-3 flex gap-2 z-10">
                {product.isNew && (
                    <span className="bg-green-500 text-white px-2 py-1 text-xs font-medium rounded">
                        NEW
                    </span>
                )}
                {product.onSale && !product.isNew && (
                    <span className="bg-red-500 text-white px-2 py-1 text-xs font-medium rounded">
                        {product.discountPercent ? `-${product.discountPercent}%` : 'SALE'}
                    </span>
                )}
            </div>
            {/* Stock Status */}
            {product.stock <= 5 && (
                <div className="absolute top-3 right-10 bg-amber-100 text-amber-800 px-2 py-1 text-xs font-medium rounded">
                    {product.stock === 0 ? 'Sold Out' : `Only ${product.stock}`}
                </div>
            )}
            <div className="relative group overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
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
    )
}