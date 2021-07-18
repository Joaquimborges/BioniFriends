import React from 'react';
import useFirestore from '../hooks/useFirestore';

const ButtonTalk = () => {

    const doc = useFirestore('Volunteers');
    const data = doc.docs;

    const selectVolunteer = () => {
        let random = null;
        
        if(data){
            random = Math.floor(Math.random() * data.length);
            const { whatsapp, name } = data[random];

            goToWhatsapp(whatsapp, name);
        }else{
            console.log("Sem usuarios cadastrados");
        }
        

    }
    const goToWhatsapp = (whatsapp, name) => {
        const msg = `Olá ${name}, tudo bem? Encontrei o seu número através do bionicfriends.com, poderia por gentileza me ajudar?`;

        let url = 'https://api.whatsapp.com/send?phone=' + whatsapp + '&text=' + encodeURIComponent(msg);
        
        window.open(url);

        console.log("end_url: ", url);
    }
    return(
        <button className="btn btn-talk" onClick={selectVolunteer}>
            Fale com um voluntário
        </button>
    )
}

export default ButtonTalk;