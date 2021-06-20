import styled from 'styled-components';
import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import HeroParallax from './HeroParallax';

const StyledHero = styled.div`
  width: 100%;
  @media (min-width: 769px) {
    width: 55%;
  }
  .mytypist {
    display: flex;
    flex-direction: column;
    text-align: center;
    @media (min-width: 769px) {
      text-align: start;
    }

    .bighello {
      font-size: 4rem;
      font-family: ${({ theme }) => theme.fonts.second};
      font-weight: bold;
      text-transform: uppercase;
      margin: 0;
      line-height: normal;
      @media (min-width: 769px) {
        font-size: 6em;
      }
    }
    .welcome {
      line-height: 80%;
      font-size: 2rem;
      @media (min-width: 769px) {
        font-size: 3rem;
      }
    }
  }
  .line {
    width: 100%;
    height: 4px;
    background: white;
  }
  .otherh3 {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    animation: slideInFromBottom 2s ease;
    @media (min-width: 769px) {
      font-size: 1.5rem;
    }
    .lefth3 {
      text-align: left;
      @media (min-width: 769px) {
        animation: slideInFromLeft 3s ease;
      }
    }
    .righth3 {
      padding-top: 10%;
      text-align: right;
      @media (min-width: 769px) {
        animation: slideInFromRight 3s ease;
      }
      a {
        color: ${({ theme }) => theme.color.details};
        :hover {
          color: ${({ theme }) => theme.color.details2};
        }
      }
    }
  }
`;

const Hero = () => {
  return (
    <StyledHero id="container">
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <title>Cristian Turmacu || Home</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Portfolio website to showcase my projects and more. Feel free to contact"
        />
      </Helmet>
      <div className="mytypist">
        <h2 className="bighello">Hello</h2>
        <h2 className="welcome">Welcome to my website.</h2>
      </div>
      <div className="line"></div>
      <div className="otherh3">
        <h3 className="lefth3">I'm a Front-End Developer</h3>
        <h3 className="lefth3">Still learning a lot of things, but...</h3>
        <h3 className="righth3">
          ...check out some of my <Link to="/projects">work</Link>
        </h3>
      </div>
      <HeroParallax />
    </StyledHero>
  );
};

export default Hero;
