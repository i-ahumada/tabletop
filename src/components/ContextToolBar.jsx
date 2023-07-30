import { useContext } from "react"
import { ToolContext } from "../App"

export const ContextToolBar = () => {
    const {tool, setTool} = useContext(ToolContext);
    console.log(tool)
    return (
        <div className={`${['write'].includes(tool.name)? "": "hidden"} mt-5 absolute left-[50%] translate-x-[-50%]`}>
            <div className="px-5 py-2 bg-[#272727]/[0.6] rounded-[10px] shadow-center">
                <div className={`${tool.name === 'write'? "": "hidden"} flex flex-row items-center justify-between gap-5`}>
                    <div className="relative rounded-full w-[20px] h-[20px] p-3 overflow-hidden">
                        <input 
                            type="color" 
                            className="absolute rounded-full top-[-10px] left-[-10px] w-[60px] h-[60px] cursor-pointer"
                            onChange={e => setTool({name: "write", color: e.target.value})}
                        />
                    </div>
                    <i className="icon-link fa-regular fa-square"></i>
                    <i className="icon-link fa-regular fa-circle"></i>
                    <i className="icon-link fa-solid fa-pencil"></i>
                </div>
            </div>
        </div>
    )
}