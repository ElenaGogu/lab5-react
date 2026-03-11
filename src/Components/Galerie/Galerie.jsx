import './Galerie.css';

function Galerie({ deseneSalvate, stergeDesen, incarcaDesen }) {
  return (
    <div className="galerie">
      <h3>SAVED DRAWINGS ({deseneSalvate.length})</h3>
      
      <div className="listaDesene">
        {deseneSalvate.map((desen) => (
          <div key={desen.id} className="itemGalerie">
            <div className="grilaMica">
              {desen.pixeli.map((culoare, i) => (
                <div 
                  key={i} 
                  className="miniP" 
                  style={{ backgroundColor: culoare || 'lightgray' }}
                />
              ))}
            </div>
            
            <div className="actiuni">
              <button className="btnLoad" onClick={() => incarcaDesen(desen.pixeli)}>Load</button>
              <button className="btnDelete" onClick={() => stergeDesen(desen.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galerie;