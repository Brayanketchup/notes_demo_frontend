import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, ScrollToTop } from './components';
import { Home, NoteDisplay, CategoryDisplay } from './pages';


function App() {
  return (
 <>
      <Router>
        <ScrollToTop/>
        <Navbar/>
        <main className='pt-20'>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:category" element={<CategoryDisplay />} />
            <Route path="/notes/:noteId" element={<NoteDisplay />} />

          </Routes>

        </main>

      </Router>


    </>
  );
}

export default App;
