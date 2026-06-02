import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeSwitcher from "../Theme/themeswitch";
import { useNav } from "../Context/NavContext";

function Navbar() {
    const { isDropdownActive } = useNav();

    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowTop(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <div className="navbar-wrapper">
                <nav className="navbar navbar-expand-lg">
                    <div className="navbar-container">
                        <div className="logo-container">
                            <NavLink className="navbar-brand" to="/">
                                <img
                                    src="/assets/images/promote-logo-v2.png"
                                    alt="Logo"
                                    className="site-logo img-fluid"
                                />
                            </NavLink>
                        </div>

                        <button
                            className="navbar-toggler nav-btn"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="fa-solid fa-bars"></i>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link" end>
                                        Home
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/about" className="nav-link">
                                        About
                                    </NavLink>
                                </li>

                                <li className="nav-item dropdown">
                                    <a
                                        className={`nav-link dropdown-toggle ${
                                            isDropdownActive([
                                                "/service",
                                                "/single_services",
                                            ])
                                                ? "active"
                                                : ""
                                        }`}
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Services{" "}
                                        <i className="fa-solid fa-angle-down accent-color"></i>
                                    </a>

                                    <ul className="dropdown-menu">
                                     <li>
                                         <NavLink
                                             to="/service"
                                             className="dropdown-item"
                                         >
                                             All Services
                                         </NavLink>
                                     </li>
                                 
                                     <li>
                                         <NavLink
                                             to="/web-development"
                                             className="dropdown-item"
                                         >
                                             Web Development
                                         </NavLink>
                                     </li>
                                 </ul>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/contact" className="nav-link">
                                        Contact Us
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="navbar-action-container">
                            <div className="navbar-icon-wrapper">
                                <div className="icon-circle">
                                    <i className="fa-solid fa-phone-volume"></i>
                                </div>
                                <h6>+91-9651938890</h6>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

           <NavLink to="/contact" className="contact-ribbon">
    Contact Us
</NavLink>

{showTop && (
    <button
        className="back-to-top"
        onClick={scrollToTop}
        aria-label="Back to Top"
    >
        <i className="fa-solid fa-arrow-up"></i>
    </button>
)}
        </>
    );
}

export default Navbar;