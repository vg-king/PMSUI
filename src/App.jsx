import { Button } from "@/components/ui/button"
import Home from "./Pages/Home/Home"
import './App.css'
import Navbar from "./Pages/Navbar/Navbar"
import { Route, Routes } from "react-router-dom"
import ProjectDetail from "./Pages/ProjectDetail/ProjectDetail"


function App() {
  return (
    <>

    <Navbar/>
   
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/project/:id" element={<ProjectDetail/>}></Route>
 
    </Routes>
    </>
  )
}

export default App