import React from 'react'
import {useNavigate} from 'react-router-dom'

function Project({image,name,id}) {
    const navigate = useNavigate()
    return (
        <div className='projectImage' onClick={() => {navigate("/projects/" + id);}}>
            <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
            <h2>{name}</h2>
        </div>
    )
}

export default Project