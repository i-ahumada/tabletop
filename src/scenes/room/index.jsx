import { Users } from "../../components/Users"
import { Tools } from "../../components/Tools"
import { NavbarRoom } from "../../components/NavbarRoom"
import { Table } from "../../components/Table"
import { ContextToolBar } from "../../components/ContextToolBar"
import { createContext, useState } from "react"

export const ToolContext = createContext({
  tool : {
    name: "",
    type: "",
    color: "#000"
  },
  setTool: () => {}
});


export const Room = () => {
    const [tool, setTool] = useState({
        name: "",
        type: "",
        color: "#000"
      });
    const value = { tool, setTool };

    return (
        <div className="overflow-hidden h-screen w-screen">
            <div className="absolute flex flex-col gap-5 mt-5 ml-5">
                <NavbarRoom />
                <Users />
            </div>
            <ToolContext.Provider value={value}>
                <ContextToolBar />
                <Tools/>
                <Table />
            </ToolContext.Provider>
        </div>
    )
}
