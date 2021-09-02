import { useState, PropsWithChildren, FormEvent } from 'react';
import { Nav, NavExpandable, NavItem, NavList } from '@patternfly/react-core';
import StartingNavList from '@src/components/starting/StartingNavList';

export interface SideNavProps {
  current: string;
  onClick: (page: string) => void;
  navProps: PropsWithChildren<{ [key: string]: string }>;
}

export interface SelectedItem {
  groupId: string | number;
  itemId: string | number;
  to: string;
  event: FormEvent<HTMLInputElement>;
}

const NavExpandableList: React.FC<SideNavProps> = ({
  current,
  onClick,
  navProps
}: SideNavProps) => {
  const [activeGroup, setActiveGroup] = useState(StartingNavList(navProps)[0][0] as string);

  const onSelect = (result: SelectedItem): void => {
    setActiveGroup(result.groupId as string);
  };

  return (
    <Nav onSelect={onSelect}>
      <NavList>
        {StartingNavList(navProps).map(
          ([sectionTitle, pages]): JSX.Element => (
            <NavExpandable
              // @ts-expect-error Does not support span
              title={<span style={{ textAlign: 'left' }}>{sectionTitle}</span>}
              key={sectionTitle as string}
              isActive={activeGroup === (sectionTitle as string)}
              isExpanded
            >
              {Object.entries(pages as { [title: string]: string }).map(
                ([title, page]): JSX.Element => (
                  <NavItem
                    key={title as string}
                    groupId={sectionTitle as string}
                    to={'#' + title}
                    isActive={current === page}
                    onClick={(): void => onClick(page)}
                  >
                    {title}
                  </NavItem>
                )
              )}
            </NavExpandable>
          )
        )}
      </NavList>
    </Nav>
  );
};

export default NavExpandableList;
