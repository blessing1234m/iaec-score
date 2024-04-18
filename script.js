// Variables globales pour stocker les scores et le timer
let team1Score = 0;
let team2Score = 0;
let countdownTimer;

// Fonction pour mettre à jour les noms des équipes
function updateTeamNames() {
  const team1Input = document.getElementById('team1-input').value;
  const team2Input = document.getElementById('team2-input').value;

  document.getElementById('team1-name').textContent = team1Input || 'Équipe 1';
  document.getElementById('team2-name').textContent = team2Input || 'Équipe 2';
}

// Fonction pour ajouter des points à une équipe
function addScore(team, points) {
  if (team === 'team1') {
    team1Score += points;
    document.getElementById('team1-score').textContent = team1Score;
  } else if (team === 'team2') {
    team2Score += points;
    document.getElementById('team2-score').textContent = team2Score;
  }
}

// Fonction pour démarrer le timer avec une durée en secondes
function startTimer(seconds) {
  clearInterval(countdownTimer);
  let timeLeft = seconds;
  countdownTimer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(countdownTimer);
      document.getElementById('countdown').textContent = 'Temps écoulé';
    } else {
      document.getElementById('countdown').textContent = `Temps restant : ${timeLeft} secondes`;
      timeLeft--;
    }
  }, 1000);
}
