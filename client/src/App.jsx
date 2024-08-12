import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Profile from "./Pages/Profile"
import Register from "./Pages/Register"
import SignIn from "./pages/SignIn"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/sign-in" element={<SignIn/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

