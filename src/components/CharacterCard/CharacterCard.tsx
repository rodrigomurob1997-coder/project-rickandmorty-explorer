import type { Character } from "../../types/character";
import { STATUS_LABELS, UNKNOWN_VALUE } from "../../utils/constants";

interface CharacterCardProps {
  character: Character;
}

function formatPlaceName(placeName: string) {
  return placeName === UNKNOWN_VALUE ? STATUS_LABELS.unknown : placeName;
}

function CharacterCard({ character }: CharacterCardProps) {
  const { name, status, species, image, location, origin } = character;

  return (
    <article className="card">
      <img
        src={image}
        alt={`Retrato de ${name}`}
        className="card__image"
        width="300"
        height="300"
        loading="lazy"
      />
      <div className="card__body">
        <h3 className="card__title">{name}</h3>
        <p className={`card__status card__status_type_${status.toLowerCase()}`}>
          {STATUS_LABELS[status]} · {species}
        </p>
        <dl className="card__details">
          <div className="card__detail">
            <dt className="card__detail-term">Última ubicación conocida</dt>
            <dd className="card__detail-value">
              {formatPlaceName(location.name)}
            </dd>
          </div>
          <div className="card__detail">
            <dt className="card__detail-term">Origen</dt>
            <dd className="card__detail-value">
              {formatPlaceName(origin.name)}
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export default CharacterCard;
