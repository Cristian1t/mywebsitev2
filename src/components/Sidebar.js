import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

import { GiPositionMarker } from '@react-icons/all-files/gi/GiPositionMarker';
import { SiGatsby } from '@react-icons/all-files/si/SiGatsby';
import Socials from './Socials';

const StyledSidebar = styled.div`
  z-index: 2;
  background: white;
  display: flex;
  justify-content: center;
  align-content: center;
  @media (min-width: 769px) {
    max-width: 300px;
    border-radius: 2rem;
    margin: 1rem 1rem;
    box-shadow: 3px 4px 4px 2px rgba(0, 0, 0, 0.25);
    flex-direction: column;
    justify-content: space-between;
  }
  .sidebartop {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    @media (min-width: 769px) {
      padding-top: 2rem;
      margin: 0 auto;
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
    .myimage {
      width: 10%;
      border-radius: 50%;
      border: 1px solid black;
      @media (min-width: 769px) {
        width: 30%;
        border: 3px solid black;
      }
    }
    .name {
      color: ${({ theme }) => theme.color.details2};
      text-align: center;
    }
    h3 {
      text-align: center;
      padding: 0;
      margin: 0;
    }

    p {
      display: none;
      @media (min-width: 769px) {
        text-align: center;
        word-wrap: break-word;
        font-size: 1rem;
      }
    }
  }
  .sidebarmiddle {
    display: none;
    @media (min-width: 769px) {
      display: flex;
      flex-direction: column;
    }

    .aboutme,
    .contactme {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .text {
        background: ${({ theme }) => theme.color.background};
        width: 80%;
        border-radius: 1rem;
      }
      p {
        padding: 0.5rem;
        text-align: center;
        font-size: 1rem;
      }
    }
  }
  .sidebarbottom {
    display: none;
    @media (min-width: 769px) {
      display: flex;
      flex-direction: column;
      text-align: center;
      p {
        margin: 0;
        margin-bottom: 0.2rem;
        a {
          text-decoration: none;
          color: inherit;
          .gatsby {
            vertical-align: top;
            color: #9932cc;
          }
        }
      }
    }
  }
`;

function Sidebar() {
  return (
    <StyledSidebar className="div1">
      <div className="sidebartop">
        <StaticImage
          className="myimage"
          src="../images/profileimg.jpg"
          layout="constrained"
          alt="mypicture"
        />
        <h2 className="name">Cristian Turmacu</h2>
        <div>
          <h3>Web Developer</h3>
          <Socials display="none" />
        </div>
        <p>cristianturmacu@yahoo.com</p>
        <p>
          <GiPositionMarker />
          Verona, Italy
        </p>
      </div>
      <div className="sidebarmiddle">
        <Socials display="grid" />
        <div className="aboutme">
          <h2>About me</h2>
          <div className="text">
            <p>
              I'm a passionate Frontend Web Developer and i'm trying to learn
              and use new web technologies to build amazing products.
            </p>
          </div>
          <div className="contactme">
            <h2>Contact me</h2>
            <div className="text">
              <p>
                Feel free to contact me. Whether it's a project, job
                opportunity, or just a chat. I would love to hear from you.
                Either using the form or simply to my Email
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebarbottom">
        <p>Cristian Turmacu, {new Date().getFullYear()}.</p>{' '}
        <p>
          Made with{' '}
          <a
            href="https://www.gatsbyjs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGatsby className="gatsby" />
            Gatsbyjs
          </a>
        </p>
      </div>
    </StyledSidebar>
  );
}

export default Sidebar;
