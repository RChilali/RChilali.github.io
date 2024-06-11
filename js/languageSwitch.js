const translations = {
  en: {
    welcome: "Hi, I'm Rayane Chilali",
    role: "Web Developer",
    location: "Based in Paris",
    specialization: "Specialized in Back-End Development",
    skills: "Java , Spring, Vue.js",
    availability: "Looking for new opportunities",
    flag: "img/gb.svg"
  },
  fr: {
    welcome: "Bonjour, je suis Rayane Chilali",
    role: "Développeur Web",
    location: "Basé à Paris",
    specialization: "Spécialisé dans le développement Back-End",
    skills: "Java , Spring, Vue.js",
    availability: "À la recherche de nouvelles opportunités",
    flag: "img/fr.svg"
  },
  bg: {
    welcome: "Здравейте, аз съм Раян Шилали",
    role: "Уеб разработчик",
    location: "Базиран в Париж",
    specialization: "Специализиран в Back-End разработката",
    skills: "Java , Spring, Vue.js",
    availability: "Търся нови възможности",
    flag: "img/bg.svg"
  }
};

const languageSwitch = document.getElementById('languageSwitch');
const selectedLanguage = document.getElementById('selectedLanguage');

languageSwitch.addEventListener('click', function(e) {
  e.preventDefault();
  const language = e.target.dataset.value;
  const flagSrc = translations[language].flag;
  localStorage.setItem('language', language); // Store the selected language in localStorage
  localStorage.setItem('flag', flagSrc); // Store the flag source in localStorage
  changeLanguage(language);
  selectedLanguage.src = flagSrc; // Update the flag in the dropdown button
});

// Function to change the language
function changeLanguage(language) {
  document.getElementById("welcome").textContent = translations[language].welcome;
  document.getElementById("role").textContent = translations[language].role;
  document.getElementById("location").textContent = translations[language].location;
  document.getElementById("specialization").textContent = translations[language].specialization;
  document.getElementById("skills").textContent = translations[language].skills;
  document.getElementById("availability").textContent = translations[language].availability;
}

// When the page loads, check if a language has been stored in localStorage
const storedLanguage = localStorage.getItem('language');
const storedFlag = localStorage.getItem('flag');
if (storedLanguage) {
  // If a language has been stored, use that language
  changeLanguage(storedLanguage);
  if (storedFlag) {
    // If a flag has been stored, use that flag
    selectedLanguage.src = storedFlag;
  }
} else {
  // If no language has been stored, use a default language
  changeLanguage('en');
}