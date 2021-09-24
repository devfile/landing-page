import styles from './GettingStartedTopNav.module.css';
import type { MDFile, SelectedItem, NavItemElem } from 'custom-types';
import { getHyperLink } from '@src/util/client';
import { Nav, NavItem, NavList, NavExpandable } from '@patternfly/react-core';

export interface GettingStartedTopNavProps {
  currentPage: NavItemElem;
  setCurrentPage: React.Dispatch<React.SetStateAction<NavItemElem>>;
  mdFiles: MDFile[];
}

/**
 * Renders a {@link GettingStartedTopNav} React component.
 * Renders a top nav if the width is greater than or equal to 992px
 * @returns `<GettingStartedTopNav gettingStartedFiles={gettingStartedFiles} currentPage={currentPage} setCurrentPage={setCurrentPage}/>`
 */
export const GettingStartedTopNav: React.FC<GettingStartedTopNavProps> = ({
  currentPage,
  setCurrentPage,
  mdFiles
}: GettingStartedTopNavProps) => {
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
    <Nav onSelect={onSelect} variant="horizontal" className={styles.nav}>
      <NavList>
        {mdFiles.map(({ header, files }) => (
          <div key={header} className={styles.navContainer}>
            <NavExpandable
              // @ts-expect-error Does not support span
              title={<span className={styles.title}>{header}</span>}
              key={header}
              isActive={header === currentPage.header}
              className={styles.navExpandable}
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
          </div>
        ))}
      </NavList>
    </Nav>
  );
};
GettingStartedTopNav.displayName = 'GettingStartedTopNav';
