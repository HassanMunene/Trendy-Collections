import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import MainLayout from './Layouts/MainLayout';
import LoadingScreen from './Components/LoadingScreen';

// Next is to load the HomePage lazily to improve performance
const HomePage = lazy(() => import('./Pages/MainLayout/HomePage'));
const ProductsPage = lazy(() => import('./Pages/MainLayout/ProductsPage'))
const ProductDetailPage = lazy(() => import('./Pages/MainLayout/ProductDetailPage'));
const CartPage = lazy(() => import('./Pages/MainLayout/CartPage'));

// Admin pages
const AdminLayout = lazy(() => import('./Pages/Admin/AdminLayout'));
const DashboardPage = lazy(() => import('./Pages/Admin/DashboardPage'));
const OrdersPage = lazy(() => import('./Pages/Admin/OrdersPage'));

function App() {
	return (
		<BrowserRouter>
			{/* Suspense is used to show a fallback loading while the component is being loaded */}
			<Suspense fallback={<LoadingScreen />}>
				{/* This is the main layouts page */}
				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route index element={<HomePage />} />
						<Route path="products" element={<ProductsPage />} />
						<Route path="products/:productId" element={<ProductDetailPage />} />
						<Route path="/cart" element={<CartPage />} />
					</Route>
				</Routes>

				{/* the next one is the admin layout page */}
				<Routes>
					<Route path='/admin' element={<AdminLayout />}>
						<Route index element={<DashboardPage />} />
						<Route path='orders' element={<OrdersPage />} />
					</Route>
				</Routes>
			</Suspense>

		</BrowserRouter>
	)
}

export default App
