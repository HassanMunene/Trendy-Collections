import { useState, useEffect, useContext } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import AdminSidebar from './Sidebar/AdminSidebar';
import MainTopbar from './AdminComponents/MainTopbar';
import { MobileContext } from '../../context/MobileContext';

const AdminLayout = () => {
    const location = useLocation();
    const { isMobile } = useContext(MobileContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isAdminSidebarForMobile, setIsAdminSidebarForMobile] = useState(false);

    // In mobile screens close the admin sidebar when the route changes
    useEffect(() => {
        console.log("location has changed!")
        setIsAdminSidebarForMobile(false);
    }, [location.pathname]);

    // Check if route is active
    const isActiveRoute = (route) => {
        return location.pathname === route;
    };

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <AdminSidebar
                isAdminSidebarForMobile={isAdminSidebarForMobile}
                setIsAdminSidebarForMobile={setIsAdminSidebarForMobile}
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                isActiveRoute={isActiveRoute}
            />

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Navigation */}
                <MainTopbar
                    setIsAdminSidebarForMobile={setIsAdminSidebarForMobile}
                    isAdminSidebarForMobile={isAdminSidebarForMobile}
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