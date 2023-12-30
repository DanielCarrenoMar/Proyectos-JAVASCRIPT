import logo from './logo.svg';
import './App.css';
import { pathImage } from './Path';
import {Icon} from './Component';

/*
function App2() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Incrediable
        </p>
        <Button name="Cambio de color" />
        <Tabla users={users} />
      </header>
    </div>
  );
}
*/
function App() {
  return (
    <div>
      <header>

      <div className="Columns">
        {pathImage.map((item, index) => (
        <Icon key={index} name={item.name} icon={item.path} size={item.size} link={item.link} />
        ))}
      </div>
      
      </header>
    </div>
  );
}

export default App;
