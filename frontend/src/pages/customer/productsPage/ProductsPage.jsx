import { useState } from "react";
import Breadcrumbs from "../../../components/common/Breadcrumbs";
import { products, categories } from "../../../Mocks/products";
import ProductCard from "../../../components/common/ProductCard";

const ProductsPage = () => {
	const [selectedCategory, setSelectedCategory] = useState('all');
	const [searchQuery, setSearchQuery] = useState('');
	const [favorites, setFavorites] = useState([]);

	const filteredProducts = products.filter(product => {
		const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
		const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
		return matchesCategory && matchesSearch
	});

	const toggleFavorite = (productId) => {
		setFavorites(prev =>
			prev.includes(productId)
				? prev.filter(id => id !== productId)
				: [...prev, productId]
		)
	};
	return (
		<div className="max-w-7xl mx-auto px-4 py-6">
			<Breadcrumbs />
			<div className="mt-6">
				<main className="flex-1">
					<div className="flex items-center justify-between mb-6">
						<h5 className="font-bold text-gray-900">
							Homeware
							<span className="text-lg font-normal text-gray-600 ml-2">
								({filteredProducts.length})
							</span>
						</h5>

						<select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
							<option>Most Relevant</option>
							<option>Price: Low to High</option>
							<option>Price: High to Low</option>
							<option>Newest First</option>
							<option>Best Rated</option>
						</select>
					</div>
				</main>
				{filteredProducts.length === 0 ? (
					<div className="text-center py-12">
						<p className="text-gray-500 text-lg">No products found</p>
						<p className="text-gray-400 text-sm mt-2">Try adjusting your search or filters</p>
					</div>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						{filteredProducts.map((product) => (
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
};

export default ProductsPage;