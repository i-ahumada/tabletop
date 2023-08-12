import { useContext } from "react"
import { ToolContext } from "../scenes/room"

export const ContextToolBar = () => {
    const {tool, setTool} = useContext(ToolContext);

    /**
     * 
     * @param {React.MouseEvent<HTMLElement, MouseEvent>} e 
     * @returns 
     */
    const handleSetToolType = (e) => {
        const toolType = e.target.getAttribute("value") || e.currentTarget.getAttribute("value");
        return setTool(prevstate => ({...prevstate, type: toolType}));
    }

    return (
        <div className={`${['write'].includes(tool.name)? "": "hidden"} mt-5 absolute left-[50%] translate-x-[-50%]`}>
            <div className="px-5 py-2 bg-primary rounded-[10px] shadow-center text-dark">
                <div className={`${tool.name === 'write'? "": "hidden"} flex flex-row items-center justify-between gap-5`}>
                    <div className="relative rounded-full w-[20px] h-[20px] p-3 overflow-hidden">
                        <input 
                            type="color" 
                            className="absolute rounded-full top-[-10px] left-[-10px] w-[60px] h-[60px] cursor-pointer"
                            onChange={e => setTool({name: "write", color: e.target.value})}
                        />
                    </div>
                    <i onClick={(e) => handleSetToolType(e)} value="square" className={`${tool.type === "square"? "text-ternary" : ""} p-2 text-[25px] flex hover:text-ternary cursor-pointer fa-regular fa-square`}></i>
                    <i onClick={(e) => handleSetToolType(e)} value="circle" className={`${tool.type === "circle"? "text-ternary" : ""} p-2 text-[25px] flex hover:text-ternary cursor-pointer fa-regular fa-circle`}></i>
                    <i onClick={(e) => handleSetToolType(e)} value="pencil" className={`${tool.type === "pencil"? "text-ternary" : ""} p-2 text-[25px] flex hover:text-ternary cursor-pointer fa-solid fa-pencil`}></i>
                </div>
            </div>
        </div>
    )
}