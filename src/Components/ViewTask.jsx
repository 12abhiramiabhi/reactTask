import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AllCards from './AllCards'
import "./view.css"

function ViewTask() {

    const [alltask, setAllTask] = useState("")

    const clickButton = async () => {
        let response = await axios.get("http://localhost:3000/api/task/alltask")
        console.log(response);
        if (response.data.alltask) {
            setAllTask(response.data.alltask)
        }
    }


    const navigate = useNavigate()

    function BtnCard() {
        navigate("/CardPage")
    }

    useEffect(() => {
        clickButton()
    }, [])

    return (
        <div className='main-container' >

            {
                alltask && alltask.map((a) => {
                    return <AllCards taskData={a} />
                })
            }



            <div>
                <button className='btn' onClick={BtnCard}>Add Your Task</button>
            </div>

        </div>
    )
}

export default ViewTask