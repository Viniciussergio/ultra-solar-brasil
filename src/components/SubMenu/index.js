import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { SidebarLink, SidebarLabel, DropdownLink } from './styled';
import * as actions from '../../store/modules/sidebar/actions';

function Submenu({ item }) {
  const dispatch = useDispatch();
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  const closeSidebar = () => {
    dispatch(actions.toggleSidebarSuccess());
  };

  const toggleSubnav = () => {
    if (item.subNav) {
      showSubnav();
    } else {
      closeSidebar();
    }
  };

  return (
    <>
      <SidebarLink to={item.path} onClick={toggleSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {(item.subNav && subnav ? item.iconOpened : item.subNav)
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {/* eslint-disable-next-line */}
      {subnav &&
        item.subNav.map((data, index) => {
          const i = index;
          return (
            <DropdownLink to={data.path} key={i} onClick={closeSidebar}>
              {item.icon}
              <SidebarLabel>{data.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
}

Submenu.propTypes = {
  item: PropTypes.func.isRequired,
};

export default Submenu;
