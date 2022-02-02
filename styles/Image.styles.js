import styled from 'styled-components';
import { container, image, overlay } from './animations';

export const ImageContainer = styled.div`
  z-index: -1;
  position: absolute;
  top: 50vh;
  transform: translateY(-50%);
  left: 40vw;
  @media (max-width: 912px) {
    left: 30vw;
  }
  @media (max-width: 768px) {
    top: 15rem;
    left: 50%;
    transform: translateX(-50%);
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  .img-container {
    width: 700px;
    height: 450px;
    border-radius: 2px;
    overflow: hidden;
    animation: ${container} 2s;
    animation-fill-mode: forwards;
    animation-delay: 1s;
    z-index: 1;
  }
  .img-container img {
    opacity: 0;
    filter: grayscale(0%);
    width: 120%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(9);
    animation: ${image} 2s;
    transform-origin: 50% 50%;
    animation-fill-mode: forwards;
    animation-delay: 1s;
    @media (max-width: 768px) {
      /* filter: grayscale(1); */
      filter: brightness(20%);
    }
  }
  .img-container .overlay {
    width: 100%;
    height: 100%;
    background: var(--green);
    position: absolute;
    transform: scaleX(0);
    transform-origin: 0% 50%;
    animation: ${overlay} 2s;
    animation-delay: 1s;
  }
`;
