import React from 'react';
import Header from '../components/Header';
import ButtonTalk from '../components/ButtonTalk';
import Footer from '../components/Footer';
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      
      <div className="home">
        <article id="home-top">
          <section className="home__content">
            <div className="home__intro">
              <h2>
                Ansiedade? Depressão? Você não está sozinho (a).
              </h2>
              <h3>Pode contar com a gente!</h3>
            </div>
            <div className="home__bigImage">
              <Image
                src="/people.png"
                alt="people"
                width={500}
                height={500}
              />
            </div>
          </section>
          <section className="home-talkValuntier">
            <ButtonTalk />
            <div className="home-message">
              <h2>Bionic Friends</h2>
              <p>
                A Bionic Friends é uma rede de pessoas dispostas a ouvir e acolher outras pessoas que precisam falar.
                Ouvidos que não julgam, acolhem.
              </p>
              <p>
                Essa é uma ideia de Joaquim Borges, que mora em São Paulo com sua esposa, Rose Borges.
                Rose tem transtorno de ansiedade e faz tratamento com psicólogo e psiquiatra,
                mas mesmo assim o acolhimento em casa faz-se necessário. Através da experiência e dedicação com a sua
                esposa, Joaquim percebeu o quanto ter alguém disposto a ouvir faz a diferença no tratamento
                da ansiedade e depressão. Foi então, que ele decidiu criar a Bionic friends, um espaço para pessoas
                que precisam de um ouvido atento.
              </p>
              <p>
                A Bionic Friends não substitui o seu tratamento com um especialista.
                Aqui você encontrará pessoas para te ouvir.
              </p>
            </div>
          </section>
        </article>
      </div>

      <Footer />
    </>
  )
}
