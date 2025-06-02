
export default function Navbar() {
    return (
        < nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800" >
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <a href="#" className="text-xl font-bold text-green-400">{"<DevPortfolio />"}</a>
                    <div className="hidden md:flex space-x-6">
                        <a href="#about" className="hover:text-green-400 transition-colors">
                            About
                        </a>
                        <a href="#skills" className="hover:text-green-400 transition-colors">
                            Skills
                        </a>
                        <a href="#projects" className="hover:text-green-400 transition-colors">
                            Projects
                        </a>
                        <a href="#contact" className="hover:text-green-400 transition-colors">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav >)
}
