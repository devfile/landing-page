import styles from './GettingStartedSideNav.module.css';
import type { GettingStartedFiles, SelectedItem, NavItemElem } from 'custom-types';
import { Nav, NavExpandable, NavItem, NavList } from '@patternfly/react-core';

export interface GettingStartedSideNavProps {
  currentPage: NavItemElem;
  setCurrentPage: React.Dispatch<React.SetStateAction<NavItemElem>>;
  gettingStartedFiles: GettingStartedFiles[];
}

export const GettingStartedSideNav: React.FC<GettingStartedSideNavProps> = ({
  currentPage,
  setCurrentPage,
  gettingStartedFiles
}: GettingStartedSideNavProps) => {
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
    <div className={styles.container}>
      <Nav onSelect={onSelect} className={styles.nav}>
        <NavList className={styles.navList}>
          {gettingStartedFiles.map(({ header, subHeaderWithHTML }) => (
            <NavExpandable
              // @ts-expect-error Does not support span
              title={<span style={{ textAlign: 'left' }}>{header}</span>}
              key={header}
              isActive={header === currentPage.header}
            >
              {subHeaderWithHTML.map(({ subHeader, html }) => (
                <NavItem
                  key={subHeader}
                  groupId={header}
                  itemId={subHeader}
                  to={'#' + subHeader}
                  isActive={header === currentPage.header && subHeader === currentPage.subHeader}
                  onClick={(): void => setCurrentPage({ header, subHeader, html })}
                >
                  {subHeader}
                </NavItem>
              ))}
            </NavExpandable>
          ))}
        </NavList>
      </Nav>
    </div>
  );
};
GettingStartedSideNav.displayName = 'GettingStartedSideNav';
