// components/MovieCard.tsx
import React from 'react';
import styles from '../styles/MovieCard.module.css';
import Link from 'next/link'; // Import Link từ Next.js thay vì sử dụng useRouter

interface Props {
    movie: {
        id: number;
        title: string;
        overview: string;
        poster_path: string;
    };
}

const MovieCard: React.FC<Props> = ({ movie }) => {
    return (
        <Link href={`/movies/${movie.id}`} className={styles.movieCard}>
                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
                <div className={styles.movieInfo}>
                    <h3>{movie.title}</h3>
                    <p>{movie.overview}</p>
                </div>
        </Link>
    );
};

export default MovieCard;
