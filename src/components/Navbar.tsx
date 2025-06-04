
export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-slate-100 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800" >
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <a href="#" className="text-xl font-bold text-green-400 ">{"<DevPortfolio />"}</a>
                    <div className="hidden md:flex space-x-6">
                        <a href="#about" className="hover:text-green-400 transition-colors dark:text-white text-black">
                            About
                        </a>
                        <a href="#projects" className="hover:text-green-400 transition-colors dark:text-white text-black ">
                            Projects
                        </a>
                        <a href="#contact" className="hover:text-green-400 transition-colors dark:text-white text-black">
                            Contact
                        </a>
                    </div>

                </div>
            </div>
        </nav>
    )
}
