import { createContext, useState, useEffect, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

    useEffect(() => {
        const token = localStorage.getItem("token");
        const userData = localStorage.getItem("user");

        if (token && userData) {
            setIsAuthenticated(true);
            setUser(JSON.parse(userData));
        }

        setLoading(false);
    }, []);

    const login = (token, userData) => {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userData));
        setIsAuthenticated(true);
        setUser(userData);
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setIsAuthenticated(false);
    }

    const updateProfile = async (profileData) => {
        try {
            const response = await fetch(`${API_URL}/profile/update`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(profileData)
            });

            if(!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to Update profile');
            }

            const data = await response.json();
            setUser(data.user);
            return data;
        } catch (error) {
            throw error;
        }
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, loading, login, logout, updateProfile }}>
            {children}
        </AuthContext.Provider>
    )
}

// Let us define our own custom hook to access these values easily and use the context we have
// just created
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider");
    return context;
}