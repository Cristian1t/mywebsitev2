import React from 'react';
import { AiFillHtml5 } from '@react-icons/all-files/ai/AiFillHtml5';
import { IoLogoCss3 } from '@react-icons/all-files/io/IoLogoCss3';
import { SiJavascript } from '@react-icons/all-files/si/SiJavascript';
import { FaReact } from '@react-icons/all-files/fa/FaReact';
import { SiGatsby } from '@react-icons/all-files/si/SiGatsby';
import { SiNextDotJs } from '@react-icons/all-files/si/SiNextDotJs';
import { SiStyledComponents } from '@react-icons/all-files/si/SiStyledComponents';
import { SiTailwindcss } from '@react-icons/all-files/si/SiTailwindcss';
import { SiMaterialUi } from '@react-icons/all-files/si/SiMaterialUi';
import { GrGraphQl } from '@react-icons/all-files/gr/GrGraphQl';
import { SiJest } from '@react-icons/all-files/si/SiJest';
import { FaGitAlt } from '@react-icons/all-files/fa/FaGitAlt';
import { FaGithubSquare } from '@react-icons/all-files/fa/FaGithubSquare';

import styled from 'styled-components';
import { IconContext } from '@react-icons/all-files/lib';
import { Helmet } from 'react-helmet';

const StyledAbout = styled.div`
  display: grid;

  grid-template-rows: 1fr auto;
  grid-gap: 0.2rem;
  @media (min-width: 769px) {
    grid-gap: 2rem;
    grid-template-rows: 1fr 1fr;
  }
  .first {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    background: white;
    animation: slideInFromBottom 2s ease;
    @media (min-width: 769px) {
      margin-top: 2rem;
      margin-right: 1.5rem;
      animation: slideInFromLeft 2s ease;
      border-radius: 1rem;
    }
    .besidesp {
      font-size: 1.4rem;
    }
    h2,
    p {
      text-align: center;
      margin: 0.5rem;
    }
    ul {
      list-style: square;
      li {
        span {
          font-weight: bold;
        }
        .basic {
          font-weight: lighter;
          font-style: italic;
          font-size: 1rem;
        }
      }
    }
    .css {
      color: blue;
    }
    .javascript {
      color: orange;
    }
    .react {
      color: darkblue;
    }
    .gatsby {
      color: #9932cc;
    }
    .nextjs {
      color: black;
    }
    .styledc {
      color: #ff00ff;
      font-size: 1.3rem;
    }
    .tailwind {
      color: lightskyblue;
    }
    .materialui {
      color: #4169e1;
    }
    .graphql {
      color: purple;
    }
    .jest {
      color: brown;
    }
    .git {
      color: tomato;
    }
    .htmlicon {
      color: red;
    }
  }
  .second {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.2rem;
    justify-content: center;
    background: white;
    animation: slideInFromBottom 2s ease;
    @media (min-width: 769px) {
      animation: slideInFromRight 2s ease;
      margin-right: 1.5rem;
      border-radius: 1rem;
    }
    h2,
    p {
      text-align: center;
      margin: 0.5rem;
      .gatsby {
        color: #9932cc;
      }
      a {
        text-decoration: none;
        color: inherit;
        .github {
          color: black;
        }
      }
    }
  }
  .react-icons {
    vertical-align: top;
  }
`;

function About() {
  return (
    <StyledAbout>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <title>Cristian Turmacu || About</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Check out more about my development stack. Also how this page was built"
        />
      </Helmet>
      <IconContext.Provider value={{ className: 'react-icons' }}>
        <div className="first">
          <h2>
            My name is Cristian and i'm trying to transform my passion for Web
            Development into a job.
          </h2>
          <p className="besidesp">
            Besides <AiFillHtml5 className="htmlicon" />
            HTML, <IoLogoCss3 className="css" />
            CSS and <SiJavascript className="javascript" />
            JavaScript... I mainly use <FaReact className="react" />
            React with <SiGatsby className="gatsby" />
            GatsbyJS/
            <SiNextDotJs className="nextjs" />
            NextJS frameworks.
          </p>
          <ul>
            <li>
              <span>Styling:</span> <SiStyledComponents className="styledc" />
              Styled-components, <SiTailwindcss className="tailwind" />
              TailwindCSS, <SiMaterialUi className="materialui" />
              MaterialUI
            </li>
            <li>
              <span>Quering:</span> <GrGraphQl className="graphql" />
              Graphql
            </li>
            <li>
              <span>Testing:</span> <SiJest className="jest" />
              Jest
            </li>
            <li>
              <span>Version control:</span> <FaGitAlt className="git" />
              Git
            </li>
            <li>
              <span>UI/UX:</span> Figma, SketchBook, Adobe Illustrator
            </li>
            <li>
              <span>Back-End:</span> NodeJs, Express, MongoDB (still learning)
            </li>
            <li>
              <span className="basic">Basic understanding of PHP, SQL</span>
            </li>
          </ul>
        </div>
        <div className="second">
          <h2>
            This website is built using <SiGatsby className="gatsby" />
            GatsbyJS.
          </h2>
          <p>
            The project page is made by quering the data with GraphQl from a
            Contentful space and rendering it into a React-table.
          </p>
          <p>I'm also using react-typist, react-icons and parallax.js. </p>
          <p>
            Find more info in the repository on{' '}
            <a
              href="https://github.com/Cristian1t/mywebsitev2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare className="github" />
              GitHub
            </a>
            .
          </p>
        </div>
      </IconContext.Provider>
    </StyledAbout>
  );
}

export default About;
