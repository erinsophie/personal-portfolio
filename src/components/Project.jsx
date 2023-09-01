function Project({ title, description, site, source, image, tech }) {
  return (
    <div className="flex flex-col mb-10 gap-3 lg:gap-8 md:flex-col lg:flex-row md:mb-10 lg:mb-5">
      <div className="border border-black rounded-lg lg:h-[230px] lg:w-[400px] overflow-hidden flex-shrink-0">
        <img src={image} className="h-full w-full object-cover"></img>
      </div>

      <div className="flex flex-col gap-3 lg:gap-4">
        <p className="text-lg font-bold">{title}</p>
        <p>{description}</p>

        <div>
          <span className="font-bold">Tech:</span>{' '}
          {tech.map((item, index) => (
            <span key={index}>{`${item}, `}</span>
          ))}
        </div>

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
