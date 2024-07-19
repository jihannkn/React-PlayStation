import DashboardMainLayout from "../components/layout/dashboard/DashboardMainLayout"
import PopularProduct from "../components/elements/PopularProduct"
import { FaShoppingCart, FaStar } from "react-icons/fa"
import { FaCheck, FaXmark } from "react-icons/fa6"
import image1 from "../assets/image/image1.png"
import image2 from "../assets/image/image2.png"
import Recomend from "../components/elements/Recomend"
import image3 from "../assets/image/image3.png"

export default function App() {
    return (
        <DashboardMainLayout>

            <div className="atas w-full flex justify-between items-center">
                <h1 className="text-[1.5rem] font-extrabold">Popular Products</h1>
                <p className="text-[1rem] font-semibold text-rose-800">View all</p>
            </div>
            <div className="ps w-full py-[30px] flex overflow-auto gap-[20px] ">
                <PopularProduct>
                    <PopularProduct.Image image={image1} />
                    <PopularProduct.Desc title="Solar Red Joystick" descrip="Accessories" price="$233" pcs="/Pcs" icon={<FaShoppingCart />} />
                    <PopularProduct.Action icon1={<FaXmark />} icon2={<FaStar />} icon3={<FaCheck />} />
                </PopularProduct>
                <PopularProduct>
                    <PopularProduct.Image image={image2} />
                    <PopularProduct.Desc title="Solar Red Joystick" descrip="Accessories" price="$233" pcs="/Pcs" icon={<FaShoppingCart />} />
                    <PopularProduct.Action icon1={<FaXmark />} icon2={<FaStar />} icon3={<FaCheck />} />
                </PopularProduct>
                <PopularProduct>
                    <PopularProduct.Image image={image1} />
                    <PopularProduct.Desc title="Solar Red Joystick" descrip="Accessories" price="$233" pcs="/Pcs" icon={<FaShoppingCart />} />
                    <PopularProduct.Action icon1={<FaXmark />} icon2={<FaStar />} icon3={<FaCheck />} />
                </PopularProduct>
                <PopularProduct>
                    <PopularProduct.Image image={image2} />
                    <PopularProduct.Desc title="Solar Red Joystick" descrip="Accessories" price="$233" pcs="/Pcs" icon={<FaShoppingCart />} />
                    <PopularProduct.Action icon1={<FaXmark />} icon2={<FaStar />} icon3={<FaCheck />} />
                </PopularProduct>
                <PopularProduct>
                    <PopularProduct.Image image={image1} />
                    <PopularProduct.Desc title="Solar Red Joystick" descrip="Accessories" price="$233" pcs="/pcs" icon={<FaShoppingCart />} />
                    <PopularProduct.Action icon1={<FaXmark />} icon2={<FaStar />} icon3={<FaCheck />} />
                </PopularProduct>
                <PopularProduct>
                    <PopularProduct.Image image={image2} />
                    <PopularProduct.Desc title="Solar Red Joystick" descrip="Accessories" price="$233" pcs="/pcs" icon={<FaShoppingCart />} />
                    <PopularProduct.Action icon1={<FaXmark />} icon2={<FaStar />} icon3={<FaCheck />} />
                </PopularProduct>
            </div>
            <div className="kit w-full">
                <div className="atas w-full flex justify-between items-center">
                    <h1 className="text-[1.5rem] font-extrabold">Recomended</h1>
                    <p className="text-[1rem] font-semibold text-rose-800">View all</p>
                </div>
                <div className="kus flex py-[30px] flex overflow-auto gap-[20px] lg:justify-between">
                    <Recomend>
                        <Recomend.Images images={image3} />
                        <Recomend.Description titles="PS5 solar red" packages="Packages" prices="$788" pcss="/Pcs" />
                    </Recomend>
                    <Recomend>
                        <Recomend.Images images={image3} />
                        <Recomend.Description titles="PS5 solar red" packages="Packages" prices="$788" pcss="/Pcs" />
                    </Recomend>
                    <Recomend>
                        <Recomend.Images images={image3} />
                        <Recomend.Description titles="PS5 solar red" packages="Packages" prices="$788" pcss="/Pcs" />
                    </Recomend>
                </div>
            </div>
            <div className="bawahl lg:hidden w-[90%] fixed bottom-0 bg-[white] p-[10px] rounded-t-[20px]">
                <div className="kanan w-full flex justify-between items-center">
                    <button className="px-[10px] py-[7px] flex gap-[5px] rounded-[20px] bg-rose-800 text-[white]"><i className="fa-solid fa-compass text-[1.5rem] font-extrabold bg-rose-800 rounded-full text-[white]"></i> MEET ME </button>
                    <i className="fa-solid fa-gamepad text-[2rem] text-gray-300"></i>
                    <i className="fa-solid fa-comment text-[2rem] text-gray-300"></i>
                    <i className="fa-solid fa-user text-[2rem] text-gray-300"></i>
                </div>
            </div>
        </DashboardMainLayout>
    )
}