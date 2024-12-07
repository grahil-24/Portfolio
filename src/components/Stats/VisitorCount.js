import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await axios.post('https://b32d290v34.execute-api.ap-south-1.amazonaws.com/prod/stats', {});
        const count = JSON.parse(response.data.body);
        setVisitorCount(count);
      } catch (err) {
        console.error('Error fetching visitor count:', err);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <div className="text-sm text-gray-600 mt-4">
      {visitorCount !== null && (
        <p>
          Visitors: {visitorCount}
        </p>
      )}
    </div>
  );
};

export default VisitorCounter;
