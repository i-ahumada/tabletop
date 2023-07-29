import { BrowserRouter } from "react-router-dom"
import { Users } from "./components/Users"
import { Tools } from "./components/Tools"
import { Navbar } from "./components/Navbar"
import { Table } from "./components/Table"
import { createContext, useState } from "react"

export const ToolContext = createContext({
  tool : null,
  setTool: () => {}
});

export const App = () => {
  const [tool, setTool] = useState(false);
  const value = { tool, setTool };

  return (
    <BrowserRouter>
      <div className="absolute flex flex-col gap-5 mt-5 ml-5">
        <Navbar />
        <Users />
      </div>
      <ToolContext.Provider value={value}>
        <Tools/>
        <Table />
      </ToolContext.Provider>
    </BrowserRouter>
  )
}
