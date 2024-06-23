const languageSwitch = document.getElementById('languageSwitch');
const selectedLanguage = document.getElementById('selectedLanguage');

languageSwitch.addEventListener('click', function(e) {
  e.preventDefault();
  const language = e.target.dataset.value;
  const flagSrc = e.target.dataset.src;
  localStorage.setItem('language', language); // Store the selected language in localStorage
  localStorage.setItem('flag', flagSrc); // Store the flag source in localStorage
  changeLanguage(language);
  selectedLanguage.src = flagSrc; // Update the flag in the dropdown button
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