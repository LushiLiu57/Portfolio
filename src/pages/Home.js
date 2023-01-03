import React from 'react'
import '../styles/Home.css'

function Home() {
    return (
        <div classNmae='home'>
            <div className='introduction'>
                <h1>Hello, My Name is Lushi</h1>
                <div className = 'desc'>
                    <p>I am a <b class='bold'>Web Developer</b> that is thriving to learn and grow</p>
                </div>
            </div>

            <div className='about-me'>
                <h2>About Me</h2>
                <img className='image-about' src={require('../assets/Profile_Picture.jpeg')}></img>
                <p>Hello! I am Lushi, an espiring software engineer currently based in <b class="bold">Toronto, ON</b>.</p>
                <p>I have recently graduated from <b class="bold">University of Toronto Scarborough</b> with a Honours 
                Bachelors degree in <b class="bold">Statistical Machine Learning and Data Mining</b>. I have a strong background in <b class="bold">Computer Science </b>
                and have taken many courses related to it. In addition, I am very comfortable working with <b class="bold">backend, frontend or fullstack </b>
                when it comes to Web Development. <b class='highlight'>Most importantly, I am a keen learner with a passion to expand my skillset and 
                work hard towards my goals</b></p>
                <p>I am proficient with <b class="bold">HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS and MySQL</b> to facilitate and compliment my web development 
                skills. I am also proficient with other tools and languages, such as Python, Java, C++, and many more.
                programming languages. I have made many projects using these tools, including games using GameMaker Studios 2, various data 
                science projects using Python, and (HUR). I have an excellent understanding of (WEEH). I am always up for a challenge and 
                open to learn and grow my skills!</p>
                <br/><br/><br/><br/><br/><br/><br/>
            </div>

            <div className='education'>
                <h2>Education</h2>
                <img className='uoft-image' src={require('../assets/uoftlogo.png')}></img>
                <h4>(Honours) Statistics Specialist, Statistical Machine Learning and Data Science Stream (B.Sc)</h4>
                <h3>University of Toronto Scarborough</h3>
                <h4>2015-2021</h4>
                <p>Relevant Courses</p>
                    <ol className='course-list'>
                        <li className='course'><h5>Theory of Computing</h5></li>
                        <li className='course'><h5>Design and Analysis of Data Structures</h5></li>
                        <li className='course'><h5>Software Design</h5></li>
                        <li className='course'><h5>Numerical Algorithms for Computational Mathematics</h5></li>
                        <li className='course'><h5>Machine Learning and Data Mining</h5></li>
                        <li className='course'><h5>Algorithm Design and Analysis</h5></li>
                    </ol>
            </div>
        </div>

    )
}

export default Home;