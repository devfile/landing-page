import styles from '@src/styles/getting-started.module.css';
import type { NavItemElem } from 'custom-types';
import { useWindowDimensions } from '@src/util/client';
import { Grid, GridItem, TextContent } from '@patternfly/react-core';
import { GettingStartedTopNav, GettingStartedSideNav } from '@src/components';
import { useState } from 'react';
import { getMDFiles } from '@src/util/server';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

/**
 * Renders the {@link GettingStartedMainView}
 */
const GettingStarted: React.FC<InferGetStaticPropsType<GetStaticProps>> = ({
  mdFiles
}: InferGetStaticPropsType<GetStaticProps>) => {
  const { width } = useWindowDimensions();

  // Select the first element to display
  const [currentPage, setCurrentPage] = useState<NavItemElem>({
    header: mdFiles[0].header,
    subHeader: mdFiles[0].files[0].subHeader,
    html: mdFiles[0].files[0].html
  });
  return (
    <Grid>
      <GridItem span={12} lg={4} xl2={3}>
        {width! < 992 ? (
          <GettingStartedTopNav
            mdFiles={mdFiles}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        ) : (
          <GettingStartedSideNav
            mdFiles={mdFiles}
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
  const mdFiles = await getMDFiles('/webpage_info/getting-started');
  return {
    props: {
      mdFiles
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 15 seconds
    revalidate: 15
  };
};

export default GettingStarted;
