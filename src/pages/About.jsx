import { RoughNotation } from 'react-rough-notation';

function About() {
  const pink = '#ffcfe4';
  const purple = '#f1d7fa';
  const orange = '#facdaa';

  return (
    <div className="flex-1 mb-20 md:mb-0">
      <div className="flex gap-24">
        <div className="flex flex-col gap-7">
          <h1 className="text-4xl font-bold">
            Hello! I&apos;m Sophie, a{' '}
            <RoughNotation
              type="highlight"
              color={pink}
              show={true}
              animate={true}
              animationDuration={3000}
              multiline={true}
            >
              Software Developer
            </RoughNotation>
          </h1>

          <div className="flex flex-col gap-4">
            <p>
              I enjoy building beautiful, simple and{' '}
              <RoughNotation
                type="box"
                color={orange}
                show={true}
                animate={true}
                animationDuration={3000}
                multiline={true}
              >
                user-friendly
              </RoughNotation>{' '}
              applications.
            </p>

            <p>
              I spent 7 months building a solid foundation in{' '}
              <RoughNotation
                type="highlight"
                color={orange}
                show={true}
                animate={true}
                animationDuration={3000}
                multiline={true}
              >
                HTML, CSS, and JavaScript
              </RoughNotation>{' '}
              by creating pure vanilla JS projects. After which point, I moved
              onto learning framworks such as{' '}
              <RoughNotation
                type="highlight"
                color={purple}
                show={true}
                animate={true}
                animationDuration={3000}
                multiline={true}
              >
                React, Node.js, and Express.
              </RoughNotation>{' '}
              React helps me build out the front end much quicker and with a
              greater{' '}
              <RoughNotation
                type="underline"
                color={pink}
                show={true}
                animate={true}
                animationDuration={3000}
                multiline={true}
              >
                separation of concerns
              </RoughNotation>{' '}
              (it&apos;s the best thing ever!), while learning backend
              frameworks has helped to round out my knowledge of what&apos;s
              actually happening{' '}
              <RoughNotation
                type="highlight"
                color={purple}
                show={true}
                animate={true}
                animationDuration={3000}
                multiline={true}
              >
                behind the scenes.
              </RoughNotation>
            </p>

            <p>
              Take a look at my{' '}
              <RoughNotation
                type="highlight"
                color={pink}
                show={true}
                animate={true}
                animationDuration={3000}
                multiline={true}
              >
                projects
              </RoughNotation>{' '}
              to see what I&apos;ve been working on. I&apos;m looking for my
              first role in tech, so if my willingness to learn and{' '}
              <RoughNotation
                type="highlight"
                color={orange}
                show={true}
                animate={true}
                animationDuration={3000}
                multiline={true}
              >
                self-starter attitude
              </RoughNotation>{' '}
              resonate with you, please don&apos;t hesitate to{' '}
              <RoughNotation
                type="circle"
                color={pink}
                show={true}
                animate={true}
                animationDuration={3000}
                multiline={true}
              >
                reach out.
              </RoughNotation>
            </p>
          </div>

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
      </div>
    </div>
  );
}

export default About;
