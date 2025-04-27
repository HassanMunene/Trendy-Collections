import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Lock, Mail, Eye, EyeOff, ChevronRight, AlertCircle } from "lucide-react";

import { useAuth } from "../context/AuthContext";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const LoginPage = () => {
    const { login } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsLoading(true);
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await response.json();

            console.log("Login response:", data);

            if (data.status === "fail") {
                setErrors({ submit: data.message });
                return;
            }

            if (data.status === "success") {
                setSuccessMessage(data.message);
                // after successful login, store the token and user data on the local storage
                // And login the user using the login function from the AuthContext
                const { token, user } = data;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                login(token, user);

                await new Promise((resolve) => setTimeout(resolve, 1500));

                // navigate the user to the admin page
                navigate("/admin")
            }
        } catch (error) {
            console.log("Error in the Login process:", error);
            setErrors({ submit: "Network error. Please try again." });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 to-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                {/* Logo with animated underline */}
                <Link to="/" className="flex justify-center group">
                    <span className="text-2xl font-bold bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent relative">
                        Trendy Collections
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-700 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                </Link>

                {/* Visual separator with animation */}
                <div className="mt-3 relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-200 relative">
                            <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-rose-100 rounded-full transition-all duration-300 hover:bg-rose-200 hover:scale-110"></span>
                        </div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-3 bg-white text-sm text-gray-500 font-medium">
                            New to Trendy Collections?
                        </span>
                    </div>
                </div>

                {/* Animated register link */}
                <div className="mt-3 text-center">
                    <Link
                        to="/register"
                        state={{ from: location.state?.from }}
                        className="inline-flex items-center text-sm font-medium !text-rose-600 !hover:text-rose-500 group transition-all duration-300"
                    >
                        <span className="relative">
                            Create an account
                            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-rose-500 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow-xl sm:rounded-lg sm:px-10 border border-rose-100">
                    {/* Error message */}
                    {errors.submit && (
                        <div className="mb-6 rounded-md p-3 flex items-start bg-red-50 text-red-800">
                            <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                            <div className="ml-3">
                                <p className="text-sm font-medium">
                                    {errors.submit}
                                </p>
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`py-3 pl-10 block w-full border ${errors.email ? 'border-red-300' : 'border-gray-300'
                                        } rounded-md focus:ring-rose-500 focus:border-rose-500 focus:outline-none transition duration-300`}
                                    placeholder="your@email.com"
                                />
                            </div>
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="current-password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={`py-3 pl-10 pr-10 block w-full border ${errors.password ? 'border-red-300' : 'border-gray-300'
                                        } rounded-md focus:ring-rose-500 focus:border-rose-500 focus:outline-none transition duration-300`}
                                    placeholder="••••••••"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                    <button
                                        type="button"
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                        className="text-gray-400 hover:text-rose-600 transition-colors"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5" />
                                        ) : (
                                            <Eye className="h-5 w-5" />
                                        )}
                                    </button>
                                </div>
                            </div>
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                            )}
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300 rounded"
                                />
                                <label
                                    htmlFor="remember-me"
                                    className="ml-2 block text-sm text-gray-700"
                                >
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <Link
                                    to="/forgot-password"
                                    className="font-medium text-rose-600 hover:text-rose-500 transition-colors"
                                >
                                    Forgot your password?
                                </Link>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full flex justify-center py-3 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-rose-700 to-pink-600 hover:from-rose-800 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-all duration-300 transform hover:scale-[1.01] ${isLoading ? 'opacity-75 cursor-not-allowed' : ''
                                    }`}
                            >
                                {isLoading ? (
                                    <span className="flex items-center">
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Signing in...
                                    </span>
                                ) : (
                                    'Sign in'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;