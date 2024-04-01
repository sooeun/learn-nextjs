async function getVideos(id: string) {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    throw new Error("고장났어~~~");
    // const response = await fetch(`${API_URL}/${id}/videos`);
    // return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
    const video = await getVideos(id);
    return <h6>{JSON.stringify(video)}</h6>;
}
