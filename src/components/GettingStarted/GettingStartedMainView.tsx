import type { GettingStartedFiles } from 'custom-types';
import { Page, PageSection, PageSidebar, TextContent } from '@patternfly/react-core';
import { GettingStartedSideNav } from '@src/components';
import { useState } from 'react';

export interface GettingStartedMainViewProps {
  gettingStartedFiles: GettingStartedFiles[];
}

export const GettingStartedMainView: React.FC<GettingStartedMainViewProps> = ({
  gettingStartedFiles
}: GettingStartedMainViewProps) => {
  const [currentPage, setCurrentPage] = useState<string>(
    gettingStartedFiles[0].subHeaderWithHTML[0].html
  );
  return (
    <Page
      sidebar={
        <PageSidebar
          nav={
            <GettingStartedSideNav
              gettingStartedFiles={gettingStartedFiles}
              onClick={setCurrentPage}
              currentPage={currentPage}
            />
          }
        />
      }
    >
      <PageSection>
        <TextContent>
          <article
            dangerouslySetInnerHTML={{ __html: currentPage }}
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
};
GettingStartedMainView.displayName = 'GettingStartedMainView';
