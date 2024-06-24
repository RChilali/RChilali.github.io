const languageSwitch = document.getElementById('languageSwitch');
const selectedLanguage = document.getElementById('selectedLanguage');
const videoIframe = document.getElementById('video');

languageSwitch.addEventListener('click', function(e) {
  e.preventDefault();
  const language = e.target.dataset.value;
  const flagSrc = e.target.dataset.src;
  localStorage.setItem('language', language); // Store the selected language in localStorage
  localStorage.setItem('flag', flagSrc); // Store the flag source in localStorage
  changeLanguage(language);
  selectedLanguage.src = flagSrc; // Update the flag in the dropdown button
  updateVideoLanguage(language); // Update the video subtitle language
});

// Function to change the language
async function changeLanguage(language) {
  const response = await fetch(`data/${language}.json`);
  const translations = await response.json();

  document.getElementById("welcome").textContent = translations.welcome;
  document.getElementById("role").textContent = translations.role;
  document.getElementById("location").textContent = translations.location;
  document.getElementById("specialization").textContent = translations.specialization;
  document.getElementById("skills").textContent = translations.skills;
  document.getElementById("availability").textContent = translations.availability;
  document.documentElement.lang = language;

  // Update navigation buttons
  document.getElementById("home").textContent = translations.home;
  document.getElementById("about").textContent = translations.about;
  document.getElementById("project").textContent = translations.project;
  document.getElementById("contact").textContent = translations.contact;
}

// Function to update the video subtitle language
function updateVideoLanguage(language) {
  const videoSrc = `https://www.youtube.com/embed/3lLjS86-UwA?cc_load_policy=1&cc_lang_pref=${language}`;
  videoIframe.src = videoSrc;
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
  updateVideoLanguage(storedLanguage); // Update the video subtitle language on load
} else {
  // If no language has been stored, use a default language
  changeLanguage('en');
}