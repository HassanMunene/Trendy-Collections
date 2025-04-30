import { User, Shield, Activity } from "lucide-react";

const OverviewTab = ({ user }) => {
    return (
        <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2">
            <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-medium text-base md:text-lg mb-4 md:mb-5 flex items-center text-gray-800">
                    <User className="w-4 h-4 md:w-5 md:h-5 mr-2 text-indigo-600" />
                    Personal Information
                </h3>
                <div className="space-y-3 md:space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                        <div>
                            <label className="text-xs md:text-sm text-gray-500">Full Name</label>
                            <p className="font-medium text-sm md:text-base">{user.name}</p>
                        </div>
                        <div>
                            <label className="text-xs md:text-sm text-gray-500">Role</label>
                            <p className="font-medium text-sm md:text-base">{user.role}</p>
                        </div>
                    </div>
                    <div>
                        <label className="text-xs md:text-sm text-gray-500">Email</label>
                        <p className="font-medium text-sm md:text-base">{user.email}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                        <div>
                            <label className="text-xs md:text-sm text-gray-500">Join Date</label>
                            <p className="font-medium text-sm md:text-base">{user.joinDate}</p>
                        </div>
                        <div>
                            <label className="text-xs md:text-sm text-gray-500">Last Active</label>
                            <p className="font-medium text-sm md:text-base flex items-center">
                                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full mr-1 md:mr-2"></span>
                                {user.lastActive}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-medium text-base md:text-lg mb-4 md:mb-5 flex items-center text-gray-800">
                    <Shield className="w-4 h-4 md:w-5 md:h-5 mr-2 text-indigo-600" />
                    Account Status
                </h3>
                <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center justify-between p-2 md:p-3 bg-gray-50 rounded-lg">
                        <div>
                            <p className="font-medium text-sm md:text-base">Account Verification</p>
                            <p className="text-xs md:text-sm text-gray-500">Status of your account verification</p>
                        </div>
                        <span className="px-2 py-0.5 md:px-3 md:py-1 text-xs md:text-xs font-semibold bg-green-100 text-green-800 rounded-full">Verified</span>
                    </div>
                    <div className="flex items-center justify-between p-2 md:p-3 bg-gray-50 rounded-lg">
                        <div>
                            <p className="font-medium text-sm md:text-base">Two-Factor Authentication</p>
                            <p className="text-xs md:text-sm text-gray-500">Add an extra layer of security</p>
                        </div>
                        <button className="text-xs md:text-sm text-indigo-600 hover:text-indigo-800 font-medium">Enable</button>
                    </div>
                </div>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow lg:col-span-2">
                <h3 className="font-medium text-base md:text-lg mb-4 md:mb-5 flex items-center text-gray-800">
                    <Activity className="w-4 h-4 md:w-5 md:h-5 mr-2 text-indigo-600" />
                    Quick Stats
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6">
                    <div className="bg-indigo-50 p-3 md:p-5 rounded-lg text-center transition-transform hover:scale-[1.02]">
                        <div className="text-2xl md:text-3xl font-bold text-indigo-700">{user.stats.projects}</div>
                        <div className="text-xs md:text-sm text-gray-600 mt-1">Active Projects</div>
                    </div>
                    <div className="bg-purple-50 p-3 md:p-5 rounded-lg text-center transition-transform hover:scale-[1.02]">
                        <div className="text-2xl md:text-3xl font-bold text-purple-700">{user.stats.tasks}</div>
                        <div className="text-xs md:text-sm text-gray-600 mt-1">Tasks Completed</div>
                    </div>
                    <div className="bg-blue-50 p-3 md:p-5 rounded-lg text-center transition-transform hover:scale-[1.02]">
                        <div className="text-2xl md:text-3xl font-bold text-blue-700">{user.stats.connections}</div>
                        <div className="text-xs md:text-sm text-gray-600 mt-1">Team Connections</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default OverviewTab