import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Gallery from './Component/Gallery';
import Footer from './Component/Footer';
import TVShows from './Component/TVShows';
import MovieDetails from './Component/MovieDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div style={{ backgroundColor: '#221f1f', minHeight: '100vh' }}>
         
          <Navbar />

         
          <div className="container-fluid px-4">
            <Routes>
             
              <Route path="/" element={
                <>
                  <Gallery title="Trending Now" searchQuery="Harry Potter" />
                  <Gallery title="Watch it Again" searchQuery="Lord of the Rings" />
                  <Gallery title="New Releases" searchQuery="Star Wars" />
                </>
              } />

              
              <Route path="/tv-shows" element={<TVShows title="TV Shows" />} />

             
              <Route path="/movie-details/:movieId" element={<MovieDetails />} />
            </Routes>
          </div>

          
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
