import NavLink from "../elements/NavLink"
import { FaBell, FaUser } from "react-icons/fa6"
import { IoSearch } from "react-icons/io5"
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
    return (
        <div className="nav w-full lg:flex lg:items-center gap-[10px]">
            <div className="kiri lg:w-[30%] flex items-center justify-between">
                <h1 className="font-extrabold text-[1.5rem] lg:text-[1.5rem]">Welcome back !<p className="text-[1rem] font-semibold">Hi, Jihan</p></h1>
                <div className="ikon flex gap-[20px]">
                    <i className="h-[50px] aspect-square flex justify-center items-center text-[1.5rem] border rounded-full border-[2px] text-black">{<FaBell />}</i>
                    <i className="fa-solid fa-user h-[50px] aspect-square flex justify-center items-center text-[1.5rem] border rounded-full border-[2px] text-[gray]">{<FaUser />}</i>
                </div>
            </div>
            <div className="tengah lg:w-[40%] flex gap-[10px] items-center mt-[10px] lg:mt-[0]">
                <div className="ser w-[90%] bg-zinc-200 px-[10px] rounded-[10px] p-[5px] flex items-center">
                    <input type="text" placeholder="Brands, Products, ..." className="bg-transparent py-[10px] outline-none w-full" />
                    <i className="fa-solid fa-magnifying-glass text-[1.2rem] text-[gray]">{<IoSearch />}</i>
                </div>
                <i className="fa-solid fa-bars w-[20%] lg:w-[10%] h-[50px] aspect-square flex justify-center items-center text-[1.5rem bg-rose-800 text-[white] rounded-[10px]">{<GiHamburgerMenu />}</i>
            </div>
            <div className="kanan w-[30%] lg:flex hidden">
                <ul className="w-full flex items-center justify-between">
                    <li className="border px-[10px] py-[10px] font-extrabold rounded-[10px] border-[3px] hover:bg-rose-800 hover:[white] hover:border-[white]"><NavLink href="#">Brands</NavLink></li>
                    <li className="border px-[10px] py-[10px] font-extrabold rounded-[10px] border-[3px] hover:bg-rose-800 hover:[white] hover:border-[white]"><NavLink href="#">Products</NavLink></li>
                    <li className="border px-[10px] py-[10px] font-extrabold rounded-[10px] border-[3px] hover:bg-rose-800 hover:[white] hover:border-[white]"><NavLink href="#">About Us</NavLink></li>
                    <li className="border px-[10px] py-[10px] font-extrabold rounded-[10px] border-[3px] hover:bg-rose-800 hover:[white] hover:border-[white]"><NavLink href="#">More</NavLink></li>
                </ul>
            </div>
        </div>
    )
}