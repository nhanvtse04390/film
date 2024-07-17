import axios from 'axios';

const API_KEY = '618e9011b4745ec3d94086e1e5237bf6'; // Thay bằng API key của bạn
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (page: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/popular`, {
            params: {
                api_key: API_KEY,
                page,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching movie:', error);
        throw error;
    }
};

export const fetchMovieDetails = async (movieId: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
            params: {
                api_key: API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        throw error;
    }
};
