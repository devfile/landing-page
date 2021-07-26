import { useState } from 'react';
import { Nav, NavExpandable, NavItem, NavList } from '@patternfly/react-core';
import StartingNavList from '@components/starting/StartingNavList';

function NavExpandableList({
  current,
  onClick,
}: {
  current: JSX.Element;
  onClick: (page: JSX.Element) => void;
}) {
  const [activeGroup, setActiveGroup] = useState(
    StartingNavList()[0][0] as string
  );

  const onSelect = (result: any) => {
    setActiveGroup(result.groupId);
  };

  return (
    <Nav onSelect={onSelect}>
      <NavList>
        {StartingNavList().map((navSection) => (
          <NavExpandable
            title={navSection[0] as string}
            key={navSection[0] as string}
            isActive={activeGroup === (navSection[0] as string)}
            isExpanded
          >
            {Object.entries(
              navSection[1] as { [title: string]: () => JSX.Element }
            ).map(([title, page]) => (
              <NavItem
                key={title as string}
                groupId={navSection[0] as string}
                to={'#' + title}
                isActive={current === page()}
                onClick={() => onClick(page())}
              >
                {title}
              </NavItem>
            ))}
          </NavExpandable>
        ))}
      </NavList>
    </Nav>
  );
}

export default NavExpandableList;
