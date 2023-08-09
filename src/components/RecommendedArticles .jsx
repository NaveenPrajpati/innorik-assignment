// RecommendedArticles.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecommendedArticles = ({ userInterests, userSavedArticles }) => {
  const [recommendedArticles, setRecommendedArticles] = useState([]);

  useEffect(() => {
    const fetchRecommendedArticles = async () => {
      try {
        const response = await axios.get('/api/recommendations', {
          params: {
            interests: userInterests.join(','),
          },
        });

        setRecommendedArticles(response.data);
      } catch (error) {
        // Handle error
      }
    };

    fetchRecommendedArticles();
  }, [userInterests]);

  return (
    <div>
      <h2>Recommended Articles</h2>
      {recommendedArticles.map(article => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </div>
      ))}
    </div>
  );
};

export default RecommendedArticles;
