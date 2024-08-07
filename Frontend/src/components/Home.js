import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos/random', {
          params: {
            client_id: 'hZaIQF4HZBWTPSylniCgrNquQorXai6foCxMn6qrj-o', // Pass API key as a query parameter
            query: 'news,journalism,reporting,media,breaking news,newsroom,press,coverage,headlines,articles,broadcast,photography,reporter,journalist', // Optional: Customize your search term
            orientation: 'landscape', // Optional: Customize photo orientation
            count: 10, // Number of photos to return
          },
        });
        setPhotos(response.data);
        setError(null); // Clear any previous errors
      } catch (error) {
        console.error('Error fetching photos:', error);
        console.error('Error details:', error.response);
        setError('Failed to fetch photos. Please check your API key and try again.');
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Welcome to Bue news website</h2>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Random Photos</h3>
        {error && <p className="text-red-600">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map(photo => (
            <div key={photo.id} className="bg-white p-4 rounded shadow">
              <img src={photo.urls.small} alt={photo.description || 'Unsplash Photo'} className="w-full h-48 object-cover rounded" />
              <p className="mt-2 text-sm text-gray-700">{photo.description || 'No description available'}</p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
