import './PluginElastic.css';

// @ts-expect-error
// eslint-disable-next-line import/no-unresolved
import React, { useEffect, useState } from 'react';

import { getContent, queryCategories, queryCategory } from '../conn/funciones';

export default function PluginElastic() {
  const [options, setOptions] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categoryContent, setCategoryContent] = useState<string[]>([]);
  //======================= Listar las categorias =====================================
  useEffect(() => {
    async function loadCategories() {
      try {
        const data = await queryCategory();
        setOptions(data);
      } catch (error: any) {
        console.error('Error loading categories:', error.message);
      }
    }

    loadCategories();
  }, []);
  //======================= Obtener los titulos de cada categoria ==========================
  useEffect(() => {
    async function loadCategoryContent() {
      if (selectedCategory) {
        const data = await queryCategories(selectedCategory);
        setCategoryContent(data);
      }
    }

    loadCategoryContent();
  }, [selectedCategory]);

  function handleCategoryChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue === '' ? null : selectedValue);
  }
  //======================= Obtener el contenido del titulo sleccionado ==================
  async function getContentAndLog(titulo: string) {
    try {
      const response = await getContent(titulo);
      const data = await response?.json();
      const mark = data.hits[0]._source.mark;
      console.log('Resultado de getContent para', titulo, ':', mark);
    } catch (error: any) {
      console.error('Error al obtener el contenido:', error.message);
    }
  }

  function handleTitleClick(titulo: string) {
    getContentAndLog(titulo);
  }
  //======================= Crear nota =========================================
  function crearNota() {}

  return (
    <>
      <div className="filtro-categorias d-flex">
        <select
          className="Mydropdown"
          name="categories"
          onChange={handleCategoryChange}
        >
          <option value="" disabled selected>
            Seleccione categoría
          </option>
          {options.map((option: any) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <input className="plugin-input" type="text" placeholder="Buscar..." />

      <textarea
        className="plugin-text-area"
        placeholder="¿Cuéntame de qué habla el documento que quieres encontrar?"
        cols={40}
        rows={4}
      ></textarea>

      <div className="respuestaPlugin">
        {categoryContent.map((titulo: any, index: any) => (
          <h4
            className="titulos"
            key={index}
            onClick={() => handleTitleClick(titulo)}
          >
            {titulo}
          </h4>
        ))}
      </div>
    </>
  );
}
