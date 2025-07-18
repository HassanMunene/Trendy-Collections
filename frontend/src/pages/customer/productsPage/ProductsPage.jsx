import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "@/src/Mocks/products2";
import { ProductCard } from "@/src/components/common/ProductCard";
import { Button } from "@/components/ui/button";
import {
	Select, SelectContent, SelectItem,
	SelectTrigger, SelectValue,
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

	const [isExpanded, setIsExpanded] = useState(false);


	return (
		<div className="max-w-7xl mx-auto px-4 py-8">
			{/* Main Content */}
			<div className="flex-1">
				{/* Header with filters */}
				<div className="flex items-center justify-between mb-4">
					<div>
						<p className="font-semibold">
							{filters.subcategory || filters.category === 'all' ? 'All Products' : filters.category.charAt(0).toUpperCase() + filters.category.slice(1)}
							<span className="ms-1 font-normal">({filteredProducts.length})</span>
						</p>
					</div>
					<div className="flex items-center gap-4">
						<span className="text-sm text-gray-700">Sort</span>
						<Select value={filters.sort} onValueChange={(value) => setFilters(prev => ({ ...prev, sort: value }))}>
							<SelectTrigger className="w-[200px] border-black outline-none focus:outline-none">
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
				<div className="border border-black my-4">
					{/* First Row - Always Visible */}
					<div className="flex flex-wrap items-center gap-4 mb-4">
						{/* Checkboxes */}
						<div className="flex items-center space-x-4">
							<label className="flex items-center space-x-2 cursor-pointer">
								<input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
								<span className="text-sm text-gray-700">New In (67)</span>
							</label>
							<label className="flex items-center space-x-2 cursor-pointer">
								<input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
								<span className="text-sm text-gray-700">Sale (67)</span>
							</label>
						</div>

						{/* Dropdowns */}
						<div className="flex flex-wrap items-center gap-4">
							<select className="px-3 py-2 border border-gray-300 rounded text-sm bg-white min-w-[100px]">
								<option>Category</option>
							</select>
							<select className="px-3 py-2 border border-gray-300 rounded text-sm bg-white min-w-[100px]">
								<option>Colour</option>
							</select>
							<select className="px-3 py-2 border border-gray-300 rounded text-sm bg-white min-w-[100px]">
								<option>Offer</option>
							</select>
						</div>

						{/* Less/More Button */}
						<button
							onClick={() => setIsExpanded(!isExpanded)}
							className="ml-auto flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900"
						>
							<span>{isExpanded ? 'LESS' : 'MORE'}</span>
							<span className="text-lg">{isExpanded ? '−' : '+'}</span>
						</button>
					</div>

					{/* Second Row - Expandable */}
					{isExpanded && (
						<div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-200">
							<select className="px-3 py-2 border border-gray-300 rounded text-sm bg-white min-w-[100px]">
								<option>Type</option>
							</select>
							<select className="px-3 py-2 border border-gray-300 rounded text-sm bg-white min-w-[100px]">
								<option>Material</option>
							</select>
							<select className="px-3 py-2 border border-gray-300 rounded text-sm bg-white min-w-[100px]">
								<option>Assembly</option>
							</select>
							<select className="px-3 py-2 border border-gray-300 rounded text-sm bg-white min-w-[100px]">
								<option>Sofa Type</option>
							</select>
							<select className="px-3 py-2 border border-gray-300 rounded text-sm bg-white min-w-[100px]">
								<option>Pack Size</option>
							</select>
							<select className="px-3 py-2 border border-gray-300 rounded text-sm bg-white min-w-[100px]">
								<option>Brand</option>
							</select>
							<select className="px-3 py-2 border border-gray-300 rounded text-sm bg-white min-w-[100px]">
								<option>Price</option>
							</select>
						</div>
					)}
				</div>

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