import React from 'react';
import Header from './Header';
import Main from './Main';
import Services from './Services';
import AboutUs from './AboutUs';
import Footer from './Footer';

import './styles.css'; // Importing styles.css
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Services />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
