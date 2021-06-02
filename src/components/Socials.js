import React from 'react';

import { FaGithubSquare } from '@react-icons/all-files/fa/FaGithubSquare';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import styled from 'styled-components';

const StyledSocials = styled.div`
  display: flex;
  font-size: 1rem;
  cursor: pointer;
  justify-content: center;
  padding-top: 0.5rem;
  @media (min-width: 679px) {
    display: ${(props) => props.display || 'grid'};

    grid-template-columns: auto auto;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
  }

  .socialicon {
    justify-self: end;
    .github {
      color: black;
    }
    .linkedin {
      color: royalblue;
    }
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
`;

function Socials(props) {
  return (
    <StyledSocials display={props.display}>
      <div className="socialicon">
        <FaGithubSquare className="github" />
      </div>
      <div className="sociallink">
        <a
          href="https://github.com/Cristian1t"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
      <div className="socialicon">
        <FaLinkedin className="linkedin" />
      </div>
      <div className="sociallink">
        <a
          href="https://www.linkedin.com/in/cristianturmacu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </div>
    </StyledSocials>
  );
}

export default Socials;
