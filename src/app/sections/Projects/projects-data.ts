export const projects = [
  {
    id: '01',
    title: 'CRUD',
    description: {
      pt: 'CRUD (Create, Read, Update, and Delete) são as quatro operações básicas: criação, consulta, atualização e exclusão de dados.',
      en: 'CRUD (Create, Read, Update, and Delete) represents the four basic operations: creating, reading, updating, and deleting data.',
    },
    image: '/assets/crud.png',
    technologies: [
      'HTML',
      'SCSS',
      'React',
      'Redux',
      'Axios',
      'TypeScript',
      'React-icons',
      'Sweetalert2',
      'react-router-dom',
    ],
    liveUrl: 'https://crud-redux-snowy.vercel.app/',
    githubUrl: 'https://github.com/carlossroliveira/Crud-Redux',
    year: '2023',
    status: {
      pt: 'Concluído',
      en: 'Completed',
    },
    fileSize: {
      pt: '3,13 MB',
      en: '3.13 MB',
    },
    commits: '41',
  },
  {
    id: '02',
    title: 'WEATHER FORECAST',
    description: {
      pt: 'Um painel interativo que exibe o clima atual e a previsão futura de diversas cidades, incluindo busca e tema escuro.',
      en: 'An interactive dashboard that displays current weather and future forecasts for multiple cities, including search and dark theme.',
    },
    image: '/assets/forecast.png',
    technologies: [
      'HTML',
      'styled-components',
      'React',
      'TypeScript',
      'Axios',
      'react-slick',
      'react-switch',
      'react-router-dom',
      'jest',
      'react-testing-library',
    ],
    liveUrl:
      'https://previsao-do-tempo-ldp15p8ex-carlossroliveiras-projects.vercel.app/',
    githubUrl:
      'https://github.com/carlossroliveira/Previsao-do-tempo/tree/main',
    year: '2022',
    status: {
      pt: 'Concluído',
      en: 'Completed',
    },
    fileSize: {
      pt: '223 MB',
      en: '223 MB',
    },
    commits: '35',
  },
  {
    id: '03',
    title: 'DOLLAR CONVERTER',
    description: {
      pt: 'Converte valores em dólar para real, considerando cotação atual, IOF, tipo de pagamento e impostos estaduais dos EUA.',
      en: 'Converts dollar amounts to Brazilian reais, considering the current exchange rate, IOF, payment type, and US state taxes.',
    },
    image: '/assets/dollar.png',
    technologies: [
      'HTML',
      'Styled-components',
      'React',
      'Sweetalert2',
      'react-github-corner',
    ],
    liveUrl: 'https://conversor-dolar.vercel.app/',
    githubUrl: 'https://github.com/carlossroliveira/Conversor-dolar',
    year: '2022',
    status: {
      pt: 'Concluído',
      en: 'Completed',
    },
    fileSize: {
      pt: '1,14 MB',
      en: '1.14 MB',
    },
    commits: '18',
  },
  {
    id: '04',
    title: 'ZIP CODE',
    description: {
      pt: 'Exibe dados de endereço a partir de um CEP digitado, com integração à API dos Correios. Interface limpa e responsiva.',
      en: 'Displays address data from a typed ZIP code, integrated with the Correios API. Clean and responsive interface.',
    },
    image: '/assets/zip-code.png',
    technologies: [
      'HTML',
      'JavaScript',
      'SCSS',
      'Sweetalert2',
      'react-github-corner',
    ],
    liveUrl: 'https://zip-code-ten.vercel.app/',
    githubUrl: 'https://github.com/carlossroliveira/ZIP-Code',
    year: '2021',
    status: {
      pt: 'Concluído',
      en: 'Completed',
    },
    fileSize: {
      pt: '269 KB',
      en: '269 KB',
    },
    commits: '12',
  },
]

export type Project = (typeof projects)[0]
