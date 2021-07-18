import React from 'react';
import Image from 'next/image'
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
    return(
        <>
            <Header />

            <section className="about">
                <div className="about__author about__author--one">
                    <Image
                        src="/Joaquim.png"
                        alt="people"
                        width={300}
                        height={350}
                    />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="about__author about__author--two">
                    <Image
                        src="/Rose.png"
                        alt="people"
                        width={518}
                        height={500}
                    />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </section>

            <Footer />        
        </>
    )
}

export default About;