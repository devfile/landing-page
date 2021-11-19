import type { DefaultProps } from 'custom-types';
import links from '@info/links';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Links, DevfileLogo, Wave, NavBar, NavBarHeaderProps } from '@src/components';
import styles from './Header.module.css';

export interface HeaderProps extends DefaultProps {
  navBar?: NavBarHeaderProps;
  children?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { navBar, children } = props;

  return (
    <header data-testid="component-header">
      <div className={styles.header}>
        <DevfileLogo />
        <Popover>
          <Popover.Button className={styles.popoverButton}>
            <MenuIcon className={styles.menuIcon} />
          </Popover.Button>
          <div className={styles.rowLinks}>
            <Links links={links.headerLinks} />
          </div>
          <Transition
            as={Fragment}
            enter={styles.transitionEnter}
            enterFrom={styles.transitionEnterFrom}
            enterTo={styles.transitionEnterTo}
            leave={styles.transitionLeave}
            leaveFrom={styles.transitionLeaveFrom}
            leaveTo={styles.transitionLeaveTo}
          >
            <Popover.Panel className={styles.popoverPanel}>
              <div className={styles.panel}>
                <div className={styles.panelHeader}>
                  <DevfileLogo dark />
                  <Popover.Button className={styles.popoverButton}>
                    <XIcon className={styles.xIcon} aria-hidden="true" />
                  </Popover.Button>
                </div>
                <div className={styles.colLinks}>
                  <Links links={links.headerLinks} linkStyle="dark" />
                </div>
                {navBar && <NavBar {...navBar} isHeader />}
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
      {children || <Wave fill="darker" backgroundColor="light" />}
    </header>
  );
};
Header.displayName = 'Header';
