import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, ScrollToTop } from './components';
import { Home, NoteDisplay, CategoryDisplay, Auth, Task, Deleted, Archive } from './pages';
import ProtectedRoute from './components/ProtectedRoute';



function App() {
  return (
    <>
      <Router>
        <ScrollToTop />


        <Routes>
          <Route path="/login" element={<Auth />} />


          {/* protected routes from login */}
          {/* <Route path="/" element={ <ProtectedRoute> <Navbar /> <Home /> </ProtectedRoute>} /> */}
          {/* <Route path="/category/:category" element={ <ProtectedRoute> <Navbar /> <CategoryDisplay /> </ProtectedRoute>} /> */}
          {/* <Route path="/notes/:noteId" element={ <ProtectedRoute> <Navbar /> <NoteDisplay /> </ProtectedRoute>} /> */}
          
          <Route path="/" element={<ProtectedRoute>  <Home /> </ProtectedRoute>} />
          <Route path="/category/:category" element={<ProtectedRoute>  <CategoryDisplay /> </ProtectedRoute>} />
          <Route path="/Notes" element={<ProtectedRoute>  <NoteDisplay /> </ProtectedRoute>} />
          <Route path="/Task" element={<ProtectedRoute>  <Task /> </ProtectedRoute>} />
          <Route path="/Deleted" element={<ProtectedRoute>  <Deleted /> </ProtectedRoute>} />
          <Route path="/Archive" element={<ProtectedRoute>  <Archive /> </ProtectedRoute>} />
        </Routes>


      </Router>


    </>
  );
}

export default App;
