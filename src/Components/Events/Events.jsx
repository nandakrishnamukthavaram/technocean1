// Events.jsx

import React from 'react';
import './Events.scss';
import { Link } from 'react-router-dom';

const Events = () => {
    const hackathon = [
        {
            name: "Hackathon1",
            theme: "Theme1",
            description:
                "Lorem1 epsum1 dolor1 sit1 amut1 abrev1 Lorem t vero cupiditate tempora repudiandae? Cum, labore aliquid? ",
        },
        ,
        {
            name: "Hackathon2",
            theme: "Theme2",
            description:
                "Lorem2 epsum2 dolor2 sit2 amut2 abrev3 Lorem t vero cupiditate tempora repudiandae? Cum, labore aliquid?",
        },
        {
            name: "Hackathon3",
            theme: "Theme3",
            description:
                "Lorem3 epsum3 dolor3 sit3 amut3 abrev3 Lorem t vero cupiditate tempora repudiandae? Cum, labore aliquid?",
        },
    ];
    return (
        <div className="events-section">
            <div className="events-selector-container">
                <h2>Events</h2>
                <div className="event-selector-group">
                    <span className="event-selector">Hackathons</span>
                    <span className="event-selector">Workshops</span>
                    <span className="event-selector">Contests</span>
                    <span className="event-selector">Other</span>
                </div>
                <div className="event-dates">
                    <aside className="sidebar">
                        <div className="event-box">
                            <div className="event-info">
                                <p>
                                    <strong>Starts from:</strong>
                                    <p>
                                        April 6th, 2024
                                    </p>
                                </p>
                                <p>
                                    <strong>Ends on:</strong>
                                    <p>
                                        April 9th, 2024
                                    </p>
                                </p>
                                <p>
                                    <strong>Venue:</strong>
                                    <p>
                                        LPU, Punjab
                                    </p>
                                </p>
                            </div>
                        </div>
                        <Link to="/signup">
                            <button className="call-to-action">Register Now</button>
                        </Link>
                    </aside>
                </div>
            </div>
            <div className="events-container">
                <section className="event-section">
                    <h2>Hackathons</h2>
                    {hackathon.map((hackathon) => (
                        <div className="hackathon">
                            <div className="hackathon-title">{hackathon.name}</div>
                            <div className="hackathon-theme">{hackathon.theme}</div>
                            <div className="hackathon-registration">
                                <div className="description">{hackathon.description}</div>
                                <button>Apply now</button>
                            </div>
                        </div>
                    ))}
                </section>
                <section className="event-section">
                    <h2>Workshops</h2>
                    {hackathon.map((hackathon) => (
                        <div className="hackathon">
                            <div className="hackathon-title">{hackathon.name}</div>
                            <div className="hackathon-theme">{hackathon.theme}</div>
                            <div className="hackathon-registration">
                                <div className="description">{hackathon.description}</div>
                                <button>Apply now</button>
                            </div>
                        </div>
                    ))}
                </section>
                <section className="event-section">
                    <h2>Contests</h2>
                    {hackathon.map((hackathon) => (
                        <div className="hackathon">
                            <div className="hackathon-title">{hackathon.name}</div>
                            <div className="hackathon-theme">{hackathon.theme}</div>
                            <div className="hackathon-registration">
                                <div className="description">{hackathon.description}</div>
                                <button>Apply now</button>
                            </div>
                        </div>
                    ))}
                </section>
                <section className="event-section">
                    <h2>Others</h2>
                    {hackathon.map((hackathon) => (
                        <div className="hackathon">
                            <div className="hackathon-title">{hackathon.name}</div>
                            <div className="hackathon-theme">{hackathon.theme}</div>
                            <div className="hackathon-registration">
                                <div className="description">{hackathon.description}</div>
                                <button>Apply now</button>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}

export default Events;
