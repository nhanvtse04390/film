'use client'
import React from 'react';
import { useRouter } from 'next/router';
import MovieDetail from '../../app/components/MovieDetail';

const MoviePage: React.FC = () => {
    console.log("vao day roi nhi")
    const router = useRouter();
    const { id } = router.query;

    if (typeof id !== 'string') {
        return null; // Handle case when id is not available yet
    }

    return (
        <div>
            <h1>Movie Detail</h1>
            <MovieDetail movieId={parseInt(id, 10)} />
        </div>
    );
};

export default MoviePage;
