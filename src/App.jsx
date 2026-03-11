import { useState } from 'react';
import listaCulori from './data/culori.json';
import Paleta from './Components/Paleta/Paleta';
import Tabla from './Components/Tabla/Tabla';
import Galerie from './Components/Galerie/Galerie';
import './App.css';

function App() {
  const [culoareCurenta, setCuloareCurenta] = useState(listaCulori[0].cod);
  const [pixeli, setPixeli] = useState(Array(400).fill(''));
  const [esteApasat, setEsteApasat] = useState(false);
  const [deseneSalvate, setDeseneSalvate] = useState([]);

  const coloreazaPixel = (index) => {
    const copiePixeli = [...pixeli];
    copiePixeli[index] = culoareCurenta;
    setPixeli(copiePixeli);
  };

  const salveazaInGalerie = () => {
    const desenNou = { id: Date.now(), pixeli: [...pixeli] };
    setDeseneSalvate([...deseneSalvate, desenNou]);
  };

  return (
    <div 
      className="aplicatiaMain"
      onMouseDown={() => setEsteApasat(true)}
      onMouseUp={() => setEsteApasat(false)}
    >
      <div className="header">
        <Paleta culori={listaCulori} culoareSelectata={culoareCurenta} setCuloareSelectata={setCuloareCurenta} />
        <button className="saveBtn" onClick={salveazaInGalerie}>Save Drawing</button>
        <button className="resetBtn" onClick={() => setPixeli(Array(400).fill(''))}>Reset</button>
      </div>

      <div className="contentul">
        <Tabla pixeli={pixeli} coloreazaPixel={coloreazaPixel} esteApasat={esteApasat} />
        <Galerie 
          deseneSalvate={deseneSalvate} 
          stergeDesen={(id) => setDeseneSalvate(deseneSalvate.filter(d => d.id !== id))}
          incarcaDesen={(p) => setPixeli(p)}
        />
      </div>
    </div>
  );
}

export default App;
