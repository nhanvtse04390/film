'use client'
import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import styles from '../styles/MovieList.module.css';
import { fetchMovies } from '../../services/tmdb';

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
}

const MovieList: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [movies, setMovies] = useState<Movie[]>([]);
    const [totalPages, setTotalPages] = useState(1);
    const pageRangeDisplayed = 5;

    useEffect(() => {
        const getMovies = async () => {
            try {
                const data = await fetchMovies(currentPage);
                setMovies(data.results);
                setTotalPages(data.total_pages);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };
        getMovies();
    }, [currentPage]);

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const goToPage = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const renderPageNumbers = () => {
        const pages = [];
        const startPage = Math.max(currentPage - Math.floor(pageRangeDisplayed / 2), 1);
        const endPage = Math.min(startPage + pageRangeDisplayed - 1, totalPages);

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => goToPage(i)}
                    className={currentPage === i ? styles.activePage : ''}
                >
                    {i}
                </button>
            );
        }

        return pages;
    };

    return (
        <div className={styles.movieListContainer}>
            <div className={styles.movieList}>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
            <div className={styles.pagination}>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Previous
                </button>
                {renderPageNumbers()}
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default MovieList;
