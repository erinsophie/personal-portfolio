import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="p-6 flex gap-6 justify-end items-center text-base mr-5">
      <Link to="/" className='hover:text-gray-400'>Home</Link>
      <Link to="/about" className='hover:text-gray-400'>About</Link>
      <Link to="/projects" className='hover:text-gray-400'>Projects</Link>
      <Link to="/contact" className='hover:text-gray-400'>Contact</Link>
    </div>
  );
}

export default Header;
