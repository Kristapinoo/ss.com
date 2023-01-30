import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://kakis123-eiddpp.5sc6y6-2.usa-e2.cloudhub.io/getRandomCar")
      .then(response => response.json())
      .then(responseData => setData(responseData));
  }, []);

  return (
    <div>
      {Object.keys(data).map(key => (
        <div key={key}>
          {key}: {data[key]}
        </div>
      ))}
    </div>
  );
}

export default App;