import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, ScrollToTop } from './components';
import { Home, NoteDisplay, CategoryDisplay, Auth } from './pages';
import ProtectedRoute from './components/ProtectedRoute';



function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <main className='pt-20'>

          <Routes>
            <Route path="/login" element={<Auth />} />

            <Route path="/" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
            <Route path="/category/:category" element={
              <ProtectedRoute>
                <CategoryDisplay />
              </ProtectedRoute>
            } />
            <Route path="/notes/:noteId" element={
              <ProtectedRoute>
                <NoteDisplay />
              </ProtectedRoute>
            } />

          </Routes>

        </main>

      </Router>


    </>
  );
}

export default App;
