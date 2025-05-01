import { useState, useRef } from 'react';
import {
    X, House, ShoppingBag, ShoppingBasket,
    Users, Tag, Settings, LogOut
} from "lucide-react";

import UserProfile from './UserProfile';
import UserMenu from './UserMenu';

const AdminSidebar = ({ isMobileMenuOpen, setIsMobileMenuOpen, isActiveRoute }) => {
    const [activeTooltip, setActiveTooltip] = useState(null);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const sidebarRef = useRef(null);
    const userMenuRef = useRef(null);

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

    // If the section title is provided we expand the section and regardless display the
    // tooltip for the hovered item.
    const handleItemHover = (itemId, sectionTitle = null) => {
        if (sectionTitle) {
            setExpandedSections(prev => ({ ...prev, [sectionTitle]: true }));
        }
        setActiveTooltip(itemId);
    };

    return (
        <>
            <aside
                ref={sidebarRef}
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-indigo-900 to-indigo-800 
                    text-white transform transition-all duration-300 ease-in-out shadow-xl
                    ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
                    md:relative md:translate-x-0 flex flex-col`}
            >
                {/* Mobile close button */}
                <button
                    className="md:hidden absolute top-4 right-4 p-1 rounded-full bg-white/10 hover:bg-white/20"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto hide-scrollbar">
                    <UserProfile
                        userMenuRef={userMenuRef}
                        userMenuOpen={userMenuOpen}
                        setUserMenuOpen={setUserMenuOpen}
                        handleItemHover={handleItemHover}
                        setActiveTooltip={setActiveTooltip}
                    />
                </div>
            </aside>

            <UserMenu
                userMenuRef={userMenuRef}
                userMenuOpen={userMenuOpen}
                setUserMenuOpen={setUserMenuOpen}
                isMobileMenuOpen={isMobileMenuOpen}
            />
        </>
    );
};

export default AdminSidebar;