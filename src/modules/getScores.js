export default () => {
  const gameId = 'Zl4d7IVkemOTTVg2fUdzW';
  localStorage.setItem('gameId', gameId);

  const fetchScores = async () => {
    try {
      const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`);
      const data = await response.json();

      const scoresList = document.querySelector('.scores-list');
      scoresList.innerHTML = '';

      data.result.forEach((score) => {
        const listItem = document.createElement('li');
        listItem.classList.add('score-list-item');
        listItem.textContent = `${score.user}: ${score.score}`;
        scoresList.appendChild(listItem);
      });
    } catch (error) {
      console.error(error);
    }
  };

  fetchScores();
};
