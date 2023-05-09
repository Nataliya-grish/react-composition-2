import React from "react";
import { Block, Item } from "../Block";

/**
 * Компонент "Категории поика"
 * Обеспечивает выбор категории для поиска
 * Получает информацию из массива объектов
 * Выводит через перечисление название категории и ссылку выбор категории
 */

export default function SearchCategory() {
  const searchThemes = [
    { theme: "Картинки", href: "#", className: "category-item" },
    { theme: "Видео", href: "#", className: "category-item" },
    { theme: "Новости", href: "#", className: "category-item" }
  ];
  return (
    <ul className="SearchCategory">
      <Block items={searchThemes}>
        {(items) =>
          items.map((item) => {
            return (
              <Item key={item.theme} className={item.className}>
                <a href={item.href}>
                  <span>{item.theme}</span>
                </a>
              </Item>
            );
          })
        }
      </Block>
    </ul>
  );
}
