import React, { useState, useEffect } from 'react';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch('https://b32d290v34.execute-api.ap-south-1.amazonaws.com/prod/stats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          }, // Added trailing comma
          body: JSON.stringify({}), // Empty body for the POST request, added trailing comma
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const count = JSON.parse(data.body); // Assuming `data.body` contains a stringified JSON
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
