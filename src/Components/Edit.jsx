import React from 'react'



function Edit() {
    return (
        <div>
            <div className="center">
                <h1>edit your task</h1>
                <div className="form1">
                    <div className="txt_field">
                        <input type="text" className='title' required />
                        <span></span>
                        <label htmlFor="">Title</label>
                    </div>
                    <div className="txt_field">
                        <input type="text" className='dis' required />
                        <span></span>
                        <label htmlFor="">Discription</label>
                    </div>
                    <input type="submit" value="Submit" className='sub' />
                    <p className='parasss' >“Before you reject a task as Impossible, ask yourself why God presented you with this thing to be done.”</p>
                </div>
            </div>

        </div>
    )
}
export default Edit