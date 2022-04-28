const movies = [
    {
        "id": 10002,
        "name": "die hard",
        "year": "1999",
        "genre": "action",
        "income": 10000000
    },
    {
        "id": 10003,
        "name": "Yesil Yol",
        "year": "2003",
        "genre": "drama",
        "income": 20000000
    },
    {
        "id": 10004,
        "name": "Esref Pasalilar",
        "year": "2010",
        "genre": "komedi",
        "income": 1000000
    }
]

export function createMovie(pMovie) {
    movies.push(pMovie);
    return pMovie;
}

export function getAllMovies() {
    return movies;
}

export function getMovieById(pId) {
    const movie = movies.find(m => m.id == pId);
    return movie;
}

export function updateMovie(pId, pUpdateMovie) {
    let movie = getMovieById(pId);
    movie.name = pUpdateMovie.name;
    movie.year = pUpdateMovie.year;
    movie.genre = pUpdateMovie.genre;
    movie.income = pUpdateMovie.income;
}

export function deleteMovie(pId) {
    movies = movies.filter(m => m.id != pId);
}
