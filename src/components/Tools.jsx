import { useState } from "react"


export const Tools = () => {
    const [toggle, setToggle] = useState(false);

    return(
        <div className="absolute right-0 px-5 py-2 bg-[#272727]/[0.6] rounded-[5px] mt-5 mr-5 shadow-center">
            <div 
                className="p-2 px-3 my-3 flex flex-col justify-between text-dark items-center shadow-center rounded-full cursor-pointer"
                onClick={() => {setToggle(!toggle)}}
            > 
                <i className={`${toggle? "rotate-[-180deg]": "rotate-0"} fa-solid fa-arrow-down transition-all duration-[0.7s]`}></i> 
            </div>
            <div className={`relative ${toggle? "h-[120px]": "h-0"} flex-col justify-between text-dark items-center transition-all duration-[0.7s] overflow-hidden`}>
                <div className="absolute">
                    <i className="icon-link fa-solid fa-hand"></i>
                    <i className="icon-link fa-solid fa-pen"></i>
                    <i className="icon-link fa-solid fa-ruler"></i>
                </div>
            </div>
        </div>
    )
}