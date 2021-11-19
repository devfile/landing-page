import styles from './GettingStartedTopNav.module.css';
import type { CurrentPageState, CurrentPageAction, SelectedItem } from 'custom-types';
import { createHyperLink, getAnalytics, getUserRegion } from '@src/util/client';
import { Nav, NavItem, NavList, NavExpandable } from '@patternfly/react-core';
import { useRouter } from 'next/router';
import getConfig from 'next/config';

export interface GettingStartedTopNavProps {
  currentPageState: CurrentPageState;
  currentPageDispatch: React.Dispatch<CurrentPageAction>;
}

/**
 * Renders a {@link GettingStartedTopNav} React component.
 * Renders a top nav if the width is greater than or equal to 992px
 * @returns `<GettingStartedTopNav gettingStartedFiles={gettingStartedFiles} currentPage={currentPage} setCurrentPage={setCurrentPage}/>`
 */
export const GettingStartedTopNav: React.FC<GettingStartedTopNavProps> = ({
  currentPageState,
  currentPageDispatch,
}: GettingStartedTopNavProps) => {
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
    <Nav onSelect={onSelect} variant="horizontal" className={styles.nav}>
      <NavList>
        {currentPageState.mdFiles.map(({ header, files }) => (
          <div key={header} className={styles.navContainer}>
            <NavExpandable
              // @ts-expect-error Does not support span
              title={<span className={styles.title}>{header}</span>}
              key={header}
              isActive={header === currentPageState.currentPage.header}
              className={styles.navExpandable}
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
          </div>
        ))}
      </NavList>
    </Nav>
  );
};
GettingStartedTopNav.displayName = 'GettingStartedTopNav';
