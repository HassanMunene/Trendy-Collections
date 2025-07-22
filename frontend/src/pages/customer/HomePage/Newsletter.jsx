import { FaWhatsappSquare } from "react-icons/fa";

const Newsletter = () => {
    return (
        <section className="py-14 bg-white">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto text-center">
                    <div className="bg-[#25D366]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaWhatsappSquare className="w-8 h-8 text-[#25D366]" />
                    </div>
                    <h2 className="text-2xl font-light text-gray-900 mb-4">Join Our WhatsApp Community</h2>
                    <p className="text-gray-600 mb-6">
                        Get instant updates on new arrivals, exclusive offers and special prices directly on WhatsApp.
                    </p>
                    <p className="text-sm text-gray-500 mb-6">
                        Tap the button below to join - no email required!
                    </p>

                    {/* WhatsApp Button */}
                    <div className="mb-2">
                        <a
                            href="https://wa.me/254712403671?text=I%20want%20to%20join%20Trendy%20Collections%20community"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full bg-[#25D366] text-white py-3 px-4 text-sm font-medium uppercase tracking-wide hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2"
                        >
                            <FaWhatsappSquare className="w-5 h-5" />
                            Join Now
                        </a>
                    </div>

                    {/* Legal Text */}
                    <p className="text-xs text-gray-500 mt-8">
                        By joining, you agree to receive messages from Trendy Collections. <a href="#" className="underline hover:no-underline">Privacy Policy</a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Newsletter;