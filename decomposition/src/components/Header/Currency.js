import React from "react";
import { Block, Item } from "../Block";

/**
 * Компонент "Курс валют"
 * Обеспечивает вывод информации о котировках валют
 * Получает информацию из массива объектов
 * Выводит через перечисление название, значение, индекс изминения
 */

export default function Currency() {
  const categoryCurrency = [
    {
      nameCurrency: "USD MOEX",
      value: "75",
      className: "quotes-item",
      index: "+0,15"
    },
    {
      nameCurrency: "НЕФТЬ",
      value: "75",
      className: "quotes-item",
      index: "+0,15"
    }
  ];
  return (
    <ul className="currency">
      <Block items={categoryCurrency}>
        {(items) =>
          items.map((item) => {
            return (
              <Item key={item.nameCurrency} className={item.className}>
                <span className="nameCurrency">{item.nameCurrency}</span>
                <span className="valueCurrency">{item.value}</span>
                <span className="indexCurrency">{item.index}</span>
              </Item>
            );
          })
        }
      </Block>
    </ul>
  );
}
