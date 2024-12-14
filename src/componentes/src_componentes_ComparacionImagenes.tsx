import React from 'react';

interface PropiedadesComparacionImagenes {
  imagen1: string;
  imagen2: string;
  imagenResultado: string;
}

const ComparacionImagenes: React.FC<PropiedadesComparacionImagenes> = ({ imagen1, imagen2, imagenResultado }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Imagen 1</h3>
        <img src={imagen1} alt="Imagen 1" className="max-w-full h-auto" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Imagen 2</h3>
        <img src={imagen2} alt="Imagen 2" className="max-w-full h-auto" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Diferencias</h3>
        <img src={imagenResultado} alt="Diferencias" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default ComparacionImagenes;

