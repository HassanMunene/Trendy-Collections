const Newsletter = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto text-center">
                    <h2 className="text-2xl font-light text-gray-900 mb-4">Stay in the loop</h2>
                    <p className="text-gray-600 mb-6">
                        Sign up to be the first to hear about new arrivals, offers and events.
                    </p>
                    <p className="text-sm text-gray-500 mb-6">
                        Enter your email address below to opt in to email marketing.
                    </p>

                    {/* Email Form */}
                    <form className="space-y-4">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-3 border border-gray-300 focus:border-[#9a6546] focus:outline-none text-sm"
                        />
                        <button
                            type="submit"
                            className="w-full bg-black text-white py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
                        >
                            Subscribe
                        </button>
                    </form>

                    {/* Legal Text */}
                    <p className="text-xs text-gray-500 mt-4">
                        See our full{' '}
                        <a href="#" className="underline hover:no-underline">Terms and Conditions</a>,{' '}
                        <a href="#" className="underline hover:no-underline">Privacy & Cookie Policy</a>{' '}
                        to find out more.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Newsletter