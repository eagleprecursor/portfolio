import './App.css';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import BarCVSection from './sections/bar-cv';
import TechCVSection from './sections/tech-cv';

function App() {
	return (
		<div id="page-wrapper">
			<div class="header-image">
				<div class="header-image-vignette"></div>
				<div class="header-image-vignette-right"></div>
				<div class="header-image-title-flex-wrapper">
					<div class="header-image-title-vignette"></div>
					<div class="header-image-title-wrapper">
						<div class="header-image-title"><span>Jordan Knight</span></div>
						<div class="header-image-subtitle"><span>My Project Portfolio</span></div>
					</div>
				</div>
			</div>   
			<div id="page-content">
				<div id="view-wrapper">
					<section className='dark-bg flex'>
						<section class="intro-text">
							<p>My name is Jordan, I'm 26 from Leeds and I have a BSc in Computer Science from Newcastle University, and this is my digital portfolio for projects that I have built, as well as future projects that I'm working on. I have a wide range of different tech skills but specialize mostly in Web Development and Design and analysing/presenting big data sets. My biggest project is my gaming stats tracker, which is detailed below.</p>
							<p>In 2021 I took a career break to focus on my personal development, where I undertook the challenge of bartending. My CV from this time is available to view below. To find out more, and what I have achieved in the time away, as well as my future aspirations and goals, visit <a href="/bartending-craziness">my Personal Journey</a> page. </p>
						</section>
					</section>
					<Tabs>
						<TabList>
							<Tab>CS Work Experience & Projects</Tab>
							<Tab>Bar Experience</Tab>
						</TabList>
						<TabPanel>
							<TechCVSection />
						</TabPanel>
						<TabPanel>
							<BarCVSection />
						</TabPanel>
					</Tabs>
					<section>
						Contact me card
					</section>
				</div>
			</div>
			<div id="page-footer-wrapper">
				<div id="page-footer">
					<p class="header">Official Website of Eagle Precursor</p>
					<ul>
						<li><a href="http://twitter.com/eagle_precursor" target="_blank">Twitter</a></li>
						<li><a href="http://instagram.com/eagle_precursor" target="_blank">Instagram</a></li>
						<li><a href="http://youtube.com/r1s3ncl4n" target="_blank">Youtube</a></li>
						<li><a href="https://www.linkedin.com/in/jordanm-knight/"><span>LinkedIn</span></a></li>
						<li><a href="/users/eagle-precursor" data-route="users" data-username="Eagle Precursor" class="app-link">My Leaderboard Profile</a></li>
					</ul>
					<p class="footnote"><a href="/privacy" data-route="privacy" class="app-link">Privacy Policy and Cookies</a></p>
					<p class="footnote">This application is offered by Eagle Precursor, which is solely responsible for its content. It is not sponsored or endorsed by Microsoft. This application uses the Halo® Game Data API. Halo © Microsoft Corporation. All rights reserved. Microsoft, Halo, and the Halo Logo are trademarks of the Microsoft group of companies.</p>
					<p class="footnote">Halo 5 &copy; Microsoft Corporation. The Halo 5 Infection Leaderboard was created under Microsoft's <a href="https://www.xbox.com/en-us/developers/rules">"Game Content Usage Rules"</a> using assets from Halo 5, and it is not endorsed by or affiliated with Microsoft.</p>
				</div>
			</div>
		</div>
	);
}

export default App;
