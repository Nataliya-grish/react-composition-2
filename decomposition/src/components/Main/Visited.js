import React from "react";
import { Block, Item } from "../Block";

/**
 * Компонент "Посещаемое"
 * Обеспечивает вывод информации о наиболее используемых сервиса
 * Получает информацию из массива объектов
 * Выводит через перечисление название сервиса
 * Выводит наиболее популярную категорию
 */

export default function Visited() {
  const itemsVisited = [
    {
      category: "Недвижимость",
      href: "#",
      discription: "О cталинкаx"
    },
    {
      category: "Маркет",
      href: "#",
      discription: "Люстры и светильники"
    }
  ];
  return (
    <ul className="list-visited">
      <Block items={itemsVisited}>
        {(items) =>
          items.map((item) => {
            return (
              <Item key={item.category} className="item-visited">
                <a href={item.href}>
                  <span>{item.category}</span>
                </a>
                <span className="discription"> - {item.discription}</span>
              </Item>
            );
          })
        }
      </Block>
    </ul>
  );
}
