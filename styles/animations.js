import { keyframes } from 'styled-components';

// Heading
export const headingReveal = keyframes`
  0%{
    transform: translateY(100%)}
  100%{
    transform: translateY(0)}
`;
// SubHeading
export const subTextReveal = keyframes`
  100% {
    color: white;}
`;
export const subHeadReveal = keyframes`
  50% {
    width: 100%;
    left: 0;}
  100% {
    left: 100%;
    width: 0%;}
`;
// Images
export const container = keyframes` 
  0% {
    transform: translate(-400px);}
  100% {
    transform: translate(0px);}
`;

export const image = keyframes`
  0% {
    opacity: 0;}
  50% {
    opacity: 0;}
  51% {
    opacity: 1;}
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);}
`;
export const opacity = keyframes`
0% {
  opacity:0;}
50%{
  opacity:0;}
100%{
  opacity:1;}
`;

export const overlay = keyframes` 
  0% {
    transform: scaleX(0);
    transform-origin: 0% 50%;}
  50% {
    transform: scaleX(1);
    transform-origin: 0% 50%;}
  51% {
    transform: scaleX(1);
    transform-origin: 100% 50%;}
  100% {
    transform: scaleX(0);
    transform-origin: 100% 50%;}
`;

// Background Lines
export const Horizontal = keyframes`
  0%{
    width:0;}
  100%{
    width:100vw;}
`;
export const Vertical = keyframes`
  0%{
    height:0;}
  100%{
    height:100vh;}
`;

export const Hide = keyframes`
  0%,90%{
    opacity:0;}
  100%{
    opacity:1;}
`;
