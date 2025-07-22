import { Link } from 'react-router-dom';
import { products } from '@/src/Mocks/products2';

const ProductCollage = () => {
    // Categorize products
    const curtains = products.filter(p => p.category === 'curtains');
    const pillows = products.filter(p => p.category === 'pillow');
    const knotPillows = products.filter(p => p.category === 'knot-pillows');

    // Select featured products from each category
    const featuredProducts = [
        ...curtains.slice(0, 2),
        ...pillows.slice(0, 2),
        ...knotPillows.slice(0, 2)
    ];

    // Collage layout configuration - different for mobile and desktop
    const collageLayout = {
        mobile: [
            { size: "md", row: 1, col: 1 },      // Curtain 1
            { size: "sm", row: 1, col: 2 },      // Curtain 2
            { size: "md", row: 2, col: 2 },      // Pillow 1
            { size: "sm", row: 2, col: 1 },      // Pillow 2
            { size: "md", row: 3, col: 1 },      // Knot Pillow 1
            { size: "sm", row: 3, col: 2 }       // Knot Pillow 2
        ],
        desktop: [
            { size: "lg", position: "left-8 top-1/4" },       // Curtain 1
            { size: "md", position: "right-16 top-16" },      // Curtain 2
            { size: "md", position: "left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" }, // Pillow 1
            { size: "sm", position: "left-16 bottom-16" },    // Pillow 2
            { size: "lg", position: "right-8 top-1/4" },      // Knot Pillow 1
            { size: "sm", position: "left-1/2 top-16 transform -translate-x-1/2" } // Knot Pillow 2
        ]
    };

    // Combine products with layout
    const collageItems = featuredProducts.map((product, index) => ({
        product,
        mobileLayout: collageLayout.mobile[index],
        desktopLayout: collageLayout.desktop[index]
    }));

    // Size classes
    const sizeClasses = {
        lg: "w-48 h-48 sm:w-64 sm:h-64",
        md: "w-40 h-40 sm:w-48 sm:h-48",
        sm: "w-32 h-32 sm:w-40 sm:h-40"
    };

    return (
        <section className="bg-white py-8 sm:py-12">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h2 className="text-2xl sm:text-3xl font-light text-gray-900">Our Collections</h2>
                    <p className="mt-2 text-sm sm:text-base text-gray-600">Beautifully crafted home essentials</p>
                </div>

                {/* Mobile Collage (Grid Layout) */}
                <div className="md:hidden grid grid-cols-2 gap-4 bg-[#f6f2f0] p-4 rounded-lg">
                    {collageItems.map((item) => (
                        <div
                            key={item.product.id}
                            className={`relative group cursor-pointer transition-all duration-300 hover:z-10 hover:shadow-lg ${sizeClasses[item.mobileLayout.size]}`}
                            style={{
                                gridRow: item.mobileLayout.row,
                                gridColumn: item.mobileLayout.col
                            }}
                        >
                            <Link to={`/products/${item.product.id}`}>
                                <div className="relative w-full h-full overflow-hidden">
                                    <img
                                        src={item.product.image}
                                        alt={item.product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-2 bg-white bg-opacity-90 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <h4 className="font-medium text-gray-900 text-xs truncate">
                                        {item.product.name}
                                    </h4>
                                    <p className="text-gray-600 text-xs">
                                        ${item.product.price}
                                        {item.product.onSale && (
                                            <span className="ml-1 text-[10px] bg-red-100 text-red-800 px-1 rounded">SALE</span>
                                        )}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Desktop Collage (Absolute Positioning) */}
                <div className="hidden md:block relative h-[400px] sm:h-[500px] lg:h-[600px] bg-[#f6f2f0] rounded-lg overflow-hidden">
                    {collageItems.map((item) => (
                        <div
                            key={item.product.id}
                            className={`absolute group cursor-pointer transition-all duration-300 hover:z-10 hover:shadow-lg ${sizeClasses[item.desktopLayout.size]} ${item.desktopLayout.position}`}
                        >
                            <Link to={`/products/${item.product.id}`}>
                                <div className="relative w-full h-full overflow-hidden">
                                    <img
                                        src={item.product.image}
                                        alt={item.product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 bg-white bg-opacity-90 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <h4 className="font-medium text-gray-900 text-xs sm:text-sm truncate">
                                        {item.product.name}
                                    </h4>
                                    <p className="text-gray-600 text-xs sm:text-sm">
                                        ${item.product.price}
                                        {item.product.onSale && (
                                            <span className="ml-1 text-[10px] sm:text-xs bg-red-100 text-red-800 px-1 rounded">SALE</span>
                                        )}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Category Links */}
                <div className="flex justify-center gap-4 mt-6 sm:mt-8 flex-wrap">
                    <Link
                        to="/category/pillow"
                        className="text-xs sm:text-sm text-[#9a6546] hover:underline"
                    >
                        View All Pillows
                    </Link>
                    <Link
                        to="/category/curtains"
                        className="text-xs sm:text-sm text-[#9a6546] hover:underline"
                    >
                        View All Curtains
                    </Link>
                    <Link
                        to="/category/knot-pillows"
                        className="text-xs sm:text-sm text-[#9a6546] hover:underline"
                    >
                        View Knot Pillows
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProductCollage;