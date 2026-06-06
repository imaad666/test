import React, { useState, useEffect } from 'react';
import { getTestData } from './api';

function App() {
  const [testData, setTestData] = useState(null);

  useEffect(() => {
    const fetchTestData = async () => {
      const data = await getTestData();
      setTestData(data);
    };
    fetchTestData();
  }, []);

  return (
    <div>
      <h1>Test Data</h1>
      {testData ? <p>{testData}</p> : <p>Loading...</p>}
    </div>
  );
}

export default App;
