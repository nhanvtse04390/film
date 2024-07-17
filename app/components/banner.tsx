'use client'
import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/Banner.module.css';

interface Banner {
    src: string;
    alt: string;
}

const banners: Banner[] = [
    { src: '/images/banner-1.jpg', alt: 'Banner 1' },
    { src: '/images/banner-2.webp', alt: 'Banner 2' },
    { src: '/images/banner-3.jpg', alt: 'Banner 3' },
    { src: '/images/banner-1.jpg', alt: 'Banner 4' },
    { src: '/images/banner-1.jpg', alt: 'Banner 5' },
];

const Banner: React.FC = () => {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef<number | null>(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = window.setTimeout(
            () => setCurrent((prevIndex) => (prevIndex === banners.length - 1 ? 0 : prevIndex + 1)),
            5000
        );

        return () => {
            resetTimeout();
        };
    }, [current]);

    const prevSlide = () => {
        resetTimeout();
        setCurrent((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        resetTimeout();
        setCurrent((prevIndex) => (prevIndex === banners.length - 1 ? 0 : prevIndex + 1));
    };

    const goToSlide = (index: number) => {
        resetTimeout();
        setCurrent(index);
    };

    return (
        <div className={styles.bannerContainer}>
            <div className={styles.arrowLeft} onClick={prevSlide}>
                &#9664;
            </div>
            <div className={styles.banner}>
                <img src={banners[current].src} alt={banners[current].alt} />
            </div>
            <div className={styles.arrowRight} onClick={nextSlide}>
                &#9654;
            </div>
            <div className={styles.dots}>
                {banners.map((banner, index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${current === index ? styles.active : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Banner;