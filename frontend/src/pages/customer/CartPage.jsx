import { Link } from 'react-router-dom';
import { ShoppingCart, X } from 'lucide-react';
import { useCart } from '@/src/context/CartContext';
import { FaWhatsappSquare } from "react-icons/fa";

const Cart = () => {
  const { cartItems, cartTotal, removeFromCart, updateQuantity, clearCart } = useCart();

  const handleWhatsAppOrder = () => {
    const phoneNumber = '254712403671';
    const message = `I want to order these items:\n\n${cartItems.map(item =>
      `${item.name} (${item.quantity} x KSh ${item.price.toLocaleString()})`
    ).join('\n')
      }\n\nTotal: KSh ${cartTotal.toLocaleString()}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <ShoppingCart className="h-16 w-16 text-gray-300 mb-4" />
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-6">Start shopping to add items to your cart</p>
        <Link
          to="/products?category=all"
          className="bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h3 className="text-3xl font-bold mb-8">Your Shopping Cart</h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {cartItems.map(item => (
              <div key={item.id} className="p-4 border-b border-gray-200 last:border-b-0 flex">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="ml-4 flex-1">
                  <div className="flex justify-between">
                    <h5 className="font-medium">{item.name}</h5>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">KSh {item.price.toLocaleString()}</p>
                  <div className="mt-3 flex items-center">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="border border-gray-300 px-2 py-1 rounded-l hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="border-t border-b border-gray-300 px-4 py-1">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="border border-gray-300 px-2 py-1 rounded-r hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="ml-4 text-right">
                  <p className="font-medium">
                    KSh {(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-end">
            <button
              onClick={clearCart}
              className="text-pink-600 hover:text-pink-800 text-sm font-medium"
            >
              Clear Cart
            </button>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h4 className="text-lg font-bold mb-4">Order Summary</h4>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>KSh {cartTotal.toLocaleString()}</span>
              </div>
              <div className="border-t border-gray-200 pt-3 flex justify-between font-bold">
                <span>Total</span>
                <span>KSh {cartTotal.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={handleWhatsAppOrder}
              className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            >
              <FaWhatsappSquare className="h-5 w-5" />
              Order via WhatsApp
            </button>

            <Link
              to="/products?category=all"
              className="mt-3 block text-center text-pink-600 hover:text-pink-800 text-sm font-medium"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;