import Link from "next/link";
import Head from "next/head";
import { getRepoData } from "../../lib/repos";
import { FaArrowLeft, FaEye, FaGithub } from "react-icons/fa";
import styles from "../../styles/repos.module.css";

function Repos({ repoName, repoReadme, homepage }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{repoName + " | Jonatas Silva"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🖖</text></svg>"
        />
      </Head>

      <Link href="/">
        <div className={styles.backLink}>
          <FaArrowLeft className={styles.backLinkIcon} color="#8743CC" />
          <a>Voltar</a>
        </div>
      </Link>
      <div className={styles.content}>
        <div
          className={styles.readme}
          dangerouslySetInnerHTML={{ __html: repoReadme }}
        />
        <div className={styles.buttons}>
          {homepage && (
            <Link href={`${homepage}`}>
              <a className={styles.button} target="_blank">
                <FaEye className={styles.buttonIcon} size={18} />
                Visualizar
              </a>
            </Link>
          )}
          <Link href={`https://github.com/jonatasosilva/${repoName}`}>
            <a className={styles.button} target="_blank">
              <FaGithub className={styles.buttonIcon} size={18} />
              GitHub
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const repoName = params.slug;
  const { contentHtml: repoReadme, homepage } = await getRepoData(repoName);

  return {
    props: {
      repoName,
      repoReadme,
      homepage,
    },
  };
}

export default Repos;
