import { createI18n } from 'vue-i18n'

const messages = {
  en_US: {
    welcomeMsg: 'Welcome to My Portfolio',
    name: 'Name',
    surname: 'Surname',
    intro: 'I am a web developer',
    email: 'unitedstates@gmail.com',
    phone: '123456789',
    github:'https://github.com',
    linkedin:'https://linkedin.com',
  },
  fr_FR: {
    welcomeMsg: 'Bienvenue dans mon portfolio',
    name: 'Nom',
    surname: 'Prénom',
    intro: 'Je suis un développeur web',
    email: 'france@gmail.com',
    phone: '123456789',
    github:'https://github.com',
    linkedin:'https://linkedin.com',

  },
  bg_BG: {
    welcomeMsg: 'Добре дошли в моя портфолио',
    name: 'Име',
    surname: 'Фамилия',
    intro: 'Аз съм уеб разработчик',
    email: 'България@gmail.com',
    phone: '123456789',
    github:'https://github.com',
    linkedin:'https://linkedin.com',
  },
}

const i18n = createI18n({
  locale: 'fr_FR',
  fallbackLocale: 'en_US',
  messages,
})

export default i18n