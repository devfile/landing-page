import { useState } from 'react';
import { Page, PageSidebar } from '@patternfly/react-core';
import NavExpandableList from '@components/starting/SideNavigation';

import appDevfilesPage from '@components/starting/appDevfilesPage';

function GettingStarted() {
  const [currentPage, setPage] = useState(appDevfilesPage);

  return (
    <Page
      sidebar={
        <PageSidebar
          nav={<NavExpandableList onClick={setPage} current={currentPage} />}
        />
      }
    >
      {currentPage}
    </Page>
  );
}

export default GettingStarted;
