import { useEffect, useState } from 'react';

export default function App() {
  const [favMovies, setFavMovies] = useState([]);

  useEffect(() => {
    const getfavMovies = async () => {
      const data = await fetch('http://localhost:8000/favMovies');
      const favMovies = await data.json();

      setFavMovies(favMovies);
    };

    getfavMovies();
  }, [setFavMovies]);

  if (!favMovies.length) return <h1>Loading...</h1>;
  console.log(favMovies);

  return (
    <div>
      {favMovies.map(m => (
        <div>
          <p>{m.title}</p>
          <p>{m.main_character}</p>
          <p>{m.year_released}</p>
        </div>
      ))}
    </div>
  );
}
