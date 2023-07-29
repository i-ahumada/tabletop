import { BrowserRouter } from "react-router-dom"
import { Users } from "./components/Users"
import { Tools } from "./components/Tools"
import { Navbar } from "./components/Navbar"
import { Table } from "./components/Table"

function App() {
  return (
    <BrowserRouter>
      <div className="absolute flex flex-col gap-5 mt-5 ml-5">
        <Navbar />
        <Users />
      </div>
      <Tools />
      <Table />
    </BrowserRouter>
  )
}

export default App
