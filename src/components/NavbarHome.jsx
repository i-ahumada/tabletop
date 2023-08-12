import { Link } from "react-router-dom"

export const NavbarHome = () => {
    return(
        <nav className="w-screen py-5 px-10 bg-primary text-dark flex flex-row justify-between">
            <Link><img src="#" alt="" /></Link>
            <div>
                <Link to="/room" className="p-2 text-[25px] flex items-center hover:text-ternary cursor-pointer"> Room </Link>
            </div>
        </nav>
    )
}