import './App.css';
import './demo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faChartArea, faChartBar, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { createHashRouter, createRoutesFromElements, Navigate, NavLink, Outlet, Route } from 'react-router';
import CVResumeSection from './sections/cv-resume';
import StatsTrackerBreakdown from './sections/breakdown';
import StatsTrackerDemo from './demo/demo-home';
import ProfilePageDemo from './demo/profile-demo';
import { AboutMeSection } from './sections/about-me';

const RatingPage1 = require('./demo/h5fakeapi/leaderboards/ratingp1.json');
const KDRatioPage1 = require('./demo/h5fakeapi/leaderboards/kdp1.json');
const KGRatioPage1 = require('./demo/h5fakeapi/leaderboards/kgp1.json');
const WinRatioPage1 = require('./demo/h5fakeapi/leaderboards/winpcp1.json');
const GamesPlayedPage1 = require('./demo/h5fakeapi/leaderboards/gamesplayedp1.json');
const KillionairePage1 = require('./demo/h5fakeapi/leaderboards/killionairep1.json');
const ScorpionPage1 = require('./demo/h5fakeapi/leaderboards/scorpp1.json');

const Layout = () => (
	<div id="page-wrapper">
		<div class="header-image">
			<div class="image-circle"></div>
			<div class="header-image-title-wrapper">
				<div class="header-image-title">
					<span>Jordan Knight</span>
				</div>
				<div class="header-image-subtitle">
					<span>My Project Portfolio</span>
				</div>
			</div>
			<nav id="navigation-sidebar" class="sidebar">
				<ul>
					<li class="sidebar-section">
						<div class="toggle-components">
							<ul>
								<li class="sidebar-list">
									<ul>
										<li>
											<NavLink to="/">
												<FontAwesomeIcon icon={faUserAlt} /><span>About Me</span>
											</NavLink>
										</li>
										<li>
											<NavLink to="/demo/rating">
												<FontAwesomeIcon icon={faChartArea} /><span>Stats Tracker Demo</span>
											</NavLink>
										</li>
										<li>
											<NavLink to="/stats-tracker-breakdown">
												<FontAwesomeIcon icon={faChartBar} /><span>Stats Tracker Breakdown</span>
											</NavLink>
										</li>
										<li>
											<NavLink to="/cv-resume">
												<FontAwesomeIcon icon={faBook} /><span>Bar and Tech CV</span>
											</NavLink>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</nav>
			<div class="footnote">
				<p>You can connect with me on my LinkedIn profile</p>
				<p>Future updates to my projects will be posted both here and on my LinkedIn page.</p>
			</div>
		</div>
		<div id="page-content">
			<div id="view-wrapper">
				<Outlet />
			</div>
		</div>
	</div>
);

const App = createHashRouter(
	createRoutesFromElements(
		<Route element={<Layout />}>
			<Route path="/cv-resume" element={<CVResumeSection />}></Route>
			<Route path="/stats-tracker-breakdown" element={<StatsTrackerBreakdown/>}></Route>
			<Route path="/demo/rating" element={<StatsTrackerDemo api={RatingPage1}/>}></Route>
			<Route path="/demo/kd-ratio" element={<StatsTrackerDemo api={KDRatioPage1} />}></Route>
			<Route path="/demo/kg-ratio" element={<StatsTrackerDemo api={KGRatioPage1} />}></Route>
			<Route path="/demo/win-percent" element={<StatsTrackerDemo api={WinRatioPage1} />}></Route>
			<Route path="/demo/games-played" element={<StatsTrackerDemo api={GamesPlayedPage1} />}></Route>
			<Route path="/demo/killionaire" element={<StatsTrackerDemo api={KillionairePage1} />}></Route>
			<Route path="/demo/scorpion" element={<StatsTrackerDemo api={ScorpionPage1} />}></Route>
			<Route path="/demo/player/eagle-precursor" element={<ProfilePageDemo />}></Route>
			<Route path="*" element={<AboutMeSection />} />
		</Route>
	)
);


export default App;

{/* <section className='dark-bg flex'>
				<section class="intro-text">
					<p>My name is Jordan, I'm 26 from Leeds and I have a BSc in Computer Science from Newcastle University, and this is my digital portfolio for projects that I have built, as well as future projects that I'm working on. I have a wide range of different tech skills but specialize mostly in Web Development and Design and analysing/presenting big data sets.</p><p>In 2021 I took a career break to focus on my personal development, confidence building and social skills where I undertook the challenge of bartending. My CV from this time is available to view below.</p>
					<p>My biggest project is my Gaming Stats Tracker, which I built using data from my Halo 5 Infection Leaderboard project, allowing the stats tracker to work for any game / player dataset. When the Halo 5 Infection Leaderboard was online, it tracked stats for over 50K players within the game, and stored over 1 million match results for players. Both projects are detailed below.</p>
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
			<section className='dark-bg flex flex-down'>
				<h1 className="big-header">Connect with me</h1>
				<section class="intro-text low-pad">
					<p>You can connect with me on my <a href='https://linkedin.com/jordanm.knight'>LinkedIn profile</a></p>
					<p>Future updates to my projects will be posted both here and on my LinkedIn page.</p>
					<p>At this time, I have no plans to upload the Halo 5 Stats Tracker, as the playerbase for the game is extremely low and although the public API still works, I anticipate that it may be turned off relatively soon. To view the Stats Tracker in action, <a href='https://www.youtube.com/watch?v=0oOmcVUOx4E'>click here to view an overview video</a> going through the Leaderboard, Profile Pages, Progress Tracker, and more!</p>
				</section>
			</section>
		</div>
	</div>
	<div id="page-footer-wrapper">
		<div id="page-footer">
			<p class="header">Legal</p>
			<p class="footnote">This application is offered by Eagle Precursor (Jordan Knight), which is solely responsible for its content. It is not sponsored or endorsed by Microsoft. This application uses the Halo® Game Data API. Halo © Microsoft Corporation. All rights reserved. Microsoft, Halo, and the Halo Logo are trademarks of the Microsoft group of companies.</p>
			<p class="footnote">Halo 5 &copy; Microsoft Corporation. The Halo 5 implementation of the Gaming Stats Tracker as well as the Halo 5 Infection Leaderboard were created under Microsoft's <a href="https://www.xbox.com/en-us/developers/rules">"Game Content Usage Rules"</a> using assets from Halo 5, and it is not endorsed by or affiliated with Microsoft.</p>
		</div>
	</div> */}