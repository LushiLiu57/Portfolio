import React from "react"
import '../styles/Skills.css'

function Skills() {
    return (
        <div className='skills'>
            <br></br>
            <h2>Skills</h2>
            <img className='skill-logo' src={require('../assets/Javascript_Logo.png')}></img>
            <img className='skill-logo2' src={require('../assets/react_logo.png')}></img>
            <img className='skill-logo' src={require('../assets/node_logo.png')}></img>
            <img className='skill-logo2' src={require('../assets/sql.jpg')}></img>
                <ol className='list'>
                    <li className='skill-type'>
                        <h3>Programming Language</h3>
                        <span>JavaScript, TypeScript, Python, Java, C++</span>
                    </li>
                    <li className='skill-type'>
                        <h3>Front End</h3>
                        <span>HTML, CSS, ReactJS, NPM, Yarn, Redux</span>
                    </li>
                    <li className='skill-type'>
                        <h3>Back End</h3>
                        <span>NodeJS, ExpressJS, MySQL, MongoDB, AWS</span>
                    </li>
                    <li className='skill-type'>
                        <h3>Hard Skills</h3>
                        <span>Data Structures, Algorithims, Dynamic Programming, Object Orientated Programming, Databases, Networking, STEM, Web Development, Machine Learning, Data Science</span>
                    </li>
                    <li className='skill-type'>
                        <h3>Soft Skills</h3>
                        <span>Adaptable, Organized, Open Minded, Ctritical Problem Solver, Attention to Detail</span>
                    </li>
                </ol>
                <br></br><br></br><br></br>
        </div>
    )
}

export default Skills