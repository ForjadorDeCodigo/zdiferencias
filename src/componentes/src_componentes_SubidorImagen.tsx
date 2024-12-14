import React from 'react';
import { Button } from "@/components/ui/button"

interface PropiedadesSubidorImagen {
  onImagenSubida: (imagen: string) => void;
  etiqueta: string;
}

const SubidorImagen: React.FC<PropiedadesSubidorImagen> = ({ onImagenSubida, etiqueta }) => {
  const manejarCambioArchivo = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const archivo = evento.target.files?.[0];
    if (archivo) {
      const lector = new FileReader();
      lector.onloadend = () => {
        onImagenSubida(lector.result as string);
      };
      lector.readAsDataURL(archivo);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{etiqueta}</label>
      <input
        type="file"
        accept="image/*"
        onChange={manejarCambioArchivo}
        className="hidden"
        id={`subida-archivo-${etiqueta}`}
      />
      <Button as="label" htmlFor={`subida-archivo-${etiqueta}`}>
        Elegir Archivo
      </Button>
    </div>
  );
};

export default SubidorImagen;

