import { Link } from "react-router-dom";
import "../../../src/App.scss"
import "../Home/Home.scss"
import "../Funko/Funko.scss"

import Jinbei from './junbei.png';
import Katakuri from './katakuri.png';
import Law from './law.webp';
import Luffy from './luffy.png';
import Luffy2 from './luffy2.png';
import Zoro from './zoro.png';
import Ace from './ace.png';
import Bigmom from './bigmom.jpg';
import Chopper from './chopper.png';
import Doflamingo from './doflamingo.png';
import Luffy3 from './luffy3.webp';
import Robin from './robin.webp';
import Sabo from './sabo.png';
import Yamato from './yamato.png';
import Zoro2 from './zoro2.webp';

const Home = () => {
  return (
    <div className="home">
    <header className="home-header">
      <h1>Bienvenido a la Funko Tienda</h1>
      <p>Descubre los Funko Pops más vendidos</p>
    </header>
    <section className="home-gallery">
      <div className="home-gallery-item">
        <img src={Jinbei} alt="Funko Pop Jinbei" />
      </div>
      <div className="home-gallery-item">
        <img src={Katakuri} alt="Funko Pop Katakuri" />
      </div>
      <div className="home-gallery-item">
        <img src={Law} alt="Funko Pop Law" />
      </div>
      <div className="home-gallery-item">
        <img src={Luffy} alt="Funko Pop Luffy" />
      </div>
      <div className="home-gallery-item">
        <img src={Luffy2} alt="Funko Pop Luffy2" />
      </div>
      <div className="home-gallery-item">
        <img src={Zoro} alt="Funko Pop Zoro" />
      </div>
      <div className="home-gallery-item">
        <img src={Ace} alt="Funko Pop Ace" />
      </div>
      <div className="home-gallery-item">
        <img src={Bigmom} alt="Funko Pop Bigmom" />
      </div>
      <div className="home-gallery-item">
        <img src={Chopper} alt="Funko Pop Chopper" />
      </div>
      <div className="home-gallery-item">
        <img src={Doflamingo} alt="Funko Pop Doflamingo" />
      </div>
      <div className="home-gallery-item">
        <img src={Luffy3} alt="Funko Pop Luffy3" />
      </div>
      <div className="home-gallery-item">
        <img src={Robin} alt="Funko Pop Robin" />
      </div>
      <div className="home-gallery-item">
        <img src={Sabo} alt="Funko Pop Sabo" />
      </div>
      <div className="home-gallery-item">
        <img src={Yamato} alt="Funko Pop Yamato" />
      </div>
      <div className="home-gallery-item">
        <img src={Zoro2} alt="Funko Pop Zoro2" />
      </div>
      <br />
      <button className="button"> <Link to={"/funkos"} className="nav-link">Ir a la tienda</Link></button>
    </section>
  </div>
  )
}

export default Home