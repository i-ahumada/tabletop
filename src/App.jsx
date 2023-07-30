import { BrowserRouter } from "react-router-dom"
import { Users } from "./components/Users"
import { Tools } from "./components/Tools"
import { Navbar } from "./components/Navbar"
import { Table } from "./components/Table"
import { ContextToolBar } from "./components/ContextToolBar"
import { createContext, useState } from "react"

export const ToolContext = createContext({
  tool : {
    name: "",
    type: "",
    color: "#000"
  },
  setTool: () => {}
});

export const App = () => {
  const [tool, setTool] = useState({
    name: "",
    type: "",
    color: "#000"
  });
  const value = { tool, setTool };
  console.log(tool.name)

  return (
    <BrowserRouter>
      <div className="absolute flex flex-col gap-5 mt-5 ml-5">
        <Navbar />
        <Users />
      </div>
      <ToolContext.Provider value={value}>
        <ContextToolBar />
        <Tools/>
        <Table />
      </ToolContext.Provider>
    </BrowserRouter>
  )
}
