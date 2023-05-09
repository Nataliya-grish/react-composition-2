import React from "react";

/**
 * Компонент "Баннер"
 * Обеспечивает отображение баннера
 * Выводит картинку и ссылку
 */
export default function Banner() {
  return (
    <>
      <a className="banner" href="#">
        <img
          src="https://homo.eficiens.cl/wp-content/uploads/2016/02/Nota-84.jpg"
          alt=""
        />
      </a>
    </>
  );
}
