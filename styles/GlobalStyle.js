import { createGlobalStyle, css } from 'styled-components';
import { headingReveal } from '../styles/animations';

export const GlobalStyle = createGlobalStyle`

:root{
  --black:#000000;
  --gray:#212121;
  --medGray:#060606;
  --lightGray: #CACDE8;

  --white:#FFFFFF;
  --green:#1FEA00;
  --darkGreen:#27A102;

}

::-webkit-scrollbar {
  display: none;
}


*,
*::after,
*::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

}
html {
  scroll-behavior: smooth;

  font-size: 62.5%;
  font-family: 'Orbitron', sans-serif;
}
body {
  background: var(--black);
  color:var(--white); 
}
h1{
  font-family: 'Audiowide', cursive;
}
h1,h2,h3 {
  letter-spacing:2px;
}
ul {
  display:flex;
  flex-wrap:wrap;
}
li {
list-style:none;
font-family: 'Fira Sans', sans-serif;
padding:0 1.3rem;
font-size:1.3rem;
letter-spacing:1px;
color:var(--lightGray);
&:nth-child(1){
padding:0;
}
&:last-child{
  padding:0;
}
}
a{
  cursor: pointer;
  text-decoration:none;
  color:var(--white);
}
img {
  width:100%;
}
.heading {
  margin: 0 20px;
  overflow: hidden;
  @media (max-width:400px){
    margin: 0 10px 0 20px;
  
  }
  h1,div {
    transform: translateY(100%);
    animation: ${headingReveal} 1.7s cubic-bezier(1, 0, 0.3, 0.9) forwards;
  }
  
}
h1{
  font-size:20rem;
}
h2{
  font-size:5rem;
}
@media (max-width:912px){
  h1 {
    font-size:10rem;
  }
  h2 {
    font-size:3rem;
  }
}
@media (max-width:500px){
  h1 {
    font-size:7rem;
  }
  h2 {
    font-size:2.5rem;
  }
}

`;
