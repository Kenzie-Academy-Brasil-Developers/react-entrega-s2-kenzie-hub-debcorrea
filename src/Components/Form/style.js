import styled, {css} from "styled-components";

export const StyledForm = styled.form`
  width: ${(props) => `${props.width}px`};

  display: flex;
  flex-direction: column;
  gap: 21.35px;

  @media (min-width: 425px) {
    width: ${(props) => `${props.lgWidth}px`};

    gap: 26.67px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17.9px;

  width: 100%;

  label {
    font-size: 10px;
    font-weight: 400;
    color: #f8f9fa;

    span {
      color: #e83f5b;
    }
  }

  input,
  select {
    height: ${(props) => `${props.height}px`};

    color: #f8f9fa;

    background-color: #343b41;

    border: 0.97px solid #343b41;
    border-radius: 3.21px;
    padding-left: 13px;

    &::placeholder {
      color: #868e96;
    }

    &:focus {
      border: #f8f9fa;
    }

    ${(props) => !!props.error && css`
      border-color: #e83f5b;
    `}

  }

  @media (min-width: 425px) {
    gap: 22.33px;

    label {
      font-size: 12.18px;
    }

    input,
    select {
      height: ${(props) => `${props.lgHeight}px`};

      padding-left: 16.24px;
    }
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  height: ${(props) => `${props.height}px`};

  background-color: ${(props) => props.background};

  font-weight: 500;
  font-size: ${(props) => `${props.size}px`};
  color: ${(props) => props.color};

  border: 1.22px solid ${(props) => props.background};
  border-radius: 4.06px;

  @media (min-width: 425px) {
    height: ${(props) => `${props.lgHeight}px`};

    font-size: ${(props) => `${props.lgSize}px`};
  }
`;

export const BottomContainer = styled.div`
  width: 264.66px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 17.65px;

  margin-top: 4.4px;

  span {
    font-size: 9.6px;
    font-weight: 600;
    color: #868e96;
  }

  @media (min-width: 425px) {
    width: 330px;

    gap: 22px;

    margin-top: 5.5px;

    span {
      font-size: 12px;
    }
  }
`;

export const StyledSpan = styled.span`
  font-size: 9.6px;
  font-weight: 400;
  color: #868e96;

  @media (min-width: 425px) {
    font-size: 12px;
  }
`;
