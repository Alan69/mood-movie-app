import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Mood() {
  const router = useRouter();
  const { mood } = router.query;
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (mood) {
      axios.get(`/api/movie?moods=${mood}`)
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Error fetching movie:', error);
        });
    }
  }, [mood]);

  if (!movies) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-4xl font-bold mb-4">Фильмы для {mood}</h1> */}
      {movies.map((movie) => (
        <div key={movie._id} className="border p-4 rounded mb-4">
          <h2 className="text-2xl">{movie.title}</h2>
          <p>{movie.plot}</p>
          {/* <a
            href={movie.trailerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Full screen
          </a> */}

          <iframe width="560" 
          height="315" 
          src={movie.trailerLink} 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>
          </iframe>

        </div>
      ))}
    </div>
  );
}
