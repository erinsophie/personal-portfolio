import projectsList from '../data/projectData';
import Project from '../components/Project';

function Projects() {
  return (
    <div className="flex-1 flex flex-col gap-6">
      <p className="font-bold text-2xl">Projects</p>
      {projectsList.map((project) => (
        <Project
          key={project.id}
          title={project.title}
          description={project.description}
          site={project.site}
          source={project.source}
          image={project.image}
          tech={project.tech}
        ></Project>
      ))}

      <a
        href="https://github.com/erinsophie?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        View all projects <i className="fa-solid fa-arrow-right"></i>
      </a>
    </div>
  );
}

export default Projects;
