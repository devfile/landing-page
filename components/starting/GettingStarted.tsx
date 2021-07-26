import { useState } from 'react';
import { Page, PageSidebar } from '@patternfly/react-core';
import NavExpandableList from '@components/starting/SideNavigation';

import gettingStartedPage from '@components/starting/gettingStartedPage';

function GettingStarted() {
  const [currentPage, setPage] = useState(gettingStartedPage);

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
