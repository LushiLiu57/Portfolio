import react from 'react'
import {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import '../styles/Nav.css'
import ReorderRounded from '@mui/icons-material/ReorderRounded'

function Nav() {
    const [expand, setExpand] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setExpand(false)
    }, [location])

    return (
        <div className='bar' id={expand ? 'open' : 'close'}>
            <div className='buttons'>
                <button onClick={() => {setExpand((prev) => !prev)}}><ReorderRounded/></button>
            </div>
            <div className='links'>
                <Link to='/'> Home </Link>
                <Link to='/projects'> Projects </Link>
                <Link to='/skills'> Skills</Link>
            </div>
        </div>
        
    )
}

export default Nav