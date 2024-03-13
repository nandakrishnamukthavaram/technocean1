// Slider.jsx

import React, { useState, useEffect } from 'react';
import '../Slider/Slider.scss';

const Slider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Interval set to 5 seconds (5000 milliseconds)

        return () => clearInterval(intervalId);
    }, [slides]);

    return (
        <div className="slider">
            <div className="slides-container" style={{ width: `${slides.length * 100}%` }}>
                {slides.map((slide, index) => (
                    <div className="hackathon" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        <div className="hackathon-title">{slide.name}</div>
                        <div className="hackathon-theme">{slide.theme}</div>
                        <div className="hackathon-registration">
                            <div className="description">{slide.description}</div>
                            <button>Apply now</button>
                        </div>
                    </div>
                ))}
            </div>
            <button className="prev-button" onClick={prevSlide}>&lt;</button>
            <button className="next-button" onClick={nextSlide}>&gt;</button>
        </div >
    );
};

export default Slider;
