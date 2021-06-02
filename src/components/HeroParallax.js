import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Parallax from 'parallax-js';

const StyledParallax = styled.div`
    display: none;
    @media (min-width: 769px) {
      display: flex;
      color: ${({ theme }) => theme.color.details2};
      font-size: 1.5rem;
      position: absolute;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      overflow: hidden;
    }

    .layer1 {
      width: 0%;
      margin-top: 18%;
      margin-left: 68%;
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
    .layer7 {
        margin-top: 29%;
        margin-left: 77%;
        font-size: 1.5rem;
    }
    .layer8 {
        margin-top: 29%;
        margin-left: 71%;
        font-size: 1rem;
    }
    .layer9 {
        margin-top: 32%;
        margin-left: 85%;
        font-size: 1.2rem;
    }
  }
`;

function HeroParallax() {
  const sceneEl = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
      hoverOnly: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);

  return (
    <StyledParallax
      id="scene"
      data-hover-only="true"
      data-relative-input="true"
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
      <div data-depth="0.7" className="layer7">
        <h2>GraphQL</h2>
      </div>
      <div data-depth="0.3" className="layer8">
        <h2>Contentful</h2>
      </div>
      <div data-depth="0.6" className="layer9">
        <h2>Redux</h2>
      </div>
    </StyledParallax>
  );
}

export default HeroParallax;
