import styled from 'styled-components';
import projectsData from '/public/projects.json';

const ProjectsWrap = styled.div`
  width: 70%;
  position: relative;
  font-size: 4rem;
  margin: auto;
  padding: 0 8rem 8rem;
  z-index: 500;
  @media (max-width: 912px) {
    padding: 0;
  }
  @media (max-width: 768px) {
    margin: 0 auto;
    margin-top: 3.5rem;
  }
  @media (max-width: 520px) {
    margin-top: 5rem;
  }
  .project {
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &:nth-child(even) {
      flex-direction: row-reverse;
      .info {
        transform: translateX(10%);
        text-align: left;
      }
      .image {
        transform: translateX(-10%);
      }
      .technologies {
        justify-content: flex-start;
      }
      @media (max-width: 768px) {
        flex-direction: column;
        .info {
          transform: translateX(-10%);
        }
        .image {
          transform: translateX(0);
        }
      }
    }
    @media (max-width: 768px) {
      flex-direction: column;
      padding-bottom: 7rem;
    }
    @media (max-width: 520px) {
      padding-bottom: 8rem;
    }
    @media (max-width: 450px) {
      padding-bottom: 12rem;
    }
    @media (max-width: 370px) {
      padding-bottom: 18rem;
    }
    .image {
      width: 55rem;
      filter: saturate(1);
      transition: 0.3s ease-in-out;
      transform: translateX(10%);

      @media (max-width: 912px) {
        width: 40rem;
      }
      @media (max-width: 768px) {
        transform: translateX(0%);
        width: 100%;
        filter: brightness(2);
        opacity: 0.4;
      }
      &:hover {
        filter: saturate(3);
      }
      img {
        border-radius: 0.5rem;
      }
    }
    p {
      font-family: 'Fira Sans', sans-serif;
    }
    .info {
      transform: translateX(-10%);
      text-align: right;

      @media (max-width: 768px) {
        text-align: left;
        position: absolute;
        background-color: var(--black);
        opacity: 0.7;
        width: 100%;
      }
      h3 {
        font-size: 2.5rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: var(--green);
        }
        @media (max-width: 768px) {
          color: var(--green);
        }
      }
    }
  }
  svg {
    margin: 0 1rem 0 0;
    transition: 0.5s;
    &:hover {
      stroke: var(--green);
    }
  }

  .description {
    border-radius: 0.3rem;
    line-height: 1.8;
    background: var(--medGray);
    width: 40rem;
    letter-spacing: 1px;
    font-size: 1.4rem;
    margin: 2rem 0;
    padding: 2rem;
    @media (max-width: 968px) {
      width: 34rem;
    }
    @media (max-width: 912px) {
      width: 30rem;
    }
    @media (max-width: 768px) {
      background: none;
      padding: 2rem 0;
    }
  }
  /* Techs */
  .technologies {
    display: flex;
    justify-content: flex-end;
    @media (max-width: 768px) {
      justify-content: flex-start;
    }
    p {
      padding: 0 1.3rem;
      font-size: 1.3rem;
      letter-spacing: 1px;
      color: var(--lightGray);
      &:nth-child(1) {
        padding: 0;
      }
      &:last-child {
        padding: 0;
      }
    }
  }
`;
export const Projects = () => {
  return (
    <ProjectsWrap>
      {projectsData.map(
        ({ id, title, description, image, github, live, techs }) => (
          <div className="project" key={id}>
            <a href={live} target="_blank" rel="noopener noreferrer">
              <div className="image">
                <img src={image} />
              </div>
            </a>
            <div className="info">
              <a href={live} target="_blank" rel="noopener noreferrer">
                <h3>{title}</h3>
              </a>
              <p className="description">{description}</p>
              <div className="technologies">
                {techs.map((tech) => (
                  <p key={tech}>{tech}</p>
                ))}
              </div>
              <div className="links">
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github"
                    width="2rem"
                    height="2rem"
                  >
                    <title>GitHub</title>
                    <path
                      className="github"
                      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                    ></path>
                  </svg>
                </a>
                <a href={live} target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-external-link"
                    width="2rem"
                    height="2rem"
                  >
                    <title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )
      )}
    </ProjectsWrap>
  );
};
