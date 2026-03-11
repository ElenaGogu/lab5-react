import './Paleta.css';

function Paleta({ culori, culoareSelectata, setCuloareSelectata }) {
  return (
    <div className="paletaContainer">
      {culori.map((culoare) => (
        <div
          key={culoare.id} 
          className={`cercCuloare ${culoare.cod === culoareSelectata ? 'activ' : ''}`}
          style={{ backgroundColor: culoare.cod }}
          title={culoare.nume} 
          onClick={() => setCuloareSelectata(culoare.cod)}
        />
      ))}
    </div>
  );
}

export default Paleta;