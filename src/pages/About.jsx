import { RoughNotation } from 'react-rough-notation';

function About() {
  return (
    <div className="flex-1">
      <div className="flex gap-24">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold">
            Hello! I&apos;m Sophie, a{' '}
            <RoughNotation
              type="highlight"
              color="#ffcfe4"
              show={true}
              animate={true}
              animationDuration={3000}
              multiline={true}
            >
              Software Developer
            </RoughNotation>
          </h1>

          <div className="flex flex-col gap-8">
            <p>
              For the last 8 months I have been learning the fundamentals in web
              development to become a full-stack software developer. Currently,
              I'm diving deep into{' '}
              <RoughNotation
                type="highlight"
                color="#f1d7fa"
                show={true}
                animate={true}
                animationDuration={3000}
                multiline={true}
              >
                React, Node.js, and Express
              </RoughNotation>
              , and I'm genuinely passionate about building applications that are{' '}
              <RoughNotation
                type="highlight"
                color="#facdaa"
                show={true}
                animate={true}
                animationDuration={3000}
                multiline={true}
              >
                user-friendly, simple and delightful.
              </RoughNotation>
            </p>

            <p>
              Don't forget to check out{' '}
              <RoughNotation
                type="highlight"
                color="#ffcfe4"
                show={true}
                animate={true}
                animationDuration={3000}
                multiline={true}
              >
                my projects
              </RoughNotation>{' '}
              to see the exciting things I've been working on. I'm looking for
              my{' '}
              <RoughNotation
                type="highlight"
                color="#f1d7fa"
                show={true}
                animate={true}
                animationDuration={3000}
                multiline={true}
              >
                first role
              </RoughNotation>{' '}
              in tech, so if my{' '}
              <RoughNotation
                type="highlight"
                color="#facdaa"
                show={true}
                animate={true}
                animationDuration={3000}
                multiline={true}
              >
                skills and passion
              </RoughNotation>{' '}
              resonate with you, please don't hesitate to{' '}
              <RoughNotation
                type="circle"
                color="#ffcfe4"
                show={true}
                animate={true}
                animationDuration={3000}
                multiline={true}
              >
                reach out
              </RoughNotation>{' '}
              for a chat!
            </p>

            <p></p>
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
