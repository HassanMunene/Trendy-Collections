import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "@/src/Mocks/products2";
import { ProductCard } from "@/src/components/common/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogDescription } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { SlidersHorizontal, ArrowUpDown, X } from "lucide-react";

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
	const [mobileSortOpen, setMobileSortOpen] = useState(false);
	const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

	// Combine all products and their variants
	const allItems = products.flatMap(product =>
		product.variants
			? product.variants.map(variant => ({
				...variant,
				parentProduct: product,
				isVariant: true
			}))
			: [{ ...product, isVariant: false }]
	);

	const filteredItems = allItems.filter(item => {
		const parent = item.isVariant ? item.parentProduct : item;
		return (
			(filters.category === 'all' || parent.category === filters.category) &&
			(!filters.subcategory || parent.subcategory === filters.subcategory) &&
			(!filters.price || (
				(filters.price === "500" && item.price < 500) ||
				(filters.price === "1000" && item.price >= 500 && item.price <= 1000) ||
				(filters.price === "over1000" && item.price > 1000)
			)) &&
			(!filters.color || (item.colors || []).includes(filters.color)) &&
			(!filters.material || (parent.materials || []).includes(filters.material)) &&
			(!newProductsChecked || parent.isNew) &&
			(!onOfferChecked || item.onSale)
		);
	});

	const sortedItems = [...filteredItems].sort((a, b) => {
		const parentA = a.isVariant ? a.parentProduct : a;
		const parentB = b.isVariant ? b.parentProduct : b;

		switch (filters.sort) {
			case "price-low": return a.price - b.price;
			case "price-high": return b.price - a.price;
			case "newest":
				return new Date(parentB.createdAt || 0) - new Date(parentA.createdAt || 0);
			case "rating":
				return (parentB.rating || 0) - (parentA.rating || 0);
			default: return 0;
		}
	});

	const clearAllFilters = () => {
		setFilters({
			category: "all",
			subcategory: "",
			sort: "relevant",
			price: "",
			color: "",
			material: "",
		});
		setNewProductsChecked(false);
		setOnOfferChecked(false);
	};

	return (
		<>
			{/* Mobile Filter/Sort Bar - Hidden on desktop */}
			<div className="md:hidden flex items-center gap-2 mb-4 sticky top-16 z-40 bg-white border-t border-b">
				<div className="flex-1 flex items-center justify-center border-r py-2">
					<Button
						variant="outline"
						className="flex-1 gap-2 border-0 shadow-none"
						onClick={() => setMobileSortOpen(true)}
					>
						<ArrowUpDown className="h-4 w-4" />
						Sort
					</Button>
				</div>
				<div className="flex-1 flex items-center justify-center py-2">
					<Button
						variant="outline"
						className="flex-1 gap-2 border-0 shadow-none"
						onClick={() => setMobileFilterOpen(true)}
					>
						<SlidersHorizontal className="h-4 w-4" />
						Filter
					</Button>
				</div>
			</div>
			<div className="max-w-7xl mx-auto px-4 py-8">

				{/* Desktop Header */}
				<div className="hidden md:flex items-center justify-between mb-4">
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

				{/* Desktop Filters */}
				<div className="hidden md:block border border-gray-700 my-4">
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
							<Select
								value={filters.subcategory}
								onValueChange={(value) => setFilters(prev => ({ ...prev, subcategory: value }))}
							>
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
									<SelectItem value="grey-stripe">Grey Stripe</SelectItem>
									<SelectItem value="grey">Grey</SelectItem>
									<SelectItem value="white">White</SelectItem>
									<SelectItem value="emerald-green">Emerald Green</SelectItem>
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
									<SelectValue placeholder="Price" />
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

					{showMoreFilters && (
						<div className="grid grid-cols-6 border-t border-gray-300">
							<div className="flex items-center gap-3 px-4 py-2 border-r border-gray-300 text-sm text-black">
								<Checkbox
									id="Offer"
									checked={onOfferChecked}
									onCheckedChange={setOnOfferChecked}
								/>
								<Label htmlFor="Offer">On Offer</Label>
							</div>
							<div className="col-span-5"></div>
						</div>
					)}
				</div>

				{/* Mobile Sort Dialog */}
				<Dialog open={mobileSortOpen} onOpenChange={setMobileSortOpen}>
					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle>Sort Products</DialogTitle>
							<DialogDescription>
								Choose how you want to sort the product list.
							</DialogDescription>
						</DialogHeader>

						<div className="space-y-4 mt-4">
							<div className="space-y-2">
								{[
									{ value: "relevant", label: "Most Relevant" },
									{ value: "price-low", label: "Price: Low to High" },
									{ value: "price-high", label: "Price: High to Low" },
									{ value: "newest", label: "Newest First" }
								].map((option) => (
									<button
										key={option.value}
										className={`w-full text-left p-3 rounded-md ${filters.sort === option.value ? 'bg-gray-100 font-medium' : 'hover:bg-gray-50'}`}
										onClick={() => {
											setFilters(prev => ({ ...prev, sort: option.value }));
											setMobileSortOpen(false);
										}}
									>
										{option.label}
									</button>
								))}
							</div>
						</div>
					</DialogContent>
				</Dialog>

				{/* Mobile Filter Sheet */}
				<Sheet open={mobileFilterOpen} onOpenChange={setMobileFilterOpen}>
					<SheetContent
						side="right"
						className="w-full sm:w-[420px] overflow-y-auto p-0 bg-white"
					>
						{/* Header with close button */}
						<div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-2">
							<div className="flex items-center justify-between">
								<SheetHeader>
									<SheetTitle className="text-xl !p-0 font-bold text-gray-900 m-0">Filters</SheetTitle>
								</SheetHeader>
								<button
									onClick={() => setMobileFilterOpen(false)}
									className="!rounded-full p-2 hover:bg-gray-100 transition-colors"
									aria-label="Close filters"
								>
									<X className="h-5 w-5 text-gray-500" />
								</button>
							</div>
						</div>
						<div className="px-6 py-4 space-y-8">
							{/* New products and offers */}
							<div className="grid grid-cols-2 gap-4">
								{/* New Products */}
								<div className="space-y-3">
									<Label className="text-sm font-medium text-gray-700">Availability</Label>
									<div className="flex items-center gap-2 space-x-3">
										<Checkbox
											id="mobileNewProducts"
											checked={newProductsChecked}
											onCheckedChange={setNewProductsChecked}
										/>
										<Label htmlFor="mobileNewProducts" className="text-sm text-gray-700">New Products</Label>
									</div>
								</div>

								{/* On Offer */}
								<div className="space-y-3">
									<Label className="text-sm font-medium text-gray-700">Special Offers</Label>
									<div className="flex items-center gap-3 space-x-3">
										<Checkbox
											id="mobileOffer"
											checked={onOfferChecked}
											onCheckedChange={setOnOfferChecked}
										/>
										<Label htmlFor="mobileOffer" className="text-sm text-gray-700">On Offer</Label>
									</div>
								</div>
							</div>
							{/* Price Range */}
							<div className="space-y-3">
								<Label className="text-sm font-medium text-gray-700">Price Range</Label>
								<Select
									value={filters.price}
									onValueChange={(value) => setFilters({ ...filters, price: value })}
								>
									<SelectTrigger className="w-full h-11 rounded-lg border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500">
										<SelectValue placeholder="Select price range" />
									</SelectTrigger>
									<SelectContent className="rounded-lg shadow-lg border border-gray-200">
										<SelectItem
											value="500"
											className="px-4 py-2 hover:bg-pink-50 focus:bg-pink-50"
										>
											Under Ksh 500
										</SelectItem>
										<SelectItem
											value="1000"
											className="px-4 py-2 hover:bg-pink-50 focus:bg-pink-50"
										>
											Ksh 500 - 1000
										</SelectItem>
										<SelectItem
											value="over1000"
											className="px-4 py-2 hover:bg-pink-50 focus:bg-pink-50"
										>
											Over 1000
										</SelectItem>
									</SelectContent>
								</Select>
							</div>
							{/* Color Selector */}
							<div className="space-y-3">
								<Label className="text-sm font-medium text-gray-700">Colors</Label>
								<Select
									value={filters.color}
									onValueChange={(value) => setFilters({ ...filters, color: value })}
								>
									<SelectTrigger className="w-full h-11 rounded-lg border-gray-300">
										<SelectValue placeholder="Select color" />
									</SelectTrigger>
									<SelectContent className="rounded-lg shadow-lg border border-gray-200 max-h-60">
										{[
											{ value: "grey-stripe", label: "Grey Stripe" },
											{ value: "grey", label: "Grey" },
											{ value: "white", label: "White" },
											{ value: "emerald-green", label: "Emerald Green" },
											{ value: "blue", label: "Blue" },
											{ value: "red", label: "Red" },
											{ value: "gold", label: "Gold" },
											{ value: "white-gold", label: "White & Gold" },
											{ value: "black-white", label: "Black & White" },
											{ value: "mustard", label: "Mustard" },
											{ value: "cream", label: "Cream" }
										].map((color) => (
											<SelectItem
												key={color.value}
												value={color.value}
												className="px-4 py-2 hover:bg-pink-50 focus:bg-pink-50"
											>
												{color.label}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
							{/* Material Selector */}
							<div className="space-y-3">
								<Label className="text-sm font-medium text-gray-700">Material</Label>
								<Select
									value={filters.material}
									onValueChange={(value) => setFilters({ ...filters, material: value })}
								>
									<SelectTrigger className="w-full h-11 rounded-lg border-gray-300">
										<SelectValue placeholder="Select material" />
									</SelectTrigger>
									<SelectContent className="rounded-lg shadow-lg border border-gray-200">
										{["velvet", "linen", "cotton", "polyester"].map((material) => (
											<SelectItem
												key={material}
												value={material}
												className="px-4 py-2 hover:bg-pink-50 focus:bg-pink-50 capitalize"
											>
												{material}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
							{/* Style Selector */}
							<div className="space-y-3">
								<Label className="text-sm font-medium text-gray-700">Style</Label>
								<Select
									value={filters.subcategory}
									onValueChange={(value) => setFilters({ ...filters, subcategory: value })}
								>
									<SelectTrigger className="w-full h-11 rounded-lg border-gray-300">
										<SelectValue placeholder="Select style" />
									</SelectTrigger>
									<SelectContent className="rounded-lg shadow-lg border border-gray-200">
										{["luxury", "geometric", "floral", "modern", "plain"].map((style) => (
											<SelectItem
												key={style}
												value={style}
												className="px-4 py-2 hover:bg-pink-50 focus:bg-pink-50 capitalize"
											>
												{style}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
						</div>
						{/* Sticky footer with action buttons */}
						<div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4">
							<div className="flex gap-3">
								<Button
									variant="outline"
									className="flex-1 h-12 rounded-lg border-gray-300 text-gray-700 hover:bg-gray-50"
									onClick={clearAllFilters}
								>
									Reset All
								</Button>
								<Button
									className="flex-1 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white shadow-sm"
									onClick={() => setMobileFilterOpen(false)}
								>
									Show Results
								</Button>
							</div>
						</div>
					</SheetContent>
				</Sheet>

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
		</>
	);
}