import axios from "axios";
import remark from "remark";
import html from "remark-html";

export async function getRepoData(repoName) {
  const homepage = await axios
    .get(`https://api.github.com/repos/jonatasosilva/${repoName}`)
    .then((response) => response.data.homepage);

  const readme = await axios
    .get(
      `https://raw.githubusercontent.com/jonatasosilva/${repoName}/master/README.md`
    )
    .then((response) => response.data);

  const processedContent = await remark().use(html).process(readme);
  const contentHtml = processedContent.toString();

  return { homepage, contentHtml };
}

export async function getRepos(reposToShow) {
  const resRepos = await axios
    .get(`https://api.github.com/users/jonatasosilva/repos`)
    .then((response) => response.data);

  const filteredRepos = resRepos.filter((repo) =>
    reposToShow.includes(repo.name)
  );

  const sortRepos = (notOrderedRepos, orderedRepos) => {
    let sortedRepos = [];

    for (let i = 0; i < orderedRepos.length; i++) {
      /**
       * encontra no array de repos o repo que corresponde
       * a ordem desejada, entao faz o push no novo array
       */
      sortedRepos.push(
        notOrderedRepos.find((repo) => repo.name === orderedRepos[i])
      );
    }

    return sortedRepos;
  };

  const sortedRepos = sortRepos(filteredRepos, reposToShow);

  return sortedRepos;
}
