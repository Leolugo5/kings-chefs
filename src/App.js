import Home from './pages/Home/Home';
import './styles/style.scss'
import NavBar from './components/NavBar/NavBar.jsx'
import Packs from './components/Packs/Packs';

function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <Home/>
      <Packs />
    
    </div>
  );
}

export default App;
