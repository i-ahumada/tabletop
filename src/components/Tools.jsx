import { useContext, useState } from "react"
import { ToolContext } from "../scenes/room"

export const Tools = () => {
    const [toggle, setToggle] = useState(false);
    const { tool, setTool } = useContext(ToolContext);

    const handleSetTool = (e) => {
        const toolName = e.target.getAttribute("value") || e.currentTarget.getAttribute("value");
        return setTool(prevstate => ({...prevstate, name: toolName}));
    }
    return(
        <div className="absolute right-0 px-5 py-2 bg-primary rounded-[5px] mt-5 mr-5 shadow-center">
            <div 
                className="p-2 px-3 my-3 flex flex-col justify-between text-dark items-center shadow-center rounded-full cursor-pointer"
                onClick={() => {setToggle(!toggle)}}
            > 
                <i className={`${toggle? "rotate-[-180deg]": "rotate-0"} text-[20px] fa-solid fa-arrow-down transition-all duration-[0.7s]`}></i> 
            </div>
            <div className={`relative ${toggle? "h-[200px]": "h-0"} text-dark transition-all duration-[0.7s] overflow-hidden`}>
                <div className="absolute flex flex-col gap-2 justify-between items-center">
                    <i onClick={(e) => {handleSetTool(e)}} value="move" className={`${tool.name === "move"? "text-ternary" : ""} p-2 text-[25px] hover:text-ternary cursor-pointer fa-solid fa-hand`}></i>
                    <i onClick={(e) => {handleSetTool(e)}} value="write" className={`${tool.name === "write"? "text-ternary" : ""} p-2 text-[25px] hover:text-ternary cursor-pointer fa-solid fa-pen`}></i>
                    <i onClick={(e) => {handleSetTool(e)}} value="ruler" className={`${tool.name === "ruler"? "text-ternary" : ""} p-2 text-[25px] hover:text-ternary cursor-pointer fa-solid fa-ruler`}></i>
                    <i onClick={(e) => {handleSetTool(e)}} value="clear" className={`${tool.name === "clear"? "text-ternary" : ""} p-2 text-[25px] hover:text-ternary cursor-pointer fa-solid fa-trash`}></i>
                </div>
            </div>
        </div>
    )
}