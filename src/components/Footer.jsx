function Footer() {
  return (
    <footer className="absolute bottom-0 text-gray-400 text-sm md:text-base w-full flex flex-col gap-1 items-center justify-between p-5 md:flex-row">
      <div>
        <p>Built with React.js and Tailwind</p>
      </div>
      <div className="flex gap-2 md:gap-3 items-center">
        <p>erinsophie</p>
        <a
          href="https://github.com/erinsophie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github text-base md:text-2xl"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/sophie-l-4b899415a"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin text-base md:text-2xl"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
