// InterestSelection.js
import React, { useState } from 'react';

const InterestSelection = ({ interests, updateInterests }) => {
  const [selectedInterests, setSelectedInterests] = useState([...interests]);

  const handleInterestChange = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(item => item !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleSaveInterests = () => {
    updateInterests(selectedInterests);
  };

  return (
    <div>
      {interests.map(interest => (
        <label key={interest}>
          <input
            type="checkbox"
            checked={selectedInterests.includes(interest)}
            onChange={() => handleInterestChange(interest)}
          />
          {interest}
        </label>
      ))}
      <button onClick={handleSaveInterests}>Save Interests</button>
    </div>
  );
};

export default InterestSelection;
