import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Star, Minus, Plus, Share2, Facebook, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '../../../context/CartContext';
import { products } from '../../../Mocks/products';
import ProductCard from '../../../components/common/ProductCard';

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();

  const product = products.find(p => p.id === productId);
  const relatedProducts = products.filter(p => p.category === product?.category && p.id !== productId).slice(0, 4);

  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Button onClick={() => navigate('/')}>Back to Products</Button>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => `ksh ${price.toLocaleString()}`;

  const productImages = [
    product.image,
    ...(product.additionalImages || []),
  ];

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

    return colors.map((color) => (
      <button
        key={color}
        onClick={() => setSelectedColor(color)}
        className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-gray-900' : 'border-gray-300'
          }`}
        style={{ backgroundColor: colorMap[color] || '#D1D5DB' }}
        title={color}
        aria-label={`Select color ${color}`}
      />
    ));
  };

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    try {
      for (let i = 0; i < quantity; i++) {
        await addItem({ ...product, selectedColor });
      }
      // In a real app, you might show a toast notification here
    } finally {
      setIsAddingToCart(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            aria-label="Back to products"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg overflow-hidden relative group">
              <img
                src={productImages[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover cursor-zoom-in"
                onClick={() => setIsZoomOpen(true)}
                loading="lazy"
              />
              {product.isNew && (
                <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                  NEW
                </span>
              )}
            </div>

            <div className="flex gap-3 overflow-x-auto pb-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 bg-white rounded-md overflow-hidden border-2 ${selectedImageIndex === index ? 'border-black' : 'border-transparent'
                    }`}
                  aria-label={`View image ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>

            {isZoomOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                <button
                  onClick={() => setIsZoomOpen(false)}
                  className="absolute top-4 right-4 text-white p-2"
                  aria-label="Close zoom"
                >
                  ✕
                </button>
                <img
                  src={productImages[selectedImageIndex]}
                  className="max-w-full max-h-full"
                  alt={`Zoomed view of ${product.name}`}
                />
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>

              {/* Rating */}
              {product.rating && (
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating || 0)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                          }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">{product.rating.toFixed(1)}</span>
                  <span className="text-sm text-gray-400">(127 reviews)</span>
                </div>
              )}

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                <span className="text-3xl font-bold text-gray-900">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="bg-red-100 text-red-800 text-sm font-medium px-2 py-1 rounded">
                    Save {formatPrice(product.originalPrice - product.price)}
                  </span>
                )}
              </div>

              {/* Stock indicator */}
              {product.stock <= 10 && product.stock > 0 ? (
                <div className="text-sm text-orange-600 mb-4">
                  Only {product.stock} left in stock!
                </div>
              ) : product.stock === 0 ? (
                <div className="text-sm text-red-600 mb-4">Out of stock</div>
              ) : null}
            </div>

            {/* Tabbed interface */}
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                {['description', 'specifications', 'reviews', 'delivery'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-4 px-6 font-medium text-sm border-b-2 ${activeTab === tab
                        ? 'border-black text-black'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </nav>
            </div>

            <div className="py-6">
              {activeTab === 'description' && (
                <div className="prose prose-sm">
                  <p>{product.description}</p>
                  <ul className="space-y-2 mt-4">
                    {product.features?.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Dimensions</h4>
                    <p>Height: {product.dimensions?.height || 'N/A'}</p>
                    <p>Width: {product.dimensions?.width || 'N/A'}</p>
                    <p>Depth: {product.dimensions?.depth || 'N/A'}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Materials</h4>
                    <p>{product.materials?.join(', ') || 'N/A'}</p>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <p>Reviews coming soon</p>
                </div>
              )}

              {activeTab === 'delivery' && (
                <div className="space-y-3">
                  <p>Standard delivery: 3-5 working days</p>
                  <p>Express delivery available</p>
                  <p>Free shipping on orders over £50</p>
                </div>
              )}
            </div>

            {/* Color Selection */}
            {product.colors.length > 1 && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Color: {selectedColor}</h3>
                <div className="flex items-center gap-3">
                  {getColorDots(product.colors)}
                </div>
              </div>
            )}

            {/* Social Sharing */}
            <div className="flex gap-3 pt-4 border-t border-gray-200">
              <button className="text-gray-500 hover:text-blue-500" aria-label="Share on Facebook">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="text-gray-500 hover:text-pink-500" aria-label="Share on Instagram">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="text-gray-500 hover:text-blue-400" aria-label="Share on Twitter">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="text-gray-500 hover:text-gray-700" aria-label="Share product">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-xl font-bold mb-6">You may also like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sticky Add to Cart */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 py-4 px-4 shadow-lg lg:hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex gap-3">
            <div className="flex border border-gray-300 rounded-md">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 hover:bg-gray-50"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="px-4 py-2 border-x border-gray-300 text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 hover:bg-gray-50"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <Button
              onClick={handleAddToCart}
              className="flex-1 bg-black hover:bg-gray-800 h-12 text-lg"
              disabled={isAddingToCart || product.stock === 0}
            >
              {isAddingToCart ? 'Adding...' : 'Add to Cart'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}