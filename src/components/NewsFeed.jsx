// NewsFeed.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsFeed = ({ interests }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
        params: {
          apiKey: 'YOUR_API_KEY',
          category: interests.join(','),
        },
      });

      setArticles(response.data.articles);
    };

    fetchArticles();
  }, [interests]);

  return (
    <div>
      {articles.map(article => (
        <div key={article.url}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
