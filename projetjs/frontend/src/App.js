import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      
   <Navbar/>
    <HomeScreen/>
    </div>
  );
}

export default App;
