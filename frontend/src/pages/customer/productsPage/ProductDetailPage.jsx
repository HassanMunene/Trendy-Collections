import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Star, Minus, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '../../../context/CartContext'
import { products } from '../../../Mocks/products'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()

  const product = products.find(p => p.id === id)
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '')
  const [quantity, setQuantity] = useState(1)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Button onClick={() => navigate('/')}>Back to Products</Button>
        </div>
      </div>
    )
  }

  const formatPrice = (price) => `£${price.toLocaleString()}`

  // Mock additional images for the product
  const productImages = [
    product.image,
    product.image, // In a real app, these would be different angles
    product.image,
    product.image,
  ]

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

    return colors.map((color) => (
      <button
        key={color}
        onClick={() => setSelectedColor(color)}
        className={`w-8 h-8 rounded-full border-2 ${
          selectedColor === color ? 'border-gray-900' : 'border-gray-300'
        }`}
        style={{ backgroundColor: colorMap[color] || '#D1D5DB' }}
        title={color}
      />
    ))
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedColor)
    }
    // Show success message or redirect
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-[1400px] mx-auto px-4 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </button>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg overflow-hidden">
              <img
                src={productImages[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`aspect-square bg-white rounded-lg overflow-hidden border-2 ${
                    selectedImageIndex === index ? 'border-gray-900' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
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
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating || 0)
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
            </div>

            {/* Product Description */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Description</h3>
              <div className="text-gray-700 space-y-3">
                <p>
                  This beautifully crafted piece combines modern design with timeless elegance.
                  Made from premium materials, it's built to last while adding sophistication to any space.
                </p>
                <p>
                  Features include durable construction, easy assembly, and a finish that complements
                  various interior styles. Perfect for contemporary homes seeking both style and functionality.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Key Features</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  Premium quality materials
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  Easy assembly included
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  1 year warranty
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  Free delivery available
                </li>
              </ul>
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

            {/* Quantity */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Quantity</h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4 pt-4">
              <Button
                onClick={handleAddToCart}
                className="w-full bg-black text-white hover:bg-gray-800 h-12 text-lg"
              >
                Add to Cart - {formatPrice(product.price * quantity)}
              </Button>

              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`w-full flex items-center justify-center gap-2 p-3 border rounded-md transition-colors ${
                  isFavorite
                    ? 'bg-red-50 border-red-200 text-red-700'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
                {isFavorite ? 'Added to Favorites' : 'Add to Favorites'}
              </button>
            </div>

            {/* Delivery Info */}
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <h4 className="font-semibold">Delivery Information</h4>
              <p className="text-sm text-gray-600">
                Fast delivery to your door from £4.95
              </p>
              <p className="text-sm text-gray-600">
                Estimated delivery: 3-5 working days
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}