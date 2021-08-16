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
        {StartingNavList(navProps).map(([sectionTitle, pages]) => (
          <NavExpandable
            title={sectionTitle as string}
            key={sectionTitle as string}
            isActive={activeGroup === (sectionTitle as string)}
            isExpanded
          >
            {Object.entries(pages as { [title: string]: string }).map(([title, page]) => (
              <NavItem
                key={title as string}
                groupId={sectionTitle as string}
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
