import type { GettingStartedFiles } from 'custom-types';
import { useState } from 'react';
import { Nav, NavExpandable, NavItem, NavList } from '@patternfly/react-core';

export interface GettingStartedSideNav {
  currentPage: string;
  onClick: React.Dispatch<React.SetStateAction<string>>;
  gettingStartedFiles: GettingStartedFiles[];
}

export interface SelectedItem {
  groupId: string | number;
  itemId: string | number;
  to: string;
  event: React.FormEvent<HTMLInputElement>;
}

export const GettingStartedSideNav: React.FC<GettingStartedSideNav> = ({
  currentPage,
  onClick,
  gettingStartedFiles
}: GettingStartedSideNav) => {
  const [activeNavGroup, setActiveNavGroup] = useState<string>(gettingStartedFiles[0].header[0]);

  const onSelect = (result: SelectedItem): void => {
    setActiveNavGroup(result.groupId as string);
  };

  return (
    <Nav onSelect={onSelect}>
      <NavList>
        {gettingStartedFiles.map(({ header, subHeaderWithHTML }) => (
          <NavExpandable
            // @ts-expect-error Does not support span
            title={<span style={{ textAlign: 'left' }}>{header}</span>}
            key={header}
            isActive={activeNavGroup === header}
            isExpanded
          >
            {subHeaderWithHTML.map(
              ({ subHeader, html }): JSX.Element => (
                <NavItem
                  key={subHeader}
                  groupId={header}
                  to={'#' + subHeader}
                  isActive={currentPage === html}
                  onClick={(): void => onClick(html)}
                >
                  {subHeader}
                </NavItem>
              )
            )}
          </NavExpandable>
        ))}
      </NavList>
    </Nav>
  );
};
GettingStartedSideNav.displayName = 'GettingStartedSideNav';
