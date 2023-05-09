import React from "react";
import { Block, Item } from "../Block";

/**
 * Компонент "Новости"
 * Обеспечивает вывод новостей
 * Получает информацию из массива объектов
 * Выводит через перечисление заголовок новости, ссылку на новость, иконку источника,
 */

export default function News() {
  const categoryNews = [
    {
      news:
        "Дипломаты РФ в результате блокады церемонии возложения венков в Варшаве не пострадали",
      href: "#",
      className: "news-item",
      iconName: "home"
    },
    {
      news:
        "Владимир Путин: против России вновь развязана война, но страна обеспечит свою безопасность",
      href: "#",
      className: "news-item",
      iconName: "done"
    }
  ];
  return (
    <ul className="category-news">
      <Block items={categoryNews}>
        {(items) =>
          items.map((item) => {
            return (
              <Item key={item.news} className={item.className}>
                <i className="material-icons">{item.iconName}</i>
                <a href={item.href}>
                  <span>{item.news}</span>
                </a>
              </Item>
            );
          })
        }
      </Block>
    </ul>
  );
}
