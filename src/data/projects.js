import Html from "/html.svg"
import Css from "/css.svg"
import Express from "/express.svg"
import Git from "/git.svg"
import Github from "/github.svg"
import Jest from "/jest.svg"
import Zod from "/zod.svg"
import Js from "/js.svg"
import Nest from "/nestjs.svg"
import Next from "/nextjs.svg"
import Nodejs from "/nodejs.svg"
import PostgreSQL from "/postgresql.svg"
import Prisma from "/prisma.svg"
import React from "/react.svg"
import Sass from "/sass.svg"
import Tailwind from "/tailwind.svg"
import Typescript from "/typescript.svg"

export const projects = [
    {
        id: 0,
        name: "Violeta Eliz",
        description: "Desenvolvedor Front-end no projeto voluntário Violeta Eliz, iniciativa que promove projetos sociais e ações de acolhimento, com foco em fortalecer a presença digital e ampliar a divulgação institucional. Desenvolvido com React, Next.js e TailwindCSS.",
        site: "https://violetaeliz.org.br/",
        img: "https://i.imgur.com/Am3tIGF.png",
        technologies: [Typescript, React, Next, Tailwind, Html],
        git: "https://github.com/luisfilipe21/pokedex/tree/master/Pokedex" 
    },
    {
        id: 1,
        name: "QRHealth",
        description: "Desenvolvedor Fron-end contratado pela startup QRHealth, aplicativo que centraliza em um único local os resultados de todos os exames realizado pelo paciente, para redesign e implementação de nova  landing-page. Desenvolvido em Next.js, Tailwind e Javascrpt.",
        site: "https://qrhealth.io/",
        img: "https://i.imgur.com/vclYh7N.png",
        technologies: [Next, React, Js, Tailwind, Html],
        git: ""
    },
    {
        id: 2,
        name: "Portfólio Colaborativo",
        description: "Desenvolvedor Front-end e líder do time Eagle no projeto Portfólio Colaborativo, responsável pelo desenvolvimento das seções principais (Header, Footer, apresentação da equipe e Dark Mode) e pela padronização/refatoração do código para garantir consistência e qualidade de entrega. Projeto construído em React, JavaScript, Tailwind, Zod, Axios e Zustand.",
        site: "https://portifolio-colaborativo-codewizard.onrender.com/",
        img: "https://i.imgur.com/R7V4tjQ.png",
        technologies: [React, Js, Tailwind, Html, Zod],
        git: "https://github.com/luisfilipe21/portifolio-colaborativo-codewizard-Eaglescoders"
    },
    {
        id: 4,
        name: "Kenzie Movie",
        description: "Desenvolvedor Front-end em projeto colaborativo para aprimorar Git Flow, design e responsividade. Responsável pela implementação de cadastro, login e avaliação de filmes, com validação via Zod e proteção de rotas baseada em autorização, garantindo segurança e consistência da navegação. Construído em React e SCSS.",
        site: "https://kenzie-movie-five.vercel.app/",
        img: "https://i.imgur.com/OlLsC8U.png",
        technologies: [React, Js, Html, Sass, Zod],
        git: "https://github.com/timeKenzieMovie/kenzie_movie"
    },
    {
        id: 5,
        name: "Adoção da Tina",
        description: "Desenvolvedor Front-end em projeto voluntário para o Centro Espírita Esperança e Consolação Francisco de Assis, criando uma plataforma para dar visibilidade a animais resgatados e acelerar o processo de adoções. Projeto construído em React, Tailwind e JavaScript.",
        site: 'https://tina-adocao.vercel.app/',
        img: "https://i.imgur.com/ii89kxy.png",
        technologies: [React, Tailwind, Html, Js],
        git: "https://github.com/luisfilipe21/adocao"
    },
    {
        id: 6,
        name: "Pokedex",
        description: "This project was carried out by accessing the Pokemon API with pure Javascript, styled with CSS and responsive to different screen sizes. Some of its features are dark mode and choosing your favorite pokemons.",
        site: "https://pokedex-6w6zorbf0-luisfilipe21.vercel.app",
        img: "https://i.imgur.com/vhUu9Xm.png",
        technologies: [Js, Html, Css],
        git: "https://github.com/luisfilipe21/pokedex/tree/master/Pokedex" 
    },
    {
        id: 7,
        name: "Bulário Eletrônico",
        description: "This project was a challenge proposed by a company for a front end position focusing on React. The challenge was to interact with a JSON-SERVER API and create a page with a limit of 10 medicines per page, sorted in descending order of issue date and a search by medicine name and laboratory name. The design was up to us.",
        site: "",
        img: "https://i.imgur.com/za11UnX.png",
        technologies: [React, Sass, Html, Js],
        git: "https://github.com/luisfilipe21/bulario_eletronico"
    },
    {
        id: 8,
        name: "Social Media",
        description: "This is social midia app, where you can create posts, like and open your friend's full post.  There is also the option to start to follow new people inside the page. And since this project is in Javascript vanilla, there is an abundunce of async functions.",
        site: "https://rede-social-bice.vercel.app/",
        img: "https://i.imgur.com/bHM5DKS.png",
        technologies: [Js, Html, Css],
        git: "https://github.com/Kenzie-Academy-Brasil-Developers/Kenzie-Academy-Brasil-Developers-entrega-criando-rede-social_luisfilipe21"
    },
    {
        id: 9,
        name: "Open Music",
        description: "I present an application project for selling music albums with simultaneous filters for musical genre and price per album, which can also be used separately, in addition to having a dark mode. The technologies used were Javascript, HTML and CSS.",
        site: "https://kenzie-academy-brasil-developers-open-music-templa-luisfilipe21.vercel.app/",
        img: "https://i.imgur.com/c6RrHba.png",
        technologies: [Js, Html, Css],
        git: "https://github.com/Kenzie-Academy-Brasil-Developers/Kenzie-Academy-Brasil-Developers-open-music-template_luisfilipe21"
    },
    
    
    {
        id: 10,
        name: "Nu Kenzie",
        description: "This is a simulation of a finance control app, where we can control the inflow and outflow of money, returning the final balance. We may also delete one card once it is no longer needed or has been wrongly added.",
        site: "https://kenzie-academy-brasil-developers-react-entrega-s1-luisfilipe21.vercel.app/",
        img: "https://i.imgur.com/DeOvJ7t.png",
        technologies: [Js, Html, Sass,],
        git: "https://github.com/Kenzie-Academy-Brasil-Developers/Kenzie-Academy-Brasil-Developers-react-entrega-s1-template-nu-kenzie_luisfilipe21"
    },
    {
        id: 11,
        name: "Pet Info",
        description: "In this project I creation of a social network for pets, where you can create posts, like and comment on the posts of your pet friends. There is also a schema for creating and validating logins via Zod, and just a touch to make a better UX for project was usage of the Toastify library. And since this project is in Javascript vanilla, there is an abundunce of async functions. The Pet Api was provided by Kenzie Academy Brasil.",
        site: "https://kenzie-academy-brasil-developers-pet-info-template-luisfilipe21.vercel.app/",
        img: "https://i.imgur.com/OJ87HP7.png",
        technologies: [Js, Html, Css],
        git: "https://github.com/Kenzie-Academy-Brasil-Developers/Kenzie-Academy-Brasil-Developers-pet-info-template-1_luisfilipe21"
    },
    {
        id: 12,
        name: "Rifa Alexa",
        description: "This was an ordered project by a client who wanted to raffle an Echo Dot AKA Alexa. A list of 50 names was created to be chosen for the random draw. When the name was sold, it would be grayed out and could no longer be picked. By his choice, the random draw of the names was not to be included within this application.",
        site: "https://rifa-echodot.vercel.app/",
        img: "https://i.imgur.com/5rsaskK.png",
        technologies: [Js, Html,Css],
        git: "https://github.com/luisfilipe21/rifa_alexa/"
    },
    {
        id: 13,
        name: "Cars API",
        description: "This was a project commissioned by a client who wanted to raffle an Echo Dot AKA Alexa. A list of 50 names was created to be chosen for the random draw. When the name was sold, it would be grayed out and could no longer be chosen. By his choice, the random draw of names within this application was not ugly.",
        site: "",
        img: "https://i.imgur.com/CDZETX1.png",
        technologies: [Nodejs, Typescript, Jest, Prisma, PostgreSQL, Express],
        git: "https://github.com/luisfilipe21/cars_api"
    },
    {
        id: 14,
        name: "Tasks API",
        description: "This project was to practice our logic in unit and integration testing of the API we built. Testing all possible routes and errors that each one could return.",
        site: "",
        img: "https://i.imgur.com/vNUYcwe.png",
        technologies: [Nodejs, Typescript, Jest, Prisma, PostgreSQL, Express],
        git: "https://github.com/Kenzie-Academy-Brasil-Developers/Kenzie-Academy-Brasil-Developers-m5-template-entrega1_luisfilipe21"
    },
    {
        id: 15,
        name: "Landing page - Login",
        description: "A simple landing page with a login structure and a button. This was mainly a CSS challenge.",
        site: "https://login-landing-page-three.vercel.app/",
        img: "https://i.imgur.com/oP4Cm0y.png",
        technologies: [Js, Html, Css ],
        git: "https://github.com/luisfilipe21/landingpage_login"
    },
    {
        id: 16,
        name: "Kenzie Hub",
        description: "This is an application that creates and validates logins with the help of Zod. Once inside the home page, it is possible to create cards with information about the user. Made with vanilla CSS Javascript and the Toastify library",
        site: "https://kenzie-hub-hazel.vercel.app/",
        img: "https://i.imgur.com/hWHnMJS.png",
        technologies: [Js,Html, Css ],
        git: "https://github.com/Kenzie-Academy-Brasil-Developers/Kenzie-Academy-Brasil-Developers-react-entrega-kenzie-hub-_luisfilipe21"
    },
]