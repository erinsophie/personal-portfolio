import { RoughNotation } from 'react-rough-notation';

function About() {
  return (
    <div className='flex flex-col gap-5'>
      <h1 className="text-xl md:text-4xl font-bold">
        Hello! I&apos;m Sophie, a{' '}
        <RoughNotation
          type="highlight"
          color={'#ffcfe4'}
          animate={true}
          show={true}
          animationDuration={1000}
          multiline={true}
        >
          Software Developer
        </RoughNotation>
      </h1>

      <p className='text-sm md:text-base'>
        With my background as a copywriter, I bring a range of skills in
        communication, creativity and attention to detail to the field of
        software development. For the last year, I have been fully dedicated to
        making the career change towards software development through full-time
        studying and hands-on projects. My self-starter attitude, keen
        problem-solving abilities and eagerness to learn mean I&apos;m looking
        forward to my future role as a software developer.
      </p>

      <div className="flex gap-6">
        <a
          href="https://github.com/erinsophie"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-black p-2 rounded-md"
        >
          View Github
        </a>

        <a
          href="https://www.linkedin.com/in/sophie-l-4b899415a"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white p-2 rounded-md"
        >
          View LinkedIn
        </a>
      </div>
    </div>
  );
}

export default About;
