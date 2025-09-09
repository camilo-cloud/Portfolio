

// Import images from assets so Vite can optimize them
import mueblesImg from '../assets/images/portada.webp';
import minimarketImg from '../assets/images/minimarket-cover.png';
import placeholder2 from '../assets/images/portada3.webp';

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
    title: 'Portfolio Placeholder 2',
    description: 'Another upcoming project to demonstrate responsive design and animations.',
    image: placeholder2,
    liveUrl: '#',
    repoUrl: '#',
    tech: ['React', 'CSS Animations']
  },
  // {
  //   id: 4,
  //   title: 'MuebleArte',
  //   description: 'Responsive furniture e-commerce landing page built with React and Vite.',
  //   image: mueblesImg,
  //   liveUrl: 'https://camilo-cloud.github.io/pagina-muebles/',
  //   repoUrl: 'https://github.com/camilo-cloud/pagina-muebles',
  //   tech: ['React', 'Vite', 'CSS']
  // },
  // {
  //   id: 5,
  //   title: 'MuebleArte',
  //   description: 'Responsive furniture e-commerce landing page built with React and Vite.',
  //   image: mueblesImg,
  //   liveUrl: 'https://camilo-cloud.github.io/pagina-muebles/',
  //   repoUrl: 'https://github.com/camilo-cloud/pagina-muebles',
  //   tech: ['React', 'Vite', 'CSS']
  // },
];
