
import './App.css';
import Car from './components/Car';
import { Nav } from './components/Nav';
// import { FormatName } from './components/FormatName';
import { Welcome } from './components/Welcome';

function App() {
  return (
    <div className="App">
      <h1>Hello word !!!</h1>
      <h1>my name is chandrakant bhosale !</h1>

       {/* <FormatName /> */}
      <Nav />
      <Welcome />
      <Car />
    </div>
  );
}

export default App;
