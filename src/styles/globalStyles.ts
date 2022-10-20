import { createGlobalStyle } from 'styled-components';

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    src: local('Pretendard'),
    url('/fonts/Pretendard-Regular.woff2') format('woff2'),
    url('/fonts/Pretendard-Regular.woff') format('woff'),
    url('/fonts/Pretendard-Regular.otf') format('opentype');
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: local('Pretendard'),
    url('/fonts/Pretendard-Medium.woff2') format('woff2'),
    url('/fonts/Pretendard-Medium.woff') format('woff'),
    url('/fonts/Pretendard-Medium.otf') format('opentype');
    font-weight: 500;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: local('Pretendard'),
    url('/fonts/Pretendard-SemiBold.woff2') format('woff2'),
    url('/fonts/Pretendard-SemiBold.woff') format('woff'),
    url('/fonts/Pretendard-SemiBold.otf') format('opentype');
    font-weight: 600;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    src: local('Pretendard'),
    url('/fonts/Pretendard-ExtraBold.woff2') format('woff2'),
    url('/fonts/Pretendard-ExtraBold.woff') format('woff'),
    url('/fonts/Pretendard-ExtraBold.otf') format('opentype');
    font-weight: 800;
    font-display: swap;
  }
  * {
    margin: 0;
    font-size: 10px;
    word-break: keep-all;
    -webkit-tap-highlight-color: transparent;
    transition: color, background-color 0.3s ease-in-out;
    font-family: 'Pretendard', sans-serif;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 10px;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }


  

  a {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  a:focus {
    text-decoration: none;
  }
  a:active {
    text-decoration: none;
  }
`;
export default GlobalStyles;
