import React from "react";

/**
 * Компонент "Погода"
 * Обеспечивает вывод информации о погоду
 * Выводит картинку характерной погоды
 * Выводит текущую температуру
 * Выводит температуру которая будет утром и вечером
 */

export default function Weather() {
  return (
    <div className="wather">
      <img src="" alt="" />
      <span className="live-weather"></span>
      <div className="wather-day">
        <span className="weather-morning"></span>
        <span className="weather-evening"></span>
      </div>
    </div>
  );
}
