import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const StyledSidebar = styled.div`
  height: 95%;
  margin: auto 0;
  margin-left: 1rem;
  background: white;
  grid-row-start: span 2;
  border-radius: 20px;
  box-shadow: 3px 4px 4px 2px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-gap: 1rem;
  .sidebartop {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    .myimage {
      border: 3px solid black;
      width: 30%;
      border-radius: 50%;
    }
  }
  .sidebarmiddle {
    display: flex;
    flex-direction: column;
    .socials {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: 1fr 1fr;
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
        />
        <h2 className="name">Cristian Turmacu</h2>
        <h3>Web Developer</h3>
        <p>cristianturmacu@yahoo.com</p>
        <p>
          <span>$ </span>
          Verona, Italy
        </p>
      </div>
      <div className="sidebarmiddle">
        <div className="socials">
          <div>giticon</div>
          <div>Github</div>
          <div>linkedicon</div>
          <div>LinkedIn</div>
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
