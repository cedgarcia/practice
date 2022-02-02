import styled from 'styled-components';
import { Horizontal, Vertical, Hide } from '../styles/animations';
const BG = styled.div`
  position: fixed;
  z-index: 0;
  height: 100vh;
  width: 100vw;
  .horizontal {
    height: 1px;
    width: 100vw;
    animation: ${Horizontal} linear forwards;
  }
  .vertical {
    width: 1px;
    height: 100vh;
    animation: ${Vertical} linear forwards;
  }
  .horizontal,
  .vertical {
    background-color: var(--gray);
    position: absolute;
  }
  .green {
    opacity: 0;
    animation: ${Hide} 4s linear forwards;
  }
  .lines.green .horizontal,
  .lines.green .vertical {
    background-color: var(--green);
  }
  .lines.green {
    z-index: 2;
    clip-path: circle(10rem at var(--x) var(--y));
  }

  .horizontal:nth-child(1) {
    top: 7rem;
    animation-duration: 2s;
  }
  .horizontal:nth-child(2) {
    top: 40vh;
    animation-duration: 2.25s;
    @media (max-width: 912px) {
      top: 33.3vh;
      animation-duration: 2.5s;
    }
  }
  .horizontal:nth-child(3) {
    top: 70vh;
    animation-duration: 2.5s;
    @media (max-width: 912px) {
      top: 66.6vh;
      right: 0;
    }
  }

  .vertical:nth-child(1) {
    left: 7rem;
    animation-duration: 1s;
  }
  .vertical:nth-child(2) {
    left: 22vw;
    animation-duration: 2s;
    bottom: 0;
  }
  .vertical:nth-child(3) {
    left: 41vw;
    animation-duration: 2s;
  }
  .vertical:nth-child(4) {
    right: 41vw;
    animation-duration: 2s;
    bottom: 0;
  }
  .vertical:nth-child(5) {
    right: 22vw;
    animation-duration: 2s;
    @media (max-width: 912px) {
      right: 66.66vw;
      animation-duration: 2.5s;
      bottom: 0;
    }
  }
  .vertical:nth-child(6) {
    right: 7rem;
    animation-duration: 1s;
    @media (max-width: 912px) {
      right: 33.33vw;
      animation-duration: 2.5s;
    }
  }
  @media (max-width: 912px) {
    .lines.green .horizontal,
    .lines.green .vertical,
    .horizontal:nth-child(1),
    .vertical:nth-child(1),
    .vertical:nth-child(2),
    .vertical:nth-child(3),
    .vertical:nth-child(4) {
      display: none;
    }
  }
`;
export const Background = (props) => {
  if (typeof window === 'object') {
    const pos = document.documentElement;
    pos.addEventListener('mousemove', (e) => {
      pos.style.setProperty('--x', +e.clientX + 'px');
      pos.style.setProperty('--y', +e.clientY + 'px');
    });
  }
  const horizontals = ['', '', ''];
  const verticals = ['', '', '', '', '', ''];

  return (
    <BG>
      <div className="lines">
        <div>
          {horizontals.map((index, i) => {
            return <div key={index + i} className="horizontal"></div>;
          })}
        </div>
        <div>
          {verticals.map((index, i) => {
            return <div key={index + i} className="vertical"></div>;
          })}
        </div>
      </div>

      <div className="lines green">
        <div>
          {horizontals.map((index, i) => {
            return <div key={index + i} className="horizontal"></div>;
          })}
        </div>
        <div>
          {verticals.map((index, i) => {
            return <div key={index + i} className="vertical"></div>;
          })}
        </div>
      </div>
    </BG>
  );
};
