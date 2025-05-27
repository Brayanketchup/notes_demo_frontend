import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages';


function App() {
  return (
 <>
      <Router>
        
        <main className='pt-20'>

          <Routes>
            <Route path="/" element={<Home />} />
            


          </Routes>
        </main>

      </Router>


    </>
  );
}

export default App;
