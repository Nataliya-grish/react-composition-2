import React from "react";
import { Block, Item } from "../Block";

/**
 * Компонент "Телепрограмма"
 * Обеспечивает вывод информации о телепрограмме
 * Получает информацию из массива объектов
 * Выводит через перечисление время, название передачи, канал
 */

export default function TVPrograms() {
  const programs = [
    {
      time: "02:00",
      href: "#",
      name: "ТНТ.Best",
      tVChanel: "ТНТ"
    },
    {
      time: "02:15",
      href: "#",
      nmae: "Джинглики",
      tVChanel: "Карусель"
    }
  ];
  return (
    <ul className="tv-programs">
      <Block items={programs}>
        {(items) =>
          items.map((item) => {
            return (
              <Item key={item.name} className="item-programs">
                <span>
                  {`${item.time} ${item.name}`}
                  <a href={item.href}>{item.tVChanel}</a>
                </span>
              </Item>
            );
          })
        }
      </Block>
    </ul>
  );
}
