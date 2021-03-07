import axios from "axios";

function sortRepos(notOrderedRepos, orderedRepos) {
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
}

async function getTopics(repo) {
  const topics = await axios
    .get(`https://api.github.com/repos/jonatasosilva/${repo}/topics`, {
      headers: {
        Accept: "application/vnd.github.mercy-preview+json",
      },
    })
    .then((res) => res.data.names)
    .catch((err) => console.error(err));

  return topics;
}

export async function getRepos(reposToShow) {
  const allRepos = await axios
    .get(`https://api.github.com/users/jonatasosilva/repos`)
    .then((res) => res.data)
    .catch((err) => console.log(err));

  const selectedRepos = allRepos.filter((repo) =>
    reposToShow.includes(repo.name)
  );

  let repos = [];
  for (let i = 0; i < selectedRepos.length; i++) {
    const topics = await getTopics(selectedRepos[i].name);

    const repo = {
      name: selectedRepos[i].name,
      description: selectedRepos[i].description,
      homepage: selectedRepos[i].homepage,
      htmlUrl: selectedRepos[i].html_url,
      topics,
    };

    repos.push(repo);
  }

  const sortedRepos = sortRepos(repos, reposToShow);
  return sortedRepos;
}
