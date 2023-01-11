import React from 'react'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import '../styles/Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='my-icons'>
                <a href='https://www.linkedin.com/in/lushiliu/'><LinkedInIcon /></a>
                <a href='https://github.com/LushiLiu57'><GitHubIcon /></a>
                <a><EmailIcon /></a>
            </div>
            <p>Lushi Liu</p>
        </div>
    )
}

export default Footer