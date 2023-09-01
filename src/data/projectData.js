import { v4 as uuidv4 } from 'uuid';
import weatherApp from '../assets/img/weather-app.png';
import battleship from '../assets/img/battleship.png';
import shoppingCart from '../assets/img/shopping-cart.png';

const projectsList = [
  {
    id: uuidv4(),
    title: 'Shopping cart',
    description:
      'A mock shopping cart where users can shop different categories, add products to their cart and checkout with a mock process.',
    site: 'https://glowing-custard-e8ce90.netlify.app/',
    source: 'https://github.com/erinsophie/shopping-cart',
    image: shoppingCart,
    tech: [
      'React',
      'React router',
      'React testing library',
      'Context API',
      'Vitest',
      'TailwindCSS',
    ],
  },
  {
    id: uuidv4(),
    title: 'Battleship',
    description:
      'Play against the computer in this interactive browser-based game akin to the Hasbro™ board game, Battleship.',
    site: 'https://erinsophie.github.io/battleship/',
    source: 'https://github.com/erinsophie/battleship',
    image: battleship,
    tech: ['HTML', 'CSS', 'Javascript', 'Jest'],
  },
  {
    id: uuidv4(),
    title: 'Weather App',
    description:
      'Search for any city and the current data, including local time, temperature and condition will be displayed.',
    site: 'https://erinsophie.github.io/weather-app/',
    source: 'https://github.com/erinsophie/weather-app',
    image: weatherApp,
    tech: ['HTML', 'CSS', 'Javascript', 'Weather API'],
  },
];

export default projectsList;
