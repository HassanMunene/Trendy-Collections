import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// Updated product data with working image links
const productData = [
	{
		id: 1,
		name: 'Luxe Sateen Pillow Set',
		category: 'pillows',
		subcategory: 'sateen',
		price: 149.00,
		salePrice: 126.65,
		isNew: false,
		isBestSeller: true,
		colors: ['white', 'cream', 'graphite', 'navy', 'sage'],
		image: 'https://images.unsplash.com/photo-1616627561839-074385245ff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
		hoverImage: 'https://images.unsplash.com/photo-1616627561839-074385245ff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
	},
	{
		id: 2,
		name: 'Classic Percale Curtains',
		category: 'curtains',
		subcategory: 'percale',
		price: 139.00,
		salePrice: 118.15,
		isNew: false,
		isBestSeller: false,
		colors: ['white', 'cream', 'graphite', 'navy'],
		image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
		hoverImage: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
	},
	{
		id: 3,
		name: 'Premium Pillow Bundle',
		category: 'bundles',
		subcategory: 'sateen',
		price: 347.00,
		salePrice: 235.96,
		isNew: false,
		isBestSeller: true,
		colors: ['white', 'cream', 'graphite', 'navy', 'sage'],
		image: 'https://images.unsplash.com/photo-1616627561839-074385245ff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
		hoverImage: 'https://images.unsplash.com/photo-1616627561839-074385245ff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
	},
	{
		id: 4,
		name: 'Linen Curtain Collection',
		category: 'curtains',
		subcategory: 'linen',
		price: 269.00,
		salePrice: 228.65,
		isNew: true,
		isBestSeller: false,
		colors: ['white', 'cream', 'dune', 'sienna'],
		image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
		hoverImage: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
	},
	{
		id: 5,
		name: 'Plush Luxury Pillows',
		category: 'pillows',
		subcategory: 'plush',
		price: 45.00,
		salePrice: 38.25,
		isNew: false,
		isBestSeller: true,
		colors: ['white', 'cream', 'graphite', 'marled-black'],
		image: 'https://images.unsplash.com/photo-1616627561839-074385245ff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
		hoverImage: 'https://images.unsplash.com/photo-1616627561839-074385245ff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
	},
	{
		id: 6,
		name: 'Blackout Curtains',
		category: 'curtains',
		subcategory: 'blackout',
		price: 199.00,
		salePrice: 169.15,
		isNew: false,
		isBestSeller: false,
		colors: ['white'],
		image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
		hoverImage: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
	},
	{
		id: 7,
		name: 'Silk Pillowcases',
		category: 'pillows',
		subcategory: 'silk',
		price: 149.00,
		salePrice: 126.65,
		isNew: true,
		isBestSeller: false,
		colors: ['white', 'cream', 'dune', 'sienna'],
		image: 'https://images.unsplash.com/photo-1616627561839-074385245ff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
		hoverImage: 'https://images.unsplash.com/photo-1616627561839-074385245ff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
	},
	{
		id: 8,
		name: 'Sheer Voile Curtains',
		category: 'curtains',
		subcategory: 'sheer',
		price: 99.00,
		salePrice: 84.15,
		isNew: false,
		isBestSeller: false,
		colors: ['white', 'graphite'],
		image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
		hoverImage: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
	}
];

// Category options
const categories = [
	{ id: 'all', name: 'All Products' },
	{ id: 'pillows', name: 'Pillows' },
	{ id: 'curtains', name: 'Curtains' },
	{ id: 'bundles', name: 'Bundles' }
];

// Filters
const subcategories = [
	{ id: 'sateen', name: 'Sateen', category: 'pillows' },
	{ id: 'percale', name: 'Percale', category: 'pillows' },
	{ id: 'plush', name: 'Plush', category: 'pillows' },
	{ id: 'silk', name: 'Silk', category: 'pillows' },
	{ id: 'blackout', name: 'Blackout', category: 'curtains' },
	{ id: 'sheer', name: 'Sheer', category: 'curtains' },
	{ id: 'linen', name: 'Linen', category: 'curtains' }
];

// Sort options
const sortOptions = [
	{ value: 'recommended', label: 'Recommended' },
	{ value: 'newest', label: 'Newest' },
	{ value: 'price-low-high', label: 'Price: Low to High' },
	{ value: 'price-high-low', label: 'Price: High to Low' }
];

