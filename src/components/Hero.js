import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Typist from "react-typist";
import styled from "styled-components";

const StyledHero = styled.div`
  .myimage {
    position: absolute;
    bottom: 1.5rem;
  }
  .mytypist {
    line-height: 80%;
    .bighello {
      font-size: 8rem;
      font-family: ${({ theme }) => theme.fonts.second};
      font-weight: bold;
      text-transform: uppercase;
    }
    h2 {
      font-size: 3rem;
    }
  }
  .line {
    width: 50%;
    height: 3px;
    background: white;
    animation: grow 2s ease-in;
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
    }
    .righth3 {
      z-index: 2;
      margin-top: 6rem;
      align-self: flex-end;
      margin-right: 3rem;
      animation: slideInFromLeft 2s ease;
    }
  }
`;

function Hero() {
  return (
    <StyledHero>
      <StaticImage
        className="myimage"
        src="../images/wave.svg"
        layout="constrained"
        alt="mywave"
        placeholder="tracedSVG"
      />
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
        <h3 className="lefth3">Still learning a lot of thing, but...</h3>
        <h3 className="righth3">...check out some of my work</h3>
      </div>
    </StyledHero>
  );
}

export default Hero;
