function Preloader() {
  return (
    <div className="preloader" role="status" aria-live="polite">
      <span className="preloader__circle" aria-hidden="true"></span>
      <p className="preloader__text">Buscando personajes...</p>
    </div>
  );
}

export default Preloader;
