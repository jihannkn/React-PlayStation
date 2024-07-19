/* eslint-disable react/prop-types */
const PopularProduct = ({ children }) => {
    return (
        <div className="card border px-[15px] py-[25px] w-[70%] lg:w-[20%] gap-[15px] relative shrink-0 rounded-[20px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            {children}
        </div>
    )
}

const Image = ({ image }) => {
    return (
        <div className="mbar w-full ">
            <img src={image} alt="" className="w-full" />
        </div>
    )
}

const Desc = ({ title, descrip, price, pcs, icon }) => {
    return (
        <div className="inpo w-full flex flex-col items-center gap-[10px]">
            <h1 className="font-extrabold">{title}</h1>
            <div className="harga w-full flex items-center justify-between">
                <div className="hooh">
                    <p className="font-semibold text-[gray]">{descrip}</p>
                    <h3 className="flex font-extrabold text-rose-800">{price} <p className="font-normal text-[gray]">{pcs}</p></h3>
                </div>
                <button className="bg-gray-500 h-[40px] aspect-square rounded-[10px] "><i className="text-[1rem] text-white flex items-center justify-center">{icon}</i></button>
            </div>
        </div>
    )
}

const Action = ({ icon1, icon2, icon3 }) => {
    return (
        <div className="ikon w-full flex items-center justify-center gap-[20px] absolute bottom-[-25px] left-[0]">
            <i className="fa-solid fa-xmark h-[30px] border aspect-square flex items-center justify-center rounded-full border-[3px] text-[gray] bg-[white]">{icon1}</i>
            <i className="fa-solid fa-star h-[50px] aspect-square flex justify-center items-center text-rose-800 text-[1.5rem] border border-[3px] rounded-full bg-[white]">{icon2}</i>
            <i className="fa-solid fa-check h-[30px] border aspect-square flex items-center justify-center rounded-full border-[3px] text-[gray] bg-[white]">{icon3}</i>
        </div>
    )
}

PopularProduct.Image = Image
PopularProduct.Desc = Desc
PopularProduct.Action = Action

export default PopularProduct