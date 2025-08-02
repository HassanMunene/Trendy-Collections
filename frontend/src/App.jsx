import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ReactPixel from 'react-facebook-pixel';

const advancedMatching = {}; // Optional: For advanced user data matching
const options = {
	autoConfig: true, // Set pixel's autoConfig (default: true)
	debug: false,    // Enable debugging logs (default: false)
};

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
const ContactUs = lazy(() => import('./pages/customer/ContactUs'));
const ShippingDeliveryPage = lazy(() => import('./pages/customer/ShippingDeliveryPage'));
const ProductCarePage = lazy(() => import('./pages/customer/ProductCarePage'));
const FAQPage = lazy(() => import('./pages/customer/FAQPage'));
const OurStoryPage = lazy(() => import('./pages/customer/OurStoryPage'));

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
	useEffect(() => {
		ReactPixel.init('1115284690514936', advancedMatching, options); // Replace with your Pixel ID
		ReactPixel.pageView(); // Track initial pageview
	}, []);
	return (
		<BrowserRouter>
			<AuthProvider>
				<Toaster
					position="bottom-right"
					toastOptions={{
						duration: 3000,
						style: {
							border: '1px solid #e5e7eb',
							padding: '16px',
							color: '#1f2937',
						},
					}}
				/>
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
									<Route path="/Contact-Us" element={<ContactUs />} />
									<Route path="/shipping-delivery" element={<ShippingDeliveryPage />} />
									<Route path="/product-care" element={<ProductCarePage />} />
									<Route path="/faq" element={<FAQPage />} />
									<Route path="/our-story" element={<OurStoryPage />} />
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
