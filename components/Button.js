import { useRef } from 'react';
import styled from 'styled-components';
import { opacity } from '../styles/animations';

const ButtonWrap = styled.a`
  padding: 0 8rem;
  top: 90%;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  z-index: 300;
  height: 16rem;
  position: absolute;
  transition: 0.5s;
  animation: ${opacity} 2s;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      padding-right: 1rem;
    }
  }

  @media (max-width: 912px) {
    padding: 0 4rem;
  }
  svg {
    transition: 0.5s;
  }
  &:hover {
    svg {
      transform: translateX(20px);
    }
  }
`;

export const Button = ({ href, text }) => {
  const testRef = useRef(null);
  const scrollToElement = () => testRef.current.scrollIntoView();
  return (
    <ButtonWrap href={href}>
      <div ref={testRef}>
        <p onClick={scrollToElement}>{text}</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
          <g fill="none" fillRule="evenodd" stroke="#fff">
            <path d="M0 7h41.864M35.428 1l6 6-6 6" />
          </g>
        </svg>
      </div>
    </ButtonWrap>
  );
};
