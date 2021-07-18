import React, {useState, useEffect } from 'react';
import Link from 'next/link';

 const Header = () => {
    const [activeLink, setactiveLink] = useState(null);

    const [links] = useState([
        { id: 0, name: "Home", to: "/" },
        { id: 1, name: "Seja voluntário", to: "/volunteers" },
        { id: 2, name: "Sobre nós", to: "/about" }
    ]);

    useEffect( () => {
        const pathName = window.location.pathname;
        
        links.forEach( link =>{
            if (pathName === link.to) {
                setactiveLink(link.id)
            }
        });

    },[links]);

    const activateLink = id => {
        setactiveLink(id);
    }
    const openMenu = () => {
        const links = document.querySelector('.links');
        console.log("links: ", links)
        links.classList.toggle('links--show')
    }

  return (
    <nav className="header">
        <Link href="/">
            <a className="header__logo">
                Bionic Friends
            </a>
        </Link>

        <MenuIcon 
            callBack={openMenu} 
        />

        <div className="links">
            {links.map( (link, index) => (
                <Link href={link.to} key={index}>
                    <a
                        onClick={() => activateLink(link.id)}
                        className={"btn links__item " + (link.id === activeLink ? "link__item--active" : "")}
                    >
                        {link.name}
                    </a>
                </Link>
            ))}
        </div>
    </nav>
  )
}


function MenuIcon ({callBack}){
    return (
        <div onClick={callBack} className="menuIcon">
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="14" viewBox="0 0 38 14" fill="none">
                <path d="M0.0999985 14H37.9V11.2H0.0999985V14ZM0.0999985 0V2.8H37.9V0H0.0999985ZM0.0999985 8.4H37.9V5.6H0.0999985V8.4Z" fill="black"/>
            </svg>
        </div>
    )
}
export default Header;