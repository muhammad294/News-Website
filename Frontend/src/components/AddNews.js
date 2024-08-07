import React, { useState } from 'react';
import axios from 'axios';

const AddNews = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/api/news', { title, content })
      .then(response => {
        console.log('News added:', response.data);
        setTitle('');
        setContent('');
      })
      .catch(error => console.error('Error adding news:', error));
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Add News</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
        Add News
      </button>
    </form>
  );
};

export default AddNews;
