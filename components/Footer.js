import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return(
        <footer className="footer">
            <span> © 2021 bionicfriends </span>
            <span>
                Desenvolvido por
                <Link href="https://www.linkedin.com/in/eug%C3%AAnio-ros%C3%A1rio-mbi-498544128/">
                    <a  rel="noopener noreferrer" 
                        target="_blank" 
                    >
                        Eugenio Rosario Mbi
                    </a>
                </Link>
            </span>
        </footer>
    )
}

export default Footer