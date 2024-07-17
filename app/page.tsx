import Image from "next/image";
import Banner from '../app/components/banner';
import MovieList from "@/app/components/MovieList";

export default function Home() {
    return (
        <div>
            <Banner />
            <MovieList />
            {/* Các phần khác của trang chủ */}
        </div>
    );
}