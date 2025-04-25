import { Link } from "react-router-dom";
import { X, House, ShoppingBag, ShoppingBasket, Tag, Users, Settings, LogOut } from "lucide-react";


const AdminSidebar = ({ isMobileMenuOpen, setIsMobileMenuOpen, isActiveRoute, handleLogout }) => {
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
        <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-indigo-900 to-indigo-800 text-white transform transition-transform duration-300 ease-in-out shadow-xl ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 overflow-y-auto hide-scrollbar`}>
            <div className="flex items-center justify-between p-6 border-b border-indigo-700">
                <Link to="/admin" className="flex items-center space-x-2">
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">
                        Trendy Admin
                    </span>
                </Link>
                <button className="md:hidden text-white hover:text-indigo-200" onClick={() => setIsMobileMenuOpen(false)}>
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
    )
}

export default AdminSidebar;