import {Link} from "react-router-dom"
import { useState } from "react"
import doctors from "../../doctors.json"
import "./index.css"

const Doctors=()=>{

    const [name,setname]=useState("")
    
    const filteredDoctors=doctors.filter((doc)=>(
        doc.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())||doc.specialization.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    ))

    const getStatusClass=(status)=>{
             if (status.toLowerCase().includes("available")) return "available";
             if (status.toLowerCase().includes("fully booked")) return "booked";
             if (status.toLowerCase().includes("on leave")) return "leave";
             return "";
    }


    return <div className="main-container">
    <div className="search-container">
    <input placeholder="Search doctors by name or specialization" type="search" value={name} onChange={(e)=>setname(e.target.value)} />
    </div>
    
    <ul className="doctors-unordered-container">
        {
            filteredDoctors.map((item)=>(
                
                <li key={item.id} className="doctors-list-item-card">
                    <Link to={`/doctors/${item.id}`} className="doctor-link-element">
                    <div className="doctor-name-basic-details-container">
                <p className="doctor-name">{`Name: ${item.name}`}</p>
              
                <p className="doctor-specialisation">{`Specialization: ${item.specialization}`}</p>
                <p className={`doctor-status ${getStatusClass(item.status)}`}>{`Status: ${item.status}`}</p>
                </div>
                  <img className="doctor-image" src={item.image} alt={item.name} />
                
                </Link>
                </li>
            ))
        }
    </ul>
    </div>
}

export default Doctors