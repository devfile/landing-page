import styles from '@src/styles/getting-started.module.css';
import type { NavItemElem } from 'custom-types';
import { useWindowDimensions } from '@src/util/client';
import { Grid, GridItem, TextContent } from '@patternfly/react-core';
import { GettingStartedTopNav, GettingStartedSideNav } from '@src/components';
import { useState } from 'react';
import { getGettingStartedFiles } from '@src/util/server';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

/**
 * Renders the {@link GettingStartedMainView}
 */
const GettingStarted: React.FC<InferGetStaticPropsType<GetStaticProps>> = ({
  gettingStartedFiles
}: InferGetStaticPropsType<GetStaticProps>) => {
  const { width } = useWindowDimensions();

  // Select the first element to display
  const [currentPage, setCurrentPage] = useState<NavItemElem>({
    header: gettingStartedFiles[0].header,
    subHeader: gettingStartedFiles[0].subHeaderWithHTML[0].subHeader,
    html: gettingStartedFiles[0].subHeaderWithHTML[0].html
  });
  return (
    <Grid>
      <GridItem span={12} lg={4} xl2={3}>
        {width! < 992 ? (
          <GettingStartedTopNav
            gettingStartedFiles={gettingStartedFiles}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        ) : (
          <GettingStartedSideNav
            gettingStartedFiles={gettingStartedFiles}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </GridItem>
      <GridItem span={12} lg={8} xl2={9}>
        <TextContent>
          <article
            dangerouslySetInnerHTML={{ __html: currentPage.html! }}
            className={styles.article}
          ></article>
        </TextContent>
      </GridItem>
    </Grid>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const gettingStartedFiles = await getGettingStartedFiles();
  return {
    props: {
      gettingStartedFiles
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 15 seconds
    revalidate: 15
  };
};

export default GettingStarted;
