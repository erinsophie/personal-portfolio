import membersOnly from '../assets/img/members-only.png';
import battleship from '../assets/img/battleship.png';
import shoppingCart from '../assets/img/shopping-cart.png';

const projectsList = [
  {
    title: 'Members Only',
    overview:
      'A message app that grants different permissions to different users based on their membership status',
    site: 'https://members-only-erinsophie.netlify.app/',
    source: 'https://github.com/erinsophie/members-only',
    image: membersOnly,
    tech: ['React', 'Tailwind', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Shopping cart',
    overview:
      'An e-commerce shopping app that fetches products from an external API',
    site: 'https://shopping-cart-erinsophie.netlify.app',
    source: 'https://github.com/erinsophie/shopping-cart',
    image: shoppingCart,
    tech: ['React', 'Tailwind', 'React Testing Library', 'FakeStoreAPI'],
  },
  {
    title: 'Battleship',
    overview:
      'An interactive browser-based game, akin to the Hasbro™ board game, Battleship',
    site: 'https://erinsophie.github.io/battleship/',
    source: 'https://github.com/erinsophie/battleship',
    image: battleship,
    tech: ['Javascript', 'HTML', 'CSS', 'Jest'],
  },
];

export default projectsList;
