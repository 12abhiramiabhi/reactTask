import axios from 'axios'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import "./cardpage.css"

function CardPage() {
    const navigate=useNavigate()



const userTitleRef =useRef()
const userDiscriptionRef = useRef()

    async function submitbtn() {


        let obj ={title:userTitleRef.current.value, discription:userDiscriptionRef.current.value}
       
        let response= await axios.post("http://localhost:3000/api/task/addtask",obj)
console.log(response);

        alert("sucess")
        navigate("/viewtask")

    }



 

    return (
        <div>
            <div className="center">
                <h1 className='task' >Task Added</h1>
                <div className="form1">
                    <div className="txt_field">
                        <input type="text" ref={userTitleRef} className='title' required />
                        <span></span>
                        <label htmlFor="">Title</label>
                    </div>
                    <div className="txt_field">
                        <input type="text" ref={userDiscriptionRef} className='dis' required />
                        <span></span>
                        <label htmlFor="">Discription</label>
                    </div>
                    <input type="submit" onClick={submitbtn} value="Submit" className='sub' />
                    <p className='parasss' >“Before you reject a task as Impossible, ask yourself why God presented you with this thing to be done.”</p>
                </div>
            </div>

        </div>
    )
}
export default CardPage
