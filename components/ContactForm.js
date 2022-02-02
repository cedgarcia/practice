import { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import styled from 'styled-components';

const FormWrap = styled.div`
  width: 50vw;
  max-width: 800px;
  z-index: 500;
  @media (max-width: 912px) {
    width: 70vw;
  }
  input,
  textarea {
    border-radius: 0.5rem;
    border: 2px var(--green) solid;
    outline: none;
    background: var(--medGray);
    height: 3rem;
    padding-left: 1rem;
    color: var(--green);
    letter-spacing: 1px;
    width: 100%;
  }
  .submit-btn > input {
    transition: 0.3s ease;
    height: 5rem;
    padding: 0 3rem;
    cursor: pointer;
    font-weight: 700;
    font-size: 1.5rem;
    letter-spacing: 2px;
    background: var(--black);
    text-transform: uppercase;
    width: 20rem;
    &:hover {
      background: var(--green);
      color: var(--black);
    }
  }
  form {
    .input-fields {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
      }
    }
    input::placeholder,
    textarea::placeholder {
      text-transform: uppercase;
      color: var(--green);
      letter-spacing: 2px;
    }
    textarea {
      font-size: 1.5rem;
      padding-top: 2rem;
      width: 100%;
      height: 10rem;
      margin: 1.5rem 0;
    }
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }
  label {
    display: none;
  }
`;

const SERVICE_ID = 'service_hg7j2ya';
const TEMPLATE_ID = 'portfolio-template-id';
const USER_ID = 'user_QLmfWts00R8izsY1Tfnzn';

export const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: `success`,
          title: `Message Sent Successfully`,
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: `error`,
          title: `Ooops, something went wrong`,
          text: error.text,
        });
      }
    );
  };
  return (
    <FormWrap>
      <form ref={form} onSubmit={sendEmail}>
        <div className="input-fields">
          <label>Name</label>
          <input type="text" name="name" placeholder="Name" required="" />
          <label>Email</label>
          <input type="email" name="email" placeholder="Email" required />
          <label>Subject</label>
          <input type="text" name="subject" placeholder="Subject" />
        </div>
        <label>Message</label>
        <textarea name="message" placeholder="Message" required />
        <div className="submit-btn">
          <input type="submit" value="Send Message " />
        </div>
      </form>
    </FormWrap>
  );
};
