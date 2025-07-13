import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { MobileProvider } from './context/MobileContext';
import ProtectedRoute from './components/ProtectedRoute';
import LoadingScreen from './components/LoadingScreen';
import MainLayout from './layouts/MainLayout';

// Main Layout pages
const HomePage = lazy(() => import('./pages/customer/HomePage/index'));
const ProductsPage = lazy(() => import('./pages/customer/productsPage/ProductsPage'))
const ProductDetailPage = lazy(() => import('./pages/customer/productsPage/ProductDetailPage'));
const CartPage = lazy(() => import('./pages/customer/CartPage'));

// Login and Register pages
const LoginPage = lazy(() => import('./pages/authentication/LoginPage'));
const RegistePage = lazy(() => import('./pages/authentication/RegisterPage'));

// Admin pages
const AdminLayout = lazy(() => import('./pages/admin/AdminLayout'));
const DashboardPage = lazy(() => import('./pages/admin/DashboardPage'));
const ProfilePage = lazy(() => import('./pages/admin/ProfilePage/ProfilePage'));
const MessagesPage = lazy(() => import('./pages/admin/MessagesPage/index'));
const OrdersPage = lazy(() => import('./pages/admin/OrdersPage'));
const AdminProductsPage = lazy(() => import('./pages/admin/AdminProductsPage'));
const CustomersPage = lazy(() => import('./pages/admin/CustomersPage'));
const CategoriesPage = lazy(() => import('./pages/admin/CategoriesPage'));

function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<CartProvider>
					<MobileProvider>
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

								{/* Authentication Routes */}
								<Route path='/login' element={<LoginPage />} />
								<Route path="/register" element={<RegistePage />} />

								{/* the next one is the admin layout page */}
								<Route element={<ProtectedRoute />}>
									<Route path='/admin' element={<AdminLayout />}>
										<Route index element={<DashboardPage />} />
										<Route path='profile' element={<ProfilePage />} />
										<Route path="messages" element={<MessagesPage />} />
										<Route path='orders' element={<OrdersPage />} />
										<Route path='products' element={<AdminProductsPage />} />
										<Route path='customers' element={<CustomersPage />} />
										<Route path="categories" element={<CategoriesPage />} />
									</Route>
								</Route>
							</Routes>
						</Suspense>
					</MobileProvider>
				</CartProvider>
			</AuthProvider>
		</BrowserRouter>
	)
}

export default App
