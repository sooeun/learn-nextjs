import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export const metadata = {
    title: "MovieDetail",
};

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

export default async function MovieDetail({ params: { id } }: { params: { id: string } }) {
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
            <h3>Movie detail page</h3>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie videos</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    );
}
