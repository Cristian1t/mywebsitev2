import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

import { GiPositionMarker } from '@react-icons/all-files/gi/GiPositionMarker';
import { FaGithubSquare } from '@react-icons/all-files/fa/FaGithubSquare';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';

const StyledSidebar = styled.div`
  z-index: 2;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  margin-left: 1rem;
  background: white;
  grid-row-start: span 2;
  border-radius: 20px;
  box-shadow: 3px 4px 4px 2px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: row;
    margin-bottom: 0;
    margin-right: 1rem;
    grid-row-start: span 1;
  }
  @media (max-width: 425px) {
    margin: 0;
  }
  .sidebartop {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    @media (max-width: 768px) {
      flex-direction: row;
      margin-top: 0;
      width: 100%;
      justify-content: space-evenly;
    }
    .myimage {
      border: 3px solid black;
      width: 30%;
      border-radius: 50%;
      @media (max-width: 768px) {
        width: 8%;
        border: 1px solid black;
      }
    }
    .name {
      color: ${({ theme }) => theme.color.details2};
      text-align: center;
    }
    p {
      text-align: center;
      width: 100%;
      word-wrap: break-word;
      font-size: 1rem;
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
  .sidebarmiddle {
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
      display: none;
    }
    .socials {
      display: grid;
      grid-template-columns: auto auto;
      grid-template-rows: 1fr 1fr;
      justify-items: center;
      font-size: 1.2rem;
      cursor: pointer;

      .socialicon {
        justify-self: end;
      }
      .sociallink {
        justify-self: start;
        :hover {
          background: ${({ theme }) => theme.color.background};
        }
      }
      a {
        text-decoration: none;
        color: inherit;
        :hover {
          color: ${({ theme }) => theme.color.details2};
        }
      }
    }
    .aboutme,
    .contactme {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        background: ${({ theme }) => theme.color.background};
        width: 80%;
        margin: 0 auto;
        text-align: center;
        padding: 1rem;
        border-radius: 1.5rem;
      }
    }
  }
  .sidebarbottom {
    justify-self: flex-end;
    text-align: center;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <div className="sidebartop">
        <StaticImage
          className="myimage"
          src="../images/profileimg.jpg"
          layout="constrained"
          alt="mypicture"
        />
        <h2 className="name">Cristian Turmacu</h2>
        <h3>Web Developer</h3>
        <p>cristianturmacu@yahoo.com</p>
        <p>
          <GiPositionMarker />
          Verona, Italy
        </p>
      </div>
      <div className="sidebarmiddle">
        <div className="socials">
          <div className="socialicon">
            <FaGithubSquare />
          </div>
          <div className="sociallink">
            <a href="https://github.com/Cristian1t">Github</a>
          </div>
          <div className="socialicon">
            <FaLinkedin />
          </div>
          <div className="sociallink">
            <a href="https://www.linkedin.com/in/cristianturmacu/">Linkedin</a>
          </div>
        </div>
        <div className="aboutme">
          <h2>About me</h2>
          <p>
            I'm a passionate Frontend Web Developer and i'm trying to learn and
            use new web technologies to build amazing products.
          </p>
          <div className="contactme">
            <h2>Contact me</h2>
            <p>
              Feel free to contact me. Whether it's a project, job opportunity,
              or just a chat. I would love to hear from you. Either using the
              form or simply to my Email
            </p>
          </div>
        </div>
      </div>
      <div className="sidebarbottom">
        <p> Cristian Turmacu, 2021. Made with Gatsbyjs</p>
      </div>
    </StyledSidebar>
  );
}

export default Sidebar;
