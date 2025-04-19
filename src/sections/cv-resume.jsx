import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const CVResumeSection = () => (
    <Tabs>
        <TabList>
            <Tab>Bar Work Experience</Tab>
            <Tab>Tech/CS Work Experience</Tab>
        </TabList>
        <TabPanel>
            <div className='flex flex-down'>
                <section className='overview-text'>
                    <p>My Bartending journey started in 2021, as after University and lockdowns, I wanted a new challenge, one that would help me improve my confidence and social skills. I quickly fell in love with the fast-paced atmosphere and environment and got hooked on the sales-per-hour metric, leading me to strategize my serving style and work hard to be the fastest bartender I could possibly be. Now since then, I have worked in many different venues gaining a wide umbrella of experience in different styles of bars and pubs. I have been given the opportunity through this job to grow, experience things and learn skills that I didn't think I could achieve.</p>
                </section>
                <section className='cv-list'>
                    <h1><span className='title'>Bar Associate – Wetherspoon</span><span className='location'>Leeds, UK</span></h1>
                    <h3>September 2023 – Now</h3> 
                    <p className='skills-list'>Skills Developed: Customer Service, Food and Drinks table service, Cash Handling, Adaptability</p>
                    <ul>
                        <li>Gained experience waiting tables, by delivering food to customers and performing checkbacks to ensure their satisfaction</li>
                        <li>Improved my speed making and delivering drinks for table service, developing resilience to very high volumes of orders in busy periods</li>
                        <li>Developed my team working skills by working alongside Managers, Team Leaders and other associates to ensure: the cleanliness of the bar and floor, that fridges remained stocked up, that the bar had enough glassware by glassing in (on floor) and out (on bar), and that all customers were served quickly and prioritised.</li>
                        <li>Maintained adaptability by working across multiple venues (when given the opportunity to transfer for new experience, or when picking up shifts in other pubs)</li>
                        <li>Completed the Wetherspoon training courses, on topics including health and safety, food safety, fire training and bartending</li>
                    </ul>
                </section>
                <section className='cv-list'>
                    <h1><span className='title'>Bartender - Thewlis Cocktail Lounge and The Decanter</span><span className='location'>Leeds, UK</span></h1>
                    <h3>February 2023 – September 2023</h3>
                    <p className='skills-list'>Skills Developed: Cocktail, Spirit and Wine Knowledge, Bartending, Customer Service and Customer Satisfaction</p>
                    <ul>
                        <li>Gained experience opening and closing the bar on my own, and preparing things like premix drinks, fruit, etc. for the bar</li>
                        <li>Expanded my knowledge on cocktails by learning and making a wide variety of classic cocktails, ensuring that cocktails were presented perfectly each time when served</li>
                        <li>Developed my knowledge on wine and spirits, on the job through serving, learning the menu and making cocktails, as well as by attending tasting events in house as well as in the bar community</li>
                        <li>Improved my customer service and communication skills with guests, by gaining experience delivering drinks to guests, taking orders through table service, and learning how to guide guests through the menu to find a perfect drink for them, ensuring repeat trade and maximum satisfaction</li>
                    </ul>
                </section>
                <section className='cv-list'>
                    <h1><span className='title'>Bar Staff – Revolución de Cuba</span><span className='location'>Leeds, UK</span></h1>
                    <h3>November 2021 – October 2022</h3>
                    <p className='skills-list'>Skills Developed: Working under pressure, Self-confidence, Customer Service, Bartending</p>
                    <ul>
                        <li>Started my bartending journey to improve my confidence, self esteem, and communication skills, and learned the basics such as: how to pull pints, how to measure spirits and wines, how to use bar tools, the tills, glasswash machines, etc. and how to make Revs cocktails to a high standard</li>
                        <li>Gained experience working under pressure in a fast-paced and busy environment working with a team of bartenders, barbacks, and floor support staff.</li>
                        <li>Was awarded a golden bar blade as a reward for achieving high sales during nightclub service (£700+ measured on a sales-per-hour metric)</li>
                        <li>Learned how to maintain standards and cleanliness throughout the bar by resetting tables, clearing floor, cleaning stations, closing glasswash machines and restocking fridges</li>
                    </ul>
                </section>
            </div>
        </TabPanel>
        <TabPanel>
            <section className='cv-list'>
                <h1><span className='title'>Web Development Intern – MyKnowledgeMap</span><span className='location'>York, UK</span></h1>
                <h3>October 2020 – June 2021, <i>July – August 2019</i></h3>
                <p className='skills-list'><b>Skills Developed:</b> Web Development, Unit Testing, Team Working, WCAG 2.1, Git, Angular.js, React.js, Redux.js</p>
                <ul>
                    <li>Gained experienced working with different web technologies such as React.js, Redux.js and Angular.js whilst implementing accessibility changes and testing for and fixing errors/bugs in the company projects to help them meet the Web Content Accessibility Guidelines (WCAG 2.1)</li>
                    <li>Learned how to maintain and improve codebase for working projects by reducing the amount of code duplication, and improving consistency between pages</li>
                    <li>Developed skills in collaborating with other members of the team to test changes for a major project release, as well as skills in Unit Testing and using libraries like Headless Chrome to identify and fix issues.</li>
                    <li>Modelled a prototype for an interactive book that the company wanted to develop into a future product</li>
                </ul>
                <h1><span className="title">Computer Science BSc</span><span className="location">Newcastle University, UK</span></h1>
                <h3>September 2017 – July 2020</h3>
                <ul>
                    <li>Graduated with a 2:1 and the following modules scored 70% or higher</li>
                    <ul>
                        <li>Programming 1 - 75%</li>
                        <li>Programming 2 - 79%</li>
                        <li>Website Design and Construction - 71%</li>
                        <li>Computer Networks - 72%</li>
                        <li>Project and Dissertation in Computing Science - 70%</li>
                        <li>System and Network Security - 84%</li>
                        <li>Gaming Simulations - 81%</li>
                        <li>Understanding Programming Languages - 80%</li>
                    </ul>
                </ul>
            </section>
        </TabPanel>
    </Tabs>
);

export default CVResumeSection;