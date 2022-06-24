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

  img {
    width: ${(props) => `${props.width}px`};
    height: ${(props) => `${props.height}px`};
  }

  @media (min-width: 425px) {
    width: ${(props) => `${props.lgCtWidth}px`};

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
