import  {useParams,useNavigate} from "react-router-dom"
import AppointmentModal from "../AppointmentModal";
import doctorsDetails from "../../doctorsDetails.json"
import { IoMdArrowRoundBack } from "react-icons/io";
import "./index.css"
import { useState } from "react";

const DoctorDetails=()=>{

    const [isModalOpen,setIsModalOpen]=useState(false)

    const {id}=useParams()
    const navigate=useNavigate()
    const doctor=doctorsDetails.find((item)=>id===(item.id).toString())
    console.log(doctor)
const onLeave=doctor.status.toLowerCase().includes("leave")
    const getdoctordetaiStatus=(status)=>{
        if (status.toLowerCase().includes("available")) return "doctor-detail-available"
    if(status.toLowerCase().includes("fully booked")) return "doctor-detail-booked"
    if(status.toLowerCase().includes("leave")) return "doctor-detail-leave"    
    return ""
    }


    const appointmentModalClose=(value)=>{
        setIsModalOpen(value)
    }

    return <div className="doctor-details-main-bg-container">
        <button className="back-button" onClick={()=>navigate(-1)}><IoMdArrowRoundBack /> Back</button>
    
    <ul className="doctor-details-container">
        <li className="doctor-details-list-item-card">
            <img className="doctor-details-image" src={doctor.image} alt={doctor.name}/>
           <div className="doctor-all-details-container">
            <h1 className="doctor-details-name">{doctor.name}</h1>
            <h2 className="doctor-details-specialization">{doctor.specialization}</h2>
        <p className={`doctor-detail-status ${getdoctordetaiStatus(doctor.status)}`}>{doctor.status}</p>
        <p className="doctor-details-bio">{doctor.bio}</p>
        
        {doctor.availability.map((item,index)=>{
            const isNotice=item.toLowerCase().includes("returning")||item.toLowerCase().includes("unavailable")


           return (<p key={index} className={isNotice?"doctor-time-unavailable":"doctor-time-available"}>{item}</p>
            )})}
        
        <button style={{backgroundColor:onLeave&&'#ccc',opacity:onLeave?1:1,cursor:onLeave?"not-allowed":"pointer"}} disabled={onLeave} onClick={()=>setIsModalOpen(true)} className="book-appointment-button">Book Appointment</button> 
        <AppointmentModal  appointmentModalClose={appointmentModalClose} isOpen={isModalOpen}   onRequestClose={() => setIsModalOpen(false)}/>
        </div>   
        </li>
    </ul>
    
    </div>
}

export default DoctorDetails