import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  box-shadow: inset 0 -4px 8px 0.1px rgba(138, 138, 138, 0.8);
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    color: #fff;
    width: 2rem;
  }
`;

export const NavIcon = styled(Link)`
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Logo = styled(Link)`
  width: 13rem;
  height: auto;

  img {
    width: 100%;
    height: auto;
  }
`;
