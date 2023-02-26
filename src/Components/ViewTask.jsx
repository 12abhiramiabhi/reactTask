import React from 'react'
import { useNavigate } from 'react-router-dom'
import AllCards from './AllCards'
import "./view.css"

function ViewTask() {
    const navigate = useNavigate()

    function BtnCard() {
        navigate("/CardPage")
    }

    return (
        <div className='main-container' >


            <AllCards />
            <AllCards />

            <div className='btn'>
                <button onClick={BtnCard}>add your task</button>
            </div>

        </div>
    )
}

export default ViewTask