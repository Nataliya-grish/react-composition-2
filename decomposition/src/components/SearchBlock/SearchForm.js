import React from "react";

/**
 * Компонент "Форма поиска"
 * Обеспечивает вывод формы поиска
 * Выводит окно ввода
 * Выводит кнопку отрправки запроса
 */

export default function SearchForm() {
  return (
    <form className="searchForm">
      <label htmlFor="search" className="label-search">
        Яндекс
      </label>
      <input type="search" id="search" className="search" />
      <button className="button-search">Найти</button>
    </form>
  );
}
