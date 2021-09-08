import styles from './GettingStartedTopNav.module.css';
import type { GettingStartedFiles, SelectedItem, NavItemElem } from 'custom-types';
import { getHyperLink } from '@src/util/client';
import { Nav, NavItem, NavList, NavExpandable } from '@patternfly/react-core';

export interface GettingStartedTopNavProps {
  currentPage: NavItemElem;
  setCurrentPage: React.Dispatch<React.SetStateAction<NavItemElem>>;
  gettingStartedFiles: GettingStartedFiles[];
}

export const GettingStartedTopNav: React.FC<GettingStartedTopNavProps> = ({
  currentPage,
  setCurrentPage,
  gettingStartedFiles
}: GettingStartedTopNavProps) => {
  const onSelect = (result: SelectedItem): void => {
    const headerItem = result.groupId as string;
    const subHeaderItem = result.itemId as string;
    const htmlItem = gettingStartedFiles.find(({ header, subHeaderWithHTML }) => {
      headerItem === header &&
        subHeaderWithHTML.find(({ subHeader }) => subHeaderItem === subHeader);
    });
    setCurrentPage(() => ({
      header: headerItem,
      subHeader: subHeaderItem,
      html: htmlItem?.subHeaderWithHTML[0].html
    }));
  };

  return (
    <Nav onSelect={onSelect} variant="horizontal" className={styles.nav}>
      <NavList>
        {gettingStartedFiles.map(({ header, subHeaderWithHTML }) => (
          <div key={header} className={styles.navContainer}>
            <NavExpandable
              // @ts-expect-error Does not support span
              title={<span className={styles.title}>{header}</span>}
              key={header}
              isActive={header === currentPage.header}
              className={styles.navExpandable}
            >
              {subHeaderWithHTML.map(({ subHeader, html }) => (
                <NavItem
                  key={subHeader}
                  groupId={header}
                  itemId={subHeader}
                  to={getHyperLink(header, subHeader)}
                  isActive={header === currentPage.header && subHeader === currentPage.subHeader}
                  onClick={(): void => setCurrentPage({ header, subHeader, html })}
                >
                  {subHeader}
                </NavItem>
              ))}
            </NavExpandable>
          </div>
        ))}
      </NavList>
    </Nav>
  );
};
GettingStartedTopNav.displayName = 'GettingStartedTopNav';
