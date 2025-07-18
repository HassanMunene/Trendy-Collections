import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "@/src/Mocks/products2";
import { ProductCard } from "@/src/components/common/ProductCard";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Filter, X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

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
	const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
	const [favorites, setFavorites] = useState([]);
	const [desktopFiltersOpen, setDesktopFiltersOpen] = useState(false);

	// Get all unique values for filters
	const allColors = Array.from(new Set(products.flatMap(p => p.colors || [])));
	const allMaterials = Array.from(new Set(products.flatMap(p => p.materials || [])));
	const allSubcategories = Array.from(new Set(products.map(p => p.subcategory).filter(Boolean)));

	const filteredProducts = products.filter(product => {
		// Category filter
		const categoryMatch = filters.category === 'all' || product.category === filters.category;

		// Subcategory filter
		const subcategoryMatch = !filters.subcategory || product.subcategory === filters.subcategory;

		// Other filters would go here (color, material, etc.)

		return categoryMatch && subcategoryMatch;
	});

	const sortedProducts = [...filteredProducts].sort((a, b) => {
		switch (filters.sort) {
			case "price-low":
				return a.price - b.price;
			case "price-high":
				return b.price - a.price;
			case "newest":
				return new Date(b.createdAt) - new Date(a.createdAt);
			case "rating":
				return (b.rating || 0) - (a.rating || 0);
			default:
				return 0;
		}
	});

	const toggleFavorite = (productId) => {
		setFavorites(prev =>
			prev.includes(productId)
				? prev.filter(id => id !== productId)
				: [...prev, productId]
		);
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
						<h1 className="text-2xl font-bold">
							{filters.subcategory || filters.category === 'all'
								? 'All Products'
								: filters.category.charAt(0).toUpperCase() + filters.category.slice(1)}
						</h1>
						<p className="text-sm text-muted-foreground">
							{filteredProducts.length} products
						</p>
					</div>

					<div className="flex items-center gap-4">
						<Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
							<SheetTrigger asChild>
								<Button variant="outline" className="md:hidden">
									<Filter className="w-4 h-4 mr-2" />
									Filters
								</Button>
							</SheetTrigger>
							<SheetContent side="left" className="w-[300px]">
								<SheetHeader>
									<SheetTitle>Filters</SheetTitle>
								</SheetHeader>
								{/* Mobile filter content would go here */}
							</SheetContent>
						</Sheet>

						<Select
							value={filters.sort}
							onValueChange={(value) => setFilters(prev => ({ ...prev, sort: value }))}
						>
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="Sort by" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="relevant">Most Relevant</SelectItem>
								<SelectItem value="price-low">Price: Low to High</SelectItem>
								<SelectItem value="price-high">Price: High to Low</SelectItem>
								<SelectItem value="newest">Newest First</SelectItem>
								<SelectItem value="rating">Best Rated</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>

				{/* Desktop Filter Bar - Horizontal */}
				<div className="hidden md:block mb-6">
					<div className="flex flex-col gap-4">
						<div className="flex items-center justify-between">
							<Button
								variant="ghost"
								onClick={() => setDesktopFiltersOpen(!desktopFiltersOpen)}
								className="flex items-center gap-2"
							>
								<Filter className="w-4 h-4" />
								<span>{desktopFiltersOpen ? 'Hide Filters' : 'Show Filters'}</span>
							</Button>

							{(filters.subcategory || filters.color || filters.material || filters.price) && (
								<Button
									variant="link"
									onClick={clearAllFilters}
									className="text-muted-foreground hover:text-foreground"
								>
									Clear all
								</Button>
							)}
						</div>

						{desktopFiltersOpen && (
							<ScrollArea className="w-full pb-2">
								<div className="flex gap-6 pb-2">
									{/* Subcategories */}
									<div className="flex flex-col gap-2 min-w-[180px]">
										<h3 className="font-medium text-sm">Categories</h3>
										<div className="flex flex-wrap gap-2">
											{allSubcategories.map((subcat) => (
												<Button
													key={subcat}
													variant={filters.subcategory === subcat ? "default" : "outline"}
													size="sm"
													onClick={() => {
														setFilters(prev => ({
															...prev,
															subcategory: prev.subcategory === subcat ? "" : subcat
														}));
													}}
												>
													{subcat}
												</Button>
											))}
										</div>
									</div>

									{/* Price */}
									<div className="flex flex-col gap-2 min-w-[180px]">
										<h3 className="font-medium text-sm">Price</h3>
										<div className="flex flex-wrap gap-2">
											{['Under Ksh. 500', 'Ksh. 500 - 1000', 'Over Ksh. 1000'].map((range) => (
												<Button
													key={range}
													variant={filters.price === range ? "default" : "outline"}
													size="sm"
													onClick={() => {
														setFilters(prev => ({
															...prev,
															price: prev.price === range ? "" : range
														}));
													}}
												>
													{range}
												</Button>
											))}
										</div>
									</div>

									{/* Colors */}
									<div className="flex flex-col gap-2 min-w-[180px]">
										<h3 className="font-medium text-sm">Colors</h3>
										<div className="flex flex-wrap gap-2">
											{allColors.map((color) => (
												<Button
													key={color}
													variant={filters.color === color ? "default" : "outline"}
													size="sm"
													onClick={() => {
														setFilters(prev => ({
															...prev,
															color: prev.color === color ? "" : color
														}));
													}}
													className="capitalize"
												>
													{color}
												</Button>
											))}
										</div>
									</div>
								</div>
								<ScrollBar orientation="horizontal" />
							</ScrollArea>
						)}
					</div>
				</div>

				{/* Active filters */}
				{(filters.subcategory || filters.color || filters.material || filters.price) && (
					<div className="flex flex-wrap gap-2 mb-6">
						{filters.subcategory && (
							<div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm">
								{filters.subcategory}
								<button
									onClick={() => setFilters(prev => ({ ...prev, subcategory: "" }))}
									className="text-muted-foreground hover:text-foreground"
								>
									<X className="w-3 h-3" />
								</button>
							</div>
						)}
						{filters.price && (
							<div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm">
								{filters.price}
								<button
									onClick={() => setFilters(prev => ({ ...prev, price: "" }))}
									className="text-muted-foreground hover:text-foreground"
								>
									<X className="w-3 h-3" />
								</button>
							</div>
						)}
						{filters.color && (
							<div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm">
								{filters.color}
								<button
									onClick={() => setFilters(prev => ({ ...prev, color: "" }))}
									className="text-muted-foreground hover:text-foreground"
								>
									<X className="w-3 h-3" />
								</button>
							</div>
						)}
					</div>
				)}

				{/* Products Grid */}
				{sortedProducts.length === 0 ? (
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
						{sortedProducts.map((product) => (
							<ProductCard
								key={product.id}
								product={product}
								isFavorite={favorites.includes(product.id)}
								onToggleFavorite={toggleFavorite}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	);
}