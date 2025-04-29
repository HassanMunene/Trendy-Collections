import { ChevronDown } from "lucide-react";

const UserProfile = ({ userMenuRef, userMenuOpen, setUserMenuOpen, handleItemHover, setActiveTooltip }) => {
    const currentUser = {
        name: 'AzizaKhamisi',
        email: 'nkatha.khamisi@gmail.com',
        avatar: 'https://static.vecteezy.com/system/resources/previews/046/656/564/non_2x/women-hijab-icon-beautiful-muslim-girl-avatar-free-vector.jpg',
        role: 'Administrator'
    };

    return (
        <div
            ref={userMenuRef}
            className="relative p-4 border-b border-indigo-700 flex items-center space-x-3 cursor-pointer group"
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            onMouseEnter={() => handleItemHover('user-profile')}
            onMouseLeave={() => setActiveTooltip(null)}
        >
            <div className="relative">
                <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="w-10 h-10 rounded-full border-2 border-indigo-300"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-indigo-800"></div>
            </div>
            <div className="flex-1 flex flex-col justify-center min-w-0">
                <p className="text-sm font-medium truncate mb-0 pt-3">{currentUser.name}</p>
                <p className="text-xs text-indigo-300 truncate">{currentUser.role}</p>
            </div>
            <ChevronDown className={`w-4 h-4 text-indigo-300 transition-transform duration-200 ${userMenuOpen ? 'rotate-180' : ''}`} />
        </div>
    );
};

export default UserProfile;