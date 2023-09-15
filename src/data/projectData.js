import { v4 as uuidv4 } from 'uuid';
import messageBoard from '../assets/img/message-board.png';
import battleship from '../assets/img/battleship.png';
import shoppingCart from '../assets/img/shopping-cart.png';

const projectsList = [
  {
    id: uuidv4(),
    title: 'Mini Message Board',
    description:
      'An online message board where users can view all past messages and post new ones. Data is stored in a non-relational database.',
    site: 'https://message-board-erinsophie.netlify.app/',
    source: 'https://github.com/erinsophie/message-board',
    image: messageBoard,
    tech: ['React', 'Tailwind', 'Node', 'Express', 'MongoDB'],
  },
  {
    id: uuidv4(),
    title: 'Shopping cart',
    description:
      'A mock shopping cart that fetches products from FakeStoreAPI. Users can shop different categories, add products to their cart and checkout with a mock process.',
    site: 'https://shopping-cart-erinsophie.netlify.app',
    source: 'https://github.com/erinsophie/shopping-cart',
    image: shoppingCart,
    tech: [
      'React',
      'React router',
      'React testing library',
      'FakeStoreAPI',
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
];

export default projectsList;
