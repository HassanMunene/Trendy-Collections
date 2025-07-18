import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const pillowCategories = [
    { name: "Luxury Pillows", href: "/products?subcategory=luxury" },
    { name: "Geometric Designs", href: "/products?subcategory=geometric" },
    { name: "Knot Pillows", href: "/products?subcategory=knot" },
    { name: "Floral Designs", href: "/products?subcategory=floral" },
    { name: "Solid Colors", href: "/products?subcategory=solid" }
];

export const PillowsMegaMenu = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 focus:outline-none">
                <span>Pillows</span>
                <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[400px] p-4">
                <div className="grid grid-cols-2 gap-4">
                    {pillowCategories.map((category) => (
                        <DropdownMenuItem key={category.name} asChild>
                            <Link
                                to={category.href}
                                className="text-sm text-gray-700 hover:text-primary transition-colors"
                            >
                                {category.name}
                            </Link>
                        </DropdownMenuItem>
                    ))}
                </div>

                <div className="mt-4 border-t pt-4">
                    <h4 className="font-medium text-gray-900 mb-2">More Pillow Links</h4>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                to="/products?category=pillow"
                                className="text-sm text-gray-600 hover:text-primary transition-colors"
                            >
                                View All Pillows
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/products?category=pillow&sort=newest"
                                className="text-sm text-gray-600 hover:text-primary transition-colors"
                            >
                                New Arrivals
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/products?category=pillow&sort=bestselling"
                                className="text-sm text-gray-600 hover:text-primary transition-colors"
                            >
                                Best Sellers
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/collections/pillows"
                                className="text-sm text-gray-600 hover:text-primary transition-colors"
                            >
                                Pillow Collections
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="mt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Popular Filters</h4>
                    <div className="flex flex-wrap gap-2">
                        {['Velvet', 'Linen', 'Cotton', 'Gold Accents', '18×18', '20×20'].map((filter) => (
                            <Link
                                key={filter}
                                to={`/products?category=pillow&filter=${filter.toLowerCase().replace(' ', '-')}`}
                                className="text-xs px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                            >
                                {filter}
                            </Link>
                        ))}
                    </div>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
