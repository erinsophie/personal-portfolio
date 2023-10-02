import { Link } from 'react-router-dom';

function Links() {
  return (
    <div className="absolute top-5 right-5 flex lg:right-48 lg:top-56 text-gray-400 lg:flex-col gap-3 text-base">
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

export default Links;
