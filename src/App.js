import {BrowserRouter,Routes,Route} from "react-router-dom"
import Doctors from "./components/Doctors"
import DoctorDetails from "./components/DoctorDetails"

import "./App.css"

const App=()=>{
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Doctors/>} />
    <Route path="/doctors/:id" element={<DoctorDetails/>}/>
  </Routes>
  </BrowserRouter>
}

export default App