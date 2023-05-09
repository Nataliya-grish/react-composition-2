import Card from "../Card";

/**
 * Компонент "Рекламы"
 * Обеспечивает вывод рекламы с использование компонента "Card"
 * Выводит картинку, заголовок, описание
 */

export default function PromoItem() {
  return (
    <>
      <Card img="https://mobimg.b-cdn.net/v3/fetch/e6/e6044cb0b978ce39ff76b57402ebd1de.jpeg">
        <h5 className="card-title">Работа над ошибками</h5>
        <p className="card-text">Смотрите на Яндекс и запоминайте</p>
      </Card>
    </>
  );
}
