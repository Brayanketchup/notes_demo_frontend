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
        

          <Routes>
            <Route path="/login" element={<Auth />} />

    
            {/* protected routes from login */}
            <Route path="/" element={ <ProtectedRoute> <Navbar /> <Home /> </ProtectedRoute>} />
            <Route path="/category/:category" element={ <ProtectedRoute> <Navbar /> <CategoryDisplay /> </ProtectedRoute>} />
            <Route path="/notes/:noteId" element={ <ProtectedRoute> <Navbar /> <NoteDisplay /> </ProtectedRoute>} />

          </Routes>


      </Router>


    </>
  );
}

export default App;
