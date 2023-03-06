import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';



function Edit() {

    const location = useLocation()
    console.log(location.state);

    const [title,setTitle]=useState("")
    const [discription, setDiscription]=useState("")


    async function editBtn(){

        let obj={title, discription}
        let response=await axios.patch("localhost:3000/api/task/updatetask",obj)

        console.log(response);
    }


    
    

    return (
        <div>
            <div className="center">
                <h1>edit your task</h1>
                <div className="form1">
                    <div className="txt_field">
                        <input type="text" value={title} className='title' required />
                        <span></span>
                        <label htmlFor="">Title</label>
                    </div>
                    <div className="txt_field">
                        <input type="text" className='dis' required />
                        <span></span>
                        <label htmlFor="">Discription</label>
                    </div>
                    <input type="submit" onClick={editBtn} value="Submit" className='sub' />
                    <p className='parasss' >“Before you reject a task as Impossible, ask yourself why God presented you with this thing to be done.”</p>
                </div>
            </div>

        </div>
    )
}
export default Edit