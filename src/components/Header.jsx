import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="text-gray-400 p-6 flex gap-8 justify-end items-center text-base mr-5">
      <Link to="/" className="hover:text-black">
        About
      </Link>
      <Link to="/projects" className="hover:text-black">
        Projects
      </Link>
      <Link to="/contact" className="hover:text-black">
        Contact
      </Link>
    </div>
  );
}

export default Header;
