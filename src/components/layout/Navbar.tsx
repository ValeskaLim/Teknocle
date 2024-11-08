import { useLocation } from "react-router-dom";
import Logo from "../../assets/logo.png"

const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <nav>
            <div className="shadow-lg">
                <div className="p-7 flex w-full items-center justify-between">
                    <img src={Logo} width={50} height={50} className="justify-self-start"/>
                    <div className="flex gap-11">
                        <a href="/" className={`no-underline ${currentPath === '/' ?  "text-blue-600 font-bold" : "text-black"}`}>
                            <h2 className="text-2xl">Home</h2>
                        </a>
                        <a href="/about" className={`no-underline ${currentPath === '/about' ?  "text-blue-600 font-bold" : "text-black"}`}>
                            <h2 className="text-2xl">About Us</h2>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )

}

export default Navbar;