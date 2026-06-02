import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function AboutSection(){

    return(
        <div className="section">
            <div className="hero-container">
                <div className="d-flex flex-column flex-lg-row gspace-5">
                    <div className="about-img-layout">
                        <div className="image-container about-img">
                            <AnimateOnScroll animation="fadeInUp" speed="normal">
                            <img
                                src="/assets/images/brandimg.jpg"
                                alt="PromoteMatic Agency"
                                className="img-fluid"
                            />
                            </AnimateOnScroll>
                        
                            <div className="about-layout">
                                <div className="d-flex flex-column">
                                    <div className="card-about-wrapper">
                                        <AnimateOnScroll animation="fadeInDown" speed="normal">
                                            <div
                                                className="card card-about"
                                                >
                                                <div className="d-flex flex-row align-items-center">
                                                    <span className="counter" data-target="2025"></span>
                                                    <span className="counter-detail"></span>
                                                </div>
                                                <h6>PromoteMatic Founded (Est.)</h6>
                                            </div>
                                        </AnimateOnScroll>
                                    </div>
                                <div className="about-spacer"></div>
                                </div>
                                <div className="about-spacer"></div>
                            </div>
                        </div>
                    </div>
                    <div className="about-title">
                        <div className="d-flex flex-column gspace-2">
                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <div
                                    className="sub-heading"
                                >
                                    <i className="fa-regular fa-circle-dot"></i>
                                    <span>About PromoteMatic</span>
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <h2 className="title-heading">Strategy, Creativity, and Execution</h2>
                            </AnimateOnScroll>

                            <p>
                                PromoteMatic is a growth-focused digital agency partnering with ambitious brands 
                                to build high-impact digital experiences and measurable marketing systems. 
                                We believe great marketing sits at the intersection of strategy, creativity, 
                                and execution, helping businesses scale with clarity and precision.
                            </p>
                            <p>
                                We don’t chase trends—we build scalable digital systems that support long-term growth. 
                                Whether it’s increasing visibility or generating qualified leads, every solution 
                                is intentional. No templates. No shortcuts. Just data-guided results.
                            </p>

                            <div className="d-flex flex-column flex-md-row gspace-1 gspace-md-5">
                                <div className="about-list">
                                    <ul className="check-list">
                                        <li><a href="./single_services">Performance Marketing</a></li>
                                        <li><a href="./single_services">Website Design & Dev</a></li>
                                        <li><a href="./single_services">Brand & Creative Design</a></li>
                                    </ul>
                                </div>

                                <div className="about-list">
                                    <ul className="check-list">
                                        <li><a href="./single_services">Paid Growth Campaigns</a></li>
                                        <li><a href="./single_services">3D Rendering & Visuals</a></li>
                                        <li><a href="./single_services">Real Business Outcomes</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>

    );
}

export default AboutSection;