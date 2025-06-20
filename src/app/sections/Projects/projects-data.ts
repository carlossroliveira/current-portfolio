export const projects = [
  {
    id: '01',
    title: 'CRUD',
    description:
      'CRUD (Create, Read, Update, and Delete) são as quatro operações básicas (criação, consulta, atualização e destruição de dados).',
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
    status: 'Concluído',
    fileSize: '3,13 MB',
    commits: '41',
  },
  {
    id: '02',
    title: 'DOLLAR CONVERTER',
    description:
      'Converter valores em dólar para real, considerando cotação atual, IOF, tipo de pagamento (dinheiro ou cartão) e impostos estaduais dos EUA.',
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
    status: 'Concluído',
    fileSize: '1,14 MB',
    commits: '18',
  },
  {
    id: '03',
    title: 'ZIP CODE',
    description:
      'Exibe os dados de endereço a partir de um CEP digitado, com integração à API dos Correios. Interface limpa e responsiva.',
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
    status: 'Concluído',
    fileSize: '269 KB',
    commits: '12',
  },
]

export type Project = (typeof projects)[0]
