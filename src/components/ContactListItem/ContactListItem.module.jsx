import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 30px;
  margin-bottom: 12px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  border-radius: 24px;
`;

export const ContactName = styled.p`
  margin: 0;
  font-weight: 500;
`;

export const ContactNumber = styled.span`
  margin-left: 10px;
`;

export const Button = styled.button`
  padding: 0.563em 1em;
  margin: 0.5em;
  background-color: #000000;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(250, 187, 24, 0.1);
  border-radius: 8px;

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
