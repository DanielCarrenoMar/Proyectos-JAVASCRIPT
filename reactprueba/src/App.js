import image from './Images/ucab_logo.png';
import './App.css';
import { pathImage } from './Path';
import {Icon} from './Component';

function App() {
  return (
    <div>
      <header>
      <div className="Columns">
        <img src={image} className="Logo"/>
        {pathImage.map((item, index) => (
        <Icon key={index} name={item.name} icon={item.path} size={item.size} link={item.link} image={item.image} />
        ))}
      </div>
      </header>
      <div className='PostColumns'>
        aaaaaaaaaaa
      </div>
    </div>
  );
}

export default App;
