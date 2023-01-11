import React from 'react'
import '../styles/Education.css'

function Education() {
    return (
        <div className='education'>
            <h2>Education</h2>
            <img className='uoft-image' src={require('../assets/uoftlogo.png')}></img>
            <h4>(Honours) Statistics Specialist, Statistical Machine Learning and Data Science Stream (B.Sc)</h4>
            <h3>University of Toronto</h3>
            <h4>2015-2021</h4>
            <p>Relevant Courses (Course Code)</p>
                <ol className='course-list'>
                    <li className='course'><h5>Databases and Web Applications <b class='bold'>(CSCB20)</b></h5></li>
                    <li className='course'><h5>Theory of Computing <b class='bold'>(CSCB36)</b></h5></li>
                    <li className='course'><h5>Design and Analysis of Data Structures <b class='bold'>(CSCB63)</b></h5></li>
                    <li className='course'><h5>Software Design <b class='bold'>(CSCB07)</b></h5></li>
                    <li className='course'><h5>Numerical Algorithms for Computational Mathematics <b class='bold'>(CSCC37)</b></h5></li>
                    <li className='course'><h5>Machine Learning and Data Mining <b class='bold'>(CSCC11)</b></h5></li>
                    <li className='course'><h5>Algorithm Design and Analysis <b class='bold'>(CSCC73)</b></h5></li>
                </ol>
        </div>

    )
}

export default Education;