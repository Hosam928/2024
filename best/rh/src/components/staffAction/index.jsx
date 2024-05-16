import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/Api/employee', { mode: 'no-cors' })
     .then(response => response.json())
     .then(json => setData(json));
  }, []);

  return (
    <div>
       {data.map(item => (
        <div key={item.idPersonal}>
          <h2>{item.idPersonal}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;