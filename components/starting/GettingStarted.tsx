import { useState, PropsWithChildren } from 'react';
import marked from 'marked';
import { Page, PageSection, PageSidebar, TextContent } from '@patternfly/react-core';
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
        <TextContent>
          <article
            dangerouslySetInnerHTML={{ __html: marked(currentPage) }}
            style={{
              fontSize: 'medium',
              fontStyle: 'normal',
              fontWeight: 'normal',
              textIndent: 0,
              textTransform: 'none'
            }}
          ></article>
        </TextContent>
      </PageSection>
    </Page>
  );
}

export default GettingStarted;
