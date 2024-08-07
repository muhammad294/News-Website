import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/news')
      .then(response => setNews(response.data))
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/news/${id}`)
      .then(() => {
        setNews(news.filter(article => article._id !== id));
      })
      .catch(error => console.error('Error deleting news:', error));
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">News</h2>
      <ul className="space-y-4">
        {news.map(article => (
          <li key={article._id} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold">{article.title}</h3>
            <p>{article.content}</p>
            <div className="flex space-x-4">
              <Link to={`/edit-news/${article._id}`} className="text-blue-600">Edit</Link>
              <button 
                onClick={() => handleDelete(article._id)} 
                className="text-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
