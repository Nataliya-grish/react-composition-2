import React from "react";
import NewsHeader from "./Header/NewsHeader";
import News from "./Header/News";
import Currency from "./Header/Currency";
import PromoItem from "./Header/PromoItem";
import SearchBlock from "./SearchBlock/SearchBlock";
import Banner from "./Banner/Banner";
import WidgetList from "./Main/WidgetList";

/**
 * Компонент "Page"
 * Обеспечивает разметку и отображение информации страницы на основе вложенных компонентов
 */

export default function Page() {
  return (
    <div className="containier">
      <header className="header">
        <div className="news">
          <NewsHeader />
          <News />
          <Currency />
        </div>
        <div className="promo">
          <PromoItem />
        </div>
      </header>
      <div className="search-block">
        <SearchBlock />
      </div>
      <div className="banner">
        <Banner />
      </div>
      <section className="block-widget">
        <WidgetList />
      </section>
    </div>
  );
}
