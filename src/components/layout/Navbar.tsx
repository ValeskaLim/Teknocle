import { useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <nav>
            <div className="shadow-lg">
                <div className="p-7 gap-4 flex w-full">
                    <a href="/" className={`no-underline ${currentPath === '/' ?  "text-blue-600 font-bold" : "text-black"}`}>
                        <h2 className="text-2xl">Home</h2>
                    </a>
                    <a href="/about" className={`no-underline ${currentPath === '/about' ?  "text-blue-600 font-bold" : "text-black"}`}>
                        <h2 className="text-2xl">About Us</h2>
                    </a>
                </div>
            </div>
        </nav>
    )

}

export default Navbar;