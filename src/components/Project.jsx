function Project({ title, overview, site, source, image, tech }) {
  return (
    <div className="flex flex-col">
      <img
        src={image}
        className="rounded-lg border border-black"
      ></img>

      <div className="flex flex-col gap-1 mt-2">
        <p className="text-lg font-bold">{title}</p>
        <div>
          <span className="font-bold">Tech:</span>{' '}
          {tech.map((item, index) => (
            <span key={index}>{`${item}, `}</span>
          ))}
        </div>
        <p>{overview}</p>

        <div className="flex gap-5">
          <a href={site} target="_blank" rel="noopener noreferrer">
            Live site <i className="fa-solid fa-arrow-right"></i>
          </a>
          <a href={source} target="_blank" rel="noopener noreferrer">
            Github repo <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
