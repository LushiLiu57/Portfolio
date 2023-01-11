import React from 'react'
import '../styles/Project.css'
import GitHubIcon from '@mui/icons-material/GitHub'

function Projects() {
    return (
        <div className='projects'>
            <h2>My Projects</h2>
            <div className='project-list'>
                <div className='project-tab'>
                    <h3>Social Media Website</h3>
                    <img className='project-image' src={require('../assets/social_media.png')}></img>
                </div>
                <div className = 'project-desc'>
                    <h4>Tools used: React, HTML, CSS, JavaScript, Firebase, </h4>
                    <h4>Summary: A front end webside that uses Firebase for the back end. The user can log in using their google account, create posts, 
                        delete or update their own posts, and like posts.</h4>
                    <h4><a href='https://social-media-app-ae7ca.web.app/'>Link to website</a> <a href='https://github.com/LushiLiu57/SocialMedia'><GitHubIcon/></a></h4>
                </div>
                <div className = 'clear'></div>

                <div className='project-tab'>
                    <h3>Chat App</h3>
                    <img className='project-image' src={require('../assets/chat.png')}></img>
                </div>
                <div className = 'project-desc'>
                    <h4>Tools used: React, HTML, CSS, JavaScript, Socket.io, Node, Express </h4>
                    <h4>Summary: A full stack website that allows users to join rooms and chat with other users in the same room.</h4>
                    <h4><a href='https://lushiliu57.github.io/ChatApp'>Link to website</a> <a href='https://github.com/LushiLiu57/chat-website'><GitHubIcon/></a></h4>
                </div>
                <div className = 'clear'></div>

                <div className='project-tab'>
                    <h3>Contact List</h3>
                    <img className='project-image' src={require('../assets/contact_list.png')}></img>
                </div>
                <div className = 'project-desc'>
                    <h4>Tools used: React, HTML, CSS, JavaScript, MySQL, Node, Express </h4>
                    <h4>Summary: A full stack CRUD application that allows the user to create, update and delete their contact list. The data is stored in MySQL </h4>
                    
                    <h4><a href='https://lushiliu57.github.io/contact-list/'>Link to website</a> <a href='https://github.com/LushiLiu57/contact-list'><GitHubIcon/></a></h4>
                    
                </div>
                <div className = 'clear'></div>
            </div>
        </div>
    )
}

export default Projects