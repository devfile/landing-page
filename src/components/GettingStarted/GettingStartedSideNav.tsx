import styles from './GettingStartedSideNav.module.css';
import type { MDFiles, SelectedItem, NavItemElem } from 'custom-types';
import { getHyperLink } from '@src/util/client';
import { Nav, NavExpandable, NavItem, NavList } from '@patternfly/react-core';

export interface GettingStartedSideNavProps {
  currentPage: NavItemElem;
  setCurrentPage: React.Dispatch<React.SetStateAction<NavItemElem>>;
  mdFiles: MDFiles[];
}

/**
 * Renders a {@link GettingStartedSideNav} React component.
 * Renders a side nav if the width is less than 992px
 * @returns `<GettingStartedSideNav gettingStartedFiles={gettingStartedFiles} currentPage={currentPage} setCurrentPage={setCurrentPage}/>`
 */
export const GettingStartedSideNav: React.FC<GettingStartedSideNavProps> = ({
  currentPage,
  setCurrentPage,
  mdFiles
}: GettingStartedSideNavProps) => {
  const onSelect = (result: SelectedItem): void => {
    const headerItem = result.groupId as string;
    const subHeaderItem = result.itemId as string;
    const htmlItem = mdFiles.find(({ header, files }) => {
      headerItem === header && files.find(({ subHeader }) => subHeaderItem === subHeader);
    });
    setCurrentPage(() => ({
      header: headerItem,
      subHeader: subHeaderItem,
      html: htmlItem?.files[0].html
    }));
  };

  return (
    <div className={styles.container}>
      <Nav onSelect={onSelect} className={styles.nav}>
        <NavList>
          {mdFiles.map(({ header, files }) => (
            <NavExpandable
              // @ts-expect-error Does not support span
              title={<span className={styles.title}>{header}</span>}
              key={header}
              isActive={header === currentPage.header}
            >
              {files.map(({ subHeader, html }) => (
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
