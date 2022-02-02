import styled from 'styled-components';
import {
  headingReveal,
  subTextReveal,
  subHeadReveal,
} from '../styles/animations';

const IntroWrap = styled.div`
  user-select: none;
  display: flex;
  align-items: center;
  height: 100vh;
  @media (max-width: 400px) {
    padding-left: 0;
  }
  @media (max-width: 912px) {
    padding: 0 1rem;
  }

  .heading {
    overflow: hidden;

    h1 {
      letter-spacing: 2px;
      transform: translateY(100%);
      animation: ${headingReveal} 1.7s cubic-bezier(1, 0, 0.3, 0.9) forwards;
      @media (min-width: 912px) {
        padding: 0 6rem;
      }
      @media (max-width: 400px) {
        font-size: 5rem;
      }
    }
  }
  .sub-heading {
    display: flex;
    flex-direction: column;
    letter-spacing: 3px;
    @media (max-width: 1000px) {
      padding-left: 2rem;
    }

    @media (max-width: 768px) {
      padding: 0;
    }
    h2 {
      position: relative;
      color: transparent;
      animation: ${subTextReveal} 0s ease forwards;
      display: inline-block;
      margin-top: 2rem;
      z-index: 2;
    }
    h2 span {
      content: '';
      position: absolute;
      height: 100%;
      width: 0;
      left: 0;
      top: 0;
      background: var(--black);
      animation: ${subHeadReveal} 1s ease forwards;
      animation-delay: 0.5s;
    }
  }
  h2:nth-child(1) {
    animation-delay: 1s;
  }
  h2:nth-child(2) {
    animation-delay: 1.5s;
  }
  h2:nth-child(3) {
    animation-delay: 2s;
  }

  h2:nth-child(1) span {
    animation-delay: 0.5s;
  }
  h2:nth-child(2) span {
    animation-delay: 1s;
  }
  h2:nth-child(3) span {
    animation-delay: 1.5s;
  }
`;

export const Intro = ({ heading, sub1, sub2, sub3 }) => {
  return (
    <IntroWrap>
      <div className="heading">
        <h1>{heading}</h1>
      </div>
      <div className="sub-heading">
        <h2>
          {sub1} <span></span>
        </h2>
        <h2>
          {sub2}
          <span></span>
        </h2>
        <h2>
          {sub3} <span></span>
        </h2>
      </div>
    </IntroWrap>
  );
};
