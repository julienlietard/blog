import React from 'react';
import './styles.css';
import scientists from '../../../assets/gif/scientists.gif';
import { AiFillCaretDown } from 'react-icons/ai';

const scrollToBottom = () => {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
    });
};
const Header = () => (
  <header className='home-header'>
    <h5>Bienvenue dans mon</h5>
    <h1>
      Labo
    </h1>
    <h5 className="text-light">
        Vous y trouverez une variété d'articles captivants sur des sujets qui me passionnent<br/>
        tels que l'Informatique, l'Astronomie et l'Astrophysique <span className="cursor">|</span>
        <br/>
        <a href="https://www.julienlietard.fr">Visiter mon portfolio</a>
    </h5>
      <a href={null} className="btn btn-primary" id="scrolldown" onClick={scrollToBottom}>Parcourir mes articles <AiFillCaretDown/></a>
    <div className="illustration">
        <img src={scientists} alt="illustration"/>
    </div>
  </header>
);

export default Header;
