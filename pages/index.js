import Head from "next/head";
import { ToastProvider } from "react-toast-notifications";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { getRepos } from "../lib/repos";

import Project from "../components/Project";
import Card from "../components/Card";
import Form from "../components/Form";

import styles from "../styles/index.module.css";

function HomePage({ projects, repos }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jonatas Silva</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🖖🏼</text></svg>"
        />
      </Head>

      <ToastProvider>
        <div className={styles.about}>
          <h1 className={styles.name}>
            Olá, meu nome é <span>Jonatas Silva</span>
          </h1>
          <h3 className={styles.bio}>
            Estudante de Ciência da Computação.
            <br /> Futuro Dev em T com foco no back-end.
          </h3>
          <div className={styles.social}>
            <a href="https://github.com/jonatasosilva" target="_blank">
              <FaGithub size={32} />
            </a>
            <a href="https://www.linkedin.com/in/jonatasosilva" target="_blank">
              <FaLinkedin size={32} />
            </a>
          </div>
        </div>

        <div className={styles.showcase}>
          <h1>
            <span>/</span>principais-projetos
          </h1>
          {projects.map((project) => (
            <Project
              key={project.name}
              name={project.name}
              description={project.description}
              homepage={project.homepage}
              htmlUrl={project.htmlUrl}
              topics={project.topics}
              cover={project.cover}
            />
          ))}
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

        <div className={styles.contact}>
          <h1>
            <span>/</span>contato
          </h1>
          <Form />
        </div>
      </ToastProvider>
    </div>
  );
}

export async function getStaticProps() {
  const projects = await getRepos([
    "socialape",
    "weather-app",
  ]);

  projects[0].name = "SocialApe";
  projects[0].cover =
    "https://raw.githubusercontent.com/jonatasosilva/socialape/master/assets/cover.gif";
  projects[1].name = "Weather App";
  projects[1].cover =
    "https://raw.githubusercontent.com/jonatasosilva/weather-app/main/assets/cover.gif";

  const repos = await getRepos([
    "dsdeliver-sds2",
    "knowledge",
    "happy",
    "be-the-hero",
  ]);

  return {
    props: {
      projects,
      repos,
    },
  };
}

export default HomePage;
