import './Tabla.css';

function Tabla({ pixeli, coloreazaPixel, esteApasat }) {
  return (
    <div className="tablaGrid">
      {pixeli.map((culoare, index) => (
        <div
          key={index}
          className="celula"
          style={{ backgroundColor: culoare || 'white' }}
          onMouseDown={() => coloreazaPixel(index)}
          onMouseEnter={() => {
            if (esteApasat) coloreazaPixel(index);
          }}
        ></div>
      ))}
    </div>
  );
}

export default Tabla;