import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Room } from "./scenes/room"
import { Homepage } from "./scenes/homepage"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/room" element={<Room />}/>
      </Routes>
    </BrowserRouter>
  )
}
