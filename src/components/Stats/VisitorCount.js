import React, { useState, useEffect } from 'react';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      // Skip if we've already updated the counter in this session

      try {
        const response = await fetch('https://wo3npc6f78.execute-api.ap-south-1.amazonaws.com/prod/stats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({}),
        });

        const responseData = await response.json();
        const count = JSON.parse(responseData.body);
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
