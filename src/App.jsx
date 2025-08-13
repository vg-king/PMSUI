import { Button } from "@/components/ui/button"
import Home from "./Pages/Home/Home"
import './App.css'
import Navbar from "./Pages/Navbar/Navbar"
import { Route, Routes } from "react-router-dom"
import ProjectDetail from "./Pages/ProjectDetail/ProjectDetail"
import IssueDetatils from "./Pages/Issues/IssueDetatils"
import Subscription from "./Pages/Subscription/Subscription"
import Auth from "./Pages/Auth/Auth"


function App() {
  return (
    <>
{
  false?
    <div>

    <Navbar/>
   
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/project/:id" element={<ProjectDetail/>}></Route>
      <Route path="/project/:projectId/issue/:issueId" element={<IssueDetatils/>}></Route>
      <Route path="/upgrade_plan" element={<Subscription/>}></Route>
      
    </Routes>

    </div>:<Auth/>
}
    </>
  )
}

export default App