import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";
import styles from "./Card.module.css";

function Card({ name, description, homepage, htmlUrl, topics }) {
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.header}>
          <h3 className={styles.name}>{name}</h3>
          <div>
            {homepage && (
              <a href={homepage} target="_blank" className={styles.homepage}>
                <FaExternalLinkSquareAlt size={24} />
              </a>
            )}
            <a href={htmlUrl} target="_blank">
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        <p className={styles.description}>{description}</p>
      </div>

      <ul className={styles.topics}>
        {topics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
