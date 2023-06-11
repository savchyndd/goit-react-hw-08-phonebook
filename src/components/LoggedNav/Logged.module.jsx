import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LoggedList = styled.ul`
  display: flex;
  gap: 8px;

  margin-left: auto;
`;
export const LoggedItem = styled.li``;
export const LoggedLink = styled(NavLink)`
  display: block;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;

  padding: 22px 28px;

  color: #ffffff;
  background-color: #000000;

  border-radius: 14px;

  :hover,
  :focus {
    color: #000000;
    background: rgba(250, 187, 24, 0.1);
  }
`;
