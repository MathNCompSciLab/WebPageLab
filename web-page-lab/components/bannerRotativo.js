"use client";
import { useState, useEffect } from 'react';
import styles from './bannerRotativo.module.css';

const BannerRotativo = ({ banners, intervalo = 5000 }) => {
  const [bannerActual, setBannerActual] = useState(0);
  const [transicionando, setTransicionando] = useState(false);
  const [anterior, setAnterior] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTransicionando(true);
      
     
      setTimeout(() => {
        setBannerActual((prev) => (prev + 1) % banners.length);
        setTransicionando(false);
      }, 1000); 
    }, intervalo);
    

    return () => clearInterval(timer);
  }, [banners.length, intervalo]);

  return (
    <div className={styles.contenedorBanner}>
     <button
        className={styles.botonAnterior}
        onClick={() => {
          if((bannerActual !== 0)||(!anterior)) {
          setAnterior(true);
          setTimeout(() => {
            setBannerActual((prev) => (prev - 1 + banners.length) % banners.length);
            setAnterior(false);
          }, 1000); }
        }}>
        ➤
      </button>
      <div className={`${styles.contenidoBanner} ${styles.anterior} ${anterior ? styles.entrando: ''}`} style={{ transitionDuration: anterior ? '1s' : '0s' }}>
        {banners[(bannerActual - 1) % banners.length]}
      </div>
      

      <div className={`${styles.contenidoBanner} ${transicionando ? styles.saliendoIzquierda : ''} ${anterior ? styles.saliendoDerecha : ''}`} style={{ transitionDuration: (transicionando||anterior) ? '1s' : '0s' }}>
        {banners[bannerActual]}
      </div>
      
      <div className={`${styles.contenidoBanner} ${styles.siguiente} ${transicionando ? styles.entrando : ''}`} style={{ transitionDuration: transicionando ? '1s' : '0s' }}>
        {banners[(bannerActual + 1) % banners.length]}
      </div>
      &lt;
      <button
        className={styles.botonSiguiente}
        onClick={() => {
          if((!transicionando))
          setTransicionando(true);
          setTimeout(() => {
            setBannerActual((prev) => (prev + 1) % banners.length);
            setTransicionando(false);
          }, 1000); 
        }}>
       ➤
      </button>

    </div>
  );
};

export default BannerRotativo;