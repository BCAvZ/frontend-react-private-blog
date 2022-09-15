import { useState } from 'react';
import './App.css';
import TopMenu from './components/TopMenu';
import Pages from './components/Pages';



function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
    <>
        <TopMenu />


        <Pages />
    </>
  );
}

export default App;