const ProductsPage = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const queryParams = new URLSearchParams(location.search);

	// State for filters
	const [selectedCategory, setSelectedCategory] = useState(queryParams.get('category') || 'all');
	const [selectedSubcategory, setSelectedSubcategory] = useState(queryParams.get('subcategory') || '');
	const [selectedSort, setSelectedSort] = useState('recommended');
	const [showFilters, setShowFilters] = useState(false);
	const [filteredProducts, setFilteredProducts] = useState(productData);
	const [hoveredProductId, setHoveredProductId] = useState(null);

	// Filter products based on selected options
	useEffect(() => {
		let filtered = [...productData];

		// Category filter
		if (selectedCategory !== 'all') {
			filtered = filtered.filter(product => product.category === selectedCategory);
		}

		// Subcategory filter
		if (selectedSubcategory) {
			filtered = filtered.filter(product => product.subcategory === selectedSubcategory);
		}

		// Sort products
		switch (selectedSort) {
			case 'newest':
				filtered = filtered.filter(product => product.isNew).concat(filtered.filter(product => !product.isNew));
				break;
			case 'price-low-high':
				filtered.sort((a, b) => a.salePrice - b.salePrice);
				break;
			case 'price-high-low':
				filtered.sort((a, b) => b.salePrice - a.salePrice);
				break;
			default:
				// For recommended, show best sellers first
				filtered = filtered.filter(product => product.isBestSeller).concat(filtered.filter(product => !product.isBestSeller));
		}

		setFilteredProducts(filtered);

		// Update URL with filters
		const params = new URLSearchParams();
		if (selectedCategory !== 'all') {
			params.set('category', selectedCategory);
		}
		if (selectedSubcategory) {
			params.set('subcategory', selectedSubcategory);
		}

		navigate(`${location.pathname}?${params.toString()}`, { replace: true });
	}, [selectedCategory, selectedSubcategory, selectedSort, navigate, location.pathname]);

	// Handle category change
	const handleCategoryChange = (categoryId) => {
		setSelectedCategory(categoryId);
		setSelectedSubcategory('');
	};

	// Handle subcategory change
	const handleSubcategoryChange = (subcategoryId) => {
		setSelectedSubcategory(subcategoryId);
	};

	// Handle sort change
	const handleSortChange = (e) => {
		setSelectedSort(e.target.value);
	};

	// Toggle mobile filters
	const toggleFilters = () => {
		setShowFilters(!showFilters);
	};

	// Get available subcategories for the selected category
	const availableSubcategories = subcategories.filter(
		sub => sub.category === selectedCategory
	);

	return (
		<div className="bg-gradient-to-b from-rose-50 to-white min-h-screen">
			<div className="container mx-auto px-4 py-8">
				{/* Page Header */}
				<div className="mb-8 text-center">
					<h1 className="text-4xl font-bold text-gray-900 mb-2">
						{selectedSubcategory
							? subcategories.find(sub => sub.id === selectedSubcategory)?.name
							: selectedCategory !== 'all'
								? categories.find(cat => cat.id === selectedCategory)?.name
								: 'Our Collections'}
					</h1>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Premium pillows and curtains designed for comfort and style
					</p>
				</div>

				{/* Mobile Filter Toggle */}
				<div className="lg:hidden mb-6">
					<button
						onClick={toggleFilters}
						className="w-full flex items-center justify-between bg-white border border-gray-200 px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition-all"
					>
						<span className="font-medium">Filters & Sort</span>
						<svg
							className={`w-5 h-5 text-rose-600 transition-transform ${showFilters ? 'transform rotate-180' : ''}`}
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
						</svg>
					</button>
				</div>

				<div className="flex flex-col lg:flex-row gap-6">
					{/* Sidebar Filters */}
					<aside className={`w-full lg:w-72 ${showFilters ? 'block' : 'hidden lg:block'}`}>
						<div className="bg-white p-6 rounded-xl shadow-sm sticky top-4">
							<h2 className="font-bold text-xl mb-6 text-gray-900">Filter Products</h2>

							<div className="mb-8">
								<h3 className="font-semibold text-lg mb-4 text-gray-800">Categories</h3>
								<ul className="space-y-2">
									{categories.map((category) => (
										<li key={category.id}>
											<button
												onClick={() => handleCategoryChange(category.id)}
												className={`w-full text-left py-2 px-3 rounded-lg transition-colors ${selectedCategory === category.id
													? 'bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 font-medium'
													: 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
													}`}
											>
												{category.name}
											</button>
										</li>
									))}
								</ul>
							</div>

							{availableSubcategories.length > 0 && (
								<div className="mb-8">
									<h3 className="font-semibold text-lg mb-4 text-gray-800">Types</h3>
									<ul className="space-y-2">
										{availableSubcategories.map((subcategory) => (
											<li key={subcategory.id}>
												<button
													onClick={() => handleSubcategoryChange(subcategory.id)}
													className={`w-full text-left py-2 px-3 rounded-lg transition-colors ${selectedSubcategory === subcategory.id
														? 'bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 font-medium'
														: 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
														}`}
												>
													{subcategory.name}
												</button>
											</li>
										))}
									</ul>
								</div>
							)}
						</div>
					</aside>

					{/* Main Content */}
					<div className="flex-1">
						{/* Sort and Results Count */}
						<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 bg-white p-4 rounded-xl shadow-sm">
							<p className="text-gray-600 mb-2 sm:mb-0">{filteredProducts.length} products found</p>
							<div className="flex items-center">
								<label htmlFor="sort" className="mr-2 text-gray-600">Sort by:</label>
								<select
									id="sort"
									value={selectedSort}
									onChange={handleSortChange}
									className="border border-gray-200 rounded-lg p-2 bg-white focus:ring-2 focus:ring-rose-500 focus:border-transparent"
								>
									{sortOptions.map((option) => (
										<option key={option.value} value={option.value}>
											{option.label}
										</option>
									))}
								</select>
							</div>
						</div>

						{/* Products Grid */}
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{filteredProducts.map((product) => (
								<div key={product.id} className="group">
									<Link
										to={`/products/${product.id}`}
										className="block"
										onMouseEnter={() => setHoveredProductId(product.id)}
										onMouseLeave={() => setHoveredProductId(null)}
									>
										<div className="relative overflow-hidden rounded-xl mb-4 aspect-square bg-gray-50">
											<img
												src={hoveredProductId === product.id ? product.hoverImage : product.image}
												alt={product.name}
												className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
												loading="lazy"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
											{product.isNew && (
												<div className="absolute top-3 left-3 bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full">
													New
												</div>
											)}
											{product.isBestSeller && (
												<div className="absolute top-3 right-3 bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-full">
													Best Seller
												</div>
											)}
										</div>
									</Link>

									<div className="p-2">
										<h3 className="font-semibold text-lg text-gray-900 mb-1 group-hover:text-rose-700 transition-colors">
											<Link to={`/products/${product.id}`}>{product.name}</Link>
										</h3>
										<div className="flex items-center mb-3">
											<span className="font-bold text-gray-900 mr-2">${product.salePrice.toFixed(2)}</span>
											{product.salePrice < product.price && (
												<span className="text-gray-500 text-sm line-through">${product.price.toFixed(2)}</span>
											)}
										</div>
										<div className="flex items-center">
											<div className="flex -space-x-1">
												{product.colors.slice(0, 4).map((color) => (
													<div
														key={color}
														className="w-5 h-5 rounded-full border-2 border-white shadow-sm"
														style={{
															backgroundColor: color === 'white' ? '#ffffff' :
																color === 'cream' ? '#f5f5dc' :
																	color === 'graphite' ? '#4d4d4d' :
																		color === 'navy' ? '#000080' :
																			color === 'sage' ? '#9CAF88' :
																				color === 'dune' ? '#C2B280' :
																					color === 'sienna' ? '#A0522D' :
																						color === 'marled-black' ? '#333' : '#ccc'
														}}
													></div>
												))}
												{product.colors.length > 4 && (
													<div className="w-5 h-5 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs text-gray-500">
														+{product.colors.length - 4}
													</div>
												)}
											</div>
											<span className="text-xs text-gray-500 ml-2">{product.colors.length} colors</span>
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Empty State */}
						{filteredProducts.length === 0 && (
							<div className="text-center py-16 bg-white rounded-xl shadow-sm">
								<div className="max-w-md mx-auto">
									<svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									<h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
									<p className="text-gray-600 mb-6">Try adjusting your filters to find what you're looking for.</p>
									<button
										onClick={() => {
											setSelectedCategory('all');
											setSelectedSubcategory('');
										}}
										className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium"
									>
										Clear All Filters
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductsPage;