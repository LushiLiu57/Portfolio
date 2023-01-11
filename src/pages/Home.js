import React, { useEffect } from 'react'
import '../styles/Home.css'


function Home() {

    useEffect(() => {
        document.querySelector('.introduction h1').style.opacity = '1';
        document.querySelector('.desc').style.opacity = '1';
      }, [])

    return (
        <div className='home'>
            <div className='introduction'>
                <h1>Hello, My Name is <b class='bold'>Lushi</b></h1>
                <div className = 'desc'>
                    <p>I am a <b class='bold'>Web Developer</b>, thriving to learn and grow</p>
                </div>
            </div>
            <div className='about-me'>
                <h2>About Me</h2>
                <img className='image-about' src={require('../assets/DSC05499_fixed.jpg')}></img>
                <p>Hello! I am Lushi, an espiring software engineer currently based in <b class="bold">Toronto, ON</b>.</p>
                <p>I have recently graduated from <b class="bold">University of Toronto</b> with a Honours 
                Bachelors degree in <b class="bold">Statistical Machine Learning and Data Mining</b> (more information <a href='/Education'>here</a>). I have a strong background in <b class="bold">Computer Science </b>
                and have taken many courses related to it. In addition, I am very comfortable working with <b class="bold">backend, frontend or fullstack </b>
                when it comes to Web Development. <b class='highlight'>Most importantly, I am a keen learner with a passion to expand my skillset and 
                work hard towards my goals</b></p>
                <p>During my free time, I love playing logic-based video games, such as card games and auto-battlers. I am very interested in game design and have a passion
                for creating new ideas and improving on existing ones as well. As a data science graduate, I am very keen on analyzing data and creating interpretation from them,
                especially when it comes to my hobby, such as video games.</p>
                <p>I am proficient with <b class="bold">HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS and MySQL</b> to facilitate and compliment my web development 
                skills. I am also proficient with other tools and languages, such as Python, Java, C++, and many more (more information <a href='/Skills'>here</a>).</p>
                <p> I have made many projects using these tools, which you can see here. Some examples include a social media website utilizing Firebase and ReactJs,
                a full stack chat website using ReactJS, NodeJS, ExpressJS, and Socket.io, a full stack CRUD contact list, utilizing ReactJS, NodeJS, ExpressJS, and MySQL,
                and many more. Check them out <a href='/Projects'>here</a></p> 
                <p>I have an excellent understanding of all sorts of concepts, including but not limited to; <b class='bold'>Data Structures, Algorithms, Dynamic Programming, 
                Object Orientated Programming, and Web Design</b>. I am always up for a challenge and open to learn and grow my skills!</p>
                <br/><br/><br/><br/><br/><br/><br/>
            </div>
        </div>

    )
}

export default Home;