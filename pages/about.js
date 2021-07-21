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
                        Software Developer, Pós-graduando em Desenvolvimento de Software com Metodologias Ágeis.
                        Já morou em Angola, na Alemanha e atualmente mora em São Paulo – BR.
                        Gosta de fotografar pessoas e lugares, ouvir música e falar sobre cultura geral;
                        é uma pessoa tímida e falar não é sua atividade favorita,
                        mas se esforça por gostar muito de cultura.
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
                        Professora de Língua Portuguesa, Pós-graduando em Neurociência Aplicada a Educação
                        e Educação Inclusiva com ênfase em Tecnologias Assistivas. Mora em São Paulo – BR,
                        gosta de ser fotografada, cuidar das suas plantas e conversar sobre cultura geral.
                        É uma pessoa extrovertida e trata Transtorno de ansiedade com a ajuda de profissionais
                        e seu companheiro, Joaquim.
                    </p>
                </div>
            </section>

            <Footer />        
        </>
    )
}

export default About;