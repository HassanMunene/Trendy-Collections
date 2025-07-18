// components/ProductCard.tsx
import { Heart, Star, ShoppingCart } from 'lucide-react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function ProductCard({ product, isFavorite, onToggleFavorite }) {
    const formatPrice = (price) => `Ksh ${price.toLocaleString()}`;

    return (
        <div className="group relative">
            {/* Badges */}
            <div className="absolute top-3 left-3 z-10 flex gap-2">
                {product.isNew && (
                    <Badge variant="new">Newkkk</Badge>
                )}
                {product.stock && product.stock <= 5 && (
                    <Badge variant="stock">
                        {product.stock === 0 ? 'Sold Out' : `Only ${product.stock}`}
                    </Badge>
                )}
            </div>

            {/* Image */}
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                <Link to={`/products/${product.id}`}>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>

                {/* Quick actions */}
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Button variant="secondary" size="sm" className="rounded-full shadow-sm">
                        <ShoppingCart className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="secondary"
                        size="sm"
                        className="rounded-full shadow-sm"
                        onClick={(e) => {
                            e.preventDefault();
                            onToggleFavorite(product.id);
                        }}
                    >
                        <Heart className={cn(
                            "h-4 w-4",
                            isFavorite ? "fill-red-500 text-red-500" : "text-gray-700"
                        )} />
                    </Button>
                </div>
            </div>

            {/* Product info */}
            <div className="mt-4">
                <Link to={`/products/${product.id}`}>
                    <h3 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-primary transition-colors">
                        {product.name}
                    </h3>
                </Link>

                {/* Price */}
                <div className="mt-1 flex items-center gap-2">
                    {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                            {formatPrice(product.originalPrice)}
                        </span>
                    )}
                    <span className="font-medium text-gray-900">
                        {formatPrice(product.price)}
                    </span>
                </div>

                {/* Rating */}
                {product.rating && (
                    <div className="mt-2 flex items-center gap-1">
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    className={cn(
                                        "h-3 w-3",
                                        star <= Math.floor(product.rating || 0)
                                            ? "fill-yellow-400 text-yellow-400"
                                            : "text-gray-300"
                                    )}
                                />
                            ))}
                        </div>
                        <span className="text-xs text-muted-foreground">
                            ({product.reviewCount || 0})
                        </span>
                    </div>
                )}

                {/* Color options */}
                {product.colors && product.colors.length > 0 && (
                    <div className="mt-2 flex gap-1">
                        {product.colors.slice(0, 4).map((color) => (
                            <div
                                key={color}
                                className="h-4 w-4 rounded-full border border-gray-200"
                                style={{ backgroundColor: getColorValue(color) }}
                                title={color}
                            />
                        ))}
                        {product.colors.length > 4 && (
                            <div className="flex items-center justify-center h-4 w-4 rounded-full border border-gray-200 text-xs">
                                +{product.colors.length - 4}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

function getColorValue(colorName) {
    const colorMap = {
        'Grey': '#6B7280',
        'Grey Stripe': '#9CA3AF',
        'White': '#FFFFFF',
        'Off White': '#F9FAFB',
        'Off White Boucle': '#F3F4F6',
        'Blue': '#3B82F6',
        'Forest Green': '#16A34A',
        'Navy': '#1E3A8A',
        'Natural': '#F5F5DC',
        'Light Grey': '#E5E7EB',
        'Cream': '#FFFDD0',
        'Pink': '#EC4899',
    };
    return colorMap[colorName] || '#D1D5DB';
}