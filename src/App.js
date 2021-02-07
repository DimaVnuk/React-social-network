import './App.css';
import { render } from '@testing-library/react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profiles from './components/Profiles/Profiles';




const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profiles />

    </div>
  );
}

export default App;
