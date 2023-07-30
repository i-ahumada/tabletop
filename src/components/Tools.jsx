import { useContext, useState } from "react"
import { ToolContext } from "../App"

export const Tools = () => {
    const [toggle, setToggle] = useState(false);
    const { tool, setTool } = useContext(ToolContext);

    return(
        <div className="absolute right-0 px-5 py-2 bg-[#272727]/[0.6] rounded-[5px] mt-5 mr-5 shadow-center">
            <div 
                className="p-2 px-3 my-3 flex flex-col justify-between text-dark items-center shadow-center rounded-full cursor-pointer"
                onClick={() => {setToggle(!toggle)}}
            > 
                <i className={`${toggle? "rotate-[-180deg]": "rotate-0"} text-[20px] fa-solid fa-arrow-down transition-all duration-[0.7s]`}></i> 
            </div>
            <div className={`relative ${toggle? "h-[200px]": "h-0"} text-dark transition-all duration-[0.7s] overflow-hidden`}>
                <div className="absolute flex flex-col gap-2 justify-between items-center">
                    <i onClick={() => {setTool({name:"move"})}} className={`${tool.name === "move"? "icon-link-active" : "icon-link"} fa-solid fa-hand`}></i>
                    <i onClick={() => {setTool({name:"write"})}} className={`${tool.name === "write"? "icon-link-active" : "icon-link"} fa-solid fa-pen`}></i>
                    <i onClick={() => {setTool({name:"ruler"})}} className={`${tool.name === "ruler"? "icon-link-active" : "icon-link"} fa-solid fa-ruler`}></i>
                    <i onClick={() => {setTool({name:"clear"})}} className={`${tool.name === "clear"? "icon-link-active" : "icon-link"} fa-solid fa-trash`}></i>
                </div>
            </div>
        </div>
    )
}