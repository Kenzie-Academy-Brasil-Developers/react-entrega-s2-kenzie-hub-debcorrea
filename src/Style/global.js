import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  button{
    cursor: pointer;
  }

  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
  */

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
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul, li {
    list-style: none;
  }
`;

export const StyledHeader = styled.header`
  width: ${(props) => `${props.ctWidth}px`};

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: ${(props) => `${props.margin}px`};

  img {
    width: ${(props) => `${props.width}px`};
    height: ${(props) => `${props.height}px`};
  }

  @media (min-width: 425px) {
    width: ${(props) => `${props.lgCtWidth}px`};

    margin-bottom: ${(props) => `${props.lgMargin}px`};

    img {
      width: ${(props) => `${props.lgWidth}px`};
      height: ${(props) => `${props.lgHeight}px`};
    }
  }
`;

export const ButtonContainer = styled.div`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};

  @media (min-width: 425px) {
    width: ${(props) => `${props.lgWidth}px`};
    height: ${(props) => `${props.lgHeight}px`};
  }
`;

export const StyledContainer = styled.div`
  width: ${(props) => `${props.width}px`};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => `${props.gap}px`};

  padding: ${(props) => `${props.paddingH}px ${props.paddingW}px`};

  background-color: #212529;

  border-radius: 3.21px;

  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);

  @media (min-width: 425px) {
    width: ${(props) => `${props.lgWidth}px`};

    gap: ${(props) => `${props.lgGap}px`};

    padding: ${(props) => `${props.lgPaddingH}px ${props.lgPaddingW}px`};
  }
`;

export const Title = styled.h1`
  font-size: ${(props) => `${props.size}px`};
  font-weight: 700;
  color: #f8f9fa;

  width: ${(props) => `${props.width}px`};

  @media (min-width: 425px) {
    font-size: ${(props) => `${props.lgSize}px`};

    width: ${(props) => `${props.lgWidth}px`};
  }
`;

export const StyledNav = styled.nav`
  width: 296px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 13px;

  img {
    width: 105.5px;
    height: 14.6px;
  }

  @media (min-width: 768px) {
    width: 570px;

    margin-bottom: 9px;
  }

  @media (min-width: 1024px) {
    width: 780px;
  }
`;

export const Divisor = styled.div`
  width: 100vw;
  height: 131px;

  border-top: 1px solid #212529;
  border-bottom: 1px solid #212529;

  display: flex;
  align-items: center;

  div {
    width: 296px;

    display: flex;
    flex-direction: column;
    gap: 15px;

    margin-left: 12px;

    h1 {
      font-size: 18px;
      font-weight: 700;
      color: #f8f9fa;
    }

    p {
      font-size: 12px;
      font-weight: 400;
      color: #868e96;
    }
  }

  @media (min-width: 375px) {
    div {
      margin-left: 38px;
    }
  }

  @media (min-width: 425px) {
    div {
      margin-left: 62px;
    }
  }

  @media (min-width: 768px) {
    height: 118px;

    div {
      margin-left: 100px;
    }
  }

  @media (min-width: 1024px) {
    div {
      margin-left: 122px;
    }
  }

  @media (min-width: 1440px) {
    div {
      margin-left: 330px;
    }
  }
`;

export const GeneralContainer = styled.div`
  width: 296px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 16px;
    font-weight: 600;
    color: #f8f9fa;
  }

  button {
    width: 32.5px;
    height: 32px;

    border: none;
    border-radius: 4px;

    background-color: #212529;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 768px) {
    width: 570px;
  }

  @media (min-width: 1024px) {
    width: 780px;
  }
`;

export const TechContainer = styled.div`
  width: 296px;

  background-color: #212529;

  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 22px;
  margin-top: 21px;

  ul {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  @media (min-width: 768px) {
    width: 570px;
  }

  @media (min-width: 1024px) {
    width: 780px;
  }
`;
