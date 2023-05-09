import React from "react";

/**
 * Компонент "Виджет"
 * Обеспечивает вывод виджета
 * Выводит название виджета
 * Выводит содержимое виджета через children
 */

export default function Widget({ title, children }) {
  return (
    <div className="widget">
      <h5>{title}</h5>
      {children}
    </div>
  );
}
