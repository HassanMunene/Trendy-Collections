import { useState, useRef } from 'react';
import {
    X, House, ShoppingBag, ShoppingBasket,
    Users, Tag, Settings, LogOut
} from "lucide-react";

import UserProfile from './UserProfile';
import UserMenu from './UserMenu';

const AdminSidebar = ({ isAdminSidebarForMobile, setIsAdminSidebarForMobile, isActiveRoute }) => {
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const sidebarRef = useRef(null);

    const handleLogout = () => {
        console.log("will handle logout on here")
    }

    // Navigation items data
    const navItems = [
        {
            title: 'General',
            description: 'Dashboard overview and order management',
            items: [
                {
                    name: 'Dashboard',
                    path: '/admin',
                    icon: House,
                    active: isActiveRoute('/admin'),
                    tooltip: 'Main dashboard with analytics and quick actions'
                },
                {
                    name: 'Orders',
                    path: '/admin/orders',
                    icon: ShoppingBag,
                    active: isActiveRoute('/admin/orders'),
                    badge: 12,
                    tooltip: 'Manage customer orders and fulfillment processes'
                }
            ]
        },
        {
            title: 'Catalog',
            description: 'Product and category management',
            items: [
                {
                    name: 'Products',
                    path: '/admin/products',
                    icon: ShoppingBasket,
                    active: isActiveRoute('/admin/products'),
                    tooltip: 'Manage your product catalog and inventory',
                },
                {
                    name: 'Categories',
                    path: '/admin/categories',
                    icon: Tag,
                    active: isActiveRoute('/admin/categories'),
                    tooltip: 'Organize products into categories and collections'
                }
            ]
        },
        {
            title: 'Users',
            description: 'Customer and staff management',
            items: [
                {
                    name: 'Customers',
                    path: '/admin/customers',
                    icon: Users,
                    active: isActiveRoute('/admin/customers'),
                    badge: 5,
                    tooltip: 'View and manage customer accounts'
                },
                {
                    name: 'Staff',
                    path: '/admin/staff',
                    icon: Users,
                    active: isActiveRoute('/admin/staff'),
                    tooltip: 'Manage staff accounts and permissions'
                }
            ]
        },
        {
            title: 'System',
            description: 'Settings and configurations',
            items: [
                {
                    name: 'Settings',
                    path: '/admin/settings',
                    icon: Settings,
                    active: isActiveRoute('/admin/settings'),
                    tooltip: 'System configuration and preferences',
                },
                {
                    name: 'Logout',
                    action: handleLogout,
                    icon: LogOut,
                    tooltip: 'Sign out of the admin panel'
                }
            ]
        }
    ];

    return (
        <>
            <aside
                ref={sidebarRef}
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-indigo-900 to-indigo-800 text-white transform transition-all 
                duration-300 ease-in-out shadow-xl ${isAdminSidebarForMobile ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 flex flex-col`}
            >
                {/* Header section with close button that is visible on moile screens */}
                <div className="relative pt-4 px-4 flex-shrink-0">
                    {/* A button to close the admin sidebar on mobile screens */}
                    <button
                        className="md:hidden absolute top-4 right-4 p-2 !rounded-full bg-white/10 hover:bg-white/20 z-60"
                        onClick={() => setIsAdminSidebarForMobile(false)}
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <UserProfile
                        userMenuOpen={userMenuOpen}
                        setUserMenuOpen={setUserMenuOpen}
                    />
                </div>

                {/* Scrollable Content Area (nav items) */}
                <div className="flex-1 overflow-y-auto hide-scrollbar pt-2 px-4">
                    {/* Render your nav items here */}
                    {navItems.map((section) => (
                        <div key={section.title} className="mb-6">
                            {/* Section rendering */}
                        </div>
                    ))}
                </div>
            </aside>

            <UserMenu
                userMenuOpen={userMenuOpen}
                setUserMenuOpen={setUserMenuOpen}
                sidebarRef={sidebarRef}
                isAdminSidebarForMobile={isAdminSidebarForMobile}
            />
        </>
    );
};

export default AdminSidebar;