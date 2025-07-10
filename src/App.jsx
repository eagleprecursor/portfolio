import './demo/demo.css';
import './App.css'
import { Route, Routes } from 'react-router'
import Layout from './components/Layout';
import CVResumeSection from './sections/CVResume';
import StatsTrackerBreakdown from './sections/Breakdown';
import FreelanceSection from './sections/Freelance';
import { AboutMeSection } from './sections/AboutMe';
import StatsTrackerDemo from './demo/demo-home';
import ProfilePageDemo from './demo/profile-demo';

const RatingPage1 = require('./demo/h5fakeapi/leaderboards/ratingp1.json');
const KDRatioPage1 = require('./demo/h5fakeapi/leaderboards/kdp1.json');
const KGRatioPage1 = require('./demo/h5fakeapi/leaderboards/kgp1.json');
const WinRatioPage1 = require('./demo/h5fakeapi/leaderboards/winpcp1.json');
const GamesPlayedPage1 = require('./demo/h5fakeapi/leaderboards/gamesplayedp1.json');
const KillionairePage1 = require('./demo/h5fakeapi/leaderboards/killionairep1.json');
const ScorpionPage1 = require('./demo/h5fakeapi/leaderboards/scorpp1.json');

const App = () => (
	<Routes>
		<Route element={<Layout />}>
			<Route path="/cv-resume" element={<CVResumeSection />}></Route>
			<Route path="/stats-tracker-breakdown" element={<StatsTrackerBreakdown />}></Route>
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
	</Routes>
);

export default App