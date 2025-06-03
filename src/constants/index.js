export const myProjects = [
  {
    title: "Kanban board",
    desc: "Реализовала функционал создания, добавления и удаления колонок с задачами. Колонки и задачи можно поменять местами, все изменения сохраняются в локальное хранилище. ",
    subdesc: "",
    href: "https://evgeniachrimli.github.io/kanbanBoard/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/kamb.png",
    logoStyle: {
      backgroundColor: "#F5F5F5",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },

    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Dnd-kit",
        path: "/assets/dnd-kit-logo.svg",
      },
    ],
  },
  {
    title: "Приложение с данными GitHub Api",
    desc: "На главной странице приложение выводит список всех публичных репозиториев с пагинацией. Реализован поиск по текущей странице и фильтрация по языку программирования. ",
    subdesc:
      "Также реализована смена темы(createContext, useContext), можно перейти на страницу репо с более подробным описанием, есть график(Chart.js), который отображает статистику по языкам. Можно добавить или удалить из избранного любой репозиторий.",
    href: "https://github.com/EvgeniaChrimli/gitApp",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/github.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },

      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Redux toolki",
        path: "/assets/redux.svg",
      },
    ],
  },
  {
    title: "Infinity Pro",
    desc: "Верстка по макету Figma. Реализованы слайдеры с использованием библиотеки Slider Swiper, адаптивная верстка, динамическая генерация страниц из массива, модальные окна.",
    subdesc: "",
    href: "https://evgeniachrimli.github.io/infiniti/",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/figma.svg",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "JavaScript",
        path: "/assets/js.svg",
      },
      {
        id: 2,
        name: "Swiper Slider",
        path: "assets/swip.png",
      },
    ],
  },
  {
    title: "Алтай кардан сервис",
    desc: "Верстка по макету Figma. Реализованы слайдеры с использованием библиотеки Slider Swiper, адаптивная верстка, динамическая генерация страниц из массива, модальные окна.",
    subdesc: "",
    href: "https://evgeniachrimli.github.io/service/",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/figma.svg",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "JavaScript",
        path: "/assets/js.svg",
      },
      {
        id: 2,
        name: "Swiper Slider",
        path: "assets/swip.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    //ringPosition: isSmall
    spherePosition: isSmall
      ? [-10, 10, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-15, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const about = [
  {
    id: 1,
    title:
      "Ответственно отношусь к работе, не боюсь браться за задачи, с которыми ранее не сталкивалась, лучше попробовать и научиться, чем побояться и отказаться. Я быстро учусь, усидчива, могу запомнить большой объем информации. Пунктуальна, ценю чужое и свое время. Умею правильно и четко излагать свои мысли письменно/устно. Знаю английский на уровне умения читать документацию с Google Translate(pre intermediate).",
    icon: "/assets/woman.svg",
    animation: "victory",
  },
  {
    id: 2,
    title:
      "Образование: бакалвр, РАНХиГС СКАГС, факультет финансы и кредит. Год окончания 2020",
    icon: "/assets/education.svg",
    animation: "clapping",
  },
  {
    id: 3,
    title:
      "Технические навыки: HTML; CSS/SASS, адаптивная верстка, БЭМ, media queries; Bootstarp, Tailwind; Figma(для работы с макетами); JavaScript(ES6+); работа с API; React: react router dom, react hooks, redux toolkit, react context, asynkThunk, модульный css; Three.js, базовые настройки для рендера и управления 3д моделями; TypeScript; пакетный менеджер(npm); GIT; AI инструменты(чат гпт, прочие нейросети для генерации контента, дизайна сайтов)",
    icon: "/assets/tech.svg",
    animation: "salute",
  },
];
