import React from 'react';

function LoadingScreen() {
	return (
		<>
			{/* Inline critical CSS to prevent FOUC */}
			<style dangerouslySetInnerHTML={{
				__html: `
          body { background-color: #fff5f5 !important; }
          #loading-screen {
            position: fixed;
            inset: 0;
            z-index: 9999;
            background-color: #fff5f5;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `
			}} />
			<div id="loading-screen" className="fixed inset-0 z-50 flex items-center justify-center bg-[#fff5f5]">
				<div className="relative w-full h-full overflow-hidden">
					<div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0dGVybiBpZD0icGF0dGVybiIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZGQxYzlmIiBvcGFjaXR5PSIwLjIiLz48L3BhdHRlcm4+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIi8+PC9zdmc+')]"></div>
					<div className="relative z-10 flex flex-col items-center justify-center h-full">
						<div className="relative w-24 h-24 mb-8">
							<div className="absolute inset-0 border-4 border-pink-100 rounded-full"></div>
							<div className="absolute inset-0 border-4 border-transparent border-t-pink-400 border-r-pink-500 rounded-full animate-spin-slow"></div>
							<div className="absolute inset-0 flex items-center justify-center">
								<svg className="w-8 h-8 text-pink-400" viewBox="0 0 24 24" fill="none">
									<path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
						</div>
						<div className="text-center">
							<p className="text-sm font-medium tracking-widest">
								<span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
									TRENDY COLLECTIONS
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default LoadingScreen;