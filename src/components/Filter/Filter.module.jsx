import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
`;
export const Input = styled.input`
  width: 250px;
  padding: 22px 36px;

  color: #000000;
  background: #efefef;
  border-radius: 18px;
  border-style: none;

  :placeholder {
    color: #757575;
  }
`;
