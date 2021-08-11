import { useState, PropsWithChildren } from 'react';
import marked from 'marked';
import { Page, PageSection, PageSidebar } from '@patternfly/react-core';
import NavExpandableList from '@components/starting/SideNavigation';
import React from 'react';

function GettingStarted(props: {
  appDevfiles: string;
  navProps: PropsWithChildren<{ [key: string]: any }>;
}) {
  const [currentPage, setPage] = useState(props.appDevfiles);
  return (
    <Page
      sidebar={
        <PageSidebar
          nav={
            <NavExpandableList navProps={props.navProps} onClick={setPage} current={currentPage} />
          }
        />
      }
    >
      <PageSection>
        <article dangerouslySetInnerHTML={{ __html: marked('**This is bold**') }}></article>
      </PageSection>
    </Page>
  );
}

export default GettingStarted;
