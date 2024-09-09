
const Header = () => {
  return (
    <header className="py-4 bg-gradient-to-b from-blue-400 to-blue-600 hover:bg-gradient-to-t shadow-md">
        <div className="container mx-auto px-4 max-w-[1200px]">
            <div className="flex justify-between items-center">
                <a href="/" className="flex items-center">
                    <h1 className="text-2xl font-bold text-white">Meals</h1>
                    <img className="w-12 h-12 rounded-full hover:animate-spin" src="https://img.icons8.com/?size=48&id=63653&format=png" alt="logo"/>
                </a>

                <nav>
                    <ul className="flex space-x-6 italic text-white">
                        <li>
                            <a href='#' className="text-lg group relative w-max">
                                <span>Home</span>
                                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-fuchsia-500 group-hover:w-3/6"></span>
                                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-fuchsia-500 group-hover:w-3/6"></span>
                            </a>
                        </li>
                        <li>
                            <a href='#' className="text-lg group relative w-max">
                                <span>About</span>
                                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-fuchsia-500 group-hover:w-3/6"></span>
                                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-fuchsia-500 group-hover:w-3/6"></span>
                            </a>
                        </li>
                        <li>
                            <a href='#' className="text-lg group relative w-max">
                                <span>Contact</span>
                                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-fuchsia-500 group-hover:w-3/6"></span>
                                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-fuchsia-500 group-hover:w-3/6"></span>
                            </a>
                        </li>
                        <li>
                            <a href='#' className="text-lg group relative w-max">
                                <span>Blog</span>
                                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-fuchsia-500 group-hover:w-3/6"></span>
                                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-fuchsia-500 group-hover:w-3/6"></span>
                            </a>
                        </li>
                        <li>
                            <a href='#' className="text-lg group relative w-max">
                                <span>Shop</span>
                                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-fuchsia-500 group-hover:w-3/6"></span>
                                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-fuchsia-500 group-hover:w-3/6"></span>
                            </a>
                        </li>
                        <li>
                            <a href='#' className="text-lg group relative w-max">
                                <span>Pages</span>
                                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-fuchsia-500 group-hover:w-3/6"></span>
                                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-fuchsia-500 group-hover:w-3/6"></span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* <FormSelect/> */}
        </div>
        {/* <a className="tex-sm font-medium text-zinc-600 bg-gradient-to-r from-red-700 to-pink-700 transition-all bg-clip-text hover:text-transparent" href="#">Home</a> */}
    </header>
  )
}

export default Header