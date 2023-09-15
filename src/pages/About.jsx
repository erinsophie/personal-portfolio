import { useState } from 'react';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

function About() {
  const [show, setShow] = useState(true);
  const pink = '#ffcfe4';
  const purple = '#f1d7fa';
  const orange = '#facdaa';

  return (
    <div className="flex-1 mb-20 md:mb-0">
      <div className="flex gap-24">
        <div className="flex flex-col gap-7">
          <RoughNotationGroup show={show}>
            <h1 className="text-4xl font-bold">
              Hello! I&apos;m Sophie, a{' '}
              <RoughNotation
                type="highlight"
                color={pink}
                animate={true}
                animationDuration={1000}
                multiline={true}
              >
                Software Developer
              </RoughNotation>
            </h1>

            <div className="flex flex-col gap-4">
              <p>
                For the last 9 months I&apos;ve been enrolled in{' '}
                <a
                  href="https://www.theodinproject.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="underline"
                >
                  The Odin Project
                </a>{' '}
                - a free open-source coding curriculum - starting with the
                foundations course where I learned the fundamentals in{' '}
                <RoughNotation
                  type="highlight"
                  color={orange}
                  animate={true}
                  animationDuration={1000}
                  multiline={true}
                >
                  HTML, CSS, and JavaScript.
                </RoughNotation>{' '}
                I have continued to expand my learning with tools such as React
                to create{' '}
                <RoughNotation
                  type="highlight"
                  color={purple}
                  animate={true}
                  animationDuration={1000}
                  multiline={true}
                >
                  dynamic frontends
                </RoughNotation>{' '}
                along with{' '}
                <RoughNotation
                  type="highlight"
                  color={pink}
                  animate={true}
                  animationDuration={1000}
                  multiline={true}
                >
                  Node.js, Express, and MongoDB,
                </RoughNotation>{' '}
                bringing end-to-end web development concepts into practice. Take
                a look at my projects to see what I&apos;ve been working on!
              </p>

              <p>
                As a proactive learner, I&apos;m part of a community where I
                regularly participate in their Discord channel. This
                collaborative environment has made me realise I find joy in
                assisting others with their queries and coding dilemmas.
              </p>

              <p>
                I&apos;m looking for my{' '}
                <RoughNotation
                  type="highlight"
                  color={orange}
                  animate={true}
                  animationDuration={1000}
                  multiline={true}
                >
                  first role
                </RoughNotation>{' '}
                as a developer, so if my desire to learn and{' '}
                <RoughNotation
                  type="highlight"
                  color={purple}
                  animate={true}
                  animationDuration={1000}
                  multiline={true}
                >
                  self-starter attitude
                </RoughNotation>{' '}
                resonate with you, I&apos;m eager to connect and explore
                opportunities where I can add value to your team.
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
          </RoughNotationGroup>
        </div>
      </div>
    </div>
  );
}

export default About;
