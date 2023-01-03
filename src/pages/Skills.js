import React from "react"
import '../styles/Skills.css'

function Skills() {
    return (
        <div className='skills'>
            <h2>Skills</h2>
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
                        <span>Data Structures, Algorithims, CRUD, STEM, Web Development, Machine Learning, Data Science</span>
                    </li>
                    <li className='skill-type'>
                        <h3>Soft Skills</h3>
                        <span>Adaptable, Organized, Open Minded, Ctritical Problem Solver, Attention to Detail</span>
                    </li>
                </ol>
        </div>
    )
}

export default Skills