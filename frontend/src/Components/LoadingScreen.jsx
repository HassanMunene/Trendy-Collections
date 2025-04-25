// components/LoadingScreen.jsx
import React from 'react';

function LoadingScreen() {
	return (
		<div className="flex items-center justify-center h-screen bg-gradient-to-b from-rose-100 to-white">
			<div className="text-center">
				<div className="relative w-20 h-20 mx-auto mb-6">
					<div className="absolute inset-0 rounded-full border-4 border-rose-200 animate-spin"></div>
					<div className="absolute inset-1 rounded-full border-4 border-transparent border-t-rose-600 border-r-pink-600 animate-spin animation-delay-200"></div>
				</div>
				<h3 className="text-xl font-medium text-gray-800 flex justify-center">
					Loading
					<span className="flex space-x-1 ml-1">
						<span className="animate-bounce">.</span>
						<span className="animate-bounce animation-delay-100">.</span>
						<span className="animate-bounce animation-delay-200">.</span>
					</span>
				</h3>
				<p className="mt-4 text-sm text-gray-500">
					<span className="font-bold bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">
						Trendy Collections
					</span>
				</p>
			</div>
		</div>
	);
}

export default LoadingScreen;