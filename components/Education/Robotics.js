import Image from 'next/image';
import { useState, useEffect } from 'react';

const Robotics = () => {
    // List of robotic component images
    const roboticImages = [
        "/assets/images/robotics/motor.png",
        "/assets/images/robotics/sensors.png",
        "/assets/images/robotics/microcontroller.png",
        "/assets/images/robotics/servo.png",
        "/assets/images/robotics/scratch1.png",
        "/assets/images/robotics/scratch.png",
        "/assets/images/robotics/openai.png",
        "/assets/images/robotics/3drobo.png",
        "/assets/images/robotics/python.png"
    ];

    // State to store randomly selected images
    const [randomImages, setRandomImages] = useState([]);

    useEffect(() => {
        const shuffled = roboticImages.sort(() => 0.5 - Math.random());
        setRandomImages(shuffled.slice(0, 4)); // Pick 4 images
    }, []);

    return (
        <div className="robotics-container">
            <div className='robotics-grid'>
                <div className='robotics-title-description'>
                    <h1 className="robotics-title">Robotics & AI</h1>
                    <p className="robotics-description">
                    Dive into our comprehensive Robotics and AI courses, designed to ignite creativity and foster innovation in students. Through hands-on projects and real-world applications, learners will develop critical problem-solving skills, explore cutting-edge technologies, and gain a strong foundation in robotics, artificial intelligence, coding, and 3D design
                    </p>
                </div>
                
                {/* YouTube Video */}
                <div className="robotics-video">
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/0kiPtA97LH4" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>
            </div>

            {/* Floating Background Images */}
            {randomImages.length >= 4 && (
                <>
                    <Image src={randomImages[0]} alt="Component 1" width={150} height={150} className="side-image left top" />
                    <Image src={randomImages[1]} alt="Component 2" width={150} height={150} className="side-image left bottom" />
                    <Image src={randomImages[2]} alt="Component 3" width={150} height={150} className="side-image right top" />
                    <Image src={randomImages[3]} alt="Component 4" width={150} height={150} className="side-image right bottom" />
                </>
            )}
        
        
            

            {/* Course Offerings */}
            <h2 className="course-title">📚 Course Offerings</h2>

            <div className="robotics-courses">
                {/* Basic Level */}
                <div className="course-category">
                    <h3 className="category-title">Basic Level</h3>
                    <div className="course-list">
                        <div className="course-card">
                            <h4>Class 3</h4>
                            <ul>
                                <li>✔ Scratch – Coding & Game Development</li>
                                <li>✔ Tinkercad – 3D Design</li>
                            </ul>
                        </div>
                        <div className="course-card">
                            <h4>Class 4</h4>
                            <ul>
                                <li>✔ Scratch – Coding & Game Development</li>
                                <li>✔ Tinkercad – 3D Design</li>
                            </ul>
                        </div>
                        <div className="course-card">
                            <h4>Class 5</h4>
                            <ul>
                                <li>✔ Scratch – Coding & Game Development</li>
                                <li>✔ Tinkercad – 3D Design</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Intermediate Level */}
                <div className="course-category">
                    <h3 className="category-title">Intermediate Level</h3>
                    <div className="course-list">
                        <div className="course-card">
                            <h4>Class 6</h4>
                            <ul>
                                <li>✔ Basic Electronics with Arduino & Block Programming</li>
                                <li>✔ Advanced 3D Design</li>
                                <li>✔ Basic Mechanics</li>
                            </ul>
                        </div>
                        <div className="course-card">
                            <h4>Class 7</h4>
                            <ul>
                                <li>✔ Advanced Arduino & Block Programming</li>
                                <li>✔ Expert 3D Design & Prototyping</li>
                                <li>✔ Applied Mechanics & Motion Systems</li>
                            </ul>
                        </div>
                        <div className="course-card">
                            <h4>Class 8</h4>
                            <ul>
                                <li>✔ Advanced Arduino with C++</li>
                                <li>✔ Introduction to Python Programming</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Advanced Level */}
                <div className="course-category">
                    <h3 className="category-title">Advanced Level</h3>
                    <div className="course-list">
                        <div className="course-card">
                            <h4>Class 9</h4>
                            <ul>
                                <li>✔ Advanced Arduino with C++</li>
                                <li>✔ Intermediate Python Programming</li>
                                <li>✔ Introduction to AI & Data Science</li>
                            </ul>
                        </div>
                        <div className="course-card">
                            <h4>Class 10</h4>
                            <ul>
                                <li>✔ Python for AI</li>
                                <li>✔ Introduction to AI</li>
                                <li>✔ Computer Vision (CV)</li>
                                <li>✔ Natural Language Processing (NLP)</li>
                                <li>✔ AI Model Development & Evaluation</li>
                                <li>✔ AI Ethics & Future of AI</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Robotics;
