import style from "../../styles/AboutUs.module.css";

function AboutUs() {
  return (
    <div className={style.aboutUs}>
      <h2 id="about" className={style.title}>
        Get to Know Us Better
      </h2>

      <div className={style.containerInfo}>
        <div className={style.Info}>
    
          <p className={style.p}>
            Since @2017, we’ve been slinging high-quality streetwear globally, with rapid shipping, tailored service, and 1,000+ happy customers worldwide.
          </p>
          <p className={style.p}>Clothing impacts personal and professional image, boosts confidence, and shapes how others perceive you. Additionally, choosing high-quality, versatile pieces reduces long-term costs and maximizes their use. A strong presentation can open doors and create opportunities. -Darko Clothes</p>
        
          <div className={style.imgContainer}>
         
            <div className={style.imgContainer2}>
              <img
                className={style.imgAbout}
                src="../../../logoAbout.png"
                alt="img-equipo2"
              />
            
            </div>
          </div>
        </div>
      </div>

  

   
    </div>
  );
}

export default AboutUs;
