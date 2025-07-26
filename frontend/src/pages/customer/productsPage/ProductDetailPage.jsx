import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Star, Minus, Plus, Share2, MessageCircle, Check, ChevronDown, Truck, Clock, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '../../../context/CartContext';
import { products } from '@/src/Mocks/products2';
import { ProductCard } from '@/src/components/common/ProductCard';
import Breadcrumbs from '@/src/components/common/Breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionItem } from '@/components/ui/accordion';


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
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

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

  const formatPrice = (price) => `KSh ${price.toLocaleString()}`;
  const whatsappMessage = `Hi, I'm interested in your ${product.name} (${product.id}). Could you tell me more about it?`;
  const whatsappUrl = `https://wa.me/254712345678?text=${encodeURIComponent(whatsappMessage)}`;

  const productImages = [
    product.image,
    ...(product.images || []),
  ];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedToClipboard(true);
    setTimeout(() => setCopiedToClipboard(false), 2000);
  };

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    try {
      await addItem({
        ...product,
        selectedColor,
        quantity
      });
      // Show success notification
    } finally {
      setIsAddingToCart(false);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < Math.floor(rating || 0)
          ? 'text-yellow-400 fill-current'
          : 'text-gray-300'
          }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Premium Header with Breadcrumbs */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Back to products"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="hidden sm:inline">Back</span>
            </button>

            <Breadcrumbs
              items={[
                { name: 'Home', href: '/' },
                { name: product.category, href: `/${product.category}` },
                { name: product.name, current: true }
              ]}
              className="hidden md:flex"
            />

            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
              >
                <Heart
                  className={`h-5 w-5 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'}`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Product Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Gallery - Premium Version */}
          <div className="space-y-4">
            {/* Main Image with Floating Badges */}
            <div className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden group">
              <img
                src={productImages[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-300 cursor-zoom-in"
                onClick={() => setIsZoomOpen(true)}
                loading="eager"
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 space-y-2">
                {product.isNew && (
                  <Badge variant="success" className="shadow-sm rounded-sm">
                    New Arrival
                  </Badge>
                )}
                {product.onOffer && (
                  <Badge variant="info" className="shadow-sm rounded-sm ml-2">
                    {product.salePercentage}% OFF
                  </Badge>
                )}
                {product.stock <= 5 && (
                  <Badge variant="destructive" className="shadow-sm rounded-sm">
                    Only {product.stock} left
                  </Badge>
                )}
              </div>

              {/* Quick Actions */}
              <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => setShowWhatsAppPopup(true)}
                  className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
                  aria-label="Contact seller"
                >
                  <MessageCircle className="h-5 w-5 text-green-600" />
                </button>
                <button
                  onClick={handleCopyLink}
                  className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
                  aria-label="Share product"
                >
                  <Share2 className="h-5 w-5 text-gray-700" />
                </button>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-5 gap-3">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${selectedImageIndex === index
                    ? 'border-black scale-105 shadow-sm'
                    : 'border-transparent hover:border-gray-300'
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

            {/* Image Zoom Modal */}
            {isZoomOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                <button
                  onClick={() => setIsZoomOpen(false)}
                  className="absolute top-6 right-6 text-white p-2 hover:bg-white hover:bg-opacity-10 rounded-full"
                  aria-label="Close zoom"
                >
                  ✕
                </button>
                <img
                  src={productImages[selectedImageIndex]}
                  className="max-w-[90vw] max-h-[90vh] object-contain"
                  alt={`Zoomed view of ${product.name}`}
                />
              </div>
            )}
          </div>

          {/* Product Info - Premium Layout */}
          <div className="space-y-6">
            {/* Title and Rating */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {renderStars(product.rating)}
                  <span className="ml-1 text-sm font-medium text-gray-600">
                    {product.rating.toFixed(1)}
                  </span>
                </div>
                <span className="text-sm text-gray-500">
                  {product.reviews} reviews
                </span>
                <span className="text-sm text-gray-500">
                  {product.stock} in stock
                </span>
              </div>
            </div>

            {/* Price Section */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-baseline gap-3">
                {product.originalPrice && (
                  <span className="text-lg text-gray-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                <span className="text-3xl font-bold text-gray-900">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <Badge variant="sale" className="ml-2">
                    Save {formatPrice(product.originalPrice - product.price)}
                  </Badge>
                )}
              </div>

              {product.stock <= 10 && (
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-green-600 h-2.5 rounded-full"
                      style={{ width: `${(product.stock / 10) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {product.stock} items left
                  </p>
                </div>
              )}
            </div>

            {/* Color Selection */}
            {product.colors?.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Color: <span className="font-normal">{selectedColor}</span></h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-full border-2 flex items-center gap-2 ${selectedColor === color
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 bg-white hover:bg-gray-50'
                        }`}
                    >
                      {selectedColor === color && <Check className="h-4 w-4" />}
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes?.length > 1 && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Size</h3>
                <div className="grid grid-cols-3 gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size.name}
                      className={`p-3 rounded-lg border-2 flex flex-col items-center ${selectedSize === size.name
                          ? 'border-black bg-black text-white'
                          : 'border-gray-300 bg-white hover:bg-gray-50'
                        }`}
                    >
                      <span className="font-medium">{size.name}</span>
                      <span className="text-sm text-gray-500">{size.dimensions}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity and Add to Cart */}
            <div className="flex gap-4 pt-4">
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-3 hover:bg-gray-100 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-2 border-x border-gray-300 text-center w-12">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-3 hover:bg-gray-100 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              <Button
                onClick={handleAddToCart}
                className="flex-1 bg-black hover:bg-gray-800 h-12 text-lg"
                disabled={isAddingToCart || product.stock === 0}
                size="lg"
              >
                {isAddingToCart ? 'Adding...' : 'Add to Cart'}
              </Button>
            </div>

            {/* WhatsApp Quick Action */}
            <Button
              variant="outline"
              className="w-full h-12 text-lg border-green-600 text-green-600 hover:bg-green-50"
              onClick={() => setShowWhatsAppPopup(true)}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Chat with Seller
            </Button>

            {/* Product Details Accordion */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="description">
                <div className="flex items-center justify-between w-full py-4 font-medium">
                  <span>Description</span>
                  <ChevronDown className="h-5 w-5 transition-transform duration-200" />
                </div>
                <div className="pb-4 pt-0">
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <ul className="space-y-3">
                    {product.features?.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionItem>

              <AccordionItem value="specifications">
                <div className="flex items-center justify-between w-full py-4 font-medium">
                  <span>Specifications</span>
                  <ChevronDown className="h-5 w-5 transition-transform duration-200" />
                </div>
                <div className="pb-4 pt-0">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Dimensions</h4>
                      {product.sizes?.map((size, i) => (
                        <p key={i} className="text-gray-600 mb-1">
                          {size.name}: {size.panelWidth} x {size.panelLength}
                        </p>
                      ))}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Materials</h4>
                      <p className="text-gray-600">{product.materials?.join(', ')}</p>
                    </div>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem value="delivery">
                <div className="flex items-center justify-between w-full py-4 font-medium">
                  <span>Delivery & Returns</span>
                  <ChevronDown className="h-5 w-5 transition-transform duration-200" />
                </div>
                <div className="pb-4 pt-0">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Truck className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Free Shipping</h4>
                        <p className="text-gray-600">On orders over KSh 8,000</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 p-2 rounded-full">
                        <Clock className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Delivery Time</h4>
                        <p className="text-gray-600">3-5 working days in Nairobi</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <RefreshCw className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Easy Returns</h4>
                        <p className="text-gray-600">14-day return policy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold">You may also like</h3>
              <Button
                variant="link"
                onClick={() => navigate(`/${product.category}`)}
                className="text-gray-600 hover:text-black"
              >
                View all
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </main>

      {/* WhatsApp Popup */}
      {showWhatsAppPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Contact Seller</h3>
              <button
                onClick={() => setShowWhatsAppPopup(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700">
                You're about to contact the seller about:<br />
                <strong>{product.name}</strong>
              </p>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">Your message will include:</p>
                <p className="text-gray-700">{whatsappMessage}</p>
              </div>

              <div className="flex gap-3 pt-2">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowWhatsAppPopup(false)}
                >
                  Cancel
                </Button>
                <Button
                  className="flex-1 bg-green-600 hover:bg-green-700"
                  onClick={() => window.open(whatsappUrl, '_blank')}
                >
                  Open WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Bottom Bar (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 px-4 shadow-lg lg:hidden z-40">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-2 hover:bg-gray-100"
              aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="px-3 py-2 border-x border-gray-300 text-center w-10">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-2 hover:bg-gray-100"
              aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <Button
            onClick={handleAddToCart}
            className="flex-1 bg-black hover:bg-gray-800 h-12"
            disabled={isAddingToCart || product.stock === 0}
          >
            {isAddingToCart ? 'Adding...' : 'Add to Cart'}
          </Button>

          <Button
            variant="outline"
            className="h-12 border-green-600 text-green-600 hover:bg-green-50"
            onClick={() => setShowWhatsAppPopup(true)}
          >
            <MessageCircle className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}