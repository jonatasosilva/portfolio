import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import styles from "./Card.module.css";

export default function RepoCard(props) {
  return (
    <div className={styles.repo}>
      <Link href={`/repos/${props.name}`}>
        <div>
          <h3 className={styles.repoName}>{props.name}</h3>
          <p className={styles.repoDescription}>{props.description}</p>
          <FaArrowRight size={14} color="#8743CC" />
        </div>
      </Link>
    </div>
  );
}
