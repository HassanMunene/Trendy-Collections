import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import {
    House,
    ShoppingBag,
    ShoppingBasket,
    Tag,
    Users,
    UsersRound,
    Settings,
    LogOut,
    Menu,
    X,
    Bell,
    Search,
    ChevronDown
} from "lucide-react";

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

    // Navigation items
    const navItems = [
        {
            title: 'General',
            items: [
                {
                    name: 'Dashboard',
                    path: '/admin',
                    icon: House,
                    active: isActiveRoute('/admin')
                },
                {
                    name: 'Orders',
                    path: '/admin/orders',
                    icon: ShoppingBag,
                    active: isActiveRoute('/admin/orders')
                }
            ]
        },
        {
            title: 'Catalog',
            items: [
                {
                    name: 'Products',
                    path: '/admin/products',
                    icon: ShoppingBasket,
                    active: isActiveRoute('/admin/products')
                },
                {
                    name: 'Categories',
                    path: '/admin/categories',
                    icon: Tag,
                    active: isActiveRoute('/admin/categories')
                }
            ]
        },
        {
            title: 'Users',
            items: [
                {
                    name: 'Customers',
                    path: '/admin/customers',
                    icon: Users,
                    active: isActiveRoute('/admin/customers')
                },
                {
                    name: 'Staff',
                    path: '/admin/staff',
                    icon: UsersRound,
                    active: isActiveRoute('/admin/staff')
                }
            ]
        },
        {
            title: 'System',
            items: [
                {
                    name: 'Settings',
                    path: '/admin/settings',
                    icon: Settings,
                    active: isActiveRoute('/admin/settings')
                },
                {
                    name: 'Logout',
                    action: handleLogout,
                    icon: LogOut
                }
            ]
        }
    ];

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className={`
                fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-indigo-900 to-indigo-800 text-white 
                transform transition-transform duration-300 ease-in-out shadow-xl
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
                md:relative md:translate-x-0
            `}>
                <div className="flex items-center justify-between p-6 border-b border-indigo-700">
                    <Link to="/admin" className="flex items-center space-x-2">
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">
                            Trendy Admin
                        </span>
                    </Link>
                    <button
                        className="md:hidden text-white hover:text-indigo-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <nav className="mt-6 px-4">
                    {navItems.map((section, index) => (
                        <div key={index} className="mb-8">
                            <p className="text-xs font-semibold text-indigo-300 uppercase tracking-wider px-4 mb-3">
                                {section.title}
                            </p>
                            <div className="space-y-1">
                                {section.items.map((item, idx) => (
                                    item.path ? (
                                        <Link
                                            key={idx}
                                            to={item.path}
                                            className={`
                                                flex items-center px-4 py-3 rounded-lg transition-all
                                                ${item.active
                                                    ? 'bg-white/10 text-white shadow-md'
                                                    : 'text-indigo-200 hover:bg-white/5 hover:text-white'
                                                }
                                            `}
                                        >
                                            <item.icon className="w-5 h-5 mr-3" />
                                            <span>{item.name}</span>
                                        </Link>
                                    ) : (
                                        <button
                                            key={idx}
                                            onClick={item.action}
                                            className="w-full flex items-center px-4 py-3 rounded-lg text-indigo-200 hover:bg-white/5 hover:text-white transition-all"
                                        >
                                            <item.icon className="w-5 h-5 mr-3" />
                                            <span>{item.name}</span>
                                        </button>
                                    )
                                ))}
                            </div>
                        </div>
                    ))}
                </nav>
            </aside>

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
                <main className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-50 to-white p-4 sm:p-6 lg:p-8">
                    <div className="max-w-7xl mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>

            {/* Mobile overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>
            )}
        </div>
    );
};

export default AdminLayout;