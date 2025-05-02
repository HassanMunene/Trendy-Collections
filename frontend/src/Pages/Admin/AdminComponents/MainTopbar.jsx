import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Menu, Search, X, Bell, ChevronDown, User, Settings, LogOut } from "lucide-react";

const MainTopbar = ({ setIsAdminSidebarForMobile, isAdminSidebarForMobile}) => {
    const navigate = useNavigate();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const searchRef = useRef(null);

    const handleLogout = () => {
        console.log("Handle logging out");
    };

    return (
        <header className="bg-white shadow-sm z-10 ">
            {/* Search dropdown on mobile screens */}
            <div className={`md:hidden fixed top-0 left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-out z-40 ${isSearchOpen ? 'translate-y-0' : '-translate-y-full'}`} ref={searchRef}>
                <div className="px-4 py-3 flex items-center">
                    <div className="relative flex-1">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Search..."
                            autoFocus
                        />
                        <button
                            onClick={() => setIsSearchOpen(false)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        >
                            <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Main top bar content starts here */}
            <div className="px-4 py-3 sm:px-6 lg:px-8 flex justify-between items-center">
                <div className="flex items-center">
                    {/* Menu button when on mobile screen */}
                    <button className="md:hidden text-gray-600 hover:text-gray-900 mr-2" onClick={() => setIsAdminSidebarForMobile(!isAdminSidebarForMobile)}>
                        <Menu className="h-6 w-6" />
                    </button>

                    {/* Search Bar - On Desktop */}
                    <div className="hidden md:block md:flex-1 md:max-w-md ml-4">
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
                    {/* Search Button on Mobile screen */}
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
                                className="flex items-center text-sm rounded-full focus:outline-none group"
                                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                            >
                                <div className="relative">
                                    <img
                                        className="h-8 w-8 rounded-full border-2 border-transparent group-hover:border-indigo-500 transition-all"
                                        src="https://ui-avatars.com/api/?name=Admin+User&background=4f46e5&color=fff"
                                        alt="Admin User"
                                    />
                                    <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full bg-green-500 ring-2 ring-white"></span>
                                </div>
                                <span className="ml-2 text-gray-700 hidden md:inline font-medium">Admin User</span>
                                <ChevronDown className={`ml-1 h-4 w-4 text-gray-500 hidden md:inline transition-transform ${isProfileDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                        </div>

                        {isProfileDropdownOpen && (
                            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 overflow-hidden transition-all duration-200">
                                <div className="py-1">
                                    <Link
                                        to="/admin/profile"
                                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                    >
                                        <User className="h-4 w-4 mr-3 text-gray-500" />
                                        Your Profile
                                    </Link>
                                    <Link
                                        to="/admin/settings"
                                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                    >
                                        <Settings className="h-4 w-4 mr-3 text-gray-500" />
                                        Settings
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                    >
                                        <LogOut className="h-4 w-4 mr-3 text-gray-500" />
                                        Sign out
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default MainTopbar;