import { NavLink, Outlet } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBook, faBuilding, faChartArea, faChartBar, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from "react";
import { faUpwork } from "@fortawesome/free-brands-svg-icons";

const Footnote = ({ type, className }) => {

    return (
        <footer className={`${type} footnote ${className}`}>
            <p>You can connect with me on my <a href="https://linkedin.com/jordanm-knight">LinkedIn profile</a></p>
            <p>Future updates to my projects will be posted both here and on my LinkedIn page.</p>
        </footer>
    );
}

const Layout = () => {

    const [menu, toggleMenu] = useState(false);
    const menuButton = useRef();

    useEffect(() => {

        document.body.addEventListener('click', event => {
            
            if ((menuButton.current && !event.composedPath().includes(menuButton.current)))
            {
                toggleMenu(false);
            }
        });

    }, []);

    return (
        <main className="flex-col xl:flex-row">
            <header>
                <NavLink to="/"><div id="header-image-circle"></div></NavLink>
                <div id="header-image-title-wrapper">
                    <div id="header-image-title">
                        <span>Jordan Knight</span>
                    </div>
                    <div id="header-image-subtitle">
                        <span>My Project Portfolio</span>
                    </div>
                </div>
                <nav id="sidebar">
                    <button id="open-sidebar" className="block lg:hidden" ref={menuButton} onClick={() => toggleMenu(!menu)}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <ul className={`${menu ? "open" : "hidden"} lg:lg-sidebar`}>
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
                                <FontAwesomeIcon icon={faBook} /><span>Hospitality and Tech CV</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <Footnote type="sidebar" className="hidden xl:flex" />
            </header>
            <div id="page-content">
                <div id="view-wrapper">
                    <Outlet />
                </div>
            </div>
            <Footnote type="small-screen" className="block xl:hidden" />
        </main>
    )
}

export default Layout;