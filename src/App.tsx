import './App.css';
import { fetchToken } from './utils/fetchToken';
import { useEffect } from 'react';
import { tokenUrl } from './constants';

const App = () => {

const getToken = async () => {
  const token = await fetchToken(tokenUrl);

  console.log(token.access_token); 
}

useEffect(() => {
  getToken();
}, [])
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
