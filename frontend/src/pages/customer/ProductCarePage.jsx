export const metadata = {
    title: "Product Care Guide | Trendy Collections Kenya - Curtains & Pillows",
    description: "Learn how to care for your Trendy Collections curtains, knot pillows, and sausage pillows. Cleaning tips and maintenance advice for Kenyan homes.",
    keywords: [
        "curtain care Kenya",
        "how to clean knot pillows",
        "sausage pillow maintenance",
        "fabric care Nairobi",
        "Trendy Collections product care"
    ],
};

const ProductCarePage = () => {
    return (
        <section className="bg-[#fff5f5] py-12 sm:py-16 lg:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <header className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-light text-pink-900 mb-4">
                        Product Care Guide
                    </h1>
                    <p className="text-pink-800/80 max-w-2xl mx-auto">
                        Keep your Trendy Collections items looking fresh with these care instructions
                    </p>
                </header>

                {/* Care Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Curtain Care */}
                    <div className="bg-white p-8 rounded-xl border border-pink-50 hover:shadow-lg transition-all">
                        <div className="flex items-center mb-6">
                            <div className="bg-pink-100 p-3 rounded-full mr-4" />
                            <h4 className="text-xl font-medium text-pink-900">Curtain Care</h4>
                        </div>
                        <ul className="space-y-4 text-pink-800/90">
                            <li className="flex items-start">
                                <span><strong>Regular maintenance:</strong> Dust weekly with a microfiber cloth or use a vacuum with upholstery attachment</span>
                            </li>
                            <li className="flex items-start">
                                <span><strong>Spot cleaning:</strong> Blot stains immediately with mild soap and air dry</span>
                            </li>
                            <li className="flex items-start">
                                <span><strong>Professional cleaning:</strong> Dry clean every 6-12 months for heavy fabrics</span>
                            </li>
                        </ul>
                        <div className="text-sm text-pink-600 bg-pink-50 px-3 py-2 rounded-lg">
                            💡 Rotate curtains seasonally to prevent sun damage.
                        </div>
                    </div>

                    {/* Pillow Care (Standard) */}
                    <div className="bg-white p-8 rounded-xl border border-pink-50 hover:shadow-lg transition-all">
                        <div className="flex items-center mb-6">
                            <div className="bg-pink-100 p-3 rounded-full mr-4" />
                            <h4 className="text-xl font-medium text-pink-900">Standard Pillow Care</h4>
                        </div>
                        <ul className="space-y-4 text-pink-800/90">
                            <li className="flex items-start">
                                <span><strong>Washing:</strong> Use gentle cycle with cold water (max 30°C) and mild detergent</span>
                            </li>
                            <li className="flex items-start">
                                <span><strong>Drying:</strong> Air dry in shade or tumble dry on low heat to maintain fluffiness</span>
                            </li>
                        </ul>
                        <div className="text-sm text-pink-600 bg-pink-50 px-3 py-2 rounded-lg">
                            💡 <strong>Pro Tip:</strong> Fluff daily to maintain shape and prevent clumping
                        </div>
                    </div>

                    {/* Knot Pillow Care */}
                    <div className="bg-white p-8 rounded-xl border border-pink-50 hover:shadow-lg transition-all">
                        <div className="flex items-center mb-6">
                            <div className="bg-pink-100 p-3 rounded-full mr-4" />
                            <h4 className="text-xl font-medium text-pink-900">Knot Pillow Care</h4>
                        </div>
                        <ul className="space-y-4 text-pink-800/90">
                            <li className="flex items-start">
                                <span><strong>Spot clean only:</strong> Use damp cloth with mild detergent (test on hidden area first)</span>
                            </li>
                        </ul>
                        <div className="text-sm text-pink-600 bg-pink-50 px-3 py-2 rounded-lg">
                            💡 <strong>Design Tip:</strong> Rotate occasionally to evenly distribute wear
                        </div>
                    </div>

                    {/* Sausage Pillow Care */}
                    <div className="bg-white p-8 rounded-xl border border-pink-50 hover:shadow-lg transition-all">
                        <div className="flex items-center mb-6">
                            <div className="bg-pink-100 p-3 rounded-full mr-4" />
                            <h4 className="text-xl font-medium text-pink-900">Sausage Pillow Care</h4>
                        </div>
                        <ul className="space-y-4 text-pink-800/90">
                            <li className="flex items-start">
                                <span><strong>Surface cleaning:</strong> Wipe with damp cloth using mild soap solution</span>
                            </li>
                        </ul>
                        <div className="text-sm text-pink-600 bg-pink-50 px-3 py-2 rounded-lg">
                            💡 <strong>Style Tip:</strong> Fluff ends daily to maintain "sausage" shape
                        </div>
                    </div>
                </div>

                {/* General Care Tips */}
                <div className="mt-12 bg-gradient-to-r from-pink-50 to-pink-100 border border-pink-200 rounded-xl p-8">
                    <h2 className="text-xl font-medium text-pink-900 mb-4">General Care Tips for All Products</h2>
                    <ul className="space-y-3 text-pink-800/90 list-disc pl-5">
                        <li>Avoid direct sunlight to prevent fading.</li>
                        <li>Treat stains immediately - blot, never rub</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ProductCarePage;