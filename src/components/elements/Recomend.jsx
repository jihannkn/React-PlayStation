/* eslint-disable react/prop-types */
const Recomend = ({ children }) => {
    return (
        <div className="card w-full lg:w-[30%] flex items-center justify-between border border-[3px] p-[15px] rounded-[20px] shrink-0">
            {children}
        </div>
    )
}

const Images = ({ images }) => {
    return (
        <div className="mbar w-[40%]">
            <img src={images} alt="" className="h-[80px]" />
        </div>
    )
}

const Description = ({ titles, packages, prices, pcss }) => {
    return (
        <div className="hooh w-[60%] flex justify-between">
            <h1 className="font-extrabold ">{titles} <p className=" font-normal text-[gray]">{packages}</p></h1>
            <h1 className="flex font-extrabold text-rose-800">{prices} <p className="font-normal text-[gray]">{pcss}</p></h1>
        </div>
    )
}

Recomend.Images = Images
Recomend.Description = Description

export default Recomend