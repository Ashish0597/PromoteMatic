import React from "react";

const Footer = () => {
  return (
    <div className="section-footer">
        <div className="bg-footer-wrapper">
            <div className="bg-footer">
                <div className="hero-container position-relative z-2">
                    <div className="d-flex flex-column gspace-2">
                        <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 grid-spacer-5">
                            <div className="col col-lg-4">
                                <div className="footer-logo-container">
                                    <div className="logo-container-footer">
                                    <img src="/assets/images/promote-logo-v2.png" alt="Logo" className="site-logo img-fluid" />
                                    </div>
                                    <h4>Driving Digital Growth with Innovation & Strategy</h4>
                                    <p>
                                     We empower ambitious brands with strategic marketing, innovative design, and performance-driven execution. Our mission is simple — build scalable digital systems that generate consistent growth and long-term impact.
                                                                         </p>
                                </div>
                            </div>

                            <div className="col col-lg-2">
                                <div className="footer-quick-links">
                                    <h5>Quick Links</h5>
                                    <ul className="footer-list">
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/about">About Us</a></li>
                                        <li><a href="/service">Service</a></li>
                                        <li><a href="/contact">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col col-lg-3">
                                <div className="footer-services-container">
                                    <h5>Services</h5>
                                    <ul className="footer-list">
                                        <li><a href="/single_services">Social Media Marketing</a></li>
                                        <li><a href="/single_services">Web App Development</a></li>
                                        <li><a href="/single_services">Graphic Design</a></li>
                                        <li><a href="/single_services">Video Editing</a></li>
                                        <li><a href="/single_services">Animation</a></li>
                                        <li><a href="/single_services">CGI Ad.</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col col-lg-3">
                                <div className="footer-contact-container">
                                    <h5>Contact Info</h5>
                                    <ul className="contact-list">
                                        <li>promotematic19@gmail.com</li>
                                        <li>+91-9651938890</li>
                                        <li>South Extension I, New Delhi, India</li>
                                    </ul>
                                    <div className="d-flex flex-column gspace-1">
                                        <h5>Social Media</h5>
                                        <div className="social-container">
                                            <div className="social-item-wrapper">
                                                <a href="https://www.facebook.com/profile.php?id=61578086674016" className="social-item">
                                                    <i className="fa-brands fa-facebook"></i>
                                                </a>
                                            </div>
                                            {/* <div className="social-item-wrapper">
                                                <a href="https://youtube.com" className="social-item">
                                                    <i className="fa-brands fa-youtube"></i>
                                                </a>
                                            </div> */}
                                            <div className="social-item-wrapper">
                                                <a href="https://www.instagram.com/promotematic?igsh=MW1xZWZ4ZjU1dHN6YQ==" className="social-item">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                            </div>
                                            <div className="social-item-wrapper">
                                                <a href="https://www.linkedin.com/in/promote-matic-4b5140379/" className="social-item">
                                                    <i className="fa-brands fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="footer-content-spacer"></div>
                    </div>

                    <div className="copyright-container">
                        <span className="copyright">© 2025 Promotematic. Fox Creation All Rights Reserved.</span>
                        <div className="d-flex flex-row gspace-2">
                            <a href="#" className="legal-link">Terms of Service</a>
                            <a href="#" className="legal-link">Privacy Policy</a>
                        </div>
                    </div>

                    <div className="footer-spacer"></div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;