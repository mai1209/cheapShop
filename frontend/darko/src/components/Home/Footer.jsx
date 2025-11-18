import style from "../../styles/Footer.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { TbBrandLinktree } from "react-icons/tb";

function Footer() {
  return (
    <div className={style.container}>
      <p className={style.title}>Iconic brands we align with</p>
      <div className={style.imgContainer}>
        <img src="./img1.png" alt="img1" />
        <img src="./img2.png" alt="img2" />
        <img src="./img3.png" alt="img3" />
        <img src="./img4.png" alt="img4" />
        <img src="./img5.png" alt="img5" />
        <img src="./img6.png" alt="img6" />
        <img src="./img7.png" alt="img7" />
        <img src="./img8.png" alt="img8" />
        <img src="./img9.png" alt="img9" />
        <img src="./img10.png" alt="img10" />
      </div>
      <hr />
      <div className={style.containerLinks}>
        <div className={style.links}>
          <p className={style.p}>CONOCE NUESTRA LOGISTICA</p>
          <a href="">Opciones de pago</a>
          <a>Somos de Argentina</a>
          <a href="">Nuestro impacto y trayectoria</a>
        </div>
        <div className={style.links}>
          <p className={style.p}>CONTACTO</p>
          <a href="https://wa.me/5493425543308">+54 9 3425 54-3308</a>
          <a href="">darkoclothesglobal@market.com</a>
          <div>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
          </div >
        </div>
      </div>
      <div className={style.powered}>
        <p>&lt; Powered by Codex ASTRA /&gt;</p>
      </div>
    </div>
  );
}

export default Footer;
