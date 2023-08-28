export default () => {
  const scoresForm = document.querySelector('.scores-form');

  scoresForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const userName = document.querySelector('.score-input[name="name"]').value;
    const userScore = document.querySelector('.score-input[name="score"]').value;
    const gameId = localStorage.getItem('gameId');
    try {
      await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: userName,
          score: userScore,
        }),
      });
      const refreshButton = document.querySelector('.scores-refresh');
      refreshButton.click();
    } catch (error) {
      console.error('Error adding new score:', error);
    }
  });
};