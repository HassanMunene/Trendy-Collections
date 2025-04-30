import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Settings, Bell, HelpCircle, LogOut } from "lucide-react";

import { useAuth } from "../../../context/AuthContext";
import LogoutConfirmationModal from "../AdminComponents/LogoutConfirmationModal";

const UserMenu = ({ userMenuRef, userMenuOpen, isMobileMenuOpen }) => {
    const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
    }

    const initiateLogout = () => {
        setShowLogoutConfirmation(true);
    }

    const confirmLogout = () => {
        setIsLoggingOut(true);
        // Add a small delay for better UX
        setTimeout(() => {
            handleLogout();
            setIsLoggingOut(false);
            setShowLogoutConfirmation(false);
        }, 800);
    };

    const cancelLogout = () => {
        setShowLogoutConfirmation(false);
    };

    const currentUser = {
        name: 'AzizaKhamisi',
        email: 'nkatha.khamisi@gmail.com',
        avatar: 'https://static.vecteezy.com/system/resources/previews/046/656/564/non_2x/women-hijab-icon-beautiful-muslim-girl-avatar-free-vector.jpg',
        role: 'Administrator'
    };

    return (
        <>
            {userMenuOpen && (
                <div
                    ref={userMenuRef}
                    className="fixed left-70 top-12 z-50 w-64 bg-white shadow-2xl rounded-lg overflow-hidden transition-all duration-200 border border-gray-500"
                    style={{
                        transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                        opacity: isMobileMenuOpen ? 0 : 1
                    }}
                >
                    {/* User info section */}
                    <div className="p-4 bg-gradient-to-r from-indigo-50 to-white border-b border-gray-100">
                        <div className="flex items-center space-x-3">
                            <img
                                src={currentUser.avatar}
                                alt={currentUser.name}
                                className="w-12 h-12 rounded-full border-2 border-indigo-200 shadow-sm"
                            />
                            <div>
                                <p className="font-semibold text-gray-900">{currentUser.name}</p>
                                <p className="text-xs text-gray-500">{currentUser.email}</p>
                                <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                                    {currentUser.role}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Menu items */}
                    <div className="py-1">
                        <Link to="/admin/profile" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-indigo-50 transition-colors duration-150">
                            <User className="w-5 h-5 mr-3 text-indigo-600" />
                            <span>My Profile</span>
                            <span className="ml-auto text-xs text-indigo-600 font-medium">New</span>
                        </Link>
                        <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-indigo-50 transition-colors duration-150">
                            <Mail className="w-5 h-5 mr-3 text-indigo-600" />
                            <span>Messages</span>
                            <span className="ml-auto px-2 py-0.5 text-xs font-medium bg-indigo-600 text-white rounded-full">3</span>
                        </a>
                        <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-indigo-50 transition-colors duration-150">
                            <Settings className="w-5 h-5 mr-3 text-indigo-600" />
                            Account Settings
                        </a>
                        <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-indigo-50 transition-colors duration-150">
                            <Bell className="w-5 h-5 mr-3 text-indigo-600" />
                            <span>Notifications</span>
                            <span className="ml-auto px-2 py-0.5 text-xs font-medium bg-red-500 text-white rounded-full">5+</span>
                        </a>

                        <div className="border-t border-gray-100 my-1"></div>

                        <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-indigo-50 transition-colors duration-150">
                            <HelpCircle className="w-5 h-5 mr-3 text-indigo-600" />
                            Help Center
                        </a>

                        <div className="border-t border-gray-100 my-1"></div>

                        <button
                            onClick={initiateLogout}
                            className="w-full flex items-center px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors duration-150"
                        >
                            <LogOut className="w-5 h-5 mr-3" />
                            Sign Out
                        </button>
                    </div>

                    {/* Footer */}
                    <div className="px-4 py-2 text-xs text-gray-400 bg-gray-50 border-t border-gray-100">
                        Last login: Today at 12:45 PM
                    </div>
                </div>
            )}

            {/* Logout Confirmation Modal */}
            {showLogoutConfirmation && (
                <LogoutConfirmationModal
                    cancelLogout={cancelLogout}
                    isLoggingOut={isLoggingOut}
                    confirmLogout={confirmLogout}
                />
            )}
        </>
    )
};

export default UserMenu;