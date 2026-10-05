import authorImage from "../../images/author.svg";
import { AUTHOR_NAME, TECHNOLOGIES } from "../../utils/constants";

function About() {
  return (
    <main className="content">
      <section className="about" aria-labelledby="about-title">
        <img
          src={authorImage}
          alt={`Avatar de ${AUTHOR_NAME}`}
          className="about__image"
          width="240"
          height="240"
        />
        <div className="about__text">
          <h1 id="about-title" className="about__title">
            Sobre el autor
          </h1>
          <p className="about__paragraph">
            Soy {AUTHOR_NAME}, estudiante del programa de Desarrollo Web de
            TripleTen. Durante el programa construí aplicaciones con HTML, CSS,
            JavaScript, TypeScript y React, siempre con un enfoque en interfaces
            claras y adaptables a cualquier dispositivo.
          </p>
          <h2 className="about__subtitle">Sobre el proyecto</h2>
          <p className="about__paragraph">
            Rick and Morty Explorer es mi proyecto final. Permite buscar
            personajes de la serie por nombre y consultar su información con los
            datos que ofrece The Rick and Morty API.
          </p>
          <h2 className="about__subtitle">Tecnologías</h2>
          <ul className="about__technologies">
            {TECHNOLOGIES.map((technology) => (
              <li key={technology} className="about__technology">
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default About;
