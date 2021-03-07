import Head from "next/head";
import { ToastProvider } from "react-toast-notifications";
import { getRepos } from "../lib/repos";

import Card from "../components/Card";
import Form from "../components/Form";

import styles from "../styles/index.module.css";

function HomePage({ repos }) {
  const skills = [
    "JavaScript",
    "TypeScript",
    "PHP",
    "Python",
    "Java",
    "SQL",
    "React",
    "Node.js",
    "Git",
    "Docker",
    "Linux",
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Jonatas Silva</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🖖</text></svg>"
        />
      </Head>

      <ToastProvider>
        <div className={styles.introducing}>
          <h1 className={styles.introducingTitle}>
            Olá, meu nome é<br />
            <span>Jonatas Silva</span>
          </h1>
          <p className={styles.introducingText}>
            Estudante de Ciência da Computação no 5º período | 20 anos | Focado
            em desenvolvimento web há 6 meses.
          </p>
        </div>

        <div className={styles.skills}>
          <h2 className={styles.skillsTitle}>Habilidades</h2>
          <ul className={styles.skillsList}>
            {skills.map((skill) => {
              return (
                <li key={skill} className={styles.skillItem}>
                  {skill}
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.repos}>
          <h1>
            <span>/</span>outros-projetos
          </h1>

          <div className={styles.cards}>
            {repos.map((repo) => (
              <Card
                key={repo.name}
                name={repo.name}
                description={repo.description}
                homepage={repo.homepage}
                htmlUrl={repo.htmlUrl}
                topics={repo.topics}
              />
            ))}
          </div>
        </div>

        <div className={styles.form}>
          <h2 className={styles.formTitle}>Contato</h2>
          <Form />
        </div>
      </ToastProvider>
    </div>
  );
}

export async function getStaticProps() {
  const repos = await getRepos([
    "dsdeliver-sds2",
    "knowledge",
    "happy",
    "be-the-hero",
  ]);

  return {
    props: {
      repos,
    },
  };
}

export default HomePage;
