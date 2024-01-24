import './PluginElastic.css';

// @ts-expect-error
// eslint-disable-next-line import/no-unresolved
import React, { useEffect, useState } from 'react';

import { queryCategories, queryCategory } from '../conn/funciones';

export default function PluginElastic() {
  const [options, setOptions] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categoryContent, setCategoryContent] = useState<string[]>([]);

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
        {categoryContent.map((content: any, index: any) => (
          <h4 className="titulos" key={index}>
            {content}
          </h4>
        ))}
      </div>
    </>
  );
}
