import styled from "styled-components";

export const Card = styled.li`
  width: 100%;
  height: 48.7px;

  background-color: #121214;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 12.18px;

  border-radius: 4px;

  cursor: pointer;

  h3 {
    font-size: 14.2px;
    font-weight: 700;
    color: #f8f9fa;
  }

  p {
    font-size: 12.2px;
    font-weight: 400;
    color: #868e96;
  }

  @media (min-width: 768px) {
    height: 49px;
  }
`;
