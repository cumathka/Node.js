

export async function createMovie(pMovie) { return await moviesRepository.create(pMovie) }

export async function getAllMovies() { return await moviesRepository.getAll; }

export async function getMovieById(pId) { let movie = await moviesRepository.findById(pId); return movie; }

export async function updateMovie(pId, pUpdateMovie) { let movie = await moviesRepository.update(pId, pUpdateMovie); return movie; }

export async function deleteMovie(pId) { return await moviesRepository.remove(pId); } 
