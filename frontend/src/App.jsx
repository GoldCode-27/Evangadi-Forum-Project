import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {Auth} from './pages/Auth/Auth';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;