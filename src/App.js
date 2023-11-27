import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ThemeRoutes from './ThemeRoutes';

function App() {
  return (
    <BrowserRouter>
      <ThemeRoutes />
    </BrowserRouter>
  );
}

export default App;