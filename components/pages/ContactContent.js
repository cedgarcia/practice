import { ContactForm } from '../ContactForm';
import styled from 'styled-components';
import { opacity } from '../../styles/animations';

const ContactWrap = styled.div`
  position: relative;
  padding: 0 8rem;
  padding-top: 10rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  /* z-index: 300; */
  position: absolute;
  transition: 0.5s;
  width: 100vw;

  .contact-details {
    display: flex;
    justify-content: space-between;
    padding-bottom: 4rem;
    animation: ${opacity} 2s;
    max-width: 1300px;
    margin: 0 auto;
    @media (max-width: 768px) {
      flex-direction: column;
      top: 10rem;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10rem 4rem 0 4rem;
  }
  h1 {
    text-align: center;
    font-size: 8rem;
    padding-bottom: 6rem;
    @media (max-width: 912px) {
      font-size: 5rem;
    }
  }
`;
const LinkWrap = styled.div`
  font-family: 'Fira Sans', sans-serif;
  display: flex;
  flex-direction: column;
  z-index: 300;
  h2 {
    font-size: 2rem;
  }
  p {
    padding: 2rem 0;
    text-transform: none;
    max-width: 40rem;
    font-size: 1.4rem;
    line-height: 1.6;
    font-weight: lighter;
    letter-spacing: 1px;
  }

  .links {
    display: flex;
    flex-direction: column;
    width: 8rem;
    padding-bottom: 2rem;
    a {
      color: var(--lightGray);
      position: relative;
      overflow: hidden;
      display: inline;
      line-height: 2;
      font-size: 1.5rem;
    }
    a::after {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0px;
      background: var(--white);
      width: 0;
      height: 2px;
      transition: width 0.4s ease-out;
    }
    a:hover::after {
      left: 0;
      right: auto;
      width: 100%;
    }
  }
`;

const sociaLinks = [
  { key: 'github', title: 'Github', href: 'https://github.com/cedcodes' },
  {
    key: 'linkedin',
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/cedgarcia/',
  },
  { key: 'email', title: 'Mail', href: 'mailto:icedgarcia@gmail.com' },
];

export const ContactContent = () => {
  return (
    <ContactWrap>
      <div className="heading">
        <h1>Get in Touch</h1>
      </div>
      <div className="contact-details">
        <LinkWrap>
          <h2>Say Hello!</h2>
          <p>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="links">
            {sociaLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.title}
              </a>
            ))}
          </div>
        </LinkWrap>
        <ContactForm />
      </div>
    </ContactWrap>
  );
};
