import { Link } from "react-router-dom"

export const NavbarRoom = () => {
    return(
        <nav className="w-[200px] px-5 py-2 bg-primary rounded-[10px] box shadow-center">
            <div className="w-full flex justify-between text-dark items-center">
                <Link to="/"><i className="p-2 text-[25px] flex items-center hover:text-ternary cursor-pointer fa-solid fa-house"></i></Link>
                <Link><i className="p-2 text-[25px] flex items-center hover:text-ternary cursor-pointer fa-solid fa-dice-d20"></i></Link>
                <Link><i className="p-2 text-[25px] flex items-center hover:text-ternary cursor-pointer fa-solid fa-user"></i></Link>
            </div>
        </nav>
    )
}