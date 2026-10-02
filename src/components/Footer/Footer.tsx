import {
  API_DOCS_URL,
  AUTHOR_NAME,
  REPOSITORY_URL,
  TRIPLETEN_URL,
} from "../../utils/constants";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">
          © {currentYear} {AUTHOR_NAME}. Proyecto final de TripleTen.
        </p>
        <ul className="footer__links">
          <li>
            <a
              href={API_DOCS_URL}
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Rick and Morty API
            </a>
          </li>
          <li>
            <a
              href={TRIPLETEN_URL}
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              TripleTen
            </a>
          </li>
          <li>
            <a
              href={REPOSITORY_URL}
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
