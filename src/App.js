import './App.css';
import { BrowserRouter} from 'react-router-dom';
import ThemeRoutes from './ThemeRoutes';

function App() {
  return (
    <BrowserRouter>
      <ThemeRoutes />
    </BrowserRouter>
  );
}

export default App;