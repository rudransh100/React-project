import {FaUsers, FaBullseye, FaAward, FaHeart} from "react-icons/fa";

import Footer from "./Footer";

const About = () => {
    return (
        <div className="about-page">
            <div className="banner">
                <h1>ABOUT US</h1>
                <p>YOUR TRUSTED PARTNER ON DELIVERY SINCE 2020</p>
            </div>
            <div className="story">
                <div className="story-left">
                    <h2> Our Story</h2>

                    <p>
                        Founded in 2020, Food Delivery started with a simple mission: to connect food lovers with their
                        favorite restaurants while ensuring quick, reliable delivery service.
                    </p>
                    <p>
                        What began as a small startup in one city has grown into a nationwide service, partnering with
                        thousands of restaurants and serving millions of happy customers.
                    </p>
                    <p>
                        We believe that great food should be accessible to everyone, and we're committed to making every
                        meal a delightful experience.
                    </p>
                </div>
                <div className="story-image">
                    <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d" alt="Kitchen" />
                </div>
            </div>
            <div className="values-section container">
                <h2>Our Values</h2>

                <div className="values-grid">
                    <div className="value-card">
                        <FaUsers className="icon" />
                        <h3>Customer First</h3>
                        <p>We prioritize your satisfaction above everything else</p>
                    </div>

                    <div className="value-card">
                        <FaBullseye className="icon" />
                        <h3>Quality Food</h3>
                        <p>Partner with only the best restaurants in your area</p>
                    </div>

                    <div className="value-card">
                        <FaAward className="icon" />
                        <h3>Fast Delivery</h3>
                        <p>Hot, fresh food delivered right to your doorstep</p>
                    </div>

                    <div className="value-card">
                        <FaHeart className="icon" />
                        <h3>Made with Love</h3>
                        <p>Every meal is prepared with care and passion</p>
                    </div>
                </div>
            </div>
            <div className="stats-section">
                <div className="stats-container">
                    <div className="stat">
                        <h2>500+</h2>
                        <p>Restaurant Partners</p>
                    </div>

                    <div className="stat">
                        <h2>50K+</h2>
                        <p>Happy Customers</p>
                    </div>

                    <div className="stat">
                        <h2>100K+</h2>
                        <p>Orders Delivered</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default About;
