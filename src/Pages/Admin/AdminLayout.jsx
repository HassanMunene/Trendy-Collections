import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Bell, Search, ChevronDown } from "lucide-react";

import AdminSidebar from './Sidebar/AdminSidebar';

const AdminLayout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleLogout = () => {
        navigate('/login');
    };

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    // Check if route is active
    const isActiveRoute = (route) => {
        return location.pathname === route;
    };

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <AdminSidebar
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                isActiveRoute={isActiveRoute}
                handleLogout={handleLogout}
            />

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Navigation */}
                <header className="bg-white shadow-sm z-10">
                    <div className="px-4 py-3 sm:px-6 lg:px-8 flex justify-between items-center">
                        <div className="flex items-center">
                            <button
                                className="md:hidden text-gray-600 hover:text-gray-900 mr-2"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                <Menu className="h-6 w-6" />
                            </button>

                            {/* Search Bar - Full width when expanded */}
                            <div className={`${isSearchOpen ? 'flex-1' : 'hidden'} md:block md:flex-1 md:max-w-md ml-4`}>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Search className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        placeholder="Search..."
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            {/* Search Button (Mobile) */}
                            <button
                                className="md:hidden text-gray-600 hover:text-gray-900"
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                            >
                                <Search className="h-5 w-5" />
                            </button>

                            {/* Notifications */}
                            <button className="relative p-1 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100">
                                <Bell className="h-6 w-6" />
                                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                            </button>

                            {/* Profile Dropdown */}
                            <div className="relative ml-3">
                                <div>
                                    <button
                                        className="flex items-center text-sm rounded-full focus:outline-none"
                                        onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                                    >
                                        <img
                                            className="h-8 w-8 rounded-full"
                                            src="https://ui-avatars.com/api/?name=Admin+User&background=4f46e5&color=fff"
                                            alt="Admin User"
                                        />
                                        <span className="ml-2 text-gray-700 hidden md:inline">Admin User</span>
                                        <ChevronDown className="ml-1 h-4 w-4 text-gray-500 hidden md:inline" />
                                    </button>
                                </div>

                                {isProfileDropdownOpen && (
                                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                                        <Link
                                            to="/admin/profile"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Your Profile
                                        </Link>
                                        <Link
                                            to="/admin/settings"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Settings
                                        </Link>
                                        <button
                                            onClick={handleLogout}
                                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Sign out
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-100 to-white p-4 sm:p-6 lg:p-8">
                    <div className="max-w-7xl mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>

            {/* Mobile overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden" onClick={() => setIsMobileMenuOpen(false)}></div>
            )}
        </div>
    );
};

export default AdminLayout;