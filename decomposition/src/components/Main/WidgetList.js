import React from "react";
import Widget from "./Widget";
import Weather from "./Weather";
import Visited from "./Visited";
import Map from "./Map";
import TVPrograms from "./TVPrograms";
import BoardCast from "./BoardCast";

/**
 * Компонент "Блок дополнительных виджетов"
 * Обеспечивает вывод виджетов в три колонки с помощью компонента Widget
 * Выводит виджет "Погода" с помощью компонента Weather
 * Выводит виджет "Посещаемое" через перечисляемый компонент Visited
 * Выводит виджет "Карта" с помощью компонента Map
 * Выводит виджет "Телепрограмма" через перечисляемый компонент TVPrograms
 * Выводит виджет "Эфир" через перечисляемый компонент BoardCast
 */
export default function WidgetList() {
  return (
    <>
      <Widget title="Погода">
        <Weather />
      </Widget>
      <Widget title="Посещаемое">
        <Visited />
      </Widget>
      <Widget title="Карта">
        <Map />
      </Widget>
      <Widget title="Телепрограмма">
        <TVPrograms />
      </Widget>
      <Widget title="Эфир">
        <BoardCast />
      </Widget>
    </>
  );
}
