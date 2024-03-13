import React from 'react';
import Slider from '../Slider/Slider.jsx';
import './SliderSection.scss';

const SliderSection = () => {
    const hackathon = [
        {
            name: "Hackathon2",
            theme: "Theme2",
            description:
                "Lorem Cum, labore aliquid?",
        },
        {
            name: "Hackathon2",
            theme: "Theme2",
            description:
                "Lorem Cum, labore aliquid?",
        },
        {
            name: "Hackathon2",
            theme: "Theme2",
            description:
                "Lorem Cum, labore aliquid?",
        },

    ];
    return (
        <div className='slider_section'>
            <div className="group">
                <h1>Hackathons</h1>
                <Slider slides={hackathon} />
            </div>

            <div className="group">
                <h1>Workshops</h1>
                <Slider slides={hackathon} />
            </div>

            <div className="group">
                <h1>Contests</h1>
                <Slider slides={hackathon} />
            </div>

        </div>
    );
};

export default SliderSection;
