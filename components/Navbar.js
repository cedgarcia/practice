import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const NavWrap = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  padding: 8rem 3.5rem;
  height: 100%;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 4rem 3.5rem;
  }
  @media (min-width: 769px) {
    writing-mode: vertical-rl;
    text-orientation: sideways;
  }
  .activeLink {
    filter: brightness(150%);
    color: var(--green);
    &::after {
      transition: 2s;
      content: '';
      position: absolute;
      top: 0;
      bottom: -3px;
      background: var(--green);
      right: auto;
      height: 100%;
      width: 1px;
      @media (max-width: 768px) {
        width: 100%;
        height: 1px;
        right: 0;
        top: 20px;
      }
    }
  }
`;
const NavLink = styled.div`
  a {
    font-size: 1.5rem;
    position: relative;
    overflow: hidden;
    letter-spacing: 2px;
    display: inline;
    position: relative;
    overflow: hidden;
  }
  a::after {
    content: '';
    position: absolute;
    background: var(--white);
  }
  @media (min-width: 769px) {
    a::after {
      bottom: 0;
      left: 0;
      width: 1px;
      height: 0;
      transition: height 0.4s ease-out;
    }
    a:active::after,
    a:focus::after,
    a:hover::after {
      top: 0;
      bottom: auto;
      height: 100%;
    }
  }
  @media (max-width: 768px) {
    a::after {
      right: 0;
      bottom: -3px;
      width: 0;
      height: 1px;
      transition: width 0.4s ease-out;
    }
    a:hover::after,
    a:focus::after,
    a:active::after {
      left: 0;
      right: auto;
      width: 100%;
    }
  }
`;
const navLinks = [
  { title: 'Works', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const router = useRouter();
  return (
    <NavWrap>
      {navLinks.map((link) => (
        <NavLink key={link.title}>
          <Link href={link.path} passHref>
            <a className={router.pathname === link.path ? 'activeLink' : ''}>
              {link.title}
            </a>
          </Link>
        </NavLink>
      ))}
    </NavWrap>
  );
};
