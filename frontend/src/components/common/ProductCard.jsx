import { Heart, Star } from 'lucide-react'

export default function ProductCard({ product, isFavorite, onToggleFavorite }) {
    const formatPrice = (price) => `ksh${price.toLocaleString()}`

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
        }

        return colors.slice(0, 4).map((color) => (
            <div
                key={color}
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: colorMap[color] || '#D1D5DB' }}
                title={color}
            />
        ))
    }

    return (
        <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
            <div className="relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                />
                <button
                    onClick={() => onToggleFavorite(product.id)}
                    className={`absolute top-3 right-3 p-2 rounded-full transition-colors ${isFavorite
                            ? 'bg-red-500 text-white'
                            : 'bg-white text-gray-400 hover:text-red-500'
                        }`}
                >
                    <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
                </button>

                {product.onSale && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 text-xs font-medium rounded">
                        SALE
                    </div>
                )}

                {product.isNew && (
                    <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 text-xs font-medium rounded">
                        NEW
                    </div>
                )}
            </div>

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
                </div>

                <h4 className="text-sm font-medium text-gray-900 mb-3 line-clamp-2">
                    {product.name}
                </h4>

                {/* Color options */}
                <div className="flex items-center gap-2 mb-3">
                    {getColorDots(product.colors)}
                    {product.colors.length > 4 && (
                        <span className="text-xs text-gray-500">+{product.colors.length - 4}</span>
                    )}
                </div>

                {/* Rating */}
                {product.rating && (
                    <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }, (_, i) => (
                            <Star
                                key={`${product.id}-star-${i + 1}`}
                                className={`h-3 w-3 ${i < Math.floor(product.rating || 0)
                                        ? 'text-yellow-400 fill-current'
                                        : 'text-gray-300'
                                    }`}
                            />
                        ))}
                        <span className="text-xs text-gray-500 ml-1">
                            {product.rating.toFixed(1)}
                        </span>
                    </div>
                )}
            </div>
        </div>
    )
}