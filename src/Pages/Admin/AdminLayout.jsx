import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Bell, Search, ChevronDown } from "lucide-react";

import AdminSidebar from './Sidebar/AdminSidebar';
import MainTopbar from './AdminComponents/MainTopbar';

const AdminLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    // Check if route is active
    const isActiveRoute = (route) => {
        return location.pathname === route;
    };

    const handleLogout = () => {
        navigate('/login');
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
                <MainTopbar
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                    isMobileMenuOpen={isMobileMenuOpen}
                />

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