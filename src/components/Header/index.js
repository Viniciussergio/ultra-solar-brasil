import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { IconContext } from 'react-icons';
import { Nav, NavIcon, Logo } from './styled';
import Sidebar from '../Sidebar';
import * as actions from '../../store/modules/sidebar/actions';
import ultraSolarLogo from '../../config/images/ultra-solar-logo.png';

export default function Header() {
  const dispatch = useDispatch();

  const showSidebar = () => {
    dispatch(actions.toggleSidebarSuccess());
  };

  return (
    /* eslint-disable-next-line */
    <IconContext.Provider value={{ color: 'gray' }}>
      <Nav>
        <NavIcon to="#">
          <FaIcons.FaBars onClick={showSidebar} />
        </NavIcon>
        <Logo to="/">
          <img src={ultraSolarLogo} alt="Logo da Empresa" />
        </Logo>
        <div>.</div>
      </Nav>
      <Sidebar />
    </IconContext.Provider>
  );
}
