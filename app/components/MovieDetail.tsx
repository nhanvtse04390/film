'use client'
import React, { useState, useEffect } from 'react';
import { fetchMovieDetails } from '../../services/tmdb';

interface Props {
    movieId: number;
}

interface Movie {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    poster_path: string;
    genres: { id: number; name: string }[];
}

const MovieDetail: React.FC<Props> = ({ movieId }) => {
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const data = await fetchMovieDetails(movieId);
                setMovie(data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };
        fetchMovie();
    }, [movieId]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>
                Genres:{' '}
                {movie.genres.map((genre) => (
                    <span key={genre.id}>{genre.name} </span>
                ))}
            </p>
        </div>
    );
};

export default MovieDetail;
