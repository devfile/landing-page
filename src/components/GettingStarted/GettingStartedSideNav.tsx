import styles from './GettingStartedSideNav.module.css';
import type { CurrentPageState, CurrentPageAction, SelectedItem } from 'custom-types';
import { createHyperLink, getAnalytics, getUserRegion } from '@src/util/client';
import { Nav, NavExpandable, NavItem, NavList } from '@patternfly/react-core';
import { useRouter } from 'next/router';
import getConfig from 'next/config';

export interface GettingStartedSideNavProps {
  currentPageState: CurrentPageState;
  currentPageDispatch: React.Dispatch<CurrentPageAction>;
}

/**
 * Renders a {@link GettingStartedSideNav} React component.
 * Renders a side nav if the width is less than 992px
 * @returns `<GettingStartedSideNav gettingStartedFiles={gettingStartedFiles} currentPage={currentPage} setCurrentPage={setCurrentPage}/>`
 */
export const GettingStartedSideNav: React.FC<GettingStartedSideNavProps> = ({
  currentPageState,
  currentPageDispatch,
}: GettingStartedSideNavProps) => {
  const router = useRouter();

  const onSelect = (result: SelectedItem): void => {
    const header = result.groupId as string;
    const subHeader = result.itemId as string;

    currentPageDispatch({ payload: { header, subHeader } });

    const analytics = getAnalytics();
    const region = getUserRegion(router.locale);
    const { publicRuntimeConfig } = getConfig();

    if (analytics) {
      analytics.track({
        userId: publicRuntimeConfig.segmentUserId,
        event: 'Getting Started Clicked',
        properties: {
          header,
          subHeader,
        },
        context: { ip: '0.0.0.0', location: { country: region } },
      });
    }
  };

  return (
    <div className={styles.container}>
      <Nav onSelect={onSelect} className={styles.nav}>
        <NavList>
          {currentPageState.mdFiles.map(({ header, files }) => (
            <NavExpandable
              // @ts-expect-error Does not support span
              title={<span className={styles.title}>{header}</span>}
              key={header}
              isActive={header === currentPageState.currentPage.header}
            >
              {files.map(({ subHeader }) => (
                <NavItem
                  key={subHeader}
                  groupId={header}
                  itemId={subHeader}
                  to={createHyperLink(header, subHeader)}
                  isActive={
                    header === currentPageState.currentPage.header &&
                    subHeader === currentPageState.currentPage.subHeader
                  }
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
