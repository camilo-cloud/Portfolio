

// Import images from assets so Vite can optimize them
import mueblesImg from '../assets/images/portada.webp';
import minimarketImg from '../assets/images/minimarket-cover.png';
import portfolioImg from '../assets/images/portfolio.png';

export const projects = [
  {
    id: 1,
    title: 'MuebleArte',
    description: 'Responsive furniture e-commerce landing page built with React and Vite.',
    image: mueblesImg,
    liveUrl: 'https://camilo-cloud.github.io/pagina-muebles/',
    repoUrl: 'https://github.com/camilo-cloud/pagina-muebles',
    tech: ['React', 'Vite', 'CSS']
  },
  {
    id: 2,
    title: 'React E-commerce',
    description: 'A complete front-end simulation of an online minimarket with a dynamic shopping cart.',
    image: minimarketImg,
    liveUrl: 'https://mini-market-eosin.vercel.app/',
    repoUrl: 'https://github.com/camilo-cloud/MiniMarket',
    tech: ['Vite', 'React Router', 'CSS', 'localStorage']
  },
  {
    id: 3,
    title: 'Personal Portfolio',
    description: 'My personal portfolio website built with React and Vite to showcase my skills and projects.',
    image: portfolioImg,
    liveUrl: 'https://portfolio-pink-pi.vercel.app/',
    repoUrl: 'https://github.com/camilo-cloud/Portfolio',
    tech: ['React', 'Vite', 'CSS', 'Responsive Design']
  },
];
