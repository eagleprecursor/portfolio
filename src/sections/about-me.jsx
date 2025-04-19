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
    <section className='project-overview center'>
        <h1><u>My Project Portfolio</u></h1>
        <p>My name is Jordan, I'm { calculateAge('1998-03-20') } from Leeds and I have a BSc in Computer Science from Newcastle University, and this is my digital portfolio for all my projects.</p>
        <p>In 2021 I took a career break to focus on my personal development, confidence building and social skills where I undertook the challenge of bartending. My CV from this time is available to view below.</p>
        <p><b><u>To get in touch with me, you can:</u></b></p>
        <p>
            <ul>
                <li>Connect with me on <a href="https://linkedin.com/jordanm-knight">LinkedIn</a></li>
                <li>Email me at <a href="mailto:jordan.knight667@outlook.com">jordan.knight667@outlook.com</a></li>
            </ul>
        </p>
        <hr />
        <div className='about-section'>
            <h3><u>Freelance</u></h3>
            --- eric image? ---
            <p>From 2025 I have been creating freelance websites for xyz, online at abc...</p>
        </div>
        <div className='about-section'>
            <h3><u>Gaming Stats Tracker</u></h3>
            <img src="/images/stats-tracker.png" />
            <p>My biggest project is my Gaming Stats Tracker designed to track player's stats and provide Leaderboards for each to show the best players. This project was built off of my love for gaming, halo, data analysis and presentation. A <Link to="/demo/rating">demo</Link> of the Stats Tracker in action as well as a <Link to="/stats-tracker-breakdown">breakdown</Link> of my motivations/design choices and how the features work are included on this website.</p>
        </div>
        <div className='about-section'>
            <h3><u>Gaming YouTube channel</u></h3>
            <img src="/images/youtube.png" />
            <p>
                I ran this <a href="https://youtube.com/c/eagleprecursor">channel</a> from 2015-2021 and maintained since with infrequent uploads. This channel includes: Gameplays, Edited commentaries, Montages and Community content from Halo 5: Guardians.
            </p>
        </div>
    </section>
)