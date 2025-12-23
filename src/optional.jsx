const Movie = () => {
    const movie = {
        title: "Love Today-Official Trailer",
        trailerEmbededUrl:" https://www.youtube.com/embed/FaQe8JFGdaM"

    }
    return (
        <>
            <h2>{movie.title}</h2>

            {movie.trailerEmbededUrl ? (
                <div>
                    
                    <iframe
                        width="1400"
                        height="400"
                        src={movie.trailerEmbededUrl}
                        title="YouTube video player"
                        allowFullScreen
                    ></iframe>
                </div>
            ) : (
                <p>No trailer available</p>
            )}
        </>
    );
};

export default Movie