

import "./index.css"
import React, { useState } from "react";
import Modal from "react-modal"
Modal.setAppElement('#root');


const AppointmentModal=(props)=>{
    const [confirmation,setConfirmation]=useState("")
    const [formData,setFormdata]=useState({name:"",email:"",dateTime:""})
    const {isOpen,onRequestClose,appointmentModalClose}=props
   
const handleChange=(e)=>{
    setFormdata({...formData,[e.target.name]:e.target.value})
}

const appointmodalconfi=()=>{
    appointmentModalClose(false)
    setConfirmation("")
}

const handleSubmit=(e)=>{
    e.preventDefault()
    if(!formData.name||!formData.email||!formData.dateTime) {
        alert ("Please Fill All Fields")
        return ""
    }
const dateFormatted=new Date(formData.dateTime).toLocaleString()    
setConfirmation(`Appointment booking with Dr.${formData.name} on ${dateFormatted}` )
setFormdata({name:"",email:"",dateTime:""})
setTimeout(()=>appointmodalconfi(),5000)
}

    return <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
     contentLabel="Book Appointment"
     className="modal"
     overlayClassName="overlay"
    > <h2 className="book-appointment-heading">Book Appointment</h2>
    {confirmation?<p className="success">{confirmation}</p>:<form onSubmit={handleSubmit} className="appointment-booking-form">
        <input type="text" name="name" placeholder="Patient name" value={formData.name} onChange={handleChange}/>
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange}/>
    <input type="datetime-local" name="dateTime" placeholder="Enter date" value={formData.dateTime} onChange={handleChange}/>
       <button type="submit">Confirm Booking</button>
        </form>}
    </Modal>
}

export default AppointmentModal