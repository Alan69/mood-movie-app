import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    axios.get('/api/moods')
      .then(response => {
        setMoods(response.data);
      })
      .catch(error => {
        console.error('Error fetching moods:', error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Какое у вас настроение?</h1>
      <div className="grid grid-cols-3 gap-4">
        {moods.map((mood) => (
          <a
            key={mood._id}
            href={`/mood/${mood.name}`}
            className="p-4 border rounded hover:bg-gray-100"
          >
            {mood.name}
          </a>
        ))}
      </div>
    </div>
  );
}
