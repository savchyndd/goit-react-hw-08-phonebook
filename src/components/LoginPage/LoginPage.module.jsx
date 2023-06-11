import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 250px;
  padding: 22px 36px;

  color: #000000;
  background: #efefef;
  border-radius: 18px;
  border: 1px solid #efefef;

  :placeholder {
    color: #757575;
  }

  :hover,
  :focus {
    border: 1px solid #000000;
  }
`;

export const Button = styled.button`
  margin-top: 24px;
  padding: 1.063em 1.5em;

  background-color: #000000;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(250, 187, 24, 0.1);
  border-radius: 14px;

  cursor: pointer;

  transition: background-color 1s ease;
  transition: color 1s ease;

  :hover,
  :focus {
    color: #000000;
    background-color: rgba(250, 187, 24, 0.1);
    border: 1px solid #000000;
  }
`;
