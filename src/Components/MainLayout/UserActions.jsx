import React, { useState, useRef, useEffect } from 'react';
import { Search } from "lucide-react";

const UserActions = () => {
    const [showSearch, setShowSearch] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if (showSearch && inputRef.current) {
            inputRef.current.focus();
        }
    }, [showSearch]);

    return (
        <div className="flex items-center space-x-5">
            {/* Search with Expandable Input */}
            <div className="relative hidden sm:block group">
                <button
                    onClick={() => setShowSearch(!showSearch)}
                    className="text-gray-700 hover:text-rose-700 transition-colors p-2 rounded-full hover:bg-rose-50"
                    aria-label="Search"
                >
                    <Search className='h-5 w-5' />
                </button>
                {showSearch && (
                    <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300">
                        <div className="relative">
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Search for products..."
                                className="w-full py-3 pl-4 pr-10 text-sm border-none focus:ring-0"
                            />
                            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-rose-600">
                                <Search className='h-5 w-5' />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Account with Dropdown Preview */}
            <div className="relative hidden sm:block group">
                <a
                    href="/account"
                    className="text-gray-700 hover:text-rose-700 transition-colors p-2 rounded-full hover:bg-rose-50 flex items-center justify-center"
                    aria-label="Account"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </a>
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl py-2 opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible">
                    <a href="/account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-50 hover:text-rose-700">My Account</a>
                    <a href="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-50 hover:text-rose-700">My Orders</a>
                    <a href="/wishlist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-50 hover:text-rose-700">Wishlist</a>
                    <div className="border-t border-gray-100 my-1"></div>
                    <a href="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-50 hover:text-rose-700">Sign Out</a>
                </div>
            </div>

            {/* Cart with Floating Counter */}
            <div className="relative group">
                <a
                    href="/cart"
                    className="text-gray-700 hover:text-rose-700 transition-colors p-2 rounded-full hover:bg-rose-50 relative flex items-center justify-center"
                    aria-label="Cart"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-rose-700 to-pink-600 text-xs text-white transform transition-transform duration-200 group-hover:scale-110 shadow-sm">
                        3
                    </span>
                </a>
                {/* Mini Cart Preview */}
                <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-xl p-4 opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible">
                    <div className="flex justify-between items-center mb-3">
                        <h4 className="font-medium text-gray-900">Your Cart (3)</h4>
                        <a href="/cart" className="text-sm text-rose-700 hover:underline">View all</a>
                    </div>
                    <div className="space-y-3 max-h-60 overflow-y-auto">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="flex items-center space-x-3 p-2 hover:bg-rose-50 rounded-lg">
                                <div className="w-12 h-12 bg-gray-100 rounded-md"></div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-gray-900">Product {item}</p>
                                    <p className="text-xs text-gray-500">1 × $49.99</p>
                                </div>
                                <button className="text-gray-400 hover:text-rose-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-gray-200 mt-3 pt-3">
                        <div className="flex justify-between mb-3">
                            <span className="text-sm text-gray-600">Subtotal</span>
                            <span className="text-sm font-medium">$149.97</span>
                        </div>
                        <a
                            href="/checkout"
                            className="block w-full text-center bg-gradient-to-r from-rose-700 to-pink-600 text-white py-2 rounded-md hover:opacity-90 transition-opacity text-sm font-medium"
                        >
                            Checkout
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserActions;