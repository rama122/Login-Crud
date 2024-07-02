import { useEffect, useState } from 'react';
import '../../src/App.css'
import Login from '../Login/index.js';
import DashBoard from '../DashBoard/index.js';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null)

  useEffect(() => {
    setIsAuthenticated(JSON.parse(localStorage.getItem("is_Authenticated")))
  }, [])
  return (
    <div>
      <>
        {
          isAuthenticated ? (
            <DashBoard setIsAuthenticated={setIsAuthenticated} />) : (
            <Login setIsAuthenticated={setIsAuthenticated} />)
        }
      </>
    </div>
  );
}

export default App;
