import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
            <footer className="footer items-center p-4 bg-neutral text-neutral-content rounded">
                <div className="items-center grid-flow-col">
                  <h1 className="font-bold text-xl">Daily Task Note</h1>
                  <p>Copyright &copy; 2022 - All right reserved Md. Mehedi Hasan</p>
                </div> 
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                  <a href='https://github.com/mehedy201' target="_blank" rel="noreferrer"><BsGithub className='text-2xl'/></a>
                  <a href='https://www.linkedin.com/in/md-mehedi-hasan-65b110178/' target="_blank" rel="noreferrer"><BsLinkedin className='text-2xl'/></a>
                  <a href='https://mehedi-hasan09.netlify.app/' target="_blank" rel="noreferrer"><CgWebsite className='text-2xl'/></a>                  
                </div>
            </footer>
    );
};

export default Footer;