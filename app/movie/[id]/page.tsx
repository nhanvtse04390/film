'use client'
import React, { useState, useEffect } from 'react';
import { fetchMovieDetails } from '../../../services/tmdb';
import styles from '../../styles/MovieDetail.module.css';

const MovieDetailPage: React.FC<{ params: { id: string } }> = ({ params }) => {
    const { id } = params;
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const data = await fetchMovieDetails(parseInt(id, 10));
                setMovie(data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };
        fetchMovie();
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.movieDetail}>
            <h2>{movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>
                Genres: {movie.genres.map((genre) => <span key={genre.id}>{genre.name} </span>)}
            </p>
        </div>
    );
};

export default MovieDetailPage;
