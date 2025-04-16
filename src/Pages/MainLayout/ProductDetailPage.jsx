import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { StarIcon, HeartIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { ArrowLeftIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

const productDatabase = {
    1: {
        id: 1,
        name: 'Luxe Sateen Pillow Set',
        category: 'pillows',
        subcategory: 'sateen',
        price: 149.00,
        salePrice: 126.65,
        description: 'Experience unparalleled softness with our premium sateen pillow set. Made from 100% long-staple cotton with a 600 thread count for luxurious comfort that lasts.',
        details: [
            'Set of 2 standard pillowcases',
            '100% long-staple cotton',
            '600 thread count',
            'Sateen weave for silky smoothness',
            'Double-stitched seams for durability',
            'Hidden zipper closure'
        ],
        materials: '100% Egyptian Cotton',
        dimensions: '20" x 26" (Standard)',
        care: 'Machine wash cold, tumble dry low',
        colors: [
            { name: 'white', hex: '#ffffff', inStock: true },
            { name: 'cream', hex: '#f5f5dc', inStock: true },
            { name: 'graphite', hex: '#4d4d4d', inStock: true },
            { name: 'navy', hex: '#000080', inStock: false },
            { name: 'sage', hex: '#9CAF88', inStock: true }
        ],
        images: [
            'https://images.unsplash.com/photo-1616627561839-074385245ff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1566669437688-37f7c4c9d1a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1586449480561-6d7f57a6b3cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        ],
        rating: 4.8,
        reviewCount: 142,
        isNew: false,
        isBestSeller: true,
        stock: 12
    },
    7: {
        id: 7,
        name: 'Silk Pillowcases',
        category: 'pillows',
        subcategory: 'silk',
        price: 149.00,
        salePrice: 126.65,
        description: 'Indulge in the ultimate sleep experience with our 100% pure mulberry silk pillowcases. Naturally hypoallergenic and temperature regulating for healthier hair and skin.',
        details: [
            '100% Grade 6A Mulberry Silk',
            '22 momme weight for durability',
            'Hidden zipper closure',
            'Double-sided silk (both sides equally luxurious)',
            'Reduces hair breakage and sleep wrinkles',
            'Naturally hypoallergenic and dust mite resistant'
        ],
        materials: '100% Mulberry Silk (Grade 6A, 22 momme)',
        dimensions: '20" x 26" (Standard)',
        care: 'Hand wash cold with mild detergent, lay flat to dry',
        colors: [
            { name: 'white', hex: '#ffffff', inStock: true },
            { name: 'cream', hex: '#f5f5dc', inStock: true },
            { name: 'dune', hex: '#C2B280', inStock: false },
            { name: 'sienna', hex: '#A0522D', inStock: true }
        ],
        images: [
            'https://images.unsplash.com/photo-1616627561839-074385245ff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1566669437688-37f7c4c9d1a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1586449480561-6d7f57a6b3cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        ],
        rating: 4.9,
        reviewCount: 89,
        isNew: true,
        isBestSeller: false,
        stock: 8
    }
};


const ProductDetailPage = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const product = productDatabase[productId];

    // State management
    const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || null);
    const [quantity, setQuantity] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [activeTab, setActiveTab] = useState('details');

    // Handle color selection with safety checks
    const handleColorSelect = (color) => {
        if (color.inStock) {
            setSelectedColor(color);
        }
    };

    // Handle quantity changes with boundaries
    const handleQuantityChange = (newQuantity) => {
        const validatedQuantity = Math.max(1, Math.min(10, newQuantity));
        setQuantity(validatedQuantity);
    };

    // Image navigation with circular looping
    const navigateImage = (direction) => {
        if (!product?.images?.length) return;

        setCurrentImageIndex(prevIndex => {
            if (direction === 'next') {
                return (prevIndex + 1) % product.images.length;
            } else {
                return (prevIndex - 1 + product.images.length) % product.images.length;
            }
        });
    };

    // Add to cart functionality
    const handleAddToCart = () => {
        if (!selectedColor?.inStock) return;

        // In a real app, this would dispatch to your cart/store
        alert(`${quantity} ${product.name} (${selectedColor.name}) added to cart!`);
    };

    // Handle buy now action
    const handleBuyNow = () => {
        handleAddToCart();
        navigate('/checkout');
    };

    // If product not found
    if (!product) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white flex items-center justify-center p-4">
                <div className="text-center max-w-md p-8 bg-white rounded-xl shadow-lg">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
                    <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
                    <button
                        onClick={() => navigate('/products')}
                        className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium inline-flex items-center"
                    >
                        <ArrowLeftIcon className="w-5 h-5 mr-2" />
                        Back to Products
                    </button>
                </div>
            </div>
        );
    }

    // Render stars for ratings
    const renderStars = () => {
        const stars = [];
        const fullStars = Math.floor(product.rating);
        const hasHalfStar = product.rating % 1 >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<StarIcon key={`full-${i}`} className="w-5 h-5 text-amber-400" />);
        }

        if (hasHalfStar) {
            stars.push(<StarIcon key="half" className="w-5 h-5 text-amber-400" />);
        }

        const emptyStars = 5 - stars.length;
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<StarIcon key={`empty-${i}`} className="w-5 h-5 text-gray-300" />);
        }

        return stars;
    };

    return (
        <div className="bg-gradient-to-b from-rose-50 to-white min-h-screen">
            {/* Navigation */}
            <nav className="bg-white shadow-sm py-4 sticky top-0 z-10">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center text-gray-600 hover:text-rose-700 transition-colors"
                    >
                        <ArrowLeftIcon className="w-5 h-5 mr-2" />
                        Back
                    </button>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setIsWishlisted(!isWishlisted)}
                            className={`p-2 rounded-full transition-colors ${isWishlisted ? 'text-rose-600 bg-rose-50' : 'text-gray-400 hover:bg-rose-50'}`}
                            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                        >
                            <HeartIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Product Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
                        {/* Product Images */}
                        <div className="relative">
                            {/* Main Image */}
                            <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-50 mb-4">
                                <img
                                    src={product.images[currentImageIndex]}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-opacity duration-300"
                                    loading="eager"
                                />

                                {/* Navigation Arrows */}
                                {product.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={() => navigateImage('prev')}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
                                            aria-label="Previous image"
                                        >
                                            <ChevronLeftIcon className="w-6 h-6 text-gray-800" />
                                        </button>
                                        <button
                                            onClick={() => navigateImage('next')}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
                                            aria-label="Next image"
                                        >
                                            <ChevronRightIcon className="w-6 h-6 text-gray-800" />
                                        </button>
                                    </>
                                )}

                                {/* Badges */}
                                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                                    {product.isNew && (
                                        <span className="bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                            New Arrival
                                        </span>
                                    )}
                                    {product.isBestSeller && (
                                        <span className="bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                                            Best Seller
                                        </span>
                                    )}
                                    {product.salePrice < product.price && (
                                        <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                            {Math.round((1 - product.salePrice / product.price) * 100)}% Off
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Thumbnail Gallery */}
                            {product.images.length > 1 && (
                                <div className="grid grid-cols-4 gap-3">
                                    {product.images.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`aspect-square overflow-hidden rounded-lg border-2 transition-all ${currentImageIndex === index ? 'border-rose-500 scale-105' : 'border-transparent hover:border-gray-300'}`}
                                            aria-label={`View image ${index + 1}`}
                                        >
                                            <img
                                                src={image}
                                                alt={`${product.name} thumbnail ${index + 1}`}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Product Info */}
                        <div className="py-4">
                            <div className="mb-6">
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                                <div className="flex items-center mb-4">
                                    <div className="flex mr-2">
                                        {renderStars()}
                                    </div>
                                    <span className="text-gray-600 text-sm">
                                        {product.rating} ({product.reviewCount} reviews)
                                    </span>
                                </div>

                                <div className="mb-6">
                                    <div className="flex items-center">
                                        <span className="text-2xl font-bold text-gray-900 mr-3">${product.salePrice.toFixed(2)}</span>
                                        {product.salePrice < product.price && (
                                            <span className="text-lg text-gray-500 line-through">${product.price.toFixed(2)}</span>
                                        )}
                                    </div>
                                    {product.stock <= 5 && product.stock > 0 && (
                                        <div className="mt-2 text-sm text-amber-600">
                                            Only {product.stock} left in stock!
                                        </div>
                                    )}
                                    {product.stock === 0 && (
                                        <div className="mt-2 text-sm text-rose-600">
                                            Out of stock
                                        </div>
                                    )}
                                </div>

                                <p className="text-gray-700 mb-6">{product.description}</p>
                            </div>

                            {/* Color Selection */}
                            <div className="mb-8">
                                <h3 className="text-sm font-medium text-gray-900 mb-3">Color: <span className="capitalize">{selectedColor?.name || 'Not selected'}</span></h3>
                                <div className="flex flex-wrap gap-2">
                                    {product.colors.map((color) => (
                                        <button
                                            key={color.name}
                                            onClick={() => handleColorSelect(color)}
                                            disabled={!color.inStock}
                                            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${selectedColor?.name === color.name
                                                ? 'border-rose-500 scale-110'
                                                : 'border-transparent hover:border-gray-300'
                                                } ${!color.inStock ? 'opacity-50 cursor-not-allowed' : ''}`}
                                            title={`${color.name}${!color.inStock ? ' (Out of stock)' : ''}`}
                                            aria-label={`Select ${color.name} color${!color.inStock ? ' (Out of stock)' : ''}`}
                                        >
                                            <div
                                                className="w-8 h-8 rounded-full border border-gray-200"
                                                style={{ backgroundColor: color.hex }}
                                            ></div>
                                        </button>
                                    ))}
                                </div>
                                {selectedColor && !selectedColor.inStock && (
                                    <p className="mt-2 text-sm text-rose-600">This color is currently out of stock</p>
                                )}
                            </div>

                            {/* Quantity Selector */}
                            <div className="mb-8">
                                <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
                                <div className="flex items-center max-w-xs">
                                    <button
                                        onClick={() => handleQuantityChange(quantity - 1)}
                                        disabled={quantity <= 1}
                                        className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-l-lg bg-gray-50 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                        aria-label="Decrease quantity"
                                    >
                                        -
                                    </button>
                                    <div className="w-16 h-12 flex items-center justify-center border-t border-b border-gray-300 bg-white text-gray-900 font-medium">
                                        {quantity}
                                    </div>
                                    <button
                                        onClick={() => handleQuantityChange(quantity + 1)}
                                        disabled={quantity >= 10}
                                        className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-r-lg bg-gray-50 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                        aria-label="Increase quantity"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Add to Cart */}
                            <div className="flex flex-col space-y-3 max-w-md">
                                <button
                                    onClick={handleAddToCart}
                                    disabled={!selectedColor?.inStock}
                                    className={`w-full py-4 px-6 rounded-lg font-medium flex items-center justify-center transition-all ${selectedColor?.inStock
                                        ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white hover:opacity-90 shadow-md hover:shadow-lg'
                                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                        }`}
                                >
                                    <ShoppingBagIcon className="w-5 h-5 mr-2" />
                                    {selectedColor?.inStock ? 'Add to Cart' : 'Out of Stock'}
                                </button>

                                <button
                                    onClick={handleBuyNow}
                                    disabled={!selectedColor?.inStock}
                                    className={`w-full py-4 px-6 rounded-lg font-medium border-2 transition-all ${selectedColor?.inStock
                                        ? 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                                        : 'border-gray-200 text-gray-400 cursor-not-allowed'
                                        }`}
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Product Details Tabs */}
                    <div className="border-t border-gray-200 mt-8">
                        <div className="px-6">
                            <div className="flex space-x-8 border-b border-gray-200">
                                <button
                                    onClick={() => setActiveTab('details')}
                                    className={`py-4 px-1 font-medium ${activeTab === 'details' ? 'text-rose-600 border-b-2 border-rose-500' : 'text-gray-500 hover:text-gray-700'}`}
                                >
                                    Details
                                </button>
                                <button
                                    onClick={() => setActiveTab('reviews')}
                                    className={`py-4 px-1 font-medium ${activeTab === 'reviews' ? 'text-rose-600 border-b-2 border-rose-500' : 'text-gray-500 hover:text-gray-700'}`}
                                >
                                    Reviews ({product.reviewCount})
                                </button>
                                <button
                                    onClick={() => setActiveTab('shipping')}
                                    className={`py-4 px-1 font-medium ${activeTab === 'shipping' ? 'text-rose-600 border-b-2 border-rose-500' : 'text-gray-500 hover:text-gray-700'}`}
                                >
                                    Shipping & Returns
                                </button>
                            </div>
                        </div>

                        <div className="px-6 py-8">
                            {activeTab === 'details' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-4">Features</h3>
                                        <ul className="space-y-3">
                                            {product.details.map((detail, index) => (
                                                <li key={index} className="flex items-start">
                                                    <svg className="h-5 w-5 text-rose-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-700">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-4">Specifications</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="text-sm font-medium text-gray-500">Materials</h4>
                                                <p className="mt-1 text-gray-700">{product.materials}</p>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-medium text-gray-500">Dimensions</h4>
                                                <p className="mt-1 text-gray-700">{product.dimensions}</p>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-medium text-gray-500">Care Instructions</h4>
                                                <p className="mt-1 text-gray-700">{product.care}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'reviews' && (
                                <div className="text-center py-12">
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">Customer Reviews</h3>
                                    <p className="text-gray-600">Reviews will be displayed here</p>
                                </div>
                            )}

                            {activeTab === 'shipping' && (
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-2">Shipping Information</h3>
                                        <p className="text-gray-700">
                                            We offer free standard shipping on all orders over $100.
                                            Orders are typically processed within 1-2 business days and
                                            delivered within 3-5 business days via our premium carriers.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-2">Returns Policy</h3>
                                        <p className="text-gray-700">
                                            We offer a 30-day satisfaction guarantee. If you're not completely
                                            satisfied with your purchase, you may return it in its original
                                            condition for a full refund or exchange.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Complete Your Collection</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.values(productDatabase)
                            .filter(p => p.id !== product.id && p.category === product.category)
                            .slice(0, 4)
                            .map((relatedProduct) => (
                                <div key={relatedProduct.id} className="group">
                                    <Link
                                        to={`/products/${relatedProduct.id}`}
                                        className="block"
                                    >
                                        <div className="relative overflow-hidden rounded-xl mb-4 aspect-square bg-gray-50">
                                            <img
                                                src={relatedProduct.images[0]}
                                                alt={relatedProduct.name}
                                                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            {relatedProduct.isNew && (
                                                <div className="absolute top-3 left-3 bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                                    New
                                                </div>
                                            )}
                                            {relatedProduct.isBestSeller && (
                                                <div className="absolute top-3 right-3 bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                                                    Best Seller
                                                </div>
                                            )}
                                        </div>
                                    </Link>

                                    <div className="p-2">
                                        <h3 className="font-semibold text-lg text-gray-900 mb-1 group-hover:text-rose-700 transition-colors">
                                            <Link to={`/products/${relatedProduct.id}`}>{relatedProduct.name}</Link>
                                        </h3>
                                        <div className="flex items-center mb-3">
                                            <span className="font-bold text-gray-900 mr-2">${relatedProduct.salePrice.toFixed(2)}</span>
                                            {relatedProduct.salePrice < relatedProduct.price && (
                                                <span className="text-gray-500 text-sm line-through">${relatedProduct.price.toFixed(2)}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-white border-t border-gray-200 mt-16 py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-4">
                            <div className="w-12 h-12 mx-auto bg-rose-50 rounded-full flex items-center justify-center text-rose-600 mb-3">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-gray-900 mb-1">Premium Quality</h3>
                            <p className="text-sm text-gray-600">Crafted with the finest materials</p>
                        </div>
                        <div className="p-4">
                            <div className="w-12 h-12 mx-auto bg-rose-50 rounded-full flex items-center justify-center text-rose-600 mb-3">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-gray-900 mb-1">Free Shipping</h3>
                            <p className="text-sm text-gray-600">On all orders over $100</p>
                        </div>
                        <div className="p-4">
                            <div className="w-12 h-12 mx-auto bg-rose-50 rounded-full flex items-center justify-center text-rose-600 mb-3">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-gray-900 mb-1">Easy Returns</h3>
                            <p className="text-sm text-gray-600">30-day satisfaction guarantee</p>
                        </div>
                        <div className="p-4">
                            <div className="w-12 h-12 mx-auto bg-rose-50 rounded-full flex items-center justify-center text-rose-600 mb-3">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                            </div>
                            <h3 className="font-medium text-gray-900 mb-1">Secure Payment</h3>
                            <p className="text-sm text-gray-600">100% secure checkout</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;