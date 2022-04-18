import React from 'react';
import * as AiIcons from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { SidebarNav, SidebarWrap, NavIcon } from './styled';
import * as actions from '../../store/modules/sidebar/actions';
import { SidebarData } from './data';
import Submenu from '../SubMenu';

function Sidebar() {
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.sidebar.toggleSidebar);

  const hideSidebar = () => {
    dispatch(actions.toggleSidebarSuccess());
  };

  return (
    <SidebarNav sidebar={sidebar}>
      <SidebarWrap>
        <NavIcon to="#">
          <AiIcons.AiOutlineClose onClick={hideSidebar} />
        </NavIcon>
        {SidebarData.map((item, index) => {
          const i = index;
          return <Submenu item={item} key={i} />;
        })}
      </SidebarWrap>
    </SidebarNav>
  );
}

export default Sidebar;
