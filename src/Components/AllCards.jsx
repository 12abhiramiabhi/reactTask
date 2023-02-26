import React from 'react'
import { useNavigate } from 'react-router-dom'


function AllCards() {
    const navigate = useNavigate()

    function EditBtn() {
        navigate("/edit")
    }

    return (
        <div>
            <div className='contanier' >
                <h1 className='title'>Title</h1>
                <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, officiis voluptatibus. Atque, officiis! At eos, magni minus velit rerum, vel repudiandae eum praesentium exercitationem, ex nobis cum pariatur odit sit.

                </p>
                <button className='
                edit' onClick={EditBtn}>edit</button>
                <button className='delete'>delete</button>
            </div>
        </div>
    )
}
export default AllCards
