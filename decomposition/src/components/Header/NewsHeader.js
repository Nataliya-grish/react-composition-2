import React from "react";
import { Block, Item } from "../Block";

/**
 * Компонент "Категории новостей"
 * Обеспечивает выбор категорию новостей
 * Получает информацию из массива объектов
 * Выводит через перечисление название категории, ссылку для выбора категории
 */

export default function NewsHeader() {
  const categoryNews = [
    { category: "Cейчас в СМИ", href: "#" },
    { category: "В России", href: "#" }
  ];
  return (
    <ul className="category-news">
      <Block items={categoryNews}>
        {(items) =>
          items.map((item) => {
            return (
              <Item key={item.category} className="category-news-item">
                <a href={item.href}>
                  <span>{item.category}</span>
                </a>
              </Item>
            );
          })
        }
      </Block>
      <li className="date">Дата</li>
    </ul>
  );
}
