import React from 'react';
import { Nav, NavExpandable, NavItem, NavList } from '@patternfly/react-core';

import StartingNavList from '@components/starting/StartingNavList';

function NavExpandableList() {
  return (
    <Nav>
      <NavList>
        {StartingNavList().map((navSection) => (
          <NavExpandable
            title={navSection[0] as string}
            key={navSection[0] as string}
            isExpanded
          >
            {(navSection[1] as string[]).map((navItem) => (
              <NavItem
                preventDefault
                key={navItem as string}
                to={'#' + navItem}
              >
                {navItem}
              </NavItem>
            ))}
          </NavExpandable>
        ))}
      </NavList>
    </Nav>
  );
}

export default NavExpandableList;
