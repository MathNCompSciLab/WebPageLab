"use client";
import { useState, useEffect } from 'react';
import styles from './bannerRotativo.css';

const BannerRotativo = ({ banners, intervalo = 5000 }) => {
  const [bannerActual, setBannerActual] = useState(0);
  const [transicionando, setTransicionando] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTransicionando(true);
      
      // Esperar a que termine la animación antes de cambiar el banner
      setTimeout(() => {
        setBannerActual((prev) => (prev + 1) % banners.length);
        setTransicionando(false);
      }, 1000); // Debe coincidir con la duración de la animación
    }, intervalo);

    return () => clearInterval(timer);
  }, [banners.length, intervalo]);

  return (
    <div className={styles.contenedorBanner}>
      <div className={`${styles.contenidoBanner} ${transicionando ? styles.saliendo : ''}`}>
        {banners[bannerActual]}
      </div>
      
      {/* Banner siguiente preparado para entrar */}
      <div className={`${styles.contenidoBanner} ${styles.siguiente} ${transicionando ? styles.entrando : ''}`}>
        {banners[(bannerActual + 1) % banners.length]}
      </div>
    </div>
  );
};

export default BannerRotativo;