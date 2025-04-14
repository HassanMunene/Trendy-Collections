import { useState } from 'react';
import { Link } from 'react-router-dom';

import HeroSection from '../Components/MainLayout/HeroSection';

const HomePage = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    // Hero slider data
    const heroSlides = [
        {
            id: 1,
            title: 'Elevate Your Home with Luxury',
            subtitle: 'Discover our premium collections designed for comfort and style',
            cta: 'Shop Now',
            link: '/products/new',
            image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
            backgroundColor: 'bg-rose-50'
        },
        {
            id: 2,
            title: 'Summer Collection Launch',
            subtitle: 'Fresh designs to brighten your living spaces',
            cta: 'Explore New Arrivals',
            link: '/products/new',
            image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            backgroundColor: 'bg-rose-50'
        },
    ];

    // Featured categories
    const categories = [
        {
            id: 1,
            name: 'Bed Collections',
            image: 'https://images.unsplash.com/photo-1616627561839-074385245ff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
            link: '/products?category=bed'
        },
        {
            id: 2,
            name: 'Bath Essentials',
            image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            link: '/products?category=bath'
        },
        {
            id: 3,
            name: 'Living Room',
            image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            link: '/products?category=living'
        },
        {
            id: 4,
            name: 'Best Sellers',
            image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            link: '/products?category=bestsellers'
        }
    ];

    // Featured products
    const featuredProducts = [
        {
            id: 1,
            name: 'Luxury Sateen Sheets',
            description: '400 thread count for ultimate softness and durability',
            price: '$129.99',
            image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
            link: '/products/luxury-sateen-sheets'
        },
        {
            id: 2,
            name: 'Organic Cotton Duvet',
            description: 'Breathable and hypoallergenic for perfect sleep',
            price: '$189.99',
            image: 'https://images.unsplash.com/photo-1583845112203-454c7c581fad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
            link: '/products/organic-cotton-duvet'
        },
        {
            id: 3,
            name: 'Plush Bath Towels',
            description: 'Ultra-absorbent and quick-drying for spa-like luxury',
            price: '$49.99',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
            link: '/products/plush-bath-towels'
        }
    ];

    // Reviews
    const reviews = [
        {
            id: 1,
            title: 'Absolutely Luxurious',
            text: 'The quality exceeded my expectations. These sheets are worth every penny!',
            author: 'Sarah M.',
            rating: 5
        },
        {
            id: 2,
            title: 'Best Purchase Ever',
            text: 'I sleep so much better since upgrading to Trendy Collections bedding.',
            author: 'Michael T.',
            rating: 5
        },
        {
            id: 3,
            title: 'Customer for Life',
            text: 'From ordering to delivery to product quality - everything was perfect.',
            author: 'Jennifer K.',
            rating: 5
        }
    ];

    // Slider navigation
    const nextSlide = () => {
        setActiveSlide((prevSlide) => (prevSlide === heroSlides.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setActiveSlide((prevSlide) => (prevSlide === 0 ? heroSlides.length - 1 : prevSlide - 1));
    };

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <HeroSection />

            {/* Shop by Category */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Shop By Category</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover our carefully curated collections for every room in your home</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {categories.map((category) => (
                            <Link to={category.link} key={category.id} className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                    <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-16 bg-rose-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Signature Collection</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Premium quality home essentials you'll love</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredProducts.map((product) => (
                            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <Link to={product.link} className="block overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </Link>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{product.name}</h3>
                                    <p className="text-gray-600 mb-4">{product.description}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-bold text-rose-700">{product.price}</span>
                                        <Link
                                            to={product.link}
                                            className="text-sm font-medium bg-gradient-to-r from-rose-700 to-pink-600 text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                                        >
                                            Shop Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Loved by Thousands</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Don't just take our word for it - hear from our customers</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {reviews.map((review) => (
                            <div
                                key={review.id}
                                className="bg-white p-8 rounded-xl shadow-md border border-rose-100 hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className={`w-5 h-5 ${i < review.rating ? 'text-amber-400' : 'text-gray-300'}`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <h4 className="text-xl font-semibold mb-3 text-gray-900">{review.title}</h4>
                                <p className="text-gray-600 mb-6">"{review.text}"</p>
                                <p className="text-gray-800 font-medium">— {review.author}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/reviews"
                            className="inline-block border-2 border-rose-700 text-rose-700 px-8 py-3 rounded-md hover:bg-rose-700 hover:text-white transition-colors font-medium"
                        >
                            Read More Reviews
                        </Link>
                    </div>
                </div>
            </section>

            {/* Value Propositions */}
            <section className="py-16 bg-gradient-to-b from-white to-rose-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="flex justify-center mb-6">
                                <div className="w-20 h-20 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full flex items-center justify-center">
                                    <svg className="w-10 h-10 text-rose-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900">Premium Quality</h3>
                            <p className="text-gray-600">Only the finest materials crafted for lasting comfort and style</p>
                        </div>

                        <div className="text-center">
                            <div className="flex justify-center mb-6">
                                <div className="w-20 h-20 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full flex items-center justify-center">
                                    <svg className="w-10 h-10 text-rose-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900">365-Day Guarantee</h3>
                            <p className="text-gray-600">Love it or your money back - no questions asked</p>
                        </div>

                        <div className="text-center">
                            <div className="flex justify-center mb-6">
                                <div className="w-20 h-20 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full flex items-center justify-center">
                                    <svg className="w-10 h-10 text-rose-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900">Fast, Free Shipping</h3>
                            <p className="text-gray-600">Free delivery on all orders over $50</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Instagram Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">#TrendyAtHome</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Tag us to be featured in our gallery</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
                            'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
                            'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
                            'https://images.unsplash.com/photo-1583845112203-454c7c581fad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
                        ].map((image, index) => (
                            <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                <img
                                    src={image}
                                    alt={`Instagram post ${index + 1}`}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-gradient-to-r from-rose-700 to-pink-600 text-white px-8 py-3 rounded-md hover:opacity-90 transition-opacity font-medium"
                        >
                            Follow Us @TrendyCollections
                        </a>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-16 bg-gradient-to-r from-rose-700 to-pink-600">
                <div className="container mx-auto px-4 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto">Subscribe to receive exclusive offers, styling tips, and first access to new collections</p>
                    
                    <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-1 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-white text-rose-700 px-6 py-3 rounded-md hover:bg-opacity-90 transition-opacity font-medium"
                        >
                            Subscribe
                        </button>
                    </form>
                    
                    <p className="text-sm mt-4 opacity-80">We respect your privacy. Unsubscribe at any time.</p>
                </div>
            </section>
        </div>
    );
};

export default HomePage;