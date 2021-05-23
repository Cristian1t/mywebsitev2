import Typist from 'react-typist';
import styled from 'styled-components';
import React, { useEffect, useRef } from 'react';
import Parallax from 'parallax-js';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

const StyledHero = styled.div`
  @media (max-width: 768px) {
    text-align: center;
    width: 90%;
    margin: 0 auto;
  }
  .mytypist {
    /* line-height: 80%; */
    .bighello {
      font-size: 6rem;
      font-family: ${({ theme }) => theme.fonts.second};
      font-weight: bold;
      text-transform: uppercase;
      margin: 0;
    }
    h2 {
      font-size: 3rem;
    }
  }
  .line {
    width: 40%;
    height: 3px;
    background: white;
    animation: grow 2s ease-in;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .otherh3 {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    .lefth3 {
      animation: slideInFromRight 2s ease-in-out;
      align-self: flex-start;
      line-height: 10%;
      @media (max-width: 768px) {
        line-height: normal;
      }
    }
    .righth3 {
      margin-top: 10rem;
      animation: slideInFromLeft 2s ease;
      @media (max-width: 768px) {
        align-self: flex-end;
      }
      a {
        color: ${({ theme }) => theme.color.details};
        :hover {
          color: ${({ theme }) => theme.color.details2};
        }
      }
    }
  }
  .scene {
    color: ${({ theme }) => theme.color.details2};
    font-size: 1.5rem;
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    /* animation: float 5s ease infinite; */
    overflow: hidden;
    @media (max-width: 768px) {
      display: none;
    }

    .layer1 {
      width: 5%;
      margin-top: 18%;
      margin-left: 70%;
      font-size: 2.5rem;
    }
    .layer2 {
      margin-top: 22%;
      margin-left: 70%;
      font-size: 1.5rem;
    }
    .layer3 {
      margin-top: 14%;
      margin-left: 75%;
    }
    .layer4 {
      margin-top: 20%;
      margin-left: 78%;
      font-size: 1rem;
    }
    .layer5 {
      margin-top: 26%;
      margin-left: 80%;
    }
    .layer6 {
      margin-top: 27%;
      margin-left: 75%;
      font-size: 1rem;
    }
  }
`;

const Hero = () => {
  const sceneEl = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
      hoverOnly: true,
    });

    parallaxInstance.enable();
    console.log(sceneEl);

    return () => parallaxInstance.disable();
  }, []);

  return (
    <StyledHero id="container">
      <Helmet>
        <title>Cristian Turmacu || Home</title>
      </Helmet>
      <Typist
        className="mytypist"
        cursor={{ show: false }}
        avgTypingDelay={100}
      >
        <h1 className="bighello">Hello,</h1>
        <h2>Welcome to my website.</h2>
      </Typist>
      <div className="line"></div>
      <div className="otherh3">
        <h3 className="lefth3">I'm a Front-End Developer</h3>
        <h3 className="lefth3">Still learning a lot of things, but...</h3>
        <h3 className="righth3">
          ...check out some of my <Link to="/projects">work</Link>
        </h3>
      </div>
      <div
        id="scene"
        data-hover-only="true"
        data-relative-input="true"
        className="scene border"
        ref={sceneEl}
      >
        <div data-depth="0.6" className="layer1">
          <h2>React</h2>
        </div>
        <div data-depth="0.4" className="layer2">
          <h2>Figma</h2>
        </div>
        <div data-depth="0.5" className="layer3">
          <h2>GatsbyJs</h2>
        </div>
        <div data-depth="0.3" className="layer4">
          <h2>Styled-Components</h2>
        </div>
        <div data-depth="0.22" className="layer5">
          <h2>NextJs</h2>
        </div>
        <div data-depth="0.35" className="layer6">
          <h2>Git</h2>
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
