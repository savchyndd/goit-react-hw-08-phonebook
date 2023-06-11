import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Logo = styled(NavLink)`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  font-size: 36px;

  margin-right: 114px;

  color: #000000;
  > span {
    color: #fabb18;
  }
  :hover,
  :focus {
    color: #fabb18;
    > span {
      color: #000000;
    }
  }
`;

export const MainNav = styled.nav``;
export const MainNavList = styled.ul``;
export const MainNavItem = styled.li``;
export const MainNavLink = styled(NavLink)`
  display: block;

  font-style: normal;
  font-weight: 500;
  font-size: 18px;

  padding: 22px 28px;

  color: #000000;
  background-color: #ffffff;
  border-radius: 18px;

  :hover,
  :focus {
    font-weight: 600;

    color: #ffffff;
    background-color: #000000;
  }
`;
