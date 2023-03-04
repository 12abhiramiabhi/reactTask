import React from 'react'
import { useNavigate } from 'react-router-dom'


function AllCards({ taskData }) {
    const navigate = useNavigate()

    function EditBtn() {
        navigate("/edit")
    }

    return (
        <div>
            <div className='contanier' >
                <h1 className='title'>{taskData.title}</h1>
                <p className='para'>{taskData.discription}

                </p>
                <button className='
                edit' onClick={EditBtn}>edit</button>
                <button className='delete'>delete</button>
            </div>
        </div>
    )
}
export default AllCards
