import styles from './GettingStartedSideNav.module.css';
import type { GettingStartedFiles, SelectedItem, NavItemElem } from 'custom-types';
import { getHyperLink } from '@src/util/client';
import { Nav, NavExpandable, NavItem, NavList } from '@patternfly/react-core';

export interface GettingStartedSideNavProps {
  currentPage: NavItemElem;
  setCurrentPage: React.Dispatch<React.SetStateAction<NavItemElem>>;
  gettingStartedFiles: GettingStartedFiles[];
}

/**
 * Renders a {@link GettingStartedSideNav} React component.
 * Renders a side nav if the width is less than 992px
 * @returns `<GettingStartedSideNav gettingStartedFiles={gettingStartedFiles} currentPage={currentPage} setCurrentPage={setCurrentPage}/>`
 */
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
        <NavList>
          {gettingStartedFiles.map(({ header, subHeaderWithHTML }) => (
            <NavExpandable
              // @ts-expect-error Does not support span
              title={<span className={styles.title}>{header}</span>}
              key={header}
              isActive={header === currentPage.header}
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
          ))}
        </NavList>
      </Nav>
    </div>
  );
};
GettingStartedSideNav.displayName = 'GettingStartedSideNav';
