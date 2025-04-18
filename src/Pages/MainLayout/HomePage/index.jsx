import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import MinimalHeroSection from './MinimalHeroSection';

import {
    fetchCollections,
    fetchBestSellers,
    fetchNewArrivals,
    fetchTestimonials
} from "../../../api/api"

const HomePage = () => {
    const [collections, setCollections] = useState([]);
    const [bestSellers, setBestSellers] = useState([]);
    const [newArrivals, setNewArrivals] = useState([]);
    const [testimonials, setTestimonials] = useState([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const [collectionsData, bestSellersData, newArrivalsData, testimonialsData] = await Promise.all([
                    fetchCollections(),
                    fetchBestSellers(),
                    fetchNewArrivals(),
                    fetchTestimonials()
                ]);
                setCollections(collectionsData);
                setBestSellers(bestSellersData);
                setNewArrivals(newArrivalsData);
                setTestimonials(testimonialsData);
            } catch (error) {
                setError(error.message);
                console.log("error fetching the data");
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [])

    if (loading) {
        return <div className="text-center py-20">Loading...</div>;
    }

    if (error) {
        return <div className="text-center py-20 text-red-500">Error: {error}</div>;
    }

    return (
        <div className="bg-white">
            {/* Minimal Hero - Just a headline and CTA */}
            <MinimalHeroSection />
            
            {/* Curated Collections - The new focal point */}
            <div className="py-16 px-4 bg-white">
                <div className="container mx-auto max-w-7xl">
                    {/* Collections Section */}
                    {collections.map((collection) => (
                        <section key={collection.id} className="mb-20">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
                                <div className="mb-6 md:mb-0">
                                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">{collection.name}</h2>
                                    <p className="text-lg text-gray-600 max-w-2xl">{collection.description}</p>
                                </div>
                                <Link
                                    to={`/products?category=${collection.id}`}
                                    className="flex items-center text-base md:text-lg font-medium text-rose-700 hover:text-rose-800 transition-colors group"
                                >
                                    <span className="border-b border-transparent group-hover:border-rose-700 transition-all">
                                        Explore the {collection.name.toLowerCase()}
                                    </span>
                                    <svg className="w-5 h-5 ml-1.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {collection.products.map((product) => (
                                    <div key={product.id} className="group relative">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-amber-50 to-rose-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                                        <div className="relative h-full z-10 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                                            <Link to={`/products/${product.id}`} className="block mb-4">
                                                <div className="relative overflow-hidden rounded-xl mb-4 aspect-[1/1] bg-gray-50">
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                                                        loading="lazy"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                    {product.salePrice && (
                                                        <div className="absolute top-3 right-3 bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                                            Sale
                                                        </div>
                                                    )}
                                                </div>
                                            </Link>

                                            <div className="px-1">
                                                <h3 className="font-serif text-lg font-semibold text-gray-900 mb-1.5 group-hover:text-rose-700 transition-colors duration-200">
                                                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                                                </h3>
                                                <div className="flex items-center mb-3">
                                                    {product.salePrice ? (
                                                        <>
                                                            <span className="font-bold text-gray-900 text-base mr-2">ksh {product.salePrice.toFixed(2)}</span>
                                                            <span className="text-gray-500 text-xs line-through">ksh {product.price.toFixed(2)}</span>
                                                        </>
                                                    ) : (
                                                        <span className="font-bold text-gray-900 text-base">ksh {product.price.toFixed(2)}</span>
                                                    )}
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <div className="flex -space-x-1.5">
                                                            {product.colors.slice(0, 4).map((color) => (
                                                                <div
                                                                    key={color}
                                                                    className="w-5 h-5 rounded-full border border-white shadow-xs transition-transform duration-200 hover:scale-125 hover:z-10"
                                                                    style={{
                                                                        backgroundColor: color === 'white' ? '#ffffff' :
                                                                            color === 'cream' ? '#f5f5dc' :
                                                                                color === 'graphite' ? '#4d4d4d' :
                                                                                    color === 'navy' ? '#000080' :
                                                                                        color === 'sage' ? '#9CAF88' :
                                                                                            color === 'ivory' ? '#FFFFF0' :
                                                                                                color === 'charcoal' ? '#36454F' :
                                                                                                    color === 'blush' ? '#DE5D83' :
                                                                                                        color === 'taupe' ? '#483C32' :
                                                                                                            color === 'natural' ? '#E1C9B5' :
                                                                                                                color === 'stone' ? '#928E85' :
                                                                                                                    color === 'grey' ? '#808080' :
                                                                                                                        color === 'blue' ? '#0000FF' :
                                                                                                                            color === 'camel' ? '#C19A6B' :
                                                                                                                                color === 'oatmeal' ? '#D3C9B5' : '#ccc'
                                                                    }}
                                                                    title={color}
                                                                ></div>
                                                            ))}
                                                        </div>
                                                        {product.colors.length > 4 && (
                                                            <span className="text-xs text-gray-500 ml-1.5">+{product.colors.length - 4} more</span>
                                                        )}
                                                    </div>
                                                    <Link
                                                        to={`/products/${product.id}`}
                                                        className="text-xs font-medium text-rose-700 hover:text-rose-800 flex items-center"
                                                    >
                                                        Details
                                                        <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}

                    {/* Best Sellers Section */}
                    <section className="mb-20">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
                            <div className="mb-6 md:mb-0">
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">Customer Favorites</h2>
                                <p className="text-lg text-gray-600">Our most loved products by discerning clients</p>
                            </div>
                            <Link
                                to="/products?sort=bestsellers"
                                className="flex items-center text-base md:text-lg font-medium text-rose-700 hover:text-rose-800 transition-colors group"
                            >
                                <span className="border-b border-transparent group-hover:border-rose-700 transition-all">
                                    View all best sellers
                                </span>
                                <svg className="w-5 h-5 ml-1.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {bestSellers.map((product) => (
                                <div key={product.id} className="group relative">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-50 to-rose-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                                    <div className="relative h-full z-10 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <Link to={`/products/${product.id}`} className="block mb-4">
                                            <div className="relative overflow-hidden rounded-lg aspect-[1/1] bg-gray-50">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                                                    loading="lazy"
                                                />
                                                <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center">
                                                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    Best Seller
                                                </div>
                                            </div>
                                        </Link>

                                        <div className="px-1">
                                            <h3 className="font-serif text-lg font-semibold text-gray-900 mb-1.5 group-hover:text-rose-700 transition-colors duration-200">
                                                <Link to={`/products/${product.id}`}>{product.name}</Link>
                                            </h3>
                                            <div className="flex items-center mb-3">
                                                {product.salePrice ? (
                                                    <>
                                                        <span className="font-bold text-gray-900 text-base mr-2">${product.salePrice.toFixed(2)}</span>
                                                        <span className="text-gray-500 text-xs line-through">${product.price.toFixed(2)}</span>
                                                    </>
                                                ) : (
                                                    <span className="font-bold text-gray-900 text-base">${product.price.toFixed(2)}</span>
                                                )}
                                            </div>
                                            <Link
                                                to={`/products/${product.id}`}
                                                className="inline-flex items-center text-xs font-medium text-rose-700 hover:text-rose-800 border-b border-transparent hover:border-rose-700 transition-all"
                                            >
                                                Discover why customers love this
                                                <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* New Arrivals Section */}
                    <section>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
                            <div className="mb-6 md:mb-0">
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">New Arrivals</h2>
                                <p className="text-lg text-gray-600">Fresh additions to elevate your home</p>
                            </div>
                            <Link
                                to="/products?sort=newest"
                                className="flex items-center text-base md:text-lg font-medium text-rose-700 hover:text-rose-800 transition-colors group"
                            >
                                <span className="border-b border-transparent group-hover:border-rose-700 transition-all">
                                    View all new arrivals
                                </span>
                                <svg className="w-5 h-5 ml-1.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {newArrivals.map((product) => (
                                <div key={product.id} className="group relative">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-50 to-rose-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                                    <div className="relative h-full z-10 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <Link to={`/products/${product.id}`} className="block">
                                            <div className="relative overflow-hidden rounded-xl mb-4 aspect-[1/1] bg-gray-50">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                                                    loading="lazy"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                <div className="absolute top-3 left-3 bg-white text-rose-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center">
                                                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                    </svg>
                                                    New Arrival
                                                </div>
                                            </div>
                                        </Link>

                                        <div className="px-1">
                                            <h3 className="font-serif text-lg font-semibold text-gray-900 mb-1.5 group-hover:text-rose-700 transition-colors duration-200">
                                                <Link to={`/products/${product.id}`}>{product.name}</Link>
                                            </h3>
                                            <div className="flex items-center mb-3">
                                                {product.salePrice ? (
                                                    <>
                                                        <span className="font-bold text-gray-900 text-base mr-2">${product.salePrice.toFixed(2)}</span>
                                                        <span className="text-gray-500 text-xs line-through">${product.price.toFixed(2)}</span>
                                                    </>
                                                ) : (
                                                    <span className="font-bold text-gray-900 text-base">${product.price.toFixed(2)}</span>
                                                )}
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="text-xs text-gray-500">
                                                    Limited stock available
                                                </div>
                                                <Link
                                                    to={`/products/${product.id}`}
                                                    className="text-xs font-medium text-rose-700 hover:text-rose-800 flex items-center"
                                                >
                                                    Shop now
                                                    <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            {/* Value Proposition Banner */}
            <div className="bg-gradient-to-r from-rose-700 to-pink-600 py-16 px-4 text-white">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-serif font-semibold mb-3">Premium Quality</h3>
                            <p className="text-rose-100 max-w-xs">Only the finest materials sourced from ethical suppliers worldwide</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-serif font-semibold mb-3">Free Shipping</h3>
                            <p className="text-rose-100 max-w-xs">Complimentary delivery on all orders over $100 with white-glove service available</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-serif font-semibold mb-3">Easy Returns</h3>
                            <p className="text-rose-100 max-w-xs">365-night trial with free returns - we want you to love your purchase</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonial Section */}
            <div className="py-24 px-4 bg-white">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Our Discerning Clients</h2>
                        <div className="w-20 h-1 bg-rose-600 mx-auto"></div>
                        <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
                            Join thousands of satisfied customers who have transformed their homes with our luxury textiles
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="group relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative bg-white rounded-xl p-8 h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="flex items-center mb-6">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-14 h-14 rounded-full object-cover mr-4"
                                        />
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.location}</p>
                                        </div>
                                    </div>
                                    <div className="flex mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <blockquote className="text-gray-700 italic mb-6">
                                        “{testimonial.content}”
                                    </blockquote>
                                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <svg className="w-10 h-10 text-rose-200" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Trust indicators */}
                    <div className="mt-20 pt-12 border-t border-gray-200">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-gray-900 mb-2">10K+</div>
                                <div className="text-gray-600">Happy Customers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-gray-900 mb-2">4.9/5</div>
                                <div className="text-gray-600">Average Rating</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-gray-900 mb-2">15</div>
                                <div className="text-gray-600">Countries Served</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
                                <div className="text-gray-600">Customer Support</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Final CTA */}
            <div className="relative py-32 px-4 bg-gray-50 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1583845112203-454c7c581fad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80"
                        alt="Luxury bedroom"
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Experience Unparalleled Comfort</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Your dream bedroom awaits - discover our collection of premium home textiles today
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="/products"
                            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-rose-700 hover:bg-rose-800 shadow-lg transition-all duration-300 transform hover:scale-105"
                        >
                            Shop Now
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 border border-2 border-gray-900 text-lg font-medium rounded-md text-gray-900 hover:bg-gray-900/5 transition-all duration-300"
                        >
                            Personal Stylist
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;