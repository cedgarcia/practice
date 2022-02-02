import styled from 'styled-components';
import { opacity } from '../../styles/animations';
import { ImageContainer } from '../../styles/Image.styles';

const AboutWrap = styled.div`
  padding: 8rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  position: absolute;
  transition: 0.5s;
  width: 100vw;
  @media (max-width: 768px) {
    padding: 0 4rem;
    padding-top: 10rem;
  }
  @media (min-width: 1500px) {
    padding-top: 15rem;
  }

  h1 {
    text-transform: none;
    text-align: left;
    font-family: 'Orbitron', sans-serif;

    font-size: 5rem;
    padding-bottom: 6rem;
    @media (max-width: 912px) {
      font-size: 3rem;
    }
  }
  p {
    /* color: black; */
    text-transform: none;
    font-size: 1.8rem;
    font-family: 'Fira Sans', sans-serif;
    line-height: 1.5;
  }
  strong {
    font-family: 'Audiowide', cursive;
  }
  .info-wrap {
    animation: ${opacity} 2s;
  }
  .info {
    width: 50%;
    padding-bottom: 3rem;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .skills {
    z-index: 10;
  }
  img {
    filter: brightness(0) invert(1);
    margin: 2rem;
    z-index: 2;
    width: 5rem;
    @media (max-width: 768px) {
      width: 4rem;
    }
    /* height: 5rem; */
  }
  .img-container {
    z-index: -1;
  }
`;

export const AboutContent = () => {
  return (
    <>
      <AboutWrap>
        <div className="heading">
          <h1>Hi, I&apos;m Cedrick</h1>
        </div>
        <div className="info-wrap">
          <p className="info">
            I&apos;m a front-end developer focused on making responsive,
            functional and engaging web projects.
          </p>
          <p>
            <strong>Working happily with...</strong>
          </p>
          <div className="skills">
            {/* Language */}
            <div>
              <img src="/images/skills/HTML.png" alt="html logo" />
              <img src="/images/skills/CSS.png" alt="css logo" />
              <img src="/images/skills/JS.png" alt="javascript logo" />
            </div>
            {/* Frameworks/Lib */}
            <div>
              <img src="/images/skills/SASS.png" alt="scss logo" />
              <img src="/images/skills/REACT.png" alt="react logo" />
              <img src="/images/skills/NEXT.png" alt="next logo" />
              {/* <img src="/images/skills/SCOMPONENTS.png" alt="next logo" /> */}
            </div>
            {/* Tools */}
            <div>
              <img src="/images/skills/NPM.png" alt="npm logo" />
              <img src="/images/skills/GIT.png" alt="git logo" />
            </div>
          </div>
          <p>
            <strong>...and always up for learning more!</strong>
          </p>
        </div>
        <ImageContainer>
          <div className="img-container">
            <img src="/images/me4.jpeg" alt="me" />
            <div className="overlay"></div>
          </div>
        </ImageContainer>
      </AboutWrap>
    </>
  );
};
