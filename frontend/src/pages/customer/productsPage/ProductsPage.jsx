import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "@/src/Mocks/products2";
import { ProductCard } from "@/src/components/common/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function ProductsPage() {
	const [searchParams] = useSearchParams();
	const [filters, setFilters] = useState({
		category: searchParams.get("category") || "all",
		subcategory: searchParams.get("subcategory") || "",
		sort: searchParams.get("sort") || "relevant",
		price: searchParams.get("price") || "",
		color: searchParams.get("color") || "",
		material: searchParams.get("material") || "",
	});
	const [favorites, setFavorites] = useState([]);
	const [showMoreFilters, setShowMoreFilters] = useState(false);
	const [newProductsChecked, setNewProductsChecked] = useState(false);
	const [onOfferChecked, setOnOfferChecked] = useState(false);

	// Combine all products and their variants into a single array.
	// - If a product has variants, include each variant with a reference to its parent product.
	// - If a product has no variants, include the product itself.
	// Add a flag `isVariant` to help distinguish between variants and standalone products.
	const allItems = [];
	for (const product of products) {
		if (product.variants && product.variants.length > 0) {
			for (const variant of product.variants) {
				allItems.push({
					...variant,
					parentProduct: product,
					isVariant: true
				});
			}
		} else {
			allItems.push({
				...product,
				isVariant: false
			});
		}
	}

	const filteredItems = allItems.filter(item => {
		const parent = item.isVariant ? item.parentProduct : item;
		const categoryMatch = filters.category === 'all' || parent.category === filters.category;
		const subcategoryMatch = !filters.subcategory || parent.subcategory === filters.subcategory;
		const priceMatch = !filters.price || (
			(filters.price === "500" && item.price < 500) ||
			(filters.price === "1000" && item.price >= 500 && item.price <= 1000) ||
			(filters.price === "over1000" && item.price > 1000)
		);
		const colorMatch = !filters.color || (item.colors && item.colors.includes(filters.color));
		const newProductsMatch = !newProductsChecked || parent.isNew;
		const offerMatch = !onOfferChecked || item.onSale;
		return (
			categoryMatch && subcategoryMatch && priceMatch && colorMatch && newProductsMatch && offerMatch
		);
	});

	const sortedItems = [...filteredItems].sort((a, b) => {
		const parentA = a.isVariant ? a.parentProduct : a;
		const parentB = b.isVariant ? b.parentProduct : b;

		switch (filters.sort) {
			case "price-low": return a.price - b.price;
			case "price-high": return b.price - a.price;
			case "newest":
				return new Date(parentB.createdAt) - new Date(parentA.createdAt);
			case "rating":
				return (parentB.rating || 0) - (parentA.rating || 0);
			default: return 0;
		}
	});

	const toggleFavorite = (productId) => {
		setFavorites(prev => prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]);
	};

	const clearAllFilters = () => {
		setFilters({
			category: "all",
			subcategory: "",
			sort: "relevant",
			price: "",
			color: "",
			material: "",
		});
	};

	return (
		<div className="max-w-7xl mx-auto px-4 py-8">
			{/* Main Content */}
			<div className="flex-1">
				{/* Header with filters */}
				<div className="flex items-center justify-between mb-4">
					<div>
						<p className="font-semibold">
							{filters.subcategory || filters.category === 'all' ? 'All Products' : filters.category.charAt(0).toUpperCase() + filters.category.slice(1)}
							<span className="ms-1 font-normal">({filteredItems.length})</span>
						</p>
					</div>
					<div className="flex items-center gap-4">
						<span className="text-sm text-gray-700">Sort</span>
						<Select value={filters.sort} onValueChange={(value) => setFilters(prev => ({ ...prev, sort: value }))}>
							<SelectTrigger className="w-[200px] border-black outline-none focus:outline-none ring-0">
								<SelectValue placeholder="Sort by" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="relevant">Most Relevant</SelectItem>
								<SelectItem value="price-low">Price: Low to High</SelectItem>
								<SelectItem value="price-high">Price: High to Low</SelectItem>
								<SelectItem value="newest">Newest First</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>

				<div className="border border-gray-700 my-4">
					{/* First Row - Always Visible */}
					<div className="grid grid-cols-6 border-1 border-gray-300 overflow-hidden">
						{/* New Products */}
						<div className="flex items-center gap-3 px-4 py-2 border-r border-gray-300 text-sm text-black">
							<Checkbox
								id="newProducts"
								checked={newProductsChecked}
								onCheckedChange={setNewProductsChecked}
							/>
							<Label htmlFor="newProducts">New Products</Label>
						</div>

						{/* Material */}
						<div className="px-4 py-2 flex items-center border-r border-gray-300">
							<Select
								value={filters.material}
								onValueChange={(value) => setFilters(prev => ({ ...prev, material: value }))}
							>
								<SelectTrigger className="!border-0 shadow-none hover:bg-transparent w-full text-sm text-black ring-0">
									<SelectValue placeholder="Material" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="velvet">Velvet</SelectItem>
									<SelectItem value="linen">Linen</SelectItem>
									<SelectItem value="cotton">Cotton</SelectItem>
									<SelectItem value="polyester">Polyester</SelectItem>
								</SelectContent>
							</Select>
						</div>

						{/* Category */}
						<div className="px-4 py-2 flex items-center border-r border-gray-300">
							<Select onValueChange={(value) => setFilters(prev => ({ ...prev, subcategory: value }))}>
								<SelectTrigger className="!border-0 shadow-none hover:bg-transparent w-full text-sm text-black">
									<SelectValue placeholder="Style" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="luxury">Luxury</SelectItem>
									<SelectItem value="geometric">Geometric</SelectItem>
									<SelectItem value="floral">Floral</SelectItem>
									<SelectItem value="modern">Modern</SelectItem>
									<SelectItem value="plain">Plain</SelectItem>
								</SelectContent>
							</Select>
						</div>

						{/* Color */}
						<div className="px-4 py-2 flex items-center border-r border-gray-300">
							<Select
								value={filters.color}
								onValueChange={(value) => setFilters(prev => ({ ...prev, color: value }))}
							>
								<SelectTrigger className="!border-0 shadow-none hover:bg-transparent w-full text-sm text-black ring-0">
									<SelectValue placeholder="Color" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="grey-stripes">Grey Stripes</SelectItem>
									<SelectItem value="grey">Grey</SelectItem>
									<SelectItem value="white">White</SelectItem>
									<SelectItem value="emarald-green">Emerald Green</SelectItem>
									<SelectItem value="blue">Blue</SelectItem>
									<SelectItem value="red">Red</SelectItem>
									<SelectItem value="gold">Gold</SelectItem>
									<SelectItem value="white-gold">White & Gold</SelectItem>
									<SelectItem value="black-white">Black & White</SelectItem>
									<SelectItem value="mustard">Mustard</SelectItem>
									<SelectItem value="cream">Cream</SelectItem>
								</SelectContent>
							</Select>
						</div>

						{/* Price */}
						<div className="px-4 py-2 flex items-center border-r border-gray-300">
							<Select
								value={filters.price}
								onValueChange={(value) => setFilters(prev => ({ ...prev, price: value }))}
							>
								<SelectTrigger className="!border-0 shadow-none hover:bg-transparent w-full text-sm text-black ring-0">
									<SelectValue placeholder="price" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="500">Under Ksh 500</SelectItem>
									<SelectItem value="1000">Ksh 500 - 1000</SelectItem>
									<SelectItem value="over1000">Over 1000</SelectItem>
								</SelectContent>
							</Select>
						</div>

						{/* MORE Button */}
						<div className="flex items-center justify-center px-4 py-2">
							<button
								className="flex gap-2 items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900"
								onClick={() => setShowMoreFilters(!showMoreFilters)}
							>
								<span>{showMoreFilters ? 'LESS' : 'MORE'}</span>
								<span className="text-lg">{showMoreFilters ? '-' : '+'}</span>
							</button>
						</div>
					</div>

					{/* Additional Filters - Conditionally Shown */}
					{showMoreFilters && (
						<div className="grid grid-cols-6 border-t border-gray-300">
							{/* On Offer */}
							<div className="flex items-center gap-3 px-4 py-2 border-r border-gray-300 text-sm text-black">
								<Checkbox
									id="Offer"
									checked={onOfferChecked}
									onCheckedChange={setOnOfferChecked}
								/>
								<Label htmlFor="Offer">On Offer</Label>
							</div>

							{/* Add more filter columns here as needed */}
							<div className="col-span-5"></div>
						</div>
					)}
				</div>

				{/* Products Grid */}
				{sortedItems.length === 0 ? (
					<div className="text-center py-12 space-y-2">
						<h3 className="text-lg font-medium">No products found</h3>
						<p className="text-sm text-muted-foreground">
							Try adjusting your filters or search term
						</p>
						<Button
							variant="outline"
							className="mt-4"
							onClick={clearAllFilters}
						>
							Clear all filters
						</Button>
					</div>
				) : (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						{sortedItems.map((item) => (
							<ProductCard
								key={item.id}
								product={{
									...item,
									// Spread parent product properties if it's a variant
									...(item.isVariant ? {
										description: item.parentProduct.description,
										rating: item.parentProduct.rating,
										reviews: item.parentProduct.reviews,
										tags: item.parentProduct.tags
									} : {})
								}}
								isFavorite={favorites.includes(item.id)}
								onToggleFavorite={(id) =>
									setFavorites(prev =>
										prev.includes(id)
											? prev.filter(favId => favId !== id)
											: [...prev, id]
									)
								}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	);
}