'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/MovieCard.module.css';

interface Props {
    movie: {
        id: number;
        title: string;
        overview: string;
        poster_path: string;
    };
}

const MovieCard: React.FC<Props> = ({ movie }) => {
    const router = useRouter();

    const handleMovieClick = () => {
        router.push(`/movie/${movie.id}`);
    };

    return (
        <div className={styles.movieCard} onClick={handleMovieClick}>
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
            <div className={styles.movieInfo}>
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
            </div>
        </div>
    );
};

export default MovieCard;
