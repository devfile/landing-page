import { useState, PropsWithChildren } from 'react';
import { Nav, NavExpandable, NavItem, NavList } from '@patternfly/react-core';
import StartingNavList from '@components/starting/StartingNavList';

function NavExpandableList({
  current,
  onClick,
  navProps
}: {
  current: string;
  onClick: (page: string) => void;
  navProps: PropsWithChildren<{ [key: string]: any }>;
}) {
  const [activeGroup, setActiveGroup] = useState(StartingNavList(navProps)[0][0] as string);

  const onSelect = (result: any) => {
    setActiveGroup(result.groupId);
  };

  return (
    <Nav onSelect={onSelect}>
      <NavList>
        {StartingNavList(navProps).map((navSection) => (
          <NavExpandable
            title={navSection[0] as string}
            key={navSection[0] as string}
            isActive={activeGroup === (navSection[0] as string)}
            isExpanded
          >
            {Object.entries(navSection[1] as { [title: string]: string }).map(([title, page]) => (
              <NavItem
                key={title as string}
                groupId={navSection[0] as string}
                to={'#' + title}
                isActive={current === page}
                onClick={() => onClick(page)}
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
