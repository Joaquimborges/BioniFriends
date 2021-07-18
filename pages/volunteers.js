import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import SnackBar from '../components/SnackBar';
import InputMask from 'react-input-mask';
import Footer from '../components/Footer';
import { projectFirestore, timestamp } from '../config/firebase';

const Volunteers = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [isChecked, setIsChecked] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = useState(false);
    
    const fbRef = projectFirestore.collection('Volunteers');
    const [snackType, setSnackType] = useState('');

    useEffect(() => {
        if(name !== '' && email !== '' && whatsapp !== ''){
            setIsChecked(false);
        }else{
            setIsChecked(true);
        }
    },[name, email, whatsapp]);

    const sendForm = evt => {
        evt.preventDefault();
        setIsLoading(true);
        
        fbRef.where("whatsapp", "==", whatsapp.replace(/[^\d.+]/g, '') ).get().then((query) => { 
            if(query.empty){
                console.log("Dados NÃO existe: ", query);

                fbRef.add({
                    name: name, 
                    email: email, 
                    whatsapp: whatsapp.replace(/[^\d.+]/g, ''),
                    create_at: timestamp
                }).then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);
                    setIsLoading(false);
                    
                    setShow(true);
                    setSnackType('Success');

                    setName('');
                    setEmail('');
                    setWhatsapp('');
                }).catch((error) => {
                    console.error("Error adding document: ", error);
                    setIsLoading(false);

                    setShow(true);
                    setSnackType('Warning');
                });
            }else{
                console.log("Dados ja existe: ", query);
                setIsLoading(false);

                setShow(true);
                setSnackType('Warning');
            }
        }).catch((error) => {
            console.error("Error adding document: ", error);
            setIsLoading(false);

            setShow(true);
            setSnackType('Error');
        });

        setTimeout(() => {
            setIsLoading(false);
            setShow(false);
        }, 9000);
    }

    return(
        <>
            <Header />

            <section className="voluntiers">
                <section className="voluntiers__message">
                    <h2>Ajude o próximo</h2>
                    <p>
                        Com empatia, você pode ter um papel fundamental para ajudar 
                        alguém próximo a enfrentar a depressão.
                    </p>
                </section>
                <form onSubmit={sendForm} className="voluntiers__form">
                    <header>
                        <h2>Cadastre-se</h2>
                    </header>
                    
                    <label>
                        <span>Nome</span>
                        <input 
                            type="text" 
                            name="name"
                            placeholder="Digite o seu nome"
                            value={name}
                            onChange={(e) => setName(e.target.value) }
                            required 
                        />
                    </label>
                    <label>
                        <span>E-mail</span>
                        <input 
                            type="email" 
                            name="email"
                            placeholder="Digite o seu E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value) }
                            required 
                        />
                    </label>
                    <label>
                        <span>Whatsapp</span>
                        <InputMask 
                            mask="+5\5 (99) 99999-9999"
                            placeholder="+55 (99) 99999-9999"
                            type="tel"
                            value={whatsapp} 
                            onChange={(e) => setWhatsapp(e.target.value) }
                            required 
                        />
                        {/* <input 
                            type="tel" 
                            name="whatsapp"
                            data-mask="(99) 99999-9999"
                            placeholder="(99) 99999-9999"
                            maxLength="15"
                            minLength="6"
                            pattern="\([0-9]{2}\) [0-9]{4,6}-[0-9]{3,4}$"
                            value={whatsapp}
                            onChange={(e) => setWhatsapp(e.target.value)}
                            required 
                        /> */}
                    </label>

                    <div id="submit-wrapper">
                        <button
                            disabled={isChecked}  
                            type="submit" 
                            className={`btn send-btn${isChecked ? ' send-btn--desabled' : ''}`}
                        >   
                            { isLoading 
                                ? <div className="loader"></div>
                                : <span>Enviar</span>
                            }
                        </button>
                        <div className="terms">
                            <label>
                                Ao clicar você concorda com os 
                                <Link href="/"><a>termos</a></Link>
                            </label>
                        </div>
                    </div>
                </form>
            </section>
            {
                show && 
                    <SnackBar 
                        type={snackType}
                        status={show} 
                    />
            }
            
            <Footer />
        </>
    )   
}

export default Volunteers;