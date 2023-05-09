import SearchCategory from "./SearchCategory";
import SearchForm from "./SearchForm";

/**
 * Компонент "Блок поиска"
 * Обеспечивает вывод компонентов данного блока
 * Выводит катрегории поиска через перечисляемый компонента "SearchCategory"
 * Выводит форму поиска через компонент "SearchForm"
 * Выводит информаци о популярных запросах
 */

export default function SearchBlock() {
  const helpSearch = "фаза луны сегодня";
  return (
    <>
      <SearchCategory />
      <SearchForm />
      <div className="help-search">
        <span>
          Найдется все. Например, <i className="help-search">{helpSearch}</i>
        </span>
      </div>
    </>
  );
}
