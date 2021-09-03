import type { GettingStartedFiles, SelectedItem, NavItemElem } from 'custom-types';
import { Nav, NavItem, NavList, Text, TextContent, TextVariants } from '@patternfly/react-core';

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
    <Nav
      onSelect={onSelect}
      variant="horizontal"
      style={{
        backgroundColor: 'var(--pf-global--BackgroundColor--dark-300)',
        marginBottom: '1rem',
        padding: '0.5rem 0'
      }}
    >
      <NavList>
        {gettingStartedFiles.map(({ header, subHeaderWithHTML }) => (
          <div
            key={header}
            style={{
              padding: '1rem',
              borderLeft: '1px solid gray',
              borderRight: '1px solid gray'
            }}
          >
            <TextContent>
              <Text
                component={TextVariants.h3}
                style={{
                  color: 'var(--pf-c-nav__link--Color)',
                  borderBottom: '1px solid gray'
                }}
              >
                {header}
              </Text>
            </TextContent>
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
          </div>
        ))}
      </NavList>
    </Nav>
  );
};
GettingStartedTopNav.displayName = 'GettingStartedTopNav';
