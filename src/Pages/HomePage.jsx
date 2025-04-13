import { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    // Hero slider data
    const heroSlides = [
        {
            id: 1,
            title: 'Introducing Washed European Linen',
            subtitle: 'Softer, stronger, better. All new Washed European Linen.',
            cta: 'Shop Now',
            link: '/products?category=sheets&subcategory=linen',
            image: 'https://www.brooklinen.com/cdn/shop/files/BKL_25-02_Linen2.0_Look8_2397x_8x9_WO.jpg?v=1743541898',
            backgroundColor: '#f9f8f8'
        },
        {
            id: 2,
            title: 'Best in Bed',
            subtitle: 'Experience the quality thats earned us 100k + 5 - star reviews.',
      cta: 'Shop Bestsellers',
            link: '/products?category=bestsellers',
            image: 'https://www.brooklinen.com/cdn/shop/files/BKL_25-03_Q1BrandCampaign_Look1_191x_8x9_WO.jpg?v=1743543124',
            backgroundColor: '#f9f8f8'
        },
    ];

    // Featured categories
    const categories = [
        {
            id: 1,
            name: 'Sheets',
            image: 'https://www.brooklinen.com/cdn/shop/products/luxe-core-sheet-set-white_512x512.jpg',
            link: '/products?category=sheets'
        },
        {
            id: 2,
            name: 'Bundle Savings',
            image: 'https://www.brooklinen.com/cdn/shop/products/luxe-hardcore-bundle-white_512x512.jpg',
            link: '/products?category=bundles'
        },
        {
            id: 3,
            name: 'Comforters & Duvets',
            image: 'https://www.brooklinen.com/cdn/shop/products/down-comforter-lightweight_512x512.jpg',
            link: '/products?category=comforters'
        },
        {
            id: 4,
            name: 'Bath',
            image: 'https://www.brooklinen.com/cdn/shop/products/super-plush-bath-towels_512x512.jpg',
            link: '/products?category=bath'
        }
    ];

    // Featured products
    const featuredProducts = [
        {
            id: 1,
            name: 'Washed Linen Sheets',
            description: 'Our upgraded linen sheets are softer, stronger, and made to last.',
            image: 'https://www.brooklinen.com/cdn/shop/files/BKL_25-02_Linen2.0_Look1__487x_8x9_WO.jpg',
            link: '/products/washed-linen-sheets'
        },
        {
            id: 2,
            name: 'Airweave Cotton',
            description: 'Fluff up your bed with textured, effortless Airweave Cotton.',
            image: 'https://www.brooklinen.com/cdn/shop/files/BKL_25-01_Airweave_Day1_Look3_862x_8x9_WO_1.webp',
            link: '/products/airweave-cotton'
        },
        {
            id: 3,
            name: 'Quilts & Blankets',
            description: 'Master the art of lightweight layering with our newest top-of-bed essentials.',
            image: 'https://www.brooklinen.com/cdn/shop/files/BKL_25-01_Bath_Waffle_Towels_Aloe_1x_8x9_WO_da6dff39-baae-40bb-970a-ee31f541c66c.jpg',
            link: '/products/quilts-blankets'
        }
    ];

    // Sheet types
    const sheetTypes = [
        {
            id: 1,
            name: 'Luxe Sateen',
            description: 'Irresistibly smooth. Luxurious look. #1 best-seller. Shop the best youll ever have in bed.',
      image: 'https://www.brooklinen.com/cdn/shop/products/luxe-core-sheet-set-white_512x512.jpg',
            link: '/products/luxe-sateen-sheets'
        },
        {
            id: 2,
            name: 'Classic Percale',
            description: 'Cool. Crisp. Refreshing. Award-winning. Turn your whole bed into the cool side.',
            image: 'https://www.brooklinen.com/cdn/shop/products/classic-core-sheet-set-white_512x512.jpg',
            link: '/products/classic-percale-sheets'
        },
        {
            id: 3,
            name: 'Washed European Linen',
            description: 'Airy and lived-in. The laid-back, effortless look you love.',
            image: 'https://www.brooklinen.com/cdn/shop/products/washed-linen-core-set-white_512x512.jpg',
            link: '/products/washed-linen-sheets'
        }
    ];

    // Reviews
    const reviews = [
        {
            id: 1,
            title: 'Like Sleeping On A Cloud',
            text: 'Literally the best sleep Ive gotten in ages.I never want to get out of bed...',
      author: 'Sarah T.'
        },
        {
            id: 2,
            title: 'So Comfortable!',
            text: 'These sheets make me look forward to bedtime. Theyre soft, breathable, and wash well.',
      author: 'Michael B.'
    },
        {
            id: 3,
            title: 'Worth Every Penny',
            text: 'Ive tried many brands and these are by far the best quality sheets Ive ever owned.',
            author: 'Jennifer K.'
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
            <section className="relative overflow-hidden">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                    {heroSlides.map((slide) => (
                        <div
                            key={slide.id}
                            className="min-w-full"
                            style={{ backgroundColor: slide.backgroundColor }}
                        >
                            <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
                                <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
                                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">{slide.title}</h1>
                                    <p className="text-lg md:text-xl mb-6 text-center md:text-left">{slide.subtitle}</p>
                                    <div className="flex justify-center md:justify-start">
                                        <Link
                                            to={slide.link}
                                            className="inline-block bg-[#293755] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
                                        >
                                            {slide.cta}
                                        </Link>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full h-auto rounded-lg shadow-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Slider navigation */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full shadow-md"
                    aria-label="Previous slide"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full shadow-md"
                    aria-label="Next slide"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Dots indicator */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveSlide(index)}
                            className={`w-3 h-3 rounded-full ${index === activeSlide ? 'bg-[#293755]' : 'bg-gray-300'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </section>

            {/* Shop by Category */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-10">Shop By Category</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.map((category) => (
                            <Link to={category.link} key={category.id} className="group">
                                <div className="overflow-hidden rounded-lg mb-3">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-center">{category.name}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section className="py-12 bg-[#f9f8f8]">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-2">Best in Bed</h2>
                    <h3 className="text-xl text-center mb-10">100k+ 5-Star Reviews Don't Lie</h3>

                    <div className="flex overflow-x-auto space-x-6 pb-6 -mx-4 px-4 scrollbar-hide">
                        {reviews.map((review) => (
                            <div
                                key={review.id}
                                className="flex-shrink-0 w-full sm:w-80 bg-white p-6 rounded-lg shadow-sm"
                            >
                                <h4 className="text-lg font-semibold mb-2">{review.title}</h4>
                                <p className="text-gray-600 mb-4">{review.text}</p>
                                <p className="text-gray-800 font-medium">{review.author}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Link
                            to="/reviews"
                            className="inline-block border border-[#293755] text-[#293755] px-6 py-3 rounded-md hover:bg-[#293755] hover:text-white transition-colors"
                        >
                            Read Our Reviews
                        </Link>
                    </div>
                </div>
            </section>

            {/* New Arrivals */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-10">New Arrivals</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {featuredProducts.map((product) => (
                            <div key={product.id} className="flex flex-col">
                                <Link to={product.link} className="block overflow-hidden rounded-lg mb-4">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </Link>
                                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                                <p className="text-gray-600 mb-4">{product.description}</p>
                                <Link
                                    to={product.link}
                                    className="mt-auto text-[#293755] font-medium hover:underline"
                                >
                                    Shop Now
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Brooklinen */}
            <section className="py-12 bg-[#f9f8f8]">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-10">Why Brooklinen?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 bg-[#e6eaed] rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-[#293755]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Premium Materials & Exclusive Styles</h3>
                            <p className="text-gray-600">Only the best—that's what you deserve.</p>
                        </div>

                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 bg-[#e6eaed] rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-[#293755]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">365-Day Happiness Guarantee</h3>
                            <p className="text-gray-600">It'll be love at first sleep (or bath).</p>
                        </div>

                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 bg-[#e6eaed] rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-[#293755]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Fast, Free Shipping</h3>
                            <p className="text-gray-600">We're New Yorkers, we move quick.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Sheets */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-10">Our Sheets</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {sheetTypes.map((sheet) => (
                            <div key={sheet.id} className="flex flex-col">
                                <Link to={sheet.link} className="block overflow-hidden rounded-lg mb-4">
                                    <img
                                        src={sheet.image}
                                        alt={sheet.name}
                                        className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </Link>
                                <h3 className="text-xl font-semibold mb-2">{sheet.name}</h3>
                                <p className="text-gray-600 mb-4">{sheet.description}</p>
                                <Link
                                    to={sheet.link}
                                    className="mt-auto text-[#293755] font-medium hover:underline"
                                >
                                    Shop Now
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Instagram Section */}
            <section className="py-12 bg-[#f9f8f8]">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-4">Brooklinen Your Way</h2>
                    <p className="text-center mb-10">Share your Brooklinen with #MyBrooklinen</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="aspect-square bg-gray-200 rounded-lg"></div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <a
                            href="https://www.instagram.com/brooklinen"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block border border-[#293755] text-[#293755] px-6 py-3 rounded-md hover:bg-[#293755] hover:text-white transition-colors"
                        >
                            Follow @brooklinen
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
