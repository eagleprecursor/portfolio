import React from 'react';
import { Link } from 'react-router';

function calculateAge (birthDate, otherDate) {
    birthDate = new Date(birthDate);
    otherDate = new Date();

    var years = (otherDate.getFullYear() - birthDate.getFullYear());

    if (otherDate.getMonth() < birthDate.getMonth() || 
        otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate()) {
        years--;
    }

    return years;
}


export const AboutMeSection = () => (
    <section className='content-section text-lg'>
        <article className='bordered-sections'>        
            <section>
                <h1><u>My Project Portfolio</u></h1>
                <p>My name is Jordan, I'm { calculateAge('1998-03-20') } and I’m from Leeds and this is my digital portfolio for all my projects. I have a variety of tech skills that I have developed through University, Employed and Freelance work, and through my own personal projects.</p>
                <p>I have specialized in full-stack web development using techs such as: Laravel, React.js, Redux, MySQL and Version Control (through GitHub); and by recently expanding my knowledge learning React Router v7, Tailwind CSS and Vite and implementing them in my new projects. This website is using all 3 of the new techs I have learned!</p>
                <p><b>My portfolio is currently showcasing the following projects:</b></p>
                <h4>Freelance web design</h4>
                <p>Starting small, I have began to develop websites for clients varying in complexity. The first project that I am working on is a modelling portfolio, showcasing the client’s professional headshots, photos and work experience allowing them to connect with agencies and other recruiters. <i>(This website can be viewed here (link, not yet))</i></p>
                <h4>Gaming Stats Tracker</h4>
                <p>The most complex web project I have created so far is my Gaming Stats Tracker designed to work with the API from an online video game to create an interface for players to view their in-game stats, compare themselves to other players using Leaderboards, and track how their stats are progressing over time. This project was built off my love for gaming and Halo as well data analysis and data presentation. A <Link to="/demo/rating">demo of the Stats Tracker</Link> implemented for Halo 5: Guardians as well as a <Link to="/stats-tracker-breakdown">breakdown</Link> of my motivations/design choices and how the features work are included on this website.</p>
            </section>
            <section>
                <h3>My Employment and Goals</h3>
                <p>In 2021 I took a career break to help with my mental health, focus on my personal development and build my confidence by working in hospitality. Whilst I am passively looking for opportunities for roles in tech such as: Web Design, Web Development, Software Engineering, Data Analysis, and etc; I am also pursuing a Supervisor position within hospitality to further advance my People and Leadership skills as well as my confidence.</p>
                <p><b><u>To get in touch with me, you can:</u></b></p>
                <p>
                    <ul>
                        <li>Connect with me on <a href="https://linkedin.com/jordanm-knight">LinkedIn</a></li>
                        <li>Email me at <a href="mailto:jordan.knight667@outlook.com">jordan.knight667@outlook.com</a></li>
                    </ul>
                </p>
            </section>
        </article>
    </section>
)