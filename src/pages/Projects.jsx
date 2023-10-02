import { useState } from 'react';
import projectsList from '../data/projectData';
import Project from '../components/Project';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    if (currentIndex < projectsList.length - 1)
      setCurrentIndex(currentIndex + 1);
    if (currentIndex === projectsList.length - 1) setCurrentIndex(0);
  }

  function handlePrev() {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    if (currentIndex === 0) setCurrentIndex(projectsList.length - 1);
  }

  return (
    <div className="flex flex-col gap-5">
      <p className="font-bold text-2xl">Projects</p>

      <div className="flex gap-5 justify-between">
        <button onClick={handlePrev}>
          <i className="fa-solid fa-chevron-left text-2xl"></i>
        </button>
        <Project {...projectsList[currentIndex]} />
        <button onClick={handleNext}>
          <i className="fa-solid fa-chevron-right text-2xl"></i>
        </button>
      </div>

      <a
        href="https://github.com/erinsophie?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className='underline'
      >
        View all projects
      </a>
    </div>
  );
}

export default Projects;
