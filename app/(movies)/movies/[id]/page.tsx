import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

// export const metadata = {
//     title: "Home",
// };

interface IParams {
    params: { id: string };
}
export async function generateMetadata({ params: { id } }: IParams) {
    const movie = await getMovie(id);
    return {
        title: movie.title,
    };
}

// async function getMovie(id: string) {
//     await new Promise((resolve) => setTimeout(resolve, 5000));
//     const response = await fetch(`${API_URL}/${id}`);
//     return response.json();
// }

// async function getVideos(id: string) {
//     await new Promise((resolve) => setTimeout(resolve, 5000));
//     const response = await fetch(`${API_URL}/${id}/videos`);
//     return response.json();
// }

export default async function MovieDetail({ params: { id } }: IParams) {
    // 순차적 fetch -> 시간이 오래 걸림.
    // const movie = await getMovie(id);
    // const videos = await getVideos(id);

    // 병렬 fetch
    // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

    // <Suspense fallback={}></Suspense>
    // 컴포넌트를 기다린다.
    // 이 페이지에서 fetch 되지 않기 때문에 loading.tsx 가 사용되지 않는다.

    return (
        <div>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie videos</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    );
}
