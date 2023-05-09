import React from "react";

/**
 * Компонент "Block"
 * Предназначен для отображение информации на основе props с использование функции из children
 */

export function Block({ items, children }) {
  return <>{children(items)}</>;
}

export function Item({ children }) {
  return <li>{children}</li>;
}
