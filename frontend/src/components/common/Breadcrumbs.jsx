import { ChevronLeft, Home } from 'lucide-react'

export default function Breadcrumbs() {
    return (
        <nav className="flex items-center gap-2 text-sm text-gray-600">
            <button className="flex items-center gap-1 hover:text-gray-900 transition-colors">
                <ChevronLeft className="h-4 w-4" />
                Back
            </button>

            <div className="flex items-center gap-2 ml-4">
                <Home className="h-4 w-4" />
                <span className="hover:text-gray-900 cursor-pointer">Home</span>
            </div>
        </nav>
    )
}
