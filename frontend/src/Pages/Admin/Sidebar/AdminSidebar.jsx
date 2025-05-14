import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    Home, Boxes, ListChecks, ShoppingCart,
    Users2, Bell, LineChart, Settings, User
} from "lucide-react";

const navLinks = [
    { to: "/", icon: <Home size={20} />, label: "Dashboard" },
    { to: "/products", icon: <Boxes size={20} />, label: "Products" },
    { to: "/categories", icon: <ListChecks size={20} />, label: "Categories" },
    { to: "/orders", icon: <ShoppingCart size={20} />, label: "Orders" },
    { to: "/users", icon: <Users2 size={20} />, label: "Users" },
    { to: "/notifications", icon: <Bell size={20} />, label: "Notifications", badge: 5 },
    { to: "/analytics", icon: <LineChart size={20} />, label: "Analytics" },
    { to: "/settings", icon: <Settings size={20} />, label: "Settings" },
];

const AdminSidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const location = useLocation();

    // Handle responsive behavior
    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            if (mobile) setCollapsed(true);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNavClick = () => {
        if (isMobile) setCollapsed(true);
    };

    // Check if current route is active
    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <aside
            className={`h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col transition-all duration-300 ease-in-out
                ${collapsed ? 'w-20' : 'w-64'}
                fixed md:relative z-40
                shadow-xl shadow-black/40
                border-r border-gray-700
            `}
        >
            {/* Logo/Header Section */}
            <div className="h-16 flex items-center justify-between px-4 border-b border-gray-700">
                {!collapsed && (
                    <div className="flex items-center space-x-2">
                        <div className="flex w-8 h-8 rounded-md bg-indigo-600 items-center justify-center">
                            <span className="font-bold text-white">L</span>
                        </div>
                        <span className="font-bold text-lg tracking-tight truncate">Admin Panel</span>
                    </div>
                )}
                {/* {collapsed && (
                    <div className="w-8 h-8 rounded-md bg-indigo-600 flex items-center justify-center mx-auto">
                        <span className="font-bold text-white">L</span>
                    </div>
                )} */}
                <button
                    className="text-gray-400 hover:text-white focus:outline-none transition-colors duration-200"
                    aria-label={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
                    onClick={() => setCollapsed(!collapsed)}
                >
                    {collapsed ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 overflow-y-auto overflow-x-hidden py-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
                <ul className="space-y-1 px-2">
                    {navLinks.map((link) => (
                        <li key={link.to} className="relative group">
                            <Link
                                to={link.to}
                                onClick={handleNavClick}
                                className={`flex items-center rounded-lg py-2.5 transition-all duration-200 ease-out
                                    ${collapsed ? 'justify-center px-0 mx-2' : 'px-3 mx-1'}
                                    ${isActive(link.to) ? 'text-white bg-gray-700/80' : 'text-gray-300 hover:text-white hover:bg-gray-700/60'}
                                    relative
                                `}
                                aria-label={link.label}
                            >
                                <span className="flex-shrink-0 relative">
                                    {link.icon}
                                    {link.badge && (
                                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                            {link.badge}
                                        </span>
                                    )}
                                </span>
                                <span
                                    className={`transition-all duration-200 ease-out
                                        ${collapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 w-auto ml-3'}
                                    `}
                                >
                                    {link.label}
                                </span>
                                {/* Active state indicator */}
                                {isActive(link.to) && (
                                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-indigo-500 rounded-l-lg"></span>
                                )}
                            </Link>

                            {/* Enhanced Tooltip for collapsed state */}
                            {collapsed && (
                                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 bg-gray-900 text-white px-3 py-2 rounded-lg shadow-xl text-sm font-medium opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50 min-w-max border border-gray-700 flex items-center">
                                    {link.label}
                                    {link.badge && (
                                        <span className="ml-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                            {link.badge}
                                        </span>
                                    )}
                                    {/* Tooltip arrow */}
                                    <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45 border-l border-t border-gray-700"></div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Profile Section */}
            <div className={`p-3 border-t border-gray-700`}>
                <Link
                    to="/profile"
                    onClick={handleNavClick}
                    className={`flex items-center rounded-lg transition-all duration-200 ease-out
                        ${collapsed ? 'justify-center p-2' : 'p-2'}
                        ${isActive('/profile') ? 'bg-gray-700' : 'bg-gray-800 hover:bg-gray-700/60'}
                        relative group
                    `}
                    aria-label="Profile"
                >
                    <div className="relative">
                        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                            <User size={16} />
                        </div>
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-gray-800"></div>
                    </div>
                    {!collapsed && (
                        <div className="ml-3 overflow-hidden">
                            <p className="text-sm font-medium text-white truncate">John Doe</p>
                            <p className="text-xs text-gray-400 truncate">Admin</p>
                        </div>
                    )}

                    {/* Profile Tooltip */}
                    {collapsed && (
                        <div className="absolute left-full bottom-0 ml-4 bg-gray-900 text-white px-3 py-2 rounded-lg shadow-xl text-sm font-medium opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50 min-w-max border border-gray-700">
                            <div className="flex items-center space-x-2">
                                <div className="relative">
                                    <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                                        <User size={16} />
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-gray-900"></div>
                                </div>
                                <div>
                                    <p className="font-medium">John Doe</p>
                                    <p className="text-xs text-gray-400">Admin</p>
                                </div>
                            </div>
                            {/* Tooltip arrow */}
                            <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45 border-l border-t border-gray-700"></div>
                        </div>
                    )}
                </Link>
            </div>
        </aside>
    );
};

export default AdminSidebar;