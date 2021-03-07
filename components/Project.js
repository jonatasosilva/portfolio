import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";
import styles from "./Project.module.css";

function Project({ name, description, homepage, htmlUrl, topics, cover }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cover}>
        <img src={cover} />
      </div>
      <div className={styles.texts}>
        <div className={styles.header}>
          <h2 className={styles.name}>{name}</h2>
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
        <ul className={styles.topics}>
          {topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Project;
