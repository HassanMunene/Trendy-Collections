import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import MinimalHeroSection from './MinimalHeroSection';
import Sidebar from './Sidebar';
import OurCollections from './OurCollection';
import BestSellers from './BestSellers';
import NewArrivals from './NewArrivals';

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
        <div className="bg-gray-100">
            {/* Minimal Hero section - A headline and CTA */}
            <MinimalHeroSection />

            <div className="flex flex-col lg:flex-row w-full min-h-screen bg-gray-50">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <main className="flex-1 py-8">
                    <OurCollections />
                    <div className="mt-8">
                        <BestSellers />
                    </div>
                    <div className="mt-8">
                        <NewArrivals />
                    </div>
                </main>
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