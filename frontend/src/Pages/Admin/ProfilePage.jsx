import { useState } from "react";
import {
    User, Mail, Settings, Bell, HelpCircle, LogOut,
    Edit, Lock, Globe, Calendar, Shield, CreditCard,
    Activity, FileText, Bookmark, MessageSquare, ChevronLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const ProfilePage = ({ handleLogout }) => {
    const [activeTab, setActiveTab] = useState('overview');
    const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const currentUser = {
        name: 'Aziza Khamisi',
        email: 'nkatha.khamisi@gmail.com',
        avatar: 'https://static.vecteezy.com/system/resources/previews/046/656/564/non_2x/women-hijab-icon-beautiful-muslim-girl-avatar-free-vector.jpg',
        role: 'Administrator',
        joinDate: 'Joined March 2023',
        lastActive: 'Active just now',
        bio: 'Senior System Administrator | Cybersecurity Enthusiast | Coffee Lover',
        stats: {
            projects: 24,
            tasks: 142,
            connections: 86
        }
    };

    const confirmLogout = () => {
        setIsLoggingOut(true);
        setTimeout(() => {
            handleLogout();
            setIsLoggingOut(false);
            setShowLogoutConfirmation(false);
        }, 800);
    };

    return (
        <div className="flex-1 overflow-auto p-6">
            {/* Back button and header */}
            <div className="mb-6">
                <Link
                    to="/admin/dashboard"
                    className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                    <ChevronLeft className="w-5 h-5 mr-1" />
                    Back to Dashboard
                </Link>
                <h1 className="text-3xl font-bold text-gray-900 mt-2">My Profile</h1>
            </div>

            {/* Profile Header */}
            <div className="relative bg-gradient-to-r from-indigo-500 to-purple-600 rounded-t-xl h-48">
                <div className="absolute -bottom-16 left-6">
                    <div className="relative">
                        <img
                            src={currentUser.avatar}
                            alt={currentUser.name}
                            className="w-32 h-32 rounded-full border-4 border-white shadow-xl"
                        />
                        <button className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full shadow-md hover:bg-indigo-700 transition-colors">
                            <Edit className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Profile Content */}
            <div className="mt-20 bg-white rounded-b-xl shadow-md border border-gray-200">
                <div className="p-6">
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">{currentUser.name}</h1>
                            <p className="text-gray-500">{currentUser.role}</p>
                            <div className="flex items-center mt-3 text-sm text-gray-500">
                                <Globe className="w-4 h-4 mr-1" />
                                <span>{currentUser.bio}</span>
                            </div>
                        </div>
                        <button className="flex items-center px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                            <Edit className="w-4 h-4 mr-2" />
                            Edit Profile
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-indigo-50 p-5 rounded-lg text-center transition-transform hover:scale-[1.02]">
                            <div className="text-3xl font-bold text-indigo-700">{currentUser.stats.projects}</div>
                            <div className="text-sm text-gray-600 mt-1">Projects</div>
                        </div>
                        <div className="bg-purple-50 p-5 rounded-lg text-center transition-transform hover:scale-[1.02]">
                            <div className="text-3xl font-bold text-purple-700">{currentUser.stats.tasks}</div>
                            <div className="text-sm text-gray-600 mt-1">Tasks Completed</div>
                        </div>
                        <div className="bg-blue-50 p-5 rounded-lg text-center transition-transform hover:scale-[1.02]">
                            <div className="text-3xl font-bold text-blue-700">{currentUser.stats.connections}</div>
                            <div className="text-sm text-gray-600 mt-1">Connections</div>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="border-b border-gray-200">
                        <nav className="-mb-px flex space-x-8">
                            <button
                                onClick={() => setActiveTab('overview')}
                                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'overview' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                            >
                                Overview
                            </button>
                            <button
                                onClick={() => setActiveTab('security')}
                                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'security' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                            >
                                Security
                            </button>
                            <button
                                onClick={() => setActiveTab('activity')}
                                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'activity' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                            >
                                Activity
                            </button>
                            <button
                                onClick={() => setActiveTab('notifications')}
                                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'notifications' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                            >
                                Notifications
                            </button>
                        </nav>
                    </div>

                    {/* Tab Content */}
                    <div className="py-8">
                        {activeTab === 'overview' && <OverviewTab user={currentUser} />}
                        {activeTab === 'security' && <SecurityTab />}
                        {activeTab === 'activity' && <ActivityTab />}
                        {activeTab === 'notifications' && <NotificationsTab />}
                    </div>
                </div>
            </div>

            {/* Logout Confirmation Modal */}
            {showLogoutConfirmation && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                    <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-md transform transition-all duration-300 scale-95 animate-fade-in">
                        <div className="p-6">
                            <div className="flex items-center justify-center mb-4">
                                <div className="p-3 bg-red-100 rounded-full">
                                    <LogOut className="w-8 h-8 text-red-600" />
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-center text-gray-900 mb-2">
                                Confirm Logout
                            </h3>
                            <p className="text-sm text-gray-500 text-center mb-6">
                                Are you sure you want to log out? Any unsaved changes might be lost.
                            </p>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => setShowLogoutConfirmation(false)}
                                    className="flex-1 py-2 px-4 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                                    disabled={isLoggingOut}
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={confirmLogout}
                                    className="flex-1 py-2 px-4 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors duration-200 flex items-center justify-center"
                                    disabled={isLoggingOut}
                                >
                                    {isLoggingOut ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Logging Out...
                                        </>
                                    ) : (
                                        "Yes, Logout"
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// Tab Components
const OverviewTab = ({ user }) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-medium text-lg mb-5 flex items-center">
                <User className="w-5 h-5 mr-2 text-indigo-600" />
                Personal Information
            </h3>
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm text-gray-500">Full Name</label>
                        <p className="font-medium">{user.name}</p>
                    </div>
                    <div>
                        <label className="text-sm text-gray-500">Role</label>
                        <p className="font-medium">{user.role}</p>
                    </div>
                </div>
                <div>
                    <label className="text-sm text-gray-500">Email</label>
                    <p className="font-medium">{user.email}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm text-gray-500">Join Date</label>
                        <p className="font-medium">{user.joinDate}</p>
                    </div>
                    <div>
                        <label className="text-sm text-gray-500">Last Active</label>
                        <p className="font-medium">{user.lastActive}</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-medium text-lg mb-5 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-indigo-600" />
                Account Status
            </h3>
            <div className="space-y-5">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                        <p className="font-medium">Account Verification</p>
                        <p className="text-sm text-gray-500">Status of your account verification</p>
                    </div>
                    <span className="px-3 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">Verified</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                        <p className="font-medium">Two-Factor Authentication</p>
                        <p className="text-sm text-gray-500">Add an extra layer of security</p>
                    </div>
                    <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">Enable</button>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                        <p className="font-medium">Login History</p>
                        <p className="text-sm text-gray-500">View your recent login activity</p>
                    </div>
                    <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">View All</button>
                </div>
            </div>
        </div>
    </div>
);

const SecurityTab = () => (
    <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-medium text-lg mb-5 flex items-center">
                <Lock className="w-5 h-5 mr-2 text-indigo-600" />
                Password & Security
            </h3>
            <div className="space-y-5">
                <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="mb-3 md:mb-0">
                        <p className="font-medium">Password</p>
                        <p className="text-sm text-gray-500">Last changed 3 months ago</p>
                    </div>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 whitespace-nowrap">
                        Change Password
                    </button>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="mb-3 md:mb-0">
                        <p className="font-medium">Two-Factor Authentication</p>
                        <p className="text-sm text-gray-500">Add an extra layer of security</p>
                    </div>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 whitespace-nowrap">
                        Set Up 2FA
                    </button>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="mb-3 md:mb-0">
                        <p className="font-medium">Active Sessions</p>
                        <p className="text-sm text-gray-500">2 active sessions</p>
                    </div>
                    <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium whitespace-nowrap">
                        View All Sessions
                    </button>
                </div>
            </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-medium text-lg mb-5 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-indigo-600" />
                Security Alerts
            </h3>
            <div className="space-y-4">
                <div className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="p-2 bg-blue-100 rounded-full mr-3">
                        <Bell className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                        <p className="font-medium">Unusual login attempt</p>
                        <p className="text-sm text-gray-500">New login from Chrome on Windows</p>
                        <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        Review
                    </button>
                </div>
                <div className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="p-2 bg-green-100 rounded-full mr-3">
                        <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                        <p className="font-medium">Password updated</p>
                        <p className="text-sm text-gray-500">Your password was changed</p>
                        <p className="text-xs text-gray-400 mt-1">3 months ago</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        Details
                    </button>
                </div>
            </div>
        </div>
    </div>
);

const ActivityTab = () => (
    <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-medium text-lg mb-5 flex items-center">
                <Activity className="w-5 h-5 mr-2 text-indigo-600" />
                Recent Activity
            </h3>
            <div className="space-y-5">
                <div className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="p-2 bg-purple-100 rounded-full mr-3">
                        <FileText className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                        <p className="font-medium">Created new project "Dashboard UI"</p>
                        <p className="text-sm text-gray-500">Added 3 new tasks</p>
                        <p className="text-xs text-gray-400 mt-1">Today, 10:45 AM</p>
                    </div>
                </div>
                <div className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="p-2 bg-blue-100 rounded-full mr-3">
                        <MessageSquare className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                        <p className="font-medium">Commented on task #142</p>
                        <p className="text-sm text-gray-500">"Please review the latest changes"</p>
                        <p className="text-xs text-gray-400 mt-1">Yesterday, 3:22 PM</p>
                    </div>
                </div>
                <div className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="p-2 bg-green-100 rounded-full mr-3">
                        <Bookmark className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                        <p className="font-medium">Completed task "User Profile UI"</p>
                        <p className="text-sm text-gray-500">Marked as done</p>
                        <p className="text-xs text-gray-400 mt-1">Yesterday, 11:30 AM</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-medium text-lg mb-5 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-indigo-600" />
                Activity Timeline
            </h3>
            <div className="relative pl-8">
                <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>
                <div className="space-y-8">
                    <div className="relative">
                        <div className="absolute left-0 top-1 h-4 w-4 rounded-full bg-indigo-500 border-4 border-white -ml-2"></div>
                        <div className="pl-6">
                            <p className="font-medium">Logged in</p>
                            <p className="text-sm text-gray-500">From Chrome on Windows</p>
                            <p className="text-xs text-gray-400 mt-1">Today, 9:15 AM</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute left-0 top-1 h-4 w-4 rounded-full bg-purple-500 border-4 border-white -ml-2"></div>
                        <div className="pl-6">
                            <p className="font-medium">Updated profile picture</p>
                            <p className="text-xs text-gray-400 mt-1">Today, 9:30 AM</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute left-0 top-1 h-4 w-4 rounded-full bg-blue-500 border-4 border-white -ml-2"></div>
                        <div className="pl-6">
                            <p className="font-medium">Changed account settings</p>
                            <p className="text-xs text-gray-400 mt-1">Today, 10:00 AM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const NotificationsTab = () => (
    <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-medium text-lg mb-5 flex items-center">
                <Bell className="w-5 h-5 mr-2 text-indigo-600" />
                Notification Preferences
            </h3>
            <div className="space-y-5">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-gray-500">Receive important updates via email</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                    </label>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                        <p className="font-medium">Push Notifications</p>
                        <p className="text-sm text-gray-500">Get instant alerts on your device</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                    </label>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                        <p className="font-medium">SMS Alerts</p>
                        <p className="text-sm text-gray-500">Critical alerts via text message</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                    </label>
                </div>
            </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-medium text-lg mb-5 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-indigo-600" />
                Notification Types
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                    <input type="checkbox" className="h-4 w-4 text-indigo-600 rounded border-gray-300" defaultChecked />
                    <label className="text-sm text-gray-700">System Updates</label>
                </div>
                <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                    <input type="checkbox" className="h-4 w-4 text-indigo-600 rounded border-gray-300" defaultChecked />
                    <label className="text-sm text-gray-700">Security Alerts</label>
                </div>
                <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                    <input type="checkbox" className="h-4 w-4 text-indigo-600 rounded border-gray-300" defaultChecked />
                    <label className="text-sm text-gray-700">New Messages</label>
                </div>
                <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                    <input type="checkbox" className="h-4 w-4 text-indigo-600 rounded border-gray-300" />
                    <label className="text-sm text-gray-700">Marketing</label>
                </div>
                <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                    <input type="checkbox" className="h-4 w-4 text-indigo-600 rounded border-gray-300" defaultChecked />
                    <label className="text-sm text-gray-700">Task Assignments</label>
                </div>
                <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                    <input type="checkbox" className="h-4 w-4 text-indigo-600 rounded border-gray-300" defaultChecked />
                    <label className="text-sm text-gray-700">Project Updates</label>
                </div>
            </div>
        </div>
    </div>
);

export default ProfilePage;