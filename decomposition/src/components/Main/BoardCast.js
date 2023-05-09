import React from "react";
import { Block, Item } from "../Block";

/**
 * Компонент "Эфир"
 * Обеспечивает вывод информации об эфирах
 * Получает информацию из массива объектов
 */

export default function BoardCast() {
  const live = [
    {
      name: "Управление как искусство",
      href: "#",
      chanel: "Успех"
    },
    {
      name: "Ночь. Мир в это время",
      href: "#",
      chanel: "earthTV"
    }
  ];
  return (
    <ul className="live">
      <Block items={live}>
        {(items) =>
          items.map((item) => {
            return (
              <Item key={item.news} className="item-live">
                <span>
                  <i className="material-icons">done</i>
                  <i className="name-live">{item.name}</i>
                  <a href={item.href}>{item.chanel}</a>
                </span>
              </Item>
            );
          })
        }
      </Block>
    </ul>
  );
}
