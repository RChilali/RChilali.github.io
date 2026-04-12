const STEP_KEY = 'birthday-site-step';
const USERNAME = 'rayane';
const PASSWORD = 'lemeilleur';
const MAGIC_ANSWER = 'le plus intelligent';

function normalize(value) {
  return value.trim().toLowerCase();
}

function setStep(step) {
  sessionStorage.setItem(STEP_KEY, step);
}

function getStep() {
  return sessionStorage.getItem(STEP_KEY);
}

function clearMessage(element) {
  if (!element) return;
  element.textContent = '';
  element.classList.remove('is-error', 'is-success');
}

function showMessage(element, text, type) {
  if (!element) return;
  element.textContent = text;
  element.classList.remove('is-error', 'is-success');
  if (type) {
    element.classList.add(type);
  }
}

function redirectWithDelay(url) {
  window.location.href = url;
}

function initLoginPage() {
  const form = document.getElementById('loginForm');
  if (!form) return;

  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const message = document.getElementById('loginMessage');

  setStep('login');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    clearMessage(message);

    const username = normalize(usernameInput.value);
    const password = normalize(passwordInput.value);

    if (!username || !password) {
      showMessage(message, 'Complète les deux champs pour continuer.', 'is-error');
      return;
    }

    if (username === USERNAME && password === PASSWORD) {
      setStep('challenge');
      showMessage(message, 'Connexion validée, redirection...', 'is-success');
      setTimeout(() => redirectWithDelay('challenge.html'), 450);
      return;
    }

    showMessage(message, 'Identifiants incorrects. Essaie encore.', 'is-error');
  });
}

function initChallengePage() {
  const form = document.getElementById('challengeForm');
  if (!form) return;

  const currentStep = getStep();
  if (currentStep !== 'challenge' && currentStep !== 'done') {
    window.location.href = 'index.html';
    return;
  }

  const fullNameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('email');
  const answerInput = document.getElementById('magicAnswer');
  const message = document.getElementById('challengeMessage');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    clearMessage(message);

    const fullName = fullNameInput.value.trim();
    const email = emailInput.value.trim();
    const answer = normalize(answerInput.value);

    if (!fullName || !email || !answer) {
      showMessage(message, 'Merci de remplir tous les champs.', 'is-error');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      showMessage(message, 'Entre une adresse e-mail valide.', 'is-error');
      return;
    }

    if (answer !== MAGIC_ANSWER) {
      showMessage(message, 'Mauvaise réponse. Essaie encore.', 'is-error');
      return;
    }

    setStep('done');
    showMessage(message, 'Bravo ! Redirection vers la surprise...', 'is-success');
    setTimeout(() => redirectWithDelay('birthday.html'), 450);
  });
}

function initCelebrationPage() {
  const celebration = document.getElementById('celebrationPage');
  if (!celebration) return;

  const currentStep = getStep();
  if (currentStep !== 'done') {
    window.location.href = 'challenge.html';
    return;
  }

  const confettiLayer = document.getElementById('confettiLayer');
  if (!confettiLayer) return;

  const colors = ['#ffd166', '#ff6b6b', '#4cc9f0', '#80ed99', '#f72585', '#ffffff'];
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < 42; i += 1) {
    const confetti = document.createElement('span');
    const size = 8 + Math.floor(Math.random() * 8);
    const left = Math.random() * 100;
    const delay = Math.random() * 2.2;
    const duration = 4 + Math.random() * 4.5;
    const color = colors[Math.floor(Math.random() * colors.length)];

    confetti.className = 'confetti';
    confetti.style.left = `${left}%`;
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size * (1.2 + Math.random() * 0.8)}px`;
    confetti.style.background = color;
    confetti.style.animationDuration = `${duration}s`;
    confetti.style.animationDelay = `${delay}s`;

    fragment.appendChild(confetti);
  }

  confettiLayer.appendChild(fragment);
}

document.addEventListener('DOMContentLoaded', () => {
  initLoginPage();
  initChallengePage();
  initCelebrationPage();
});

