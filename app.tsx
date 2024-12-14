import React, { useState } from 'react';
import SubidorImagen from './componentes/SubidorImagen';
import ComparacionImagenes from './componentes/ComparacionImagenes';
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

const App: React.FC = () => {
  const [imagen1, setImagen1] = useState<string | null>(null);
  const [imagen2, setImagen2] = useState<string | null>(null);
  const [imagenResultado, setImagenResultado] = useState<string | null>(null);
  const [margenBorde, setMargenBorde] = useState<number>(50);

  const manejarComparacion = async () => {
    if (imagen1 && imagen2) {
      const respuesta = await fetch('/api/comparar-imagenes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imagen1, imagen2, margenBorde }),
      });
      const datos = await respuesta.json();
      setImagenResultado(datos.imagenResultado);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Herramienta de Comparación de Imágenes</h1>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <SubidorImagen onImagenSubida={setImagen1} etiqueta="Subir Imagen 1" />
        <SubidorImagen onImagenSubida={setImagen2} etiqueta="Subir Imagen 2" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Margen del Borde</label>
        <Slider
          value={[margenBorde]}
          onValueChange={(valor) => setMargenBorde(valor[0])}
          max={100}
          step={1}
        />
        <span className="text-sm text-gray-500">Valor actual: {margenBorde}</span>
      </div>
      <Button onClick={manejarComparacion} disabled={!imagen1 || !imagen2}>
        Comparar Imágenes
      </Button>
      {imagenResultado && <ComparacionImagenes imagen1={imagen1} imagen2={imagen2} imagenResultado={imagenResultado} />}
    </div>
  );
};

export default App;

