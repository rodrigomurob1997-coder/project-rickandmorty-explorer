import { useState, type ChangeEvent, type SubmitEvent } from "react";

function SearchForm() {
  const [query, setQuery] = useState("");

  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    setQuery(evt.target.value);
  }

  function handleSubmit(evt: SubmitEvent<HTMLFormElement>) {
    evt.preventDefault();
  }

  return (
    <form className="search-form" role="search" onSubmit={handleSubmit}>
      <label htmlFor="search-query" className="search-form__label">
        Nombre del personaje
      </label>
      <div className="search-form__field">
        <input
          id="search-query"
          type="search"
          name="query"
          className="search-form__input"
          placeholder="Por ejemplo, Rick"
          value={query}
          onChange={handleChange}
          required
        />
        <button type="submit" className="button search-form__button">
          Buscar
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
